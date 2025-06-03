(defproject meigo-chatbot "0.1.0-SNAPSHOT"
  :description "Meigo Chatbot v0"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.9.1"

  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.773"]
                 [org.clojure/core.async  "0.4.500"]
                 [cljs-http/cljs-http "0.1.48"]
                 [figwheel-sidecar "0.5.20"]
                 [com.cemerick/piggieback "0.2.2"]
                 [reagent "1.2.0"]
                 [cljsjs/react "17.0.2-0"]
                 [cljsjs/react-dom "17.0.2-0"]]

  :plugins [[lein-figwheel "0.5.20"]
            [lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]]

  :source-paths ["src"]

  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src"]

                :figwheel {:on-jsload "meigo-chatbot.core/on-js-reload"
                           :open-urls ["http://localhost:3449/index.html"]}

                :compiler {:main meigo-chatbot.core
                           :asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/meigo_chatbot.js"
                           :output-dir "resources/public/js/compiled/out"
                           :source-map-timestamp true
                           :source-map true
                           :preloads [devtools.preload]}}
               {:id "min"
                :source-paths ["src"]
                :compiler {:output-to "resources/public/js/compiled/meigo_chatbot.js"
                           :main meigo-chatbot.core
                           :optimizations :advanced
                           :pretty-print false}}]}

  :figwheel {:css-dirs ["resources/public/css"]}

  :profiles {:dev {:dependencies [[binaryage/devtools "1.0.0"]
                                  [figwheel-sidecar "0.5.20"]]
                   :source-paths ["src" "dev"]}})
