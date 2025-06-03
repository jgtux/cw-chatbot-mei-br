(ns shopping-admin-front-v2.sidebar
  (:require [shopping-admin-front-v2.config :as conf]
            [reagent.core :as r]
            [shopping-admin-front-v2.auth :as auth]))

;; Navigation items configuration
(def nav-items
  [{:id "" :icon "home" :label "Dashboard"}
   {:id "chat" :icon "comments" :label "Chat"}])

(defn sidebar-button 
  [{:keys [list-type icon label active?]}]
  [:button.sidebar-btn
   {:class (when active? "active")
    :on-click #(swap! conf/state assoc :list-type list-type
                                       :search-key ""
                                       :search-query "")}
   [:i.sidebar-icon {:class (str "fas fa-" icon)}] 
   [:span.sidebar-label label]])

(defn logout-button
  []
  [:button.logout-btn
   {:on-click auth/log-out}
   [:i.sidebar-icon {:class "fas fa-sign-out-alt"}] 
   [:span.sidebar-label "Sair"]])

(defn sidebar-header
  []
  [:div.sidebar-header
   [:img.logo {:src "/images/icon.png"
               :alt "Axxispay Logo"}]])

(defn sidebar-nav
  []
  (let [current-list-type (:list-type @conf/state)]
    [:nav.sidebar-nav
     (for [item nav-items]
       ^{:key (:id item)}
       [sidebar-button (assoc item 
                              :list-type (:id item)
                              :active? (= current-list-type (:id item)))])]))

(defn sidebar-footer
  []
  [:footer.sidebar-footer 
   "Axxispay © 2025"])

(defn sidebar
  []
  [:aside.sidebar
   {:class [(when-not @conf/sidebar-visible? "sidebar-hidden")]
    :aria-label "Navegação principal"}
   [sidebar-header]
   [sidebar-nav]
   [logout-button]
   [sidebar-footer]])

(defn toggle-button-side
  []
  [:button.toggle-side
   {:on-click #(swap! conf/sidebar-visible? not)
    :aria-label (if @conf/sidebar-visible? "Ocultar menu" "Mostrar menu")
    :title (if @conf/sidebar-visible? "Ocultar menu" "Mostrar menu")}
   [:i {:class "fas fa-list"}]])
