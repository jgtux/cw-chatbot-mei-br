(ns shopping-admin-front-v2.login
  (:require [reagent.core :as r]
            [shopping-admin-front-v2.config :as conf]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<! go]]))

(defn log-in [username password]
  (go
    (let [response (<! (http/post "/api/auth" {:json-params {:username @username :password @password
                                                             :headers {"Content-Type" "application/json"}}}))])
      (if (= (:status response) 200)
        (do
          (js/localStorage.setItem "token" (:token (:body response))))
        (println "Login failed." (:status response)))))

(defn get-jwt-token []
 (js/localStorage.getItem "token"))

(defn authed-req [url]
  (let [jwt-token (get-jwt-token)]
    (if jwt-token
      (let [headers {:Authorization (str "Bearer " jwt-token)}]
        (go
          (let [response (<! (http/get url {:headers headers}))]
            (if (= (:status response) 200)
              (println "Success!" (:body response))
              (println "Failed!" (:status response))))))
      (println "No JWT token found")))) 

(defn auth-form []
  [:div
   [:img.logo {:src "/images/icon.png"
               :alt "logo"}]
   [:form ;;{:on-submit } 
    [:div.auth-fields
     [:label "Usuário"]
     [:input {:type "text"}]
     [:label "Senha"]
     [:input {:type "password"}]]
    [:div.auth-submit
     [:button {:type "submit"} "Entrar"]]]])
