(ns shopping-admin-front-v2.auth
  (:require [reagent.core :as r]
            [shopping-admin-front-v2.config :as conf]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<! go]]))

(defonce username (r/atom ""))
(defonce password (r/atom ""))
(defonce error-message (r/atom ""))

(defn log-in []
  (reset! conf/loading? true)
  (reset! error-message "")
  (go
    (let [response (<! (http/post (str conf/api-url "/signin")
                                  {:json-params {:username @username :password @password}
                                   :content-type :json
                                   :with-credentials? true}))]
      (reset! conf/loading? false)
      (if (= (:status response) 200)
        (do
          (reset! username "")
          (reset! password "")
          (js/window.location.reload))
        (case (:status response)
          401 (reset! error-message "Usuario ou senha incorretos.")
          403 (reset! error-message "Acesso negado.")
          500 (reset! error-message "Erro no servidor. Tente novamente.")
          (reset! error-message (str "Error inesperado: " (:status response))))))))

(defn log-out []
  (reset! conf/loading? true)
  (go
    (let [response (<! (http/post (str conf/api-url "/signout")
                                  {:with-credentials? true}))]
      (reset! conf/loading? false)
      (js/window.location.reload))))

(defn authed-request
  "Makes an authenticated HTTP request.
   - method: :get, :post, :put, :delete
   - url: endpoint URL
   - opts: map with optional keys:
     - :params - query params for GET
     - :json-body - Clojure data to send as JSON body
  Returns a core.async channel with response body or nil on failure."
  [method url {:keys [params json-body]}]
  (go
    (let [request-opts (cond-> {:with-credentials? true}
                         params (assoc :query-params params)
                         json-body (assoc :json-params json-body :content-type :json))
          response (<! (http/request (assoc request-opts :method method :url url)))]
      (if (= 200 (:status response))
        (:body response)
        (do
          (println "Request failed with status" (:status response))
          nil)))))

;; exemplo do authed-request
;; (go
;;   (let [result (<! (authed-request :post "/api/items" {:json-body {:name "New Item" :qty 5}}))]
;;     (if result
;;       (println "Created item:" result)
;;       (println "Failed POST request"))))

(defn auth-form []
  [:div.auth-form
   [:img.logo {:src "/images/icon.png"
               :alt "logo"}]
   (when (not-empty @error-message)
    [:div.error-message
     [:p @error-message]])
   [:form {:on-submit (fn [e]
                        (.preventDefault e)
                        (when-not @conf/loading?
                        (log-in)))}
    [:div.auth-fields
     [:label "Usuário"]
     [:input {:type "text"
              :placeholder "Username"
              :value @username
              :disabled @conf/loading?
              :on-change #(reset! username (-> % .-target .-value))}]
     [:label "Senha"]
     [:input {:type "password"
              :placeholder "Password"
              :value @password
              :disabled @conf/loading?
              :on-change #(reset! password (-> % .-target .-value))}]]
    [:div.auth-submit
     [:button {:type "submit"
               :disabled @conf/loading?}
      (if @conf/loading? "Entrando..." "Entrar")]]]])
