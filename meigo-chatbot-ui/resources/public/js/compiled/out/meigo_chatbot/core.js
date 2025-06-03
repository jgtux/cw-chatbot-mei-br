// Compiled by ClojureScript 1.10.773 {}
goog.provide('meigo_chatbot.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('meigo_chatbot.graphs');
goog.require('meigo_chatbot.auth');
goog.require('meigo_chatbot.sidebar');
goog.require('meigo_chatbot.config');
if((typeof meigo_chatbot !== 'undefined') && (typeof meigo_chatbot.core !== 'undefined') && (typeof meigo_chatbot.core.chatbot_state !== 'undefined')){
} else {
meigo_chatbot.core.chatbot_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),""], null));
}
meigo_chatbot.core.green_primary = "#2a9d8f";
meigo_chatbot.core.green_light = "#a8dadc";
meigo_chatbot.core.green_muted = "#e0f2f1";
meigo_chatbot.core.gray_light = "#f5f5f5";
meigo_chatbot.core.gray_dark = "#264653";
meigo_chatbot.core.border_light = "#d0d0d0";
meigo_chatbot.core.text_dark = "#1b4332";
meigo_chatbot.core.user_bubble_color = "#dcf8c6";
meigo_chatbot.core.bot_bubble_color = "#ffffff";
meigo_chatbot.core.loading_screen = (function meigo_chatbot$core$loading_screen(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"min-height","min-height",398480837),"100vh",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f5f5f5"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/icon.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Logo",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"280px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"20px"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2rem",new cljs.core.Keyword(null,"color","color",1011675173),"#555"], null)], null),"Carregando..."], null)], null);
});
meigo_chatbot.core.top_bar = (function meigo_chatbot$core$top_bar(){
var sidebar_visible_QMARK_ = cljs.core.deref.call(null,meigo_chatbot.config.sidebar_visible_QMARK_);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["center","0 1px 3px rgba(0,0,0,0.1)","white","padding-left 0.3s ease",(0),"#2a9d8f",(0),"20px",(1000),"12px",(cljs.core.truth_(sidebar_visible_QMARK_)?"260px":"20px"),(0),"flex","fixed","12px","50px",(0)])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"16px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meigo_chatbot.sidebar.toggle_button_side], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/icon.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Meigo Chatbot Logo",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"height","height",1025178622),"auto",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),(0)], null)], null)], null)], null);
});
meigo_chatbot.core.bot_reply = (function meigo_chatbot$core$bot_reply(user_msg){
var c__28309__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28310__auto__ = (function (){var switch__28286__auto__ = (function (state_30518){
var state_val_30519 = (state_30518[(1)]);
if((state_val_30519 === (1))){
var inst_30500 = [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"loading?","loading?",1905707049)];
var inst_30501 = [new cljs.core.Keyword(null,"bot","bot",-950896508),true];
var inst_30502 = cljs.core.PersistentHashMap.fromArrays(inst_30500,inst_30501);
var inst_30503 = cljs.core.swap_BANG_.call(null,meigo_chatbot.core.chatbot_state,cljs.core.update,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.conj,inst_30502);
var inst_30504 = [meigo_chatbot.config.api_url,"/chat/perguntar"].join('');
var inst_30505 = [new cljs.core.Keyword(null,"json-body","json-body",1827874300)];
var inst_30506 = [new cljs.core.Keyword(null,"pergunta","pergunta",-1062497990)];
var inst_30507 = [user_msg];
var inst_30508 = cljs.core.PersistentHashMap.fromArrays(inst_30506,inst_30507);
var inst_30509 = [inst_30508];
var inst_30510 = cljs.core.PersistentHashMap.fromArrays(inst_30505,inst_30509);
var inst_30511 = meigo_chatbot.auth.authed_request.call(null,new cljs.core.Keyword(null,"post","post",269697687),inst_30504,inst_30510);
var state_30518__$1 = (function (){var statearr_30520 = state_30518;
(statearr_30520[(7)] = inst_30503);

return statearr_30520;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30518__$1,(2),inst_30511);
} else {
if((state_val_30519 === (2))){
var inst_30513 = (state_30518[(2)]);
var inst_30514 = cljs.core.get.call(null,inst_30513,new cljs.core.Keyword(null,"resposta","resposta",-1517549719),"Desculpe, n\u00E3o entendi.");
var inst_30515 = (function (){var response = inst_30513;
var reply_text = inst_30514;
return (function (msgs){
return cljs.core.conj.call(null,cljs.core.subvec.call(null,msgs,(0),(cljs.core.count.call(null,msgs) - (1))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"bot","bot",-950896508),new cljs.core.Keyword(null,"text","text",-1790561697),reply_text], null));
});
})();
var inst_30516 = cljs.core.swap_BANG_.call(null,meigo_chatbot.core.chatbot_state,cljs.core.update,new cljs.core.Keyword(null,"messages","messages",345434482),inst_30515);
var state_30518__$1 = state_30518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30518__$1,inst_30516);
} else {
return null;
}
}
});
return (function() {
var meigo_chatbot$core$bot_reply_$_state_machine__28287__auto__ = null;
var meigo_chatbot$core$bot_reply_$_state_machine__28287__auto____0 = (function (){
var statearr_30521 = [null,null,null,null,null,null,null,null];
(statearr_30521[(0)] = meigo_chatbot$core$bot_reply_$_state_machine__28287__auto__);

(statearr_30521[(1)] = (1));

return statearr_30521;
});
var meigo_chatbot$core$bot_reply_$_state_machine__28287__auto____1 = (function (state_30518){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_30518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e30522){if((e30522 instanceof Object)){
var ex__28290__auto__ = e30522;
var statearr_30523_30525 = state_30518;
(statearr_30523_30525[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30526 = state_30518;
state_30518 = G__30526;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
meigo_chatbot$core$bot_reply_$_state_machine__28287__auto__ = function(state_30518){
switch(arguments.length){
case 0:
return meigo_chatbot$core$bot_reply_$_state_machine__28287__auto____0.call(this);
case 1:
return meigo_chatbot$core$bot_reply_$_state_machine__28287__auto____1.call(this,state_30518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
meigo_chatbot$core$bot_reply_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = meigo_chatbot$core$bot_reply_$_state_machine__28287__auto____0;
meigo_chatbot$core$bot_reply_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = meigo_chatbot$core$bot_reply_$_state_machine__28287__auto____1;
return meigo_chatbot$core$bot_reply_$_state_machine__28287__auto__;
})()
})();
var state__28311__auto__ = (function (){var statearr_30524 = f__28310__auto__.call(null);
(statearr_30524[(6)] = c__28309__auto__);

return statearr_30524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28311__auto__);
}));

return c__28309__auto__;
});
meigo_chatbot.core.send_message = (function meigo_chatbot$core$send_message(){
var msg = clojure.string.trim.call(null,new cljs.core.Keyword(null,"input-text","input-text",-1336297114).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,meigo_chatbot.core.chatbot_state)));
if(clojure.string.blank_QMARK_.call(null,msg)){
return null;
} else {
cljs.core.swap_BANG_.call(null,meigo_chatbot.core.chatbot_state,cljs.core.update,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"text","text",-1790561697),msg], null));

cljs.core.swap_BANG_.call(null,meigo_chatbot.core.chatbot_state,cljs.core.assoc,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"");

return meigo_chatbot.core.bot_reply.call(null,msg);
}
});
meigo_chatbot.core.chat_message = (function meigo_chatbot$core$chat_message(p__30527){
var map__30528 = p__30527;
var map__30528__$1 = (((((!((map__30528 == null))))?(((((map__30528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30528):map__30528);
var from = cljs.core.get.call(null,map__30528__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var text = cljs.core.get.call(null,map__30528__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var loading_QMARK_ = cljs.core.get.call(null,map__30528__$1,new cljs.core.Keyword(null,"loading?","loading?",1905707049));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),((cljs.core._EQ_.call(null,from,new cljs.core.Keyword(null,"user","user",1532431356)))?"flex-end":"flex-start"),new cljs.core.Keyword(null,"padding","padding",1660304693),"6px 0"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"word-break","word-break",-407281356),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["1.4","0 1px 3px rgba(0,0,0,0.1)",meigo_chatbot.core.text_dark,"pre-wrap","1rem",((cljs.core._EQ_.call(null,from,new cljs.core.Keyword(null,"user","user",1532431356)))?meigo_chatbot.core.user_bubble_color:meigo_chatbot.core.bot_bubble_color),"75%","break-word","12px 18px","20px","'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"])], null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-style","font-style",-773672352),"italic",new cljs.core.Keyword(null,"opacity","opacity",397153780),0.6], null)], null),"Digitando..."], null):text)], null)], null);
});
meigo_chatbot.core.chatbot_panel = (function meigo_chatbot$core$chatbot_panel(){
var input_text = reagent.core.cursor.call(null,meigo_chatbot.core.chatbot_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
var messages = reagent.core.cursor.call(null,meigo_chatbot.core.chatbot_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messages","messages",345434482)], null));
var container_ref = cljs.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (_,___$1){
var temp__5720__auto__ = cljs.core.deref.call(null,container_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return (el.scrollTop = el.scrollHeight);
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"margin","margin",-995903681)],[["0 8px 24px ",meigo_chatbot.core.border_light].join(''),meigo_chatbot.core.bot_bubble_color,(1),"1200px","flex","12px","column","80vh","0 40px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__30530_SHARP_){
return cljs.core.reset_BANG_.call(null,container_ref,p1__30530_SHARP_);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"24px",new cljs.core.Keyword(null,"background-color","background-color",570434026),meigo_chatbot.core.gray_light,new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342),"12px",new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),"12px"], null)], null),(function (){var iter__4529__auto__ = (function meigo_chatbot$core$chatbot_panel_$_iter__30535(s__30536){
return (new cljs.core.LazySeq(null,(function (){
var s__30536__$1 = s__30536;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__30536__$1);
if(temp__5720__auto__){
var s__30536__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30536__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__30536__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__30538 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__30537 = (0);
while(true){
if((i__30537 < size__4528__auto__)){
var vec__30539 = cljs.core._nth.call(null,c__4527__auto__,i__30537);
var idx = cljs.core.nth.call(null,vec__30539,(0),null);
var msg = cljs.core.nth.call(null,vec__30539,(1),null);
cljs.core.chunk_append.call(null,b__30538,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meigo_chatbot.core.chat_message,msg], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__30545 = (i__30537 + (1));
i__30537 = G__30545;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30538),meigo_chatbot$core$chatbot_panel_$_iter__30535.call(null,cljs.core.chunk_rest.call(null,s__30536__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30538),null);
}
} else {
var vec__30542 = cljs.core.first.call(null,s__30536__$2);
var idx = cljs.core.nth.call(null,vec__30542,(0),null);
var msg = cljs.core.nth.call(null,vec__30542,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meigo_chatbot.core.chat_message,msg], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),meigo_chatbot$core$chatbot_panel_$_iter__30535.call(null,cljs.core.rest.call(null,s__30536__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.deref.call(null,messages)));
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"padding","padding",1660304693),"16px 24px",new cljs.core.Keyword(null,"border-top","border-top",-158897573),["1px solid ",meigo_chatbot.core.border_light].join(''),new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610),"12px",new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),"12px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fafafa"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,input_text),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Digite sua mensagem...",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["1.4","150px","50px","1rem","auto","100%","none","12px 60px 12px 16px","none",["1px solid ",meigo_chatbot.core.border_light].join(''),"24px","'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"]),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30531_SHARP_){
return cljs.core.reset_BANG_.call(null,input_text,p1__30531_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__30532_SHARP_){
if(((cljs.core._EQ_.call(null,p1__30532_SHARP_.key,"Enter")) && (cljs.core.not.call(null,p1__30532_SHARP_.shiftKey)))){
p1__30532_SHARP_.preventDefault();

return meigo_chatbot.core.send_message.call(null);
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],["white","10px","0.9rem","background-color 0.3s ease","600",meigo_chatbot.core.green_primary,"pointer","6px 14px","10px","absolute","none","18px"]),new cljs.core.Keyword(null,"on-click","on-click",1632826543),meigo_chatbot.core.send_message,new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (p1__30533_SHARP_){
return (p1__30533_SHARP_.target.style.backgroundColor = meigo_chatbot.core.green_light);
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (p1__30534_SHARP_){
return (p1__30534_SHARP_.target.style.backgroundColor = meigo_chatbot.core.green_primary);
})], null),"Enviar"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"6px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.75rem",new cljs.core.Keyword(null,"color","color",1011675173),"#999"], null)], null),"Pressione Enter para enviar, Shift+Enter para nova linha"], null)], null)], null);
})], null));
});
meigo_chatbot.core.zero_pad = (function meigo_chatbot$core$zero_pad(n){
if((n < (10))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(n);
}
});
meigo_chatbot.core.parse_rfc1123_date = (function meigo_chatbot$core$parse_rfc1123_date(s){
try{var d = (new Date(s));
if(cljs.core.truth_(isNaN(d.getTime()))){
cljs.core.println.call(null,"Invalid date detected");

return "Invalid-Date";
} else {
var year = d.getFullYear();
var month = meigo_chatbot.core.zero_pad.call(null,(d.getMonth() + (1)));
var day = meigo_chatbot.core.zero_pad.call(null,d.getDate());
var result = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(year),"-",month,"-",day].join('');
return result;
}
}catch (e30546){var e = e30546;
cljs.core.println.call(null,"Date parsing error:",e);

console.error("Invalid date:",s);

return "Invalid-Date";
}});
meigo_chatbot.core.group_by_date = (function meigo_chatbot$core$group_by_date(messages){
try{return cljs.core.sort_by.call(null,cljs.core.first,cljs.core._GT_,cljs.core.remove.call(null,(function (p1__30549_SHARP_){
return cljs.core._EQ_.call(null,"Invalid-Date",cljs.core.first.call(null,p1__30549_SHARP_));
}),cljs.core.group_by.call(null,(function (p1__30548_SHARP_){
return meigo_chatbot.core.parse_rfc1123_date.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__30548_SHARP_));
}),cljs.core.filter.call(null,(function (p1__30547_SHARP_){
return ((cljs.core.map_QMARK_.call(null,p1__30547_SHARP_)) && (cljs.core.contains_QMARK_.call(null,p1__30547_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377))));
}),messages))));
}catch (e30550){var e = e30550;
cljs.core.println.call(null,"Error in group-by-date:",e);

return cljs.core.PersistentVector.EMPTY;
}});
meigo_chatbot.core.history_panel = (function meigo_chatbot$core$history_panel(){
var history = reagent.core.atom.call(null,null);
var error = reagent.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
cljs.core.println.call(null,"Component mounted");

var c__28309__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__28310__auto__ = (function (){var switch__28286__auto__ = (function (state_30568){
var state_val_30569 = (state_30568[(1)]);
if((state_val_30569 === (1))){
var state_30568__$1 = state_30568;
var statearr_30570_30618 = state_30568__$1;
(statearr_30570_30618[(2)] = null);

(statearr_30570_30618[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (2))){
var inst_30566 = (state_30568[(2)]);
var state_30568__$1 = state_30568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30568__$1,inst_30566);
} else {
if((state_val_30569 === (3))){
var inst_30551 = (state_30568[(2)]);
var inst_30552 = cljs.core.println.call(null,"Failed to load history:",inst_30551);
var inst_30553 = cljs.core.reset_BANG_.call(null,error,"Failed to load chat history.");
var state_30568__$1 = (function (){var statearr_30571 = state_30568;
(statearr_30571[(7)] = inst_30552);

return statearr_30571;
})();
var statearr_30572_30619 = state_30568__$1;
(statearr_30572_30619[(2)] = inst_30553);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30568__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30569 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30568,(3),Error,null,(2));
var inst_30557 = cljs.core.println.call(null,"Making request...");
var inst_30558 = [meigo_chatbot.config.api_url,"/chat/historico"].join('');
var inst_30559 = cljs.core.PersistentHashMap.EMPTY;
var inst_30560 = meigo_chatbot.auth.authed_request.call(null,new cljs.core.Keyword(null,"get","get",1683182755),inst_30558,inst_30559);
var state_30568__$1 = (function (){var statearr_30573 = state_30568;
(statearr_30573[(8)] = inst_30557);

return statearr_30573;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30568__$1,(5),inst_30560);
} else {
if((state_val_30569 === (5))){
var inst_30562 = (state_30568[(2)]);
var inst_30563 = new cljs.core.Keyword(null,"historico","historico",-415406149).cljs$core$IFn$_invoke$arity$1(inst_30562);
var inst_30564 = cljs.core.reset_BANG_.call(null,history,inst_30563);
var state_30568__$1 = state_30568;
var statearr_30574_30620 = state_30568__$1;
(statearr_30574_30620[(2)] = inst_30564);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30568__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});
return (function() {
var meigo_chatbot$core$history_panel_$_state_machine__28287__auto__ = null;
var meigo_chatbot$core$history_panel_$_state_machine__28287__auto____0 = (function (){
var statearr_30575 = [null,null,null,null,null,null,null,null,null];
(statearr_30575[(0)] = meigo_chatbot$core$history_panel_$_state_machine__28287__auto__);

(statearr_30575[(1)] = (1));

return statearr_30575;
});
var meigo_chatbot$core$history_panel_$_state_machine__28287__auto____1 = (function (state_30568){
while(true){
var ret_value__28288__auto__ = (function (){try{while(true){
var result__28289__auto__ = switch__28286__auto__.call(null,state_30568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28289__auto__;
}
break;
}
}catch (e30576){if((e30576 instanceof Object)){
var ex__28290__auto__ = e30576;
var statearr_30577_30621 = state_30568;
(statearr_30577_30621[(5)] = ex__28290__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30622 = state_30568;
state_30568 = G__30622;
continue;
} else {
return ret_value__28288__auto__;
}
break;
}
});
meigo_chatbot$core$history_panel_$_state_machine__28287__auto__ = function(state_30568){
switch(arguments.length){
case 0:
return meigo_chatbot$core$history_panel_$_state_machine__28287__auto____0.call(this);
case 1:
return meigo_chatbot$core$history_panel_$_state_machine__28287__auto____1.call(this,state_30568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
meigo_chatbot$core$history_panel_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$0 = meigo_chatbot$core$history_panel_$_state_machine__28287__auto____0;
meigo_chatbot$core$history_panel_$_state_machine__28287__auto__.cljs$core$IFn$_invoke$arity$1 = meigo_chatbot$core$history_panel_$_state_machine__28287__auto____1;
return meigo_chatbot$core$history_panel_$_state_machine__28287__auto__;
})()
})();
var state__28311__auto__ = (function (){var statearr_30578 = f__28310__auto__.call(null);
(statearr_30578[(6)] = c__28309__auto__);

return statearr_30578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28311__auto__);
}));

return c__28309__auto__;
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
cljs.core.println.call(null,"Rendering history panel, history:",cljs.core.deref.call(null,history),"error:",cljs.core.deref.call(null,error));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"1200px",new cljs.core.Keyword(null,"margin","margin",-995903681),"20px 40px",new cljs.core.Keyword(null,"padding","padding",1660304693),"24px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#ffffff",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),["0 8px 24px ",meigo_chatbot.core.border_light].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"20px",new cljs.core.Keyword(null,"color","color",1011675173),meigo_chatbot.core.text_dark], null)], null),"Hist\u00F3rico de Conversas"], null),(cljs.core.truth_(cljs.core.deref.call(null,error))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),cljs.core.deref.call(null,error)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,error,null);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),meigo_chatbot.core.green_primary,new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 16px",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"6px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),"Limpar erro"], null)], null):(((cljs.core.deref.call(null,history) == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Carregando hist\u00F3rico..."], null):((cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,history)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Nenhum hist\u00F3rico encontrado."], null):(function (){try{var grouped_data = meigo_chatbot.core.group_by_date.call(null,cljs.core.deref.call(null,history));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"16px",new cljs.core.Keyword(null,"color","color",1011675173),"#555"], null)], null),["Total de grupos por data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,grouped_data))].join('')], null),((cljs.core.empty_QMARK_.call(null,grouped_data))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Nenhuma mensagem v\u00E1lida encontrada."], null):(function (){var iter__4529__auto__ = (function meigo_chatbot$core$history_panel_$_iter__30580(s__30581){
return (new cljs.core.LazySeq(null,(function (){
var s__30581__$1 = s__30581;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__30581__$1);
if(temp__5720__auto__){
var s__30581__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30581__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__30581__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__30583 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__30582 = (0);
while(true){
if((i__30582 < size__4528__auto__)){
var vec__30584 = cljs.core._nth.call(null,c__4527__auto__,i__30582);
var date = cljs.core.nth.call(null,vec__30584,(0),null);
var msgs = cljs.core.nth.call(null,vec__30584,(1),null);
cljs.core.chunk_append.call(null,b__30583,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"28px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #eee",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px",new cljs.core.Keyword(null,"background-color","background-color",570434026),meigo_chatbot.core.gray_light,new cljs.core.Keyword(null,"padding","padding",1660304693),"16px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"12px",new cljs.core.Keyword(null,"color","color",1011675173),meigo_chatbot.core.gray_dark], null)], null),date], null),(function (){var iter__4529__auto__ = ((function (i__30582,vec__30584,date,msgs,c__4527__auto__,size__4528__auto__,b__30583,s__30581__$2,temp__5720__auto__,grouped_data,history,error){
return (function meigo_chatbot$core$history_panel_$_iter__30580_$_iter__30587(s__30588){
return (new cljs.core.LazySeq(null,((function (i__30582,vec__30584,date,msgs,c__4527__auto__,size__4528__auto__,b__30583,s__30581__$2,temp__5720__auto__,grouped_data,history,error){
return (function (){
var s__30588__$1 = s__30588;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__30588__$1);
if(temp__5720__auto____$1){
var s__30588__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30588__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first.call(null,s__30588__$2);
var size__4528__auto____$1 = cljs.core.count.call(null,c__4527__auto____$1);
var b__30590 = cljs.core.chunk_buffer.call(null,size__4528__auto____$1);
if((function (){var i__30589 = (0);
while(true){
if((i__30589 < size__4528__auto____$1)){
var vec__30591 = cljs.core._nth.call(null,c__4527__auto____$1,i__30589);
var idx = cljs.core.nth.call(null,vec__30591,(0),null);
var msg = cljs.core.nth.call(null,vec__30591,(1),null);
cljs.core.chunk_append.call(null,b__30590,(function (){var map__30594 = msg;
var map__30594__$1 = (((((!((map__30594 == null))))?(((((map__30594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30594):map__30594);
var pergunta = cljs.core.get.call(null,map__30594__$1,new cljs.core.Keyword(null,"pergunta","pergunta",-1062497990));
var resposta = cljs.core.get.call(null,map__30594__$1,new cljs.core.Keyword(null,"resposta","resposta",-1517549719));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"14px",new cljs.core.Keyword(null,"padding","padding",1660304693),"12px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#ffffff",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 1px 3px rgba(0,0,0,0.05)"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 6px 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Q: "], null),(function (){var or__4126__auto__ = pergunta;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "[Pergunta ausente]";
}
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"A: "], null),(function (){var or__4126__auto__ = resposta;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "[Resposta ausente]";
}
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null));
})());

var G__30623 = (i__30589 + (1));
i__30589 = G__30623;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30590),meigo_chatbot$core$history_panel_$_iter__30580_$_iter__30587.call(null,cljs.core.chunk_rest.call(null,s__30588__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30590),null);
}
} else {
var vec__30596 = cljs.core.first.call(null,s__30588__$2);
var idx = cljs.core.nth.call(null,vec__30596,(0),null);
var msg = cljs.core.nth.call(null,vec__30596,(1),null);
return cljs.core.cons.call(null,(function (){var map__30599 = msg;
var map__30599__$1 = (((((!((map__30599 == null))))?(((((map__30599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30599):map__30599);
var pergunta = cljs.core.get.call(null,map__30599__$1,new cljs.core.Keyword(null,"pergunta","pergunta",-1062497990));
var resposta = cljs.core.get.call(null,map__30599__$1,new cljs.core.Keyword(null,"resposta","resposta",-1517549719));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"14px",new cljs.core.Keyword(null,"padding","padding",1660304693),"12px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#ffffff",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 1px 3px rgba(0,0,0,0.05)"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 6px 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Q: "], null),(function (){var or__4126__auto__ = pergunta;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "[Pergunta ausente]";
}
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"A: "], null),(function (){var or__4126__auto__ = resposta;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "[Resposta ausente]";
}
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null));
})(),meigo_chatbot$core$history_panel_$_iter__30580_$_iter__30587.call(null,cljs.core.rest.call(null,s__30588__$2)));
}
} else {
return null;
}
break;
}
});})(i__30582,vec__30584,date,msgs,c__4527__auto__,size__4528__auto__,b__30583,s__30581__$2,temp__5720__auto__,grouped_data,history,error))
,null,null));
});})(i__30582,vec__30584,date,msgs,c__4527__auto__,size__4528__auto__,b__30583,s__30581__$2,temp__5720__auto__,grouped_data,history,error))
;
return iter__4529__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,msgs));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),date], null)));

var G__30624 = (i__30582 + (1));
i__30582 = G__30624;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30583),meigo_chatbot$core$history_panel_$_iter__30580.call(null,cljs.core.chunk_rest.call(null,s__30581__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30583),null);
}
} else {
var vec__30601 = cljs.core.first.call(null,s__30581__$2);
var date = cljs.core.nth.call(null,vec__30601,(0),null);
var msgs = cljs.core.nth.call(null,vec__30601,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"28px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #eee",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px",new cljs.core.Keyword(null,"background-color","background-color",570434026),meigo_chatbot.core.gray_light,new cljs.core.Keyword(null,"padding","padding",1660304693),"16px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"12px",new cljs.core.Keyword(null,"color","color",1011675173),meigo_chatbot.core.gray_dark], null)], null),date], null),(function (){var iter__4529__auto__ = ((function (vec__30601,date,msgs,s__30581__$2,temp__5720__auto__,grouped_data,history,error){
return (function meigo_chatbot$core$history_panel_$_iter__30580_$_iter__30604(s__30605){
return (new cljs.core.LazySeq(null,(function (){
var s__30605__$1 = s__30605;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__30605__$1);
if(temp__5720__auto____$1){
var s__30605__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30605__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__30605__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__30607 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__30606 = (0);
while(true){
if((i__30606 < size__4528__auto__)){
var vec__30608 = cljs.core._nth.call(null,c__4527__auto__,i__30606);
var idx = cljs.core.nth.call(null,vec__30608,(0),null);
var msg = cljs.core.nth.call(null,vec__30608,(1),null);
cljs.core.chunk_append.call(null,b__30607,(function (){var map__30611 = msg;
var map__30611__$1 = (((((!((map__30611 == null))))?(((((map__30611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30611):map__30611);
var pergunta = cljs.core.get.call(null,map__30611__$1,new cljs.core.Keyword(null,"pergunta","pergunta",-1062497990));
var resposta = cljs.core.get.call(null,map__30611__$1,new cljs.core.Keyword(null,"resposta","resposta",-1517549719));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"14px",new cljs.core.Keyword(null,"padding","padding",1660304693),"12px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#ffffff",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 1px 3px rgba(0,0,0,0.05)"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 6px 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Q: "], null),(function (){var or__4126__auto__ = pergunta;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "[Pergunta ausente]";
}
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"A: "], null),(function (){var or__4126__auto__ = resposta;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "[Resposta ausente]";
}
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null));
})());

var G__30625 = (i__30606 + (1));
i__30606 = G__30625;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30607),meigo_chatbot$core$history_panel_$_iter__30580_$_iter__30604.call(null,cljs.core.chunk_rest.call(null,s__30605__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30607),null);
}
} else {
var vec__30613 = cljs.core.first.call(null,s__30605__$2);
var idx = cljs.core.nth.call(null,vec__30613,(0),null);
var msg = cljs.core.nth.call(null,vec__30613,(1),null);
return cljs.core.cons.call(null,(function (){var map__30616 = msg;
var map__30616__$1 = (((((!((map__30616 == null))))?(((((map__30616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30616):map__30616);
var pergunta = cljs.core.get.call(null,map__30616__$1,new cljs.core.Keyword(null,"pergunta","pergunta",-1062497990));
var resposta = cljs.core.get.call(null,map__30616__$1,new cljs.core.Keyword(null,"resposta","resposta",-1517549719));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"14px",new cljs.core.Keyword(null,"padding","padding",1660304693),"12px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#ffffff",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 1px 3px rgba(0,0,0,0.05)"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 6px 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Q: "], null),(function (){var or__4126__auto__ = pergunta;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "[Pergunta ausente]";
}
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"A: "], null),(function (){var or__4126__auto__ = resposta;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "[Resposta ausente]";
}
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null));
})(),meigo_chatbot$core$history_panel_$_iter__30580_$_iter__30604.call(null,cljs.core.rest.call(null,s__30605__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__30601,date,msgs,s__30581__$2,temp__5720__auto__,grouped_data,history,error))
;
return iter__4529__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,msgs));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),date], null)),meigo_chatbot$core$history_panel_$_iter__30580.call(null,cljs.core.rest.call(null,s__30581__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,grouped_data);
})())], null);
}catch (e30579){var e = e30579;
cljs.core.println.call(null,"Render error:",e);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),"Erro ao renderizar hist\u00F3rico"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)], null)], null);
}})()
))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"24px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),meigo_chatbot.core.gray_dark], null)], null),"Mostrar informa\u00E7\u00F5es de debug"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"background","background",-863952629),"#f5f5f5",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"pre-wrap"], null)], null),["History atom: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,history)),"\n","Error atom: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,error))].join('')], null)], null)], null);
})], null));
});
meigo_chatbot.core.top_bar_height = "70px";
meigo_chatbot.core.main_panel = (function meigo_chatbot$core$main_panel(){
var sidebar_visible_QMARK_ = cljs.core.deref.call(null,meigo_chatbot.config.sidebar_visible_QMARK_);
var authenticated_QMARK_ = cljs.core.deref.call(null,meigo_chatbot.config.authenticated_QMARK_);
if(cljs.core.truth_(authenticated_QMARK_)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"100vh",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f5f7fa"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meigo_chatbot.core.top_bar], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"50px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(sidebar_visible_QMARK_)?"240px":"0px"),new cljs.core.Keyword(null,"transition","transition",765692007),"width 0.3s ease",new cljs.core.Keyword(null,"overflow","overflow",2058931880),(cljs.core.truth_(sidebar_visible_QMARK_)?"auto":"hidden"),new cljs.core.Keyword(null,"background-color","background-color",570434026),"#d9f3f0",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),(cljs.core.truth_(sidebar_visible_QMARK_)?"0 2px 4px rgba(0,0,0,0.1)":null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meigo_chatbot.sidebar.sidebar], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"padding","padding",1660304693),"40px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"1200px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto",new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),(function (){var current_section = new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,meigo_chatbot.config.state));
var G__30626 = current_section;
switch (G__30626) {
case "chat":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meigo_chatbot.core.chatbot_panel], null);

break;
case "history":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meigo_chatbot.core.history_panel], null);

break;
case "history-graphs":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meigo_chatbot.graphs.history_graphs_panel], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meigo_chatbot.core.chatbot_panel], null);

}
})()], null)], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meigo_chatbot.auth.auth_form], null);
}
});
meigo_chatbot.core.root_panel = (function meigo_chatbot$core$root_panel(){
if(cljs.core.truth_(cljs.core.deref.call(null,meigo_chatbot.config.checking_auth_QMARK_))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meigo_chatbot.core.loading_screen], null);
} else {
if(cljs.core.truth_(cljs.core.deref.call(null,meigo_chatbot.config.authenticated_QMARK_))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meigo_chatbot.core.main_panel], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meigo_chatbot.auth.auth_form], null);

}
}
});
meigo_chatbot.core.mount_root = (function meigo_chatbot$core$mount_root(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meigo_chatbot.core.root_panel], null),document.getElementById("app"));
});
meigo_chatbot.core.init = (function meigo_chatbot$core$init(){
meigo_chatbot.auth.check_auth_status.call(null);

(document.body.style.margin = "0");

(document.body.style.backgroundColor = "#f5f5f5");

return meigo_chatbot.core.mount_root.call(null);
});
goog.exportSymbol('meigo_chatbot.core.init', meigo_chatbot.core.init);
meigo_chatbot.core.init.call(null);

//# sourceMappingURL=core.js.map?rel=1748984665771
