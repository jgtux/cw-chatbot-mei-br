
(ns shopping-admin-front-v2.core
  (:require [reagent.core :as r]    ;; importacao reagent.core
            [reagent.dom :as dom] ;; importacao dom
            [cljs-http.client :as http] ;; http handles do cljs
            [shopping-admin-front-v2.modal :as modal]
            [shopping-admin-front-v2.tables :as tables]
            [shopping-admin-front-v2.sidebar :as sidebar]
            [shopping-admin-front-v2.config :as conf]
            [shopping-admin-front-v2.auth :as auth]
            [shopping-admin-front-v2.utils :as utils])) ;; funcoes string


;; Front em desenvolvimento!
;; parse-int helper to handle empty or invalid numbers
(defn parse-int [s]
  (let [parsed (js/parseInt s)]  ;; Use JavaScript's parseInt directly
    (if (js/isNaN parsed)         ;; Check if the result is NaN
      0                           ;; Return 0 if parsing fails
      parsed)))

(defn main-panel []
  (if @conf/loading?
    [utils/loading-screen]
      ;; [auth/auth-form]
      [:div   
       [:div.sidebar-wrapper
        [sidebar/sidebar]]
       [:div.topbar
        {:style {:margin-left (if @conf/sidebar-visible? "240px" "0px")}}
        [sidebar/toggle-button-side]]
       [:div.content
        {:style {:margin-left (if @conf/sidebar-visible? "240px" "0px")}}
        [:h1 (case (:list-type @conf/state)
             "shoppings" [:span [:i {:class "fas fa-building"}] "Shoppings"]
             "lojas" [:span [:i {:class "fas fa-store"}] "Lojas"]
             "pedidos" [:span [:i {:class "fas fa-credit-card"}] "Pedidos"]
             "clientes" [:span [:i {:class "fas fa-users"}] "Clientes"]
             [:span [:i {:class "fas fa-home"}] "Conteudo"])]
        (let [columns (conf/get-columns (:list-type @conf/state))]
          (if (empty? columns)
            [:h2 "Nada"]
            [tables/generic-table columns (:data @conf/state)]))
        [modal/modal-panel]]]))


(defn mount-root []
  (js/setTimeout #(reset! conf/loading? false) 1000)
  (dom/render [main-panel] (.getElementById js/document "app")))

(defn ^:export init []
  (mount-root))

(init)
