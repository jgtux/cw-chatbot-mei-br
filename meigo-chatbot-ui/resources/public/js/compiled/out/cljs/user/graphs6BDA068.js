// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.user.graphs6BDA068');
goog.require('cljs.core');
if((typeof cljs !== 'undefined') && (typeof cljs.user !== 'undefined') && (typeof cljs.user.graph_data !== 'undefined')){
} else {
cljs.user.graph_data = r.atom(null);
}
cljs.user.fetch_graph = (function cljs$user$fetch_graph(){
return cljs.user.go.call(null,(function (){var resp = cljs.user._LT__BANG_.call(null,cljs.user.authed_request.call(null,new cljs.core.Keyword(null,"get","get",1683182755),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(conf.api_url),"/chat/grafos"].join(''),cljs.core.PersistentArrayMap.EMPTY));
if(cljs.core.truth_(resp)){
var data = cljs.core.js__GT_clj.call(null,resp,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
cljs.core.println.call(null,"Raw API response:",resp);

cljs.core.println.call(null,"Converted data:",data);

cljs.core.println.call(null,"Data keys:",cljs.core.keys.call(null,data));

return cljs.core.reset_BANG_.call(null,cljs.user.graph_data,data);
} else {
return null;
}
})());
});
cljs.user.init_cytoscape = (function cljs$user$init_cytoscape(container,elements_data){
try{if(cljs.core.truth_((function (){var and__4115__auto__ = container;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = elements_data;
if(cljs.core.truth_(and__4115__auto____$1)){
return (typeof cytoscape !== 'undefined');
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
(container.innerHTML = "");

var elements_js = cljs.core.clj__GT_js.call(null,elements_data);
cljs.core.println.call(null,"Converting elements:",elements_data);

console.log("Elements JS:",elements_js);

if(cljs.core.truth_((function (){var and__4115__auto__ = elements_js;
if(cljs.core.truth_(and__4115__auto__)){
return (!((void 0 === elements_js)));
} else {
return and__4115__auto__;
}
})())){
return cytoscape(({"container": container, "elements": elements_js, "style": [({"selector": "node", "style": ({"label": "data(id)", "background-color": "#61bffc", "text-valign": "center", "text-halign": "center"})}),({"selector": "edge", "style": ({"width": (2), "line-color": "#ccc", "target-arrow-color": "#ccc", "target-arrow-shape": "triangle"})})], "layout": ({"name": "cose", "animate": true, "randomize": false})}));
} else {
return null;
}
} else {
return null;
}
}catch (e35269){var e = e35269;
console.error("Cytoscape init error:",e);

console.error("Container:",container);

return console.error("Elements data:",elements_data);
}});
cljs.user.cytoscape_graph = (function cljs$user$cytoscape_graph(nodes,edges){
return r.create_class(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (_){
var temp__5720__auto__ = document.getElementById("cy");
if(cljs.core.truth_(temp__5720__auto__)){
var container = temp__5720__auto__;
var elements = cljs.core.concat.call(null,nodes,edges);
cljs.core.println.call(null,"Initializing Cytoscape with",cljs.core.count.call(null,nodes),"nodes and",cljs.core.count.call(null,edges),"edges");

return setTimeout((function (){
return cljs.user.init_cytoscape.call(null,container,elements);
}),(200));
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,p__35270){
var vec__35271 = p__35270;
var _ = cljs.core.nth.call(null,vec__35271,(0),null);
var old_nodes = cljs.core.nth.call(null,vec__35271,(1),null);
var old_edges = cljs.core.nth.call(null,vec__35271,(2),null);
var temp__5720__auto__ = document.getElementById("cy");
if(cljs.core.truth_(temp__5720__auto__)){
var container = temp__5720__auto__;
var elements = cljs.core.concat.call(null,nodes,edges);
if(((cljs.core.not_EQ_.call(null,nodes,old_nodes)) || (cljs.core.not_EQ_.call(null,edges,old_edges)))){
cljs.core.println.call(null,"Updating Cytoscape");

return setTimeout((function (){
return cljs.user.init_cytoscape.call(null,container,elements);
}),(100));
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (nodes__$1,edges__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"cy",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"600px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ccc"], null)], null)], null);
})], null));
});
cljs.user.validate_node = (function cljs$user$validate_node(node){
return ((cljs.core.map_QMARK_.call(null,node)) && (cljs.core.contains_QMARK_.call(null,node,new cljs.core.Keyword(null,"data","data",-232669377))) && (cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(node))) && (cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"id","id",-1388402092))));
});
cljs.user.validate_edge = (function cljs$user$validate_edge(edge){
return ((cljs.core.map_QMARK_.call(null,edge)) && (cljs.core.contains_QMARK_.call(null,edge,new cljs.core.Keyword(null,"data","data",-232669377))) && (cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(edge))) && (cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(edge),new cljs.core.Keyword(null,"source","source",-433931539))) && (cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(edge),new cljs.core.Keyword(null,"target","target",253001721))));
});
cljs.user.valid_graph_data_QMARK_ = (function cljs$user$valid_graph_data_QMARK_(data){
try{var and__4115__auto__ = data;
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.map_QMARK_.call(null,data)){
if(cljs.core.contains_QMARK_.call(null,data,new cljs.core.Keyword(null,"elementos","elementos",-1692222900))){
var map__35279 = new cljs.core.Keyword(null,"elementos","elementos",-1692222900).cljs$core$IFn$_invoke$arity$1(data);
var map__35279__$1 = (((((!((map__35279 == null))))?(((((map__35279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35279):map__35279);
var nodes = cljs.core.get.call(null,map__35279__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__35279__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
return ((cljs.core.sequential_QMARK_.call(null,nodes)) && (cljs.core.sequential_QMARK_.call(null,edges)) && (cljs.core.seq.call(null,nodes)) && (cljs.core.seq.call(null,edges)) && (cljs.core.every_QMARK_.call(null,cljs.user.validate_node,nodes)) && (cljs.core.every_QMARK_.call(null,cljs.user.validate_edge,edges)));
} else {
return false;
}
} else {
return false;
}
} else {
return and__4115__auto__;
}
}catch (e35274){var e = e35274;
console.error("Validation error:",e);

return false;
}});
cljs.user.debug_data_structure = (function cljs$user$debug_data_structure(data){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Debug Information"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Data type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,data))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Data keys: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keys.call(null,data))], null),((cljs.core.contains_QMARK_.call(null,data,new cljs.core.Keyword(null,"elementos","elementos",-1692222900)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Elementos keys: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keys.call(null,new cljs.core.Keyword(null,"elementos","elementos",-1692222900).cljs$core$IFn$_invoke$arity$1(data)))], null),(function (){var map__35281 = new cljs.core.Keyword(null,"elementos","elementos",-1692222900).cljs$core$IFn$_invoke$arity$1(data);
var map__35281__$1 = (((((!((map__35281 == null))))?(((((map__35281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35281):map__35281);
var nodes = cljs.core.get.call(null,map__35281__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__35281__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Nodes count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,nodes))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Edges count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,edges))], null),((cljs.core.seq.call(null,nodes))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"First node: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,nodes))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Node valid? ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.user.validate_node.call(null,cljs.core.first.call(null,nodes)))], null)], null):null),((cljs.core.seq.call(null,edges))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"First edge: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,edges))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Edge valid? ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.user.validate_edge.call(null,cljs.core.first.call(null,edges)))], null)], null):null)], null);
})()], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),"Full data"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"200px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35283_35287 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35284_35288 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35285_35289 = true;
var _STAR_print_fn_STAR__temp_val__35286_35290 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35285_35289);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35286_35290);

try{cljs.pprint.pprint.call(null,data);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35284_35288);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35283_35287);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})()], null)], null)], null);
});
cljs.user.history_graphs_panel = (function cljs$user$history_graphs_panel(){
return r.create_class(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
cljs.core.println.call(null,"Component mounted, fetching graph data...");

return cljs.user.fetch_graph.call(null);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Historical Graph"], null),(function (){var data = cljs.core.deref.call(null,cljs.user.graph_data);
if((data == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Loading graph data..."], null);
} else {
if(cljs.core.not.call(null,cljs.user.valid_graph_data_QMARK_.call(null,data))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),"Invalid or incomplete graph data received"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.user.debug_data_structure,data], null)], null);
} else {
var map__35291 = new cljs.core.Keyword(null,"elementos","elementos",-1692222900).cljs$core$IFn$_invoke$arity$1(data);
var map__35291__$1 = (((((!((map__35291 == null))))?(((((map__35291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35291):map__35291);
var nodes = cljs.core.get.call(null,map__35291__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__35291__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"green"], null)], null),["Graph loaded: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,nodes))," nodes, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,edges))," edges"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.user.cytoscape_graph,nodes,edges], null)], null);

}
}
})()], null);
})], null));
});
cljs.user.test_cytoscape = (function cljs$user$test_cytoscape(){
return r.create_class(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (_){
var temp__5720__auto__ = document.getElementById("test-cy");
if(cljs.core.truth_(temp__5720__auto__)){
var container = temp__5720__auto__;
var test_elements = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, ["data",new cljs.core.PersistentArrayMap(null, 1, ["id","a"], null)], null),new cljs.core.PersistentArrayMap(null, 1, ["data",new cljs.core.PersistentArrayMap(null, 1, ["id","b"], null)], null),new cljs.core.PersistentArrayMap(null, 1, ["data",new cljs.core.PersistentArrayMap(null, 3, ["id","ab","source","a","target","b"], null)], null)], null);
return setTimeout((function (){
return cljs.user.init_cytoscape.call(null,container,test_elements);
}),(100));
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Test Graph"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"test-cy",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"300px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid red"], null)], null)], null)], null);
})], null));
});

//# sourceMappingURL=graphs6BDA068.js.map?rel=1748979287514
