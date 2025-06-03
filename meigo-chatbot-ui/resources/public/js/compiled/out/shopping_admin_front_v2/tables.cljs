(ns shopping-admin-front-v2.tables
  (:require [reagent.core :as r]
            [shopping-admin-front-v2.config :as conf]
            [shopping-admin-front-v2.auth :as auth]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<! go]]))

(defn generic-table [columns data]
  [:div
   [:input {:type "text"
            :placeholder "Pesquisar"
            :value (:search-query @conf/state)
            :on-change #(swap! conf/state assoc :search-query (-> % .-target .-value))}]
   [:select
    {:value (:search-key @conf/state)
     :on-change #(swap! conf/state assoc :search-key (-> % .-target .-value))}
    [:option {:value "name"} "Nome"]
    [:option {:value "cpf"} "CPF"]
    [:option {:value "cnpj"} "CNPJ"]]
   [:button {:on-click fetch-data} "Pesquisar"]
   [:table
    [:thead
     [:tr
      (for [col columns]
        [:th {:key (:key col)} (:label col)])]]  
   [:tbody
    (for [[idx item] (map-indexed vector data)]
      [:tr {:key (str idx)
            :on-click #(do
                         (reset! conf/selected-item item)
                         (reset! conf/modal-visible? true))}  
       (for [col columns]
         [:td {:key (str (:key col) "-" idx)}  
          (get item (:key col))])])]]
   ;; Pagination Controls
   (let [current-page (:current-page @conf/state)
         page-size (:page-size @conf/state)
         total-pages (int (Math/ceil (/ (count data) page-size)))]
     [:div.pagination
      [:button {:disabled (<= current-page 1)
                :on-click #(do (swap! conf/state update :current-page dec)
                               (fetch-data))}
       "Antes"]
      [:span (str "Pag. " current-page " de " total-pages)]
      [:button {:disabled (>= current-page total-pages)
                :on-click #(do (swap! conf/state update :current-page inc)
                               (fetch-data))}
       "Depois"]])])
