(ns meigo-chatbot.config
  (:require [reagent.core :as r]))

(defonce api-url "http://localhost:5000")

(defonce state (r/atom {:section "chat"}))
(defonce sidebar-visible? (r/atom nil))

(defonce authenticated? (r/atom nil))

(defonce loading? (r/atom nil))

(defonce sidebar-visible? (r/atom nil))

(defonce checking-auth? (r/atom true))
