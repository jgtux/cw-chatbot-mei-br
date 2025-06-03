// Compiled by ClojureScript 1.10.773 {}
goog.provide('meigo_chatbot.graphs');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('meigo_chatbot.auth');
goog.require('meigo_chatbot.config');
goog.require('cljs.core.async');
if((typeof meigo_chatbot !== 'undefined') && (typeof meigo_chatbot.graphs !== 'undefined') && (typeof meigo_chatbot.graphs.graph_data !== 'undefined')){
} else {
meigo_chatbot.graphs.graph_data = reagent.core.atom.call(null,null);
}
meigo_chatbot.graphs.green_primary = "#2a9d8f";
meigo_chatbot.graphs.green_light = "#a8dadc";
meigo_chatbot.graphs.green_muted = "#e0f2f1";
meigo_chatbot.graphs.gray_light = "#f5f5f5";
meigo_chatbot.graphs.gray_dark = "#264653";
meigo_chatbot.graphs.border_light = "#d0d0d0";
meigo_chatbot.graphs.text_dark = "#1b4332";
meigo_chatbot.graphs.user_bubble_color = "#dcf8c6";
meigo_chatbot.graphs.bot_bubble_color = "#ffffff";
meigo_chatbot.graphs.fetch_graph = (function meigo_chatbot$graphs$fetch_graph(){
var c__28309__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28310__auto__ = (function (){var switch__28286__auto__ = (function (state_30450){
var state_val_30451 = (state_30450[(1)]);
if((state_val_30451 === (1))){
var inst_30434 = [meigo_chatbot.config.api_url,"/chat/grafos"].join('');
var inst_30435 = cljs.core.PersistentHashMap.EMPTY;
var inst_30436 = meigo_chatbot.auth.authed_request.call(null,new cljs.core.Keyword(null,"get","get",1683182755),inst_30434,inst_30435);
var state_30450__$1 = state_30450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30450__$1,(2),inst_30436);
} else {
if((state_val_30451 === (2))){
var inst_30438 = (state_30450[(7)]);
var inst_30438__$1 = (state_30450[(2)]);
var state_30450__$1 = (function (){var statearr_30452 = state_30450;
(statearr_30452[(7)] = inst_30438__$1);

return statearr_30452;
})();
if(cljs.core.truth_(inst_30438__$1)){
var statearr_30453_30462 = state_30450__$1;
(statearr_30453_30462[(1)] = (3));

} else {
var statearr_30454_30463 = state_30450__$1;
(statearr_30454_30463[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (3))){
var inst_30438 = (state_30450[(7)]);
var inst_30440 = cljs.core.js__GT_clj.call(null,inst_30438,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var inst_30441 = cljs.core.println.call(null,"Raw API response:",inst_30438);
var inst_30442 = cljs.core.println.call(null,"Converted data:",inst_30440);
var inst_30443 = cljs.core.keys.call(null,inst_30440);
var inst_30444 = cljs.core.println.call(null,"Data keys:",inst_30443);
var inst_30445 = cljs.core.reset_BANG_.call(null,meigo_chatbot.graphs.graph_data,inst_30440);
var state_30450__$1 = (function (){var statearr_30455 = state_30450;
(statearr_30455[(8)] = inst_30441);

(statearr_30455[(9)] = inst_30444);

(statearr_30455[(10)] = inst_30442);

return statearr_30455;
})();
var statearr_30456_30464 = state_30450__$1;
(statearr_30456_30464[(2)] = inst_30445);

(statearr_30456_30464[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (4))){
var state_30450__$1 = state_30450;
var statearr_30457_30465 = state_30450__$1;
(statearr_30457_30465[(2)] = null);

(statearr_30457_30465[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (5))){
var inst_30448 = (state_30450[(2)]);
var state_30450__$1 = state_30450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30450__$1,inst_30448);
} else {
return null;
}
}
}
}
}
});
return (function() {
var meigo_chatbot$graphs$fetch_graph_$_state_machine__28287__auto__ = null;
var meigo_chatbot$graphs$fetch_graph_$_state_machine__28287__auto____0 = (function (){
var statearr_30458 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30458[(0)] = meigo_chatbot$graphs$fetch_graph_$_state_machine__28287__auto__);

(statearr_30458[(1)] = (1));

return statearr_30458;
});
var meigo_chatbot$graphs$fetch_graph_$_state_machine__28287__auto____1 = (function (state_30450){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_30450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e30459){if((e30459 instanceof Object)){
var ex__28290__auto__ = e30459;
var statearr_30460_30466 = state_30450;
(statearr_30460_30466[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30467 = state_30450;
state_30450 = G__30467;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
meigo_chatbot$graphs$fetch_graph_$_state_machine__28287__auto__ = function(state_30450){
switch(arguments.length){
case 0:
return meigo_chatbot$graphs$fetch_graph_$_state_machine__28287__auto____0.call(this);
case 1:
return meigo_chatbot$graphs$fetch_graph_$_state_machine__28287__auto____1.call(this,state_30450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
meigo_chatbot$graphs$fetch_graph_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = meigo_chatbot$graphs$fetch_graph_$_state_machine__28287__auto____0;
meigo_chatbot$graphs$fetch_graph_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = meigo_chatbot$graphs$fetch_graph_$_state_machine__28287__auto____1;
return meigo_chatbot$graphs$fetch_graph_$_state_machine__28287__auto__;
})()
})();
var state__28311__auto__ = (function (){var statearr_30461 = f__28310__auto__.call(null);
(statearr_30461[(6)] = c__28309__auto__);

return statearr_30461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28311__auto__);
}));

return c__28309__auto__;
});
meigo_chatbot.graphs.init_cytoscape = (function meigo_chatbot$graphs$init_cytoscape(container,elements_data){
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
}catch (e30468){var e = e30468;
console.error("Cytoscape init error:",e);

console.error("Container:",container);

return console.error("Elements data:",elements_data);
}});
meigo_chatbot.graphs.cytoscape_graph = (function meigo_chatbot$graphs$cytoscape_graph(nodes,edges){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (_){
var temp__5720__auto__ = document.getElementById("cy");
if(cljs.core.truth_(temp__5720__auto__)){
var container = temp__5720__auto__;
var elements = cljs.core.concat.call(null,nodes,edges);
cljs.core.println.call(null,"Initializing Cytoscape with",cljs.core.count.call(null,nodes),"nodes and",cljs.core.count.call(null,edges),"edges");

return setTimeout((function (){
return meigo_chatbot.graphs.init_cytoscape.call(null,container,elements);
}),(200));
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,p__30469){
var vec__30470 = p__30469;
var _ = cljs.core.nth.call(null,vec__30470,(0),null);
var old_nodes = cljs.core.nth.call(null,vec__30470,(1),null);
var old_edges = cljs.core.nth.call(null,vec__30470,(2),null);
var temp__5720__auto__ = document.getElementById("cy");
if(cljs.core.truth_(temp__5720__auto__)){
var container = temp__5720__auto__;
var elements = cljs.core.concat.call(null,nodes,edges);
if(((cljs.core.not_EQ_.call(null,nodes,old_nodes)) || (cljs.core.not_EQ_.call(null,edges,old_edges)))){
cljs.core.println.call(null,"Updating Cytoscape");

return setTimeout((function (){
return meigo_chatbot.graphs.init_cytoscape.call(null,container,elements);
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
meigo_chatbot.graphs.validate_node = (function meigo_chatbot$graphs$validate_node(node){
return ((cljs.core.map_QMARK_.call(null,node)) && (cljs.core.contains_QMARK_.call(null,node,new cljs.core.Keyword(null,"data","data",-232669377))) && (cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(node))) && (cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"id","id",-1388402092))));
});
meigo_chatbot.graphs.validate_edge = (function meigo_chatbot$graphs$validate_edge(edge){
return ((cljs.core.map_QMARK_.call(null,edge)) && (cljs.core.contains_QMARK_.call(null,edge,new cljs.core.Keyword(null,"data","data",-232669377))) && (cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(edge))) && (cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(edge),new cljs.core.Keyword(null,"source","source",-433931539))) && (cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(edge),new cljs.core.Keyword(null,"target","target",253001721))));
});
meigo_chatbot.graphs.valid_graph_data_QMARK_ = (function meigo_chatbot$graphs$valid_graph_data_QMARK_(data){
try{var and__4115__auto__ = data;
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.map_QMARK_.call(null,data)){
if(cljs.core.contains_QMARK_.call(null,data,new cljs.core.Keyword(null,"elementos","elementos",-1692222900))){
var map__30478 = new cljs.core.Keyword(null,"elementos","elementos",-1692222900).cljs$core$IFn$_invoke$arity$1(data);
var map__30478__$1 = (((((!((map__30478 == null))))?(((((map__30478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30478):map__30478);
var nodes = cljs.core.get.call(null,map__30478__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__30478__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
return ((cljs.core.sequential_QMARK_.call(null,nodes)) && (cljs.core.sequential_QMARK_.call(null,edges)) && (cljs.core.seq.call(null,nodes)) && (cljs.core.seq.call(null,edges)) && (cljs.core.every_QMARK_.call(null,meigo_chatbot.graphs.validate_node,nodes)) && (cljs.core.every_QMARK_.call(null,meigo_chatbot.graphs.validate_edge,edges)));
} else {
return false;
}
} else {
return false;
}
} else {
return and__4115__auto__;
}
}catch (e30473){var e = e30473;
console.error("Validation error:",e);

return false;
}});
meigo_chatbot.graphs.debug_data_structure = (function meigo_chatbot$graphs$debug_data_structure(data){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"24px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),"#666"], null)], null),"Mostrar informa\u00E7\u00F5es de debug"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"background","background",-863952629),"#f5f5f5",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"pre-wrap"], null)], null),["Data type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,data)),"\n","Data keys: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keys.call(null,data)),"\n",((cljs.core.contains_QMARK_.call(null,data,new cljs.core.Keyword(null,"elementos","elementos",-1692222900)))?(function (){var map__30486 = new cljs.core.Keyword(null,"elementos","elementos",-1692222900).cljs$core$IFn$_invoke$arity$1(data);
var map__30486__$1 = (((((!((map__30486 == null))))?(((((map__30486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30486):map__30486);
var nodes = cljs.core.get.call(null,map__30486__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__30486__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
return ["Elementos keys: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keys.call(null,new cljs.core.Keyword(null,"elementos","elementos",-1692222900).cljs$core$IFn$_invoke$arity$1(data))),"\n","Nodes count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,nodes)),"\n","Edges count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,edges)),"\n",((cljs.core.seq.call(null,nodes))?["First node: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,nodes)),"\n","Node valid? ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(meigo_chatbot.graphs.validate_node.call(null,cljs.core.first.call(null,nodes))),"\n"].join(''):null),((cljs.core.seq.call(null,edges))?["First edge: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,edges)),"\n","Edge valid? ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(meigo_chatbot.graphs.validate_edge.call(null,cljs.core.first.call(null,edges))),"\n"].join(''):null)].join('');
})():null),"Full data: ",(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30488_30492 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30489_30493 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30490_30494 = true;
var _STAR_print_fn_STAR__temp_val__30491_30495 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30490_30494);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30491_30495);

try{cljs.pprint.pprint.call(null,data);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30489_30493);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30488_30492);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})()].join('')], null)], null);
});
meigo_chatbot.graphs.history_graphs_panel = (function meigo_chatbot$graphs$history_graphs_panel(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
cljs.core.println.call(null,"Component mounted, fetching graph data...");

return meigo_chatbot.graphs.fetch_graph.call(null);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"1200px",new cljs.core.Keyword(null,"margin","margin",-995903681),"20px 40px",new cljs.core.Keyword(null,"padding","padding",1660304693),"24px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#ffffff",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),["0 8px 24px ",meigo_chatbot.graphs.border_light].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"20px",new cljs.core.Keyword(null,"color","color",1011675173),meigo_chatbot.graphs.text_dark], null)], null),"Hist\u00F3rico de Gr\u00E1ficos"], null),(function (){var data = cljs.core.deref.call(null,meigo_chatbot.graphs.graph_data);
if((data == null)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),meigo_chatbot.graphs.green_primary], null)], null),"Carregando dados do gr\u00E1fico..."], null);
} else {
if(cljs.core.not.call(null,meigo_chatbot.graphs.valid_graph_data_QMARK_.call(null,data))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Nenhum dado foi encontrado."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meigo_chatbot.graphs.debug_data_structure,data], null)], null);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = meigo_chatbot.graphs.valid_graph_data_QMARK_.call(null,data);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"elementos","elementos",-1692222900).cljs$core$IFn$_invoke$arity$1(data)));
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"orange"], null)], null),"No nodes to display. The graph is empty."], null)], null);
} else {
var map__30496 = new cljs.core.Keyword(null,"elementos","elementos",-1692222900).cljs$core$IFn$_invoke$arity$1(data);
var map__30496__$1 = (((((!((map__30496 == null))))?(((((map__30496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30496):map__30496);
var nodes = cljs.core.get.call(null,map__30496__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__30496__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"16px",new cljs.core.Keyword(null,"color","color",1011675173),meigo_chatbot.graphs.gray_dark], null)], null),["Graph loaded: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,nodes))," nodes, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,edges))," edges"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [meigo_chatbot.graphs.cytoscape_graph,nodes,edges], null)], null);

}
}
}
})()], null);
})], null));
});
meigo_chatbot.graphs.test_cytoscape = (function meigo_chatbot$graphs$test_cytoscape(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (_){
var temp__5720__auto__ = document.getElementById("test-cy");
if(cljs.core.truth_(temp__5720__auto__)){
var container = temp__5720__auto__;
var test_elements = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, ["data",new cljs.core.PersistentArrayMap(null, 1, ["id","a"], null)], null),new cljs.core.PersistentArrayMap(null, 1, ["data",new cljs.core.PersistentArrayMap(null, 1, ["id","b"], null)], null),new cljs.core.PersistentArrayMap(null, 1, ["data",new cljs.core.PersistentArrayMap(null, 3, ["id","ab","source","a","target","b"], null)], null)], null);
return setTimeout((function (){
return meigo_chatbot.graphs.init_cytoscape.call(null,container,test_elements);
}),(100));
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Test Graph"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"test-cy",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"300px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid red"], null)], null)], null)], null);
})], null));
});

//# sourceMappingURL=graphs.js.map?rel=1748984665649
