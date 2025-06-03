(ns shopping-admin-front-v2.utils
  (:require [reagent.core :as r]
            ;; [cljs-http.client :as http]
            [shopping-admin-front-v2.config :as conf]))

(defn loading-screen []
  [:div.loading-screen
   [:img.logo {:src "/images/icon.png"}]])
