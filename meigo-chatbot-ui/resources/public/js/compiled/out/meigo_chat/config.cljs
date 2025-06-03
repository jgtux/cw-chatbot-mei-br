(ns meigo-chat.config
  (:require [reagent.core :as r]))

(defonce api-url "http://localhost:3000/v1/admin")

(defonce state (r/atom {:list-type "" :search-key "" :search-query ""}))
(defonce sidebar-visible? (r/atom true))

(defonce loading? (r/atom true))

(defonce sidebar-visible? (r/atom nil))

