(ns shopping-admin-front-v2.modal
  (:require [clojure.string :as str]
            [reagent.core :as r]
            [shopping-admin-front-v2.config :as conf]))

(defn toggle-button-edit []
  (swap! conf/edit-mode? not))

(defn close-modal []
  (reset! conf/modal-visible? false)
  (reset! conf/selected-item nil)
  (reset! conf/edit-mode? false))

(defn save-item []
  ;; (http/post)
  (close-modal))

(defn modal-panel []
  (when @conf/modal-visible?
    (let [item @conf/selected-item
          sector (:list-type @conf/state)
          table-keys (conf/get-columns sector)
          extra-keys (get conf/extra-fields (keyword sector) [])
          combined-fields (concat table-keys extra-keys)
          uneditable-fields #{:created_at :updated_at :cpf :cnpj :ie}]
      
      [:div.modal {:style {:visibility (if @conf/modal-visible? "visible" "hidden")
                           :opacity (if @conf/modal-visible? 1 0)
                           :transition "visibility 0s, opacity 0.3s ease-in-out"}}
       [:div.modal-content
        [:span.close {:on-click close-modal} "X"]
        [:h2 (if @conf/edit-mode? "Editar" "Detalhes")]
        
        ;; Input fields rendering
        (doall (for [{:keys [label key]} combined-fields]
          [:div {:key key}
           [:label (str/upper-case label)]
           (if @conf/edit-mode?
             (if (contains? uneditable-fields key)
               [:span (get item key)]
               [:input {:type "text"
                        :value (get item key)
                        :on-change #(swap! conf/selected-item assoc key (-> % .-target .-value))}])
             [:span (get item key)])]))
        ;; Buttons for Save or Edit
        [:div.button-container
         (if @conf/edit-mode?
           [:div
            {:style {:display "flex", :gap "10px"}}
            [:button {:on-click save-item} "Salvar"]
            [:button {:on-click #(swap! conf/edit-mode? not)} "Cancelar"]]
           [:button {:on-click toggle-button-edit} "Editar"])]]])))
