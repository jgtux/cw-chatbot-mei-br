(ns shopping-admin-front-v2.config
  (:require [reagent.core :as r]))

(defonce api-url "http://localhost:3000/v1/admin")

(defonce state (r/atom {:data [{:nome "Shopping 1" :cnpj "12345678000195" :status "active"}
                               {:nome "Shopping 2" :cnpj "98765432000187" :status "inactive"}]
                        :search-query ""
                        :search-key ""
                        :current-page 1
                        :page-size 10
                        :list-type "shoppings"}))

(comment (defonce state (r/atom {:data []
                        :search-query ""
                        :current-page 1
                        :page-size 10
                        :list-type ""}))) ;; Default value for list-type

;; estado Loading

(defonce loading? (r/atom true))

;; estado da visibilidade da barra do lado

(defonce sidebar-visible? (r/atom nil))

