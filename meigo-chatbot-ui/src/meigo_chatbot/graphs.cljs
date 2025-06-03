(ns meigo-chatbot.graphs
  (:require [reagent.core :as r]
            [meigo-chatbot.auth :refer [authed-request]]
            [meigo-chatbot.config :as conf]
            [cljs.core.async :refer [go <!]]))

(defonce graph-data (r/atom nil))

(def green-primary "#2a9d8f")
(def green-light "#a8dadc")
(def green-muted "#e0f2f1")
(def gray-light "#f5f5f5")
(def gray-dark "#264653")
(def border-light "#d0d0d0")
(def text-dark "#1b4332")
(def user-bubble-color "#dcf8c6")
(def bot-bubble-color "#ffffff")


(defn fetch-graph []
  (go
    (let [resp (<! (authed-request :get (str conf/api-url "/chat/grafos") {}))]
      (when resp
        (let [data (js->clj resp :keywordize-keys true)]
          (reset! graph-data data))))))

(defn init-cytoscape [container elements-data]
  (try
    (when (and container elements-data (exists? js/cytoscape))
      (set! (.-innerHTML container) "")
      
      (let [elements-js (clj->js elements-data)]
        (when (and elements-js (not (undefined? elements-js)))
          (js/cytoscape
            #js {:container container
                 :elements elements-js
                 :style #js [#js {"selector" "node"
                                  "style" #js {"label" "data(id)"
                                               "background-color" "#61bffc"
                                               "text-valign" "center"
                                               "text-halign" "center"}}
                             #js {"selector" "edge"
                                  "style" #js {"width" 2
                                               "line-color" "#ccc"
                                               "target-arrow-color" "#ccc"
                                               "target-arrow-shape" "triangle"}}]
                 :layout #js {:name "cose"
                              :animate true
                              :randomize false}}))))
    (catch :default e
      (js/console.error "Cytoscape init error:" e)
      (js/console.error "Container:" container)
      (js/console.error "Elements data:" elements-data))))

(defn cytoscape-graph [nodes edges]
  (r/create-class
    {:component-did-mount
     (fn [_]
       (when-let [container (js/document.getElementById "cy")]
         (let [elements (concat nodes edges)]
           (js/setTimeout #(init-cytoscape container elements) 200))))
     
     :component-did-update
     (fn [this [_ old-nodes old-edges]]
       (when-let [container (js/document.getElementById "cy")]
         (let [elements (concat nodes edges)]
           (when (or (not= nodes old-nodes) (not= edges old-edges))
             (js/setTimeout #(init-cytoscape container elements) 100)))))
     
     :reagent-render
     (fn [nodes edges]
       [:div {:id "cy" :style {:width "100%" :height "600px" :border "1px solid #ccc"}}])}))

(defn validate-node [node]
  (and (map? node)
       (contains? node :data)
       (map? (:data node))
       (contains? (:data node) :id)))

(defn validate-edge [edge]
  (and (map? edge)
       (contains? edge :data)
       (map? (:data edge))
       (contains? (:data edge) :source)
       (contains? (:data edge) :target)))

(defn valid-graph-data? [data]
  (try
    (and data
         (map? data)
         (contains? data :elementos)
         (let [{:keys [nodes edges]} (:elementos data)]
           (and (sequential? nodes)
                (sequential? edges)
                (seq nodes)
                (seq edges)
                (every? validate-node nodes)
                (every? validate-edge edges))))
    (catch :default e
      (js/console.error "Validation error:" e)
      false)))

(defn debug-data-structure [data]
  [:details {:style {:margin-top "24px"}}
   [:summary {:style {:cursor "pointer" :color "#666"}} "Mostrar informações de debug"]
   [:pre {:style {:font-size "12px"
                  :background "#f5f5f5"
                  :padding "10px"
                  :white-space "pre-wrap"}}
    (str "Data type: " (type data) "\n"
         "Data keys: " (keys data) "\n"
         (when (contains? data :elementos)
           (let [{:keys [nodes edges]} (:elementos data)]
             (str "Elementos keys: " (keys (:elementos data)) "\n"
                  "Nodes count: " (count nodes) "\n"
                  "Edges count: " (count edges) "\n"
                  (when (seq nodes)
                    (str "First node: " (first nodes) "\n"
                         "Node valid? " (validate-node (first nodes)) "\n"))
                  (when (seq edges)
                    (str "First edge: " (first edges) "\n"
                         "Edge valid? " (validate-edge (first edges)) "\n")))))
         "Full data: " (with-out-str (cljs.pprint/pprint data)))]])


(defn history-graphs-panel []
  (r/create-class
    {:component-did-mount
     (fn [] 
       (fetch-graph))
     
     :reagent-render
     (fn []
       [:div {:style {:max-width "1200px"
                      :margin "20px 40px"
                      :padding "24px"
                      :background-color "#ffffff"
                      :border-radius "12px"
                      :box-shadow (str "0 8px 24px " border-light)}}
        [:h2 {:style {:margin-bottom "20px"
                      :color text-dark}} "Histórico de Gráficos"]
        
        (let [data @graph-data]
          (cond
            (nil? data)
            [:p {:style {:color green-primary}} "Carregando dados do gráfico..."]
            
            (not (valid-graph-data? data))
            [:div
             [:p "Nenhum dado foi encontrado."]
             [debug-data-structure data]]
            
            (and (valid-graph-data? data) (empty? (:nodes (:elementos data))))
            [:div
             [:p {:style {:color "orange"}} "Sem nodes para mostrar. O grafo esta vazio."]]
            
            :else
            (let [{:keys [nodes edges]} (:elementos data)]
              [:div
               [:p {:style {:margin-bottom "16px"
                            :color gray-dark}} 
                (str "Grafo carregado: " (count nodes) " nodes, " (count edges) " edges")]
               [cytoscape-graph nodes edges]])))])}))



;; Alternative minimal test component to verify Cytoscape works
(defn test-cytoscape []
  (r/create-class
    {:component-did-mount
     (fn [_]
       (when-let [container (js/document.getElementById "test-cy")]
         (let [test-elements [{"data" {"id" "a"}}
                              {"data" {"id" "b"}}  
                              {"data" {"id" "ab" "source" "a" "target" "b"}}]]
           (js/setTimeout 
             #(init-cytoscape container test-elements) 
             100))))
     
     :reagent-render
     (fn []
       [:div
        [:h3 "Test Graph"]
        [:div {:id "test-cy" :style {:width "100%" :height "300px" :border "1px solid red"}}]])}))
