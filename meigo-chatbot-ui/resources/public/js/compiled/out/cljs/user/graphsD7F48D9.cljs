(defonce graph-data (r/atom nil))

(defn fetch-graph []
  (go
    (let [resp (<! (authed-request :get (str conf/api-url "/chat/grafos") {}))]
      (when resp
        (let [data (js->clj resp :keywordize-keys true)]
          (println "Raw API response:" resp)
          (println "Converted data:" data)
          (println "Data keys:" (keys data))
          (reset! graph-data data))))))

(defn init-cytoscape [container elements-data]
  (try
    (when (and container elements-data (exists? js/cytoscape))
      ;; Clear container
      (set! (.-innerHTML container) "")
      
      ;; Convert to JS and validate
      (let [elements-js (clj->js elements-data)]
        (println "Converting elements:" elements-data)
        (js/console.log "Elements JS:" elements-js)
        
        ;; Double-check elements-js is not null/undefined
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

;; Separate component that only renders when data is ready
(defn cytoscape-graph [nodes edges]
  (r/create-class
    {:component-did-mount
     (fn [_]
       (when-let [container (js/document.getElementById "cy")]
         (let [elements (concat nodes edges)]
           (println "Initializing Cytoscape with" (count nodes) "nodes and" (count edges) "edges")
           (js/setTimeout #(init-cytoscape container elements) 200))))
     
     :component-did-update
     (fn [this [_ old-nodes old-edges]]
       (when-let [container (js/document.getElementById "cy")]
         (let [elements (concat nodes edges)]
           (when (or (not= nodes old-nodes) (not= edges old-edges))
             (println "Updating Cytoscape")
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
  [:div
   [:h4 "Debug Information"]
   [:p "Data type: " (str (type data))]
   [:p "Data keys: " (str (keys data))]
   (when (contains? data :elementos)
     [:div
      [:p "Elementos keys: " (str (keys (:elementos data)))]
      (let [{:keys [nodes edges]} (:elementos data)]
        [:div
         [:p "Nodes count: " (str (count nodes))]
         [:p "Edges count: " (str (count edges))]
         (when (seq nodes)
           [:div
            [:p "First node: " (str (first nodes))]
            [:p "Node valid? " (str (validate-node (first nodes)))]])
         (when (seq edges)
           [:div
            [:p "First edge: " (str (first edges))]
            [:p "Edge valid? " (str (validate-edge (first edges)))]])])])
   [:details
    [:summary "Full data"]
    [:pre {:style {:font-size "10px" :max-height "200px" :overflow "auto"}}
     (with-out-str (cljs.pprint/pprint data))]]])

(defn history-graphs-panel []
  (r/create-class
    {:component-did-mount
     (fn [] 
       (println "Component mounted, fetching graph data...")
       (fetch-graph))
     
     :reagent-render
     (fn []
       [:div
        [:h2 "Historical Graph"]
        (let [data @graph-data]
          (cond
            (nil? data)
            [:p "Loading graph data..."]
            
            (not (valid-graph-data? data))
            [:div
             [:p {:style {:color "red"}} "Invalid or incomplete graph data received"]
             [debug-data-structure data]]
            
            :else
            (let [{:keys [nodes edges]} (:elementos data)]
              [:div
               [:p {:style {:color "green"}} 
                (str "Graph loaded: " (count nodes) " nodes, " (count edges) " edges")]
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
