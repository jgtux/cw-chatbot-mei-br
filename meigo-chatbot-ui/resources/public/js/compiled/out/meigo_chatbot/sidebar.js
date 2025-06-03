// Compiled by ClojureScript 1.10.773 {}
goog.provide('meigo_chatbot.sidebar');
goog.require('cljs.core');
goog.require('meigo_chatbot.config');
goog.require('reagent.core');
goog.require('meigo_chatbot.auth');
meigo_chatbot.sidebar.green_primary = "#2a9d8f";
meigo_chatbot.sidebar.green_light = "#a8dadc";
meigo_chatbot.sidebar.green_muted = "#e0f2f1";
meigo_chatbot.sidebar.gray_light = "#f5f5f5";
meigo_chatbot.sidebar.gray_dark = "#264653";
meigo_chatbot.sidebar.border_light = "#d0d0d0";
meigo_chatbot.sidebar.text_dark = "#1b4332";
meigo_chatbot.sidebar.nav_items = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"section-id","section-id",-1780104220),"chat",new cljs.core.Keyword(null,"icon","icon",1679606541),"comment",new cljs.core.Keyword(null,"label","label",1718410804),"Chat"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"section-id","section-id",-1780104220),"history",new cljs.core.Keyword(null,"icon","icon",1679606541),"comments",new cljs.core.Keyword(null,"label","label",1718410804),"Hist\u00F3rico"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"section-id","section-id",-1780104220),"history-graphs",new cljs.core.Keyword(null,"icon","icon",1679606541),"diagram-project",new cljs.core.Keyword(null,"label","label",1718410804),"Grafos do hist\u00F3rico"], null)], null);
meigo_chatbot.sidebar.sidebar_button = (function meigo_chatbot$sidebar$sidebar_button(p__28675){
var map__28676 = p__28675;
var map__28676__$1 = (((((!((map__28676 == null))))?(((((map__28676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28676):map__28676);
var section_id = cljs.core.get.call(null,map__28676__$1,new cljs.core.Keyword(null,"section-id","section-id",-1780104220));
var icon = cljs.core.get.call(null,map__28676__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var label = cljs.core.get.call(null,map__28676__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var active_QMARK_ = cljs.core.get.call(null,map__28676__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"user-select","user-select",-346451650),new cljs.core.Keyword(null,"margin","margin",-995903681)],["center",(cljs.core.truth_(active_QMARK_)?"white":meigo_chatbot.sidebar.text_dark),"left","0.9rem","all 0.2s ease",(cljs.core.truth_(active_QMARK_)?meigo_chatbot.sidebar.green_primary:"transparent"),"100%","12px 16px","flex","none","8px","none","4px 0"]),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,meigo_chatbot.config.state,cljs.core.assoc,new cljs.core.Keyword(null,"section","section",-300141526),section_id);
}),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (p1__28673_SHARP_){
if(cljs.core.truth_(active_QMARK_)){
return null;
} else {
return (p1__28673_SHARP_.target.style.backgroundColor = meigo_chatbot.sidebar.green_muted);
}
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (p1__28674_SHARP_){
if(cljs.core.truth_(active_QMARK_)){
return null;
} else {
return (p1__28674_SHARP_.target.style.backgroundColor = "transparent");
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["fas fa-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px",new cljs.core.Keyword(null,"width","width",-384071477),"16px"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null)], null),label], null)], null);
});
meigo_chatbot.sidebar.logout_button = (function meigo_chatbot$sidebar$logout_button(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"margin","margin",-995903681)],["center",meigo_chatbot.sidebar.text_dark,"left","0.9rem","all 0.2s ease","transparent","100%","pointer","12px 16px","flex","none","8px","4px 0"]),new cljs.core.Keyword(null,"on-click","on-click",1632826543),meigo_chatbot.auth.log_out,new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (p1__28678_SHARP_){
return (p1__28678_SHARP_.target.style.backgroundColor = "#ffebee");
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (p1__28679_SHARP_){
return (p1__28679_SHARP_.target.style.backgroundColor = "transparent");
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-sign-out-alt",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px",new cljs.core.Keyword(null,"width","width",-384071477),"16px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Sair"], null)], null);
});
meigo_chatbot.sidebar.sidebar_header = (function meigo_chatbot$sidebar$sidebar_header(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"20px 16px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),["1px solid ",meigo_chatbot.sidebar.border_light].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/icon.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Meigo Chatbot Logo",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"80%",new cljs.core.Keyword(null,"height","height",1025178622),"auto"], null)], null)], null)], null);
});
meigo_chatbot.sidebar.sidebar_nav = (function meigo_chatbot$sidebar$sidebar_nav(){
var current_section = new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,meigo_chatbot.config.state));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"20px 0px",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),(function (){var iter__4529__auto__ = (function meigo_chatbot$sidebar$sidebar_nav_$_iter__28680(s__28681){
return (new cljs.core.LazySeq(null,(function (){
var s__28681__$1 = s__28681;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__28681__$1);
if(temp__5720__auto__){
var s__28681__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28681__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__28681__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__28683 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__28682 = (0);
while(true){
if((i__28682 < size__4528__auto__)){
var map__28684 = cljs.core._nth.call(null,c__4527__auto__,i__28682);
var map__28684__$1 = (((((!((map__28684 == null))))?(((((map__28684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28684):map__28684);
var item = map__28684__$1;
var section_id = cljs.core.get.call(null,map__28684__$1,new cljs.core.Keyword(null,"section-id","section-id",-1780104220));
var icon = cljs.core.get.call(null,map__28684__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var label = cljs.core.get.call(null,map__28684__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append.call(null,b__28683,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meigo_chatbot.sidebar.sidebar_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section-id","section-id",-1780104220),section_id,new cljs.core.Keyword(null,"icon","icon",1679606541),icon,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core._EQ_.call(null,current_section,section_id)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),section_id], null)));

var G__28688 = (i__28682 + (1));
i__28682 = G__28688;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28683),meigo_chatbot$sidebar$sidebar_nav_$_iter__28680.call(null,cljs.core.chunk_rest.call(null,s__28681__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28683),null);
}
} else {
var map__28686 = cljs.core.first.call(null,s__28681__$2);
var map__28686__$1 = (((((!((map__28686 == null))))?(((((map__28686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28686):map__28686);
var item = map__28686__$1;
var section_id = cljs.core.get.call(null,map__28686__$1,new cljs.core.Keyword(null,"section-id","section-id",-1780104220));
var icon = cljs.core.get.call(null,map__28686__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var label = cljs.core.get.call(null,map__28686__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meigo_chatbot.sidebar.sidebar_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section-id","section-id",-1780104220),section_id,new cljs.core.Keyword(null,"icon","icon",1679606541),icon,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core._EQ_.call(null,current_section,section_id)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),section_id], null)),meigo_chatbot$sidebar$sidebar_nav_$_iter__28680.call(null,cljs.core.rest.call(null,s__28681__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,meigo_chatbot.sidebar.nav_items);
})()], null);
});
meigo_chatbot.sidebar.sidebar_footer = (function meigo_chatbot$sidebar$sidebar_footer(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"padding","padding",1660304693),"16px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.8rem",new cljs.core.Keyword(null,"color","color",1011675173),meigo_chatbot.sidebar.gray_dark,new cljs.core.Keyword(null,"border-top","border-top",-158897573),["1px solid ",meigo_chatbot.sidebar.border_light].join('')], null)], null),"Meigo Chatbot \u00A9 2025"], null);
});
meigo_chatbot.sidebar.sidebar = (function meigo_chatbot$sidebar$sidebar(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside","aside",1414397537),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"height","height",1025178622)],["border-box","white","100%","32px 16px 16px 16px","space-between","flex","Main navigation","column","100%"])], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meigo_chatbot.sidebar.sidebar_nav], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"20px 0"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meigo_chatbot.sidebar.logout_button], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meigo_chatbot.sidebar.sidebar_footer], null)], null);
});
meigo_chatbot.sidebar.toggle_button_side = (function meigo_chatbot$sidebar$toggle_button_side(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"background","background",-863952629),"none",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2rem",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),"8px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"transition","transition",765692007),"background-color 0.2s ease"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,meigo_chatbot.config.sidebar_visible_QMARK_,cljs.core.not);
}),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (p1__28689_SHARP_){
return (p1__28689_SHARP_.target.style.backgroundColor = "rgba(255,255,255,0.1)");
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (p1__28690_SHARP_){
return (p1__28690_SHARP_.target.style.backgroundColor = "transparent");
}),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),(cljs.core.truth_(cljs.core.deref.call(null,meigo_chatbot.config.sidebar_visible_QMARK_))?"Hide menu":"Show menu"),new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(cljs.core.deref.call(null,meigo_chatbot.config.sidebar_visible_QMARK_))?"Hide menu":"Show menu")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-bars",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none"], null)], null)], null)], null);
});

//# sourceMappingURL=sidebar.js.map?rel=1748983648354
