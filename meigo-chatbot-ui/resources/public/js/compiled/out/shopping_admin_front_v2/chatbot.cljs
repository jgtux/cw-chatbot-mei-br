(ns shopping-admin-front-v2.chatbot
  (:require [reagent.core :as r]
            [clojure.string :as str]))

(defonce chatbot-state (r/atom {:messages []
                                :input-text ""}))

(defn bot-reply [user-msg]
  ;; Simple echo bot reply after 1s delay
  (js/setTimeout
    (fn []
      (swap! chatbot-state update :messages conj {:from :bot :text (str "Bot: You said \"" user-msg "\"")}))
    1000))

(defn send-message []
  (let [msg (-> @chatbot-state :input-text str/trim)]
    (when (not (str/blank? msg))
      (swap! chatbot-state update :messages conj {:from :user :text msg})
      (swap! chatbot-state assoc :input-text "")
      (bot-reply msg))))

(defn chat-message [{:keys [from text]}]
  [:div {:style {:text-align (if (= from :user) "right" "left")
                 :margin "5px 0"}}
   [:span {:style {:display "inline-block"
                   :padding "6px 10px"
                   :border-radius "12px"
                   :background-color (if (= from :user) "#a2d2ff" "#ccc")}}
    text]])

(defn chatbot-panel []
  (let [input-text (r/cursor chatbot-state [:input-text])
        messages (r/cursor chatbot-state [:messages])]
    (fn []
      [:div {:style {:border "1px solid #aaa"
                     :border-radius "8px"
                     :padding "10px"
                     :max-width "350px"
                     :height "400px"
                     :display "flex"
                     :flex-direction "column"
                     :background-color "#f9f9f9"}}
       [:div {:style {:flex 1
                      :overflow-y "auto"
                      :margin-bottom "10px"
                      :padding "5px"
                      :background-color "#fff"
                      :border-radius "5px"}}
        (for [[idx msg] (map-indexed vector @messages)]
          ^{:key idx} [chat-message msg])]
       [:div {:style {:display "flex"}}
        [:input {:type "text"
                 :value @input-text
                 :placeholder "Say something..."
                 :style {:flex 1 :padding "8px" :border-radius "4px" :border "1px solid #ccc"}
                 :on-change #(reset! input-text (-> % .-target .-value))
                 :on-key-down #(when (= (.-key %) "Enter") (send-message))}]
        [:button {:style {:margin-left "8px" :padding "8px 12px"}
                  :on-click send-message}
         "Send"]]])))
