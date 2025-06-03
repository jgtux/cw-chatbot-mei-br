(ns meigo-chatbot.auth
  (:require [reagent.core :as r]
            [meigo-chatbot.config :as conf]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<! go]]))

(def green-primary "#2a9d8f")
(def green-light "#a8dadc")
(def green-muted "#e0f2f1")
(def gray-light "#f5f5f5")
(def gray-dark "#264653")
(def border-light "#d0d0d0")
(def text-dark "#1b4332")
(def user-bubble-color "#dcf8c6")
(def bot-bubble-color "#ffffff")


(defonce register-mode? (r/atom false))
(defonce username (r/atom ""))
(defonce password (r/atom ""))
(def email (r/atom ""))
(def phone (r/atom ""))
(def birthday (r/atom ""))
(def confirm-password (r/atom ""))
(defonce error-message (r/atom ""))

(defn handle-error [response]
  (let [status (:status response)]
    (cond
      (= status 401) (reset! error-message "Usuário ou senha incorretos.")
      (= status 403) (reset! error-message "Acesso negado.")
      (= status 500) (reset! error-message "Erro no servidor. Tente novamente.")
      :else (reset! error-message (str "Erro inesperado: " status)))))

(defn check-auth-status []
  (reset! error-message "")
  (go
    (let [response (<! (http/get (str conf/api-url "/auth/status")
                                 {:with-credentials? true}))]
      (reset! conf/checking-auth? false)
      (if (= 200 (:status response))
        (reset! conf/authenticated? true)
        (reset! conf/authenticated? false)))))

(defn log-in []
  (reset! conf/loading? true)
  (reset! error-message "")
  (go
    (let [response (<!
                    (http/post (str conf/api-url "/auth/login")
                               {:body (js/JSON.stringify #js {:nome @username :senha @password})
                                :headers {"Content-Type" "application/json"}
                                :with-credentials? true})
                    )]
      (reset! conf/loading? false)
      (if (= 200 (:status response))
        (do
          (reset! username "")
          (reset! password "")
          (reset! conf/authenticated? true)
          (js/window.location.reload))
        (handle-error response)))))

(defn register []
  (reset! error-message "")
  (if (not= @password @confirm-password)
    (reset! error-message "Senhas diferentes")
    (do
      (reset! conf/loading? true)
      (let [payload {:nome @username
                     :senha @password
                     :email @email
                     :data_nasc @birthday
                     :telefone @phone}]
        (go
          (let [response (<! (http/post (str conf/api-url "/auth/cadastrar")
                                        {:body (js/JSON.stringify (clj->js payload))
                                         :headers {"Content-Type" "application/json"}
                                         :with-credentials? true}))]
            (reset! conf/loading? false)
            (if (= 201 (:status response))
              (do
                ;; Clear all fields
                (reset! username "")
                (reset! password "")
                (reset! confirm-password "")
                (reset! email "")
                (reset! phone "")
                (reset! conf/authenticated? true)
                (js/window.location.reload))
              (handle-error response))))))))

(defn log-out []
  (reset! conf/loading? true)
  (go
    (let [response (<! (http/post (str conf/api-url "/auth/signout")
                                  {:with-credentials? true}))]
      (reset! conf/loading? false)
      (js/window.location.reload))))

(defn authed-request
  [method url {:keys [params json-body]}]
  (go
    (let [request-opts (cond-> {:with-credentials? true
                                :headers {"Content-Type" "application/json"}}
                         params (assoc :query-params params)
                         json-body (assoc :body (js/JSON.stringify (clj->js json-body))))
          response (<! (http/request (assoc request-opts :method method :url url)))]
      (if (= 200 (:status response))
        (:body response)
        (do
          (println "Request failed with status" (:status response))
          nil)))))

(defn auth-form []
  [:div {:style {:display "flex"
                 :flex-direction "column"
                 :align-items "center"
                 :justify-content "center"
                 :min-height "100vh"
                 :background-color gray-light
                 :padding "20px"
                 :font-family "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}
   [:img {:src "/images/full-logo.png"
          :alt "logo"
          :style {:width "300px"
                  :margin-bottom "20px"}}]
   (when (not-empty @error-message)
     [:div {:style {:color "#d32f2f"
                    :margin-bottom "10px"
                    :font-weight "bold"}}
      [:p @error-message]])
   [:form {:on-submit (fn [e]
                        (.preventDefault e)
                        (when-not @conf/loading?
                          (if @register-mode?
                            (register)
                            (log-in))))
           :style {:display "flex"
                   :flex-direction "column"
                   :gap "12px"
                   :width "320px"
                   :background-color bot-bubble-color
                   :padding "24px"
                   :border-radius "12px"
                   :box-shadow (str "0 8px 24px " border-light)}}
    [:div {:style {:display "flex"
                   :flex-direction "column"
                   :gap "12px"}}
     [:div {:style {:display "flex" :flex-direction "column"}}
      [:label {:style {:font-size "0.9rem"
                       :font-weight "500"
                       :color text-dark
                       :margin-bottom "4px"}}
       "Usuário"]
      [:input {:type "text"
               :placeholder "Nome"
               :value @username
               :disabled @conf/loading?
               :on-change #(reset! username (-> % .-target .-value .trim))
               :style {:padding "12px"
                       :font-size "1rem"
                       :border (str "1px solid " border-light)
                       :border-radius "8px"
                       :outline "none"
                       :transition "border-color 0.2s ease, box-shadow 0.2s ease"
                       :background-color (if @conf/loading? gray-light bot-bubble-color)}
               :on-focus #(set! (-> % .-target .-style .-borderColor) green-primary)
               :on-blur #(set! (-> % .-target .-style .-borderColor) border-light)}]]
     ;; Password
     [:div {:style {:display "flex" :flex-direction "column"}}
      [:label {:style {:font-size "0.9rem"
                       :font-weight "500"
                       :color text-dark
                       :margin-bottom "4px"}}
       "Senha"]
      [:input {:type "password"
               :placeholder "Senha"
               :value @password
               :disabled @conf/loading?
               :on-change #(reset! password (-> % .-target .-value))
               :style {:padding "12px"
                       :font-size "1rem"
                       :border (str "1px solid " border-light)
                       :border-radius "8px"
                       :outline "none"
                       :transition "border-color 0.2s ease, box-shadow 0.2s ease"
                       :background-color (if @conf/loading? gray-light bot-bubble-color)}
               :on-focus #(set! (-> % .-target .-style .-borderColor) green-primary)
               :on-blur #(set! (-> % .-target .-style .-borderColor) border-light)}]]
     ;; Extra fields for register mode
     (when @register-mode?
       [:<>
        [:div {:style {:display "flex" :flex-direction "column"}}
         [:label {:style {:font-size "0.9rem"
                          :font-weight "500"
                          :color text-dark
                          :margin-bottom "4px"}}
          "Confirmar Senha"]
         [:input {:type "password"
                  :placeholder "Senha"
                  :value @confirm-password
                  :disabled @conf/loading?
                  :on-change #(reset! confirm-password (-> % .-target .-value))
                  :style {:padding "12px"
                          :font-size "1rem"
                          :border (str "1px solid " border-light)
                          :border-radius "8px"
                          :outline "none"
                          :transition "border-color 0.2s ease, box-shadow 0.2s ease"
                          :background-color (if @conf/loading? gray-light bot-bubble-color)}
                  :on-focus #(set! (-> % .-target .-style .-borderColor) green-primary)
                  :on-blur #(set! (-> % .-target .-style .-borderColor) border-light)}]]
        [:div {:style {:display "flex" :flex-direction "column"}}
         [:label {:style {:font-size "0.9rem"
                          :font-weight "500"
                          :color text-dark
                          :margin-bottom "4px"}}
          "Email"]
         [:input {:type "email"
                  :placeholder "Email"
                  :value @email
                  :disabled @conf/loading?
                  :on-change #(reset! email (-> % .-target .-value))
                  :style {:padding "12px"
                          :font-size "1rem"
                          :border (str "1px solid " border-light)
                          :border-radius "8px"
                          :outline "none"
                          :transition "border-color 0.2s ease, box-shadow 0.2s ease"
                          :background-color (if @conf/loading? gray-light bot-bubble-color)}
                  :on-focus #(set! (-> % .-target .-style .-borderColor) green-primary)
                  :on-blur #(set! (-> % .-target .-style .-borderColor) border-light)}]]
        [:div {:style {:display "flex" :flex-direction "column"}}
         [:label {:style {:font-size "0.9rem"
                          :font-weight "500"
                          :color text-dark
                          :margin-bottom "4px"}}
          "Data de Nascimento"]
         [:input {:type "date"
                  :value @birthday
                  :disabled @conf/loading?
                  :on-change #(reset! birthday (-> % .-target .-value))
                  :style {:padding "12px"
                          :font-size "1rem"
                          :color gray-dark
                          :border (str "1px solid " border-light)
                          :border-radius "8px"
                          :outline "none"
                          :transition "border-color 0.2s ease, box-shadow 0.2s ease"
                          :background-color (if @conf/loading? gray-light bot-bubble-color)}
                  :on-focus #(set! (-> % .-target .-style .-borderColor) green-primary)
                  :on-blur #(set! (-> % .-target .-style .-borderColor) border-light)}]]
        [:div {:style {:display "flex" :flex-direction "column"}}
         [:label {:style {:font-size "0.9rem"
                          :font-weight "500"
                          :color text-dark
                          :margin-bottom "4px"}}
          "Telefone"]
         [:input {:type "tel"
                  :placeholder "Telefone"
                  :value @phone
                  :disabled @conf/loading?
                  :on-change #(reset! phone (-> % .-target .-value))
                  :style {:padding "12px"
                          :font-size "1rem"
                          :border (str "1px solid " border-light)
                          :border-radius "8px"
                          :outline "none"
                          :transition "border-color 0.2s ease, box-shadow 0.2s ease"
                          :background-color (if @conf/loading? gray-light bot-bubble-color)}
                  :on-focus #(set! (-> % .-target .-style .-borderColor) green-primary)
                  :on-blur #(set! (-> % .-target .-style .-borderColor) border-light)}]]])]
    [:div {:style {:margin-top "16px"
                   :text-align "center"}}
     [:button {:type "submit"
               :disabled @conf/loading?
               :style {:padding "12px 24px"
                       :font-size "1rem"
                       :font-weight "500"
                       :background-color (cond 
                                           @conf/loading? border-light
                                           @register-mode? green-primary
                                           :else green-primary)
                       :color bot-bubble-color
                       :border "none"
                       :border-radius "24px"
                       :cursor (if @conf/loading? "not-allowed" "pointer")
                       :transition "all 0.3s ease"
                       :box-shadow (str "0 2px 8px rgba(42, 157, 143, 0.3)")
                       :width "100%"}
               :on-mouse-enter #(when-not @conf/loading?
                                  (set! (-> % .-target .-style .-backgroundColor) "#228b78")
                                  (set! (-> % .-target .-style .-transform) "translateY(-1px)")
                                  (set! (-> % .-target .-style .-boxShadow) "0 4px 12px rgba(42, 157, 143, 0.4)"))
               :on-mouse-leave #(when-not @conf/loading?
                                  (set! (-> % .-target .-style .-backgroundColor) green-primary)
                                  (set! (-> % .-target .-style .-transform) "translateY(0)")
                                  (set! (-> % .-target .-style .-boxShadow) "0 2px 8px rgba(42, 157, 143, 0.3)"))}
      (if @conf/loading?
        (if @register-mode? "Registrando..." "Entrando...")
        (if @register-mode? "Confirmar Registro" "Entrar"))]]
    ;; Toggle Register/Login Button
    [:div {:style {:margin-top "12px"
                   :text-align "center"}}
     [:button {:type "button"
               :disabled @conf/loading?
               :on-click #(reset! register-mode? (not @register-mode?))
               :style {:padding "8px 16px"
                       :font-size "0.9rem"
                       :background-color "transparent"
                       :color green-primary
                       :border "none"
                       :text-decoration "underline"
                       :cursor (if @conf/loading? "not-allowed" "pointer")
                       :transition "all 0.2s ease"
                       :border-radius "4px"}
               :on-mouse-enter #(when-not @conf/loading?
                                  (set! (-> % .-target .-style .-backgroundColor) green-muted)
                                  (set! (-> % .-target .-style .-color) "#228b78"))
               :on-mouse-leave #(when-not @conf/loading?
                                  (set! (-> % .-target .-style .-backgroundColor) "transparent")
                                  (set! (-> % .-target .-style .-color) green-primary))}
      (if @register-mode? "Voltar ao Login" "Registrar")]]]])
