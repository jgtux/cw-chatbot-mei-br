(ns meigo-chatbot.utils
  (:require [reagent.core :as r]
            ))

(defn loading-screen []
  [:div.loading-screen
   [:img.logo {:src "/images/icon.png"}]])
