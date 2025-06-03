(ns meigo-chatbot.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [clojure.string :as str]
            [cljs.core.async :refer [<! go]]
            [meigo-chatbot.graphs :refer [history-graphs-panel]]
            [meigo-chatbot.auth :refer [auth-form authed-request check-auth-status]]
            [meigo-chatbot.sidebar :as sidebar]
            [meigo-chatbot.config :as conf]))

(defonce chatbot-state (r/atom {:messages []
                                :input-text ""}))

(def green-primary "#2a9d8f")
(def green-light "#a8dadc")
(def green-muted "#e0f2f1")
(def gray-light "#f5f5f5")
(def gray-dark "#264653")
(def border-light "#d0d0d0")
(def text-dark "#1b4332")
(def user-bubble-color "#dcf8c6")
(def bot-bubble-color "#ffffff")

(defn loading-screen []
  [:div {:style {:display "flex"
                 :flex-direction "column"
                 :align-items "center"
                 :justify-content "center"
                 :min-height "100vh"
                 :background-color "#f5f5f5"}}
   [:img {:src "/images/icon.png"
          :alt "Logo"
          :style {:width "280px"
                  :margin-bottom "20px"}}]
   [:p {:style {:font-size "1.2rem"
                :color "#555"}} "Carregando..."]])


(defn top-bar []
  (let [sidebar-visible? @conf/sidebar-visible?]
    [:div {:style {:background "#2a9d8f"
                   :color "white"
                   :padding-top "12px"
                   :padding-bottom "12px"
                   :padding-right "20px"
                   :padding-left (if sidebar-visible? "260px" "20px")
                   :display "flex"
                   :align-items "center"
                   :box-shadow "0 1px 3px rgba(0,0,0,0.1)"
                   :position "fixed"
                   :flex-shrink 0
                   :top 0
                   :left 0
                   :right 0
                   :height "50px"
                   :z-index 1000
                   :transition "padding-left 0.3s ease"}}
     [:div {:style {:margin-right "16px" :cursor "pointer"}}
      [sidebar/toggle-button-side]]
     [:img {:src "/images/icon.png"
            :alt "Meigo Chatbot Logo"
            :style {:width "50px"
                    :height "auto"
                    :display "block"
                    :flex-shrink 0}}]]))

(defn bot-reply [user-msg]
  (go
    (swap! chatbot-state update :messages conj {:from :bot :loading? true})
    (let [response (<! (authed-request :post (str conf/api-url "/chat/perguntar")
                                       {:json-body {:pergunta user-msg}}))]
      (let [reply-text (get response :resposta "Desculpe, não entendi.")]
        (swap! chatbot-state update :messages
               (fn [msgs]
                 (-> msgs
                     (subvec 0 (dec (count msgs))) ;; remove last :loading? message
                     (conj {:from :bot :text reply-text})))))))
  )

(defn send-message []
  (let [msg (-> @chatbot-state :input-text str/trim)]
    (when-not (str/blank? msg)
      (swap! chatbot-state update :messages conj {:from :user :text msg})
      (swap! chatbot-state assoc :input-text "")
      (bot-reply msg))))

(defn chat-message [{:keys [from text loading?]}]
  [:div {:style {:display "flex"
                 :justify-content (if (= from :user) "flex-end" "flex-start")
                 :padding "6px 0"}}
   [:div {:style {:max-width "75%"
                  :padding "12px 18px"
                  :border-radius "20px"
                  :box-shadow "0 1px 3px rgba(0,0,0,0.1)"
                  :background-color (if (= from :user) user-bubble-color bot-bubble-color)
                  :color text-dark
                  :font-size "1rem"
                  :line-height "1.4"
                  :white-space "pre-wrap"
                  :word-break "break-word"
                  :font-family "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}
    (if loading?
      [:span {:style {:font-style "italic" :opacity 0.6}} "Digitando..."]
      text)]])

(defn chatbot-panel []
  (let [input-text (r/cursor chatbot-state [:input-text])
        messages (r/cursor chatbot-state [:messages])
        container-ref (atom nil)]
    (r/create-class
     {:component-did-update
      (fn [_ _]
        (when-let [el @container-ref]
          (set! (.-scrollTop el) (.-scrollHeight el))))
      :reagent-render
      (fn []
        [:div {:style {:max-width "1200px"
                       :flex 1
                       :height "80vh"
                       :margin "0 40px"
                       :display "flex"
                       :flex-direction "column"
                       :border-radius "12px"
                       :box-shadow (str "0 8px 24px " border-light)
                       :background-color bot-bubble-color}} ;; unified background
         
         ;; Message area
         [:div {:ref #(reset! container-ref %)
                :style {:flex 1
                        :overflow-y "auto"
                        :padding "24px"
                        :background-color gray-light
                        :border-top-left-radius "12px"
                        :border-top-right-radius "12px"}}
          (for [[idx msg] (map-indexed vector @messages)]
            ^{:key idx} [chat-message msg])]

         ;; Input section
         [:div {:style {:padding "16px 24px"
                        :border-top (str "1px solid " border-light)
                        :border-bottom-left-radius "12px"
                        :border-bottom-right-radius "12px"
                        :background-color "#fafafa"}}
          [:div {:style {:position "relative"
                         :display "flex"
                         :align-items "center"}}
           
           [:textarea {:value @input-text
                       :placeholder "Digite sua mensagem..."
                       :style {:width "100%"
                               :padding "12px 60px 12px 16px"
                               :border (str "1px solid " border-light)
                               :border-radius "24px"
                               :font-size "1rem"
                               :font-family "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                               :line-height "1.4"
                               :resize "none"
                               :outline "none"
                               :min-height "50px"
                               :max-height "150px"
                               :overflow "auto"}
                       :on-change #(reset! input-text (-> % .-target .-value))
                       :on-key-down #(when (and (= (.-key %) "Enter") (not (.-shiftKey %)))
                                       (.preventDefault %)
                                       (send-message))}]
           
           [:button {:style {:position "absolute"
                             :right "10px"
                             :bottom "10px"
                             :padding "6px 14px"
                             :background-color green-primary
                             :border "none"
                             :border-radius "18px"
                             :color "white"
                             :font-weight "600"
                             :font-size "0.9rem"
                             :cursor "pointer"
                             :transition "background-color 0.3s ease"}
                     :on-click send-message
                     :on-mouse-over #(set! (.-backgroundColor (.-style (.-target %))) green-light)
                     :on-mouse-out #(set! (.-backgroundColor (.-style (.-target %))) green-primary)}
            "Enviar"]]
          
          [:div {:style {:margin-top "6px"
                         :font-size "0.75rem"
                         :color "#999"}}
           "Pressione Enter para enviar, Shift+Enter para nova linha"]]])})))

;; Original component with more debugging
(defn zero-pad [n]
  (if (< n 10) (str "0" n) (str n)))

(defn parse-rfc1123-date [s]
  (try
    (let [d (js/Date. s)]
      (if (js/isNaN (.getTime d))
        (do
          (println "Invalid date detected")
          "Invalid-Date")
        (let [year (.getFullYear d)
              month (zero-pad (inc (.getMonth d)))
              day (zero-pad (.getDate d))
              result (str year "-" month "-" day)]
          result)))
    (catch :default e
      (println "Date parsing error:" e)
      (js/console.error "Invalid date:" s)
      "Invalid-Date")))

(defn group-by-date [messages]
  (try
    (->> messages
         (filter #(and (map? %) (contains? % :data)))
         (group-by #(parse-rfc1123-date (:data %)))
         (remove #(= "Invalid-Date" (first %)))
         (sort-by first >))
    (catch :default e
      (println "Error in group-by-date:" e)
      [])))

(defn history-panel []
  (let [history (r/atom nil)
        error (r/atom nil)]
    (r/create-class
     {:component-did-mount
      (fn []
        (println "Component mounted")
        (go
          (try
            (println "Making request...")
            (let [response (<! (authed-request :get (str conf/api-url "/chat/historico") {}))]
              (reset! history (:historico response)))
            (catch js/Error e
              (println "Failed to load history:" e)
              (reset! error "Failed to load chat history.")))))
      :reagent-render
      (fn []
        (println "Rendering history panel, history:" @history "error:" @error)
        [:div {:style {:max-width "1200px"
                       :margin "20px 40px"
                       :padding "24px"
                       :background-color "#ffffff"
                       :border-radius "12px"
                       :box-shadow (str "0 8px 24px " border-light)}}
         [:h2 {:style {:margin-bottom "20px"
                       :color text-dark}} "Histórico de Conversas"]
         
         (cond
           @error
           [:div
            [:p {:style {:color "red"}} @error]
            [:button {:on-click #(reset! error nil)
                      :style {:margin-top "10px"
                              :background-color green-primary
                              :color "white"
                              :padding "8px 16px"
                              :border "none"
                              :border-radius "6px"
                              :cursor "pointer"}} "Limpar erro"]]
           
           (nil? @history)
           [:p "Carregando histórico..."]
           
           (empty? @history)
           [:p "Nenhum histórico encontrado."]
           
           :else
           (try
             (let [grouped-data (group-by-date @history)]
               [:div
                [:p {:style {:margin-bottom "16px"
                             :color "#555"}} (str "Total de grupos por data: " (count grouped-data))]
                (if (empty? grouped-data)
                  [:p "Nenhuma mensagem válida encontrada."]
                  (for [[date msgs] grouped-data]
                    ^{:key date}
                    [:div {:style {:margin-bottom "28px"
                                   :border "1px solid #eee"
                                   :border-radius "8px"
                                   :background-color gray-light
                                   :padding "16px"}}
                     [:h3 {:style {:margin-bottom "12px"
                                   :color gray-dark}} date]
                     (for [[idx msg] (map-indexed vector msgs)]
                       (let [{:keys [pergunta resposta]} msg]
                         ^{:key idx}
                         [:div {:style {:margin-bottom "14px"
                                        :padding "12px"
                                        :background-color "#ffffff"
                                        :border-radius "8px"
                                        :box-shadow "0 1px 3px rgba(0,0,0,0.05)"}}
                          [:p {:style {:margin "0 0 6px 0"}}
                           [:strong "Q: "] (or pergunta "[Pergunta ausente]")]
                          [:p {:style {:margin 0}}
                           [:strong "A: "] (or resposta "[Resposta ausente]")]]))]))])
             (catch :default e
               (println "Render error:" e)
               [:div
                [:p {:style {:color "red"}} "Erro ao renderizar histórico"]
                [:pre (str e)]])))
         
         ;; Debug Info (toggleable)
         [:details {:style {:margin-top "24px"}}
          [:summary {:style {:cursor "pointer" :color gray-dark}} "Mostrar informações de debug"]
          [:pre {:style {:font-size "12px"
                         :background "#f5f5f5"
                         :padding "10px"
                         :white-space "pre-wrap"}}
           (str "History atom: " @history "\n"
                "Error atom: " @error)]]])})))

(def top-bar-height "70px")

(defn main-panel []
  (let [sidebar-visible? @conf/sidebar-visible?
        authenticated? @conf/authenticated?]
    (if authenticated?
      [:div {:style {:height "100vh"
                     :display "flex"
                     :flex-direction "column"
                     :font-family "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                     :background-color "#f5f7fa"}}
       [top-bar]

       [:div {:style {:display "flex"
                      :flex 1
                      :overflow "hidden"
                      :padding-top "50px"}} 
        [:div {:style {:width (if sidebar-visible? "240px" "0px")
                       :transition "width 0.3s ease"
                       :overflow (if sidebar-visible? "auto" "hidden")
                       :background-color "#d9f3f0"
                       :box-shadow (when sidebar-visible? "0 2px 4px rgba(0,0,0,0.1)")}}
         [sidebar/sidebar]]

        [:div {:style {:flex 1
                       :padding "40px"
                       :display "flex"
                       :flex-direction "column"
                       :overflow "auto"}}
         [:div {:style {:width "100%"
                        :max-width "1200px"
                        :margin "0 auto"
                        :flex 1
                        :display "flex"
                        :flex-direction "column"}}
          (let [current-section (:section @conf/state)]
            (case current-section
              "chat" [chatbot-panel]
              "history" [history-panel]
              "history-graphs" [history-graphs-panel]
          [chatbot-panel]))]]
        ]]
      [auth-form])))

(defn root-panel []
  (cond
    @conf/checking-auth? [loading-screen]
    @conf/authenticated? [main-panel]
    :else [auth-form]))

(defn mount-root []
  (rdom/render [root-panel] (.getElementById js/document "app")))

(defn ^:export init []
  (check-auth-status)
  (set! (.. js/document -body -style -margin) "0")
  (set! (.. js/document -body -style -backgroundColor) "#f5f5f5")
  (mount-root))

(init)
