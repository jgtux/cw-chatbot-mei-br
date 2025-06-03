(ns meigo-chatbot.sidebar
  (:require [meigo-chatbot.config :as conf]
            [reagent.core :as r]
            [meigo-chatbot.auth :as auth]))

(def green-primary "#2a9d8f")
(def green-light "#a8dadc")
(def green-muted "#e0f2f1")
(def gray-light "#f5f5f5")
(def gray-dark "#264653")
(def border-light "#d0d0d0")
(def text-dark "#1b4332")

(def nav-items
  [{:section-id "chat" :icon "comment" :label "Chat"}
   {:section-id "history" :icon "comments" :label "Histórico"}
   {:section-id "history-graphs" :icon "diagram-project" :label "Grafos do histórico"}])

(defn sidebar-button 
  [{:keys [section-id icon label active?]}]
  [:button {:style {:width "100%"
                    :padding "12px 16px"
                    :border "none"
                    :background-color (if active? green-primary "transparent")
                    :color (if active? "white" text-dark)
                    :text-align "left"
                    :user-select "none"
                    :border-radius "8px"
                    :margin "4px 0"
                    :display "flex"
                    :align-items "center"
                    :font-size "0.9rem"
                    :transition "all 0.2s ease"}
            :on-click #(swap! conf/state assoc :section section-id)
            :on-mouse-over #(when-not active?
                              (set! (.-backgroundColor (.-style (.-target %))) green-muted))
            :on-mouse-out #(when-not active?
                             (set! (.-backgroundColor (.-style (.-target %))) "transparent"))}
   [:i {:class (str "fas fa-" icon)
        :style {:margin-right "10px"
                :width "16px"}}] 
   [:span {:style {:user-select "none"
                   :pointer-events "none"}}label]])

(defn logout-button
  []
  [:button {:style {:width "100%"
                    :padding "12px 16px"
                    :border "none"
                    :background-color "transparent"
                    :color text-dark
                    :text-align "left"
                    :cursor "pointer"
                    :border-radius "8px"
                    :margin "4px 0"
                    :display "flex"
                    :align-items "center"
                    :font-size "0.9rem"
                    :transition "all 0.2s ease"}
            :on-click auth/log-out
            :on-mouse-over #(set! (.-backgroundColor (.-style (.-target %))) "#ffebee")
            :on-mouse-out #(set! (.-backgroundColor (.-style (.-target %))) "transparent")}
   [:i {:class "fas fa-sign-out-alt"
        :style {:margin-right "10px"
                :width "16px"}}] 
   [:span "Sair"]])

(defn sidebar-header
  []
  [:div {:style {:padding "20px 16px"
                 :text-align "center"
                 :border-bottom (str "1px solid " border-light)}}
   [:img {:src "/images/icon.png"
          :alt "Meigo Chatbot Logo"
          :style {:max-width "80%"
                  :height "auto"}}]])

(defn sidebar-nav []
  (let [current-section (:section @conf/state)]
    [:nav {:style {:margin "20px 0px"
                   :flex "1"}}
     (for [{:keys [section-id icon label] :as item} nav-items]
       ^{:key section-id}
       [sidebar-button {:section-id section-id
                        :icon icon
                        :label label
                        :active? (= current-section section-id)}])]))

(defn sidebar-footer
  []
  [:footer {:style {:padding "16px"
                    :text-align "center"
                    :font-size "0.8rem"
                    :color gray-dark
                    :border-top (str "1px solid " border-light)}}
   "Meigo Chatbot © 2025"])

(defn sidebar
  []
  [:aside {:style {:width "100%"
                   :height "100%"
                   :background-color "white"
                   :display "flex"
                   :flex-direction "column"
                   :justify-content "space-between"
                   :padding "32px 16px 16px 16px"
                   :box-sizing "border-box"
                   :aria-label "Main navigation"}}
   [sidebar-nav]
   [:div {:style {:margin "20px 0"}}
    [logout-button]]
   [sidebar-footer]])

(defn toggle-button-side
  []
  [:button {:style {:background "none"
                    :border "none"
                    :color "white"
                    :font-size "1.2rem"
                    :cursor "pointer"
                    :padding "8px"
                    :border-radius "4px"
                    :transition "background-color 0.2s ease"}
            :on-click #(swap! conf/sidebar-visible? not)
            :on-mouse-over #(set! (.-backgroundColor (.-style (.-target %))) "rgba(255,255,255,0.1)")
            :on-mouse-out #(set! (.-backgroundColor (.-style (.-target %))) "transparent")
            :aria-label (if @conf/sidebar-visible? "Hide menu" "Show menu")
            :title (if @conf/sidebar-visible? "Hide menu" "Show menu")}
   [:i {:class "fas fa-bars"
        :style {
                :user-select "none"
                }}]])
