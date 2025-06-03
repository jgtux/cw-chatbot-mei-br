// Compiled by ClojureScript 1.10.773 {}
goog.provide('shopping_admin_front_v2.chatbot');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
if((typeof shopping_admin_front_v2 !== 'undefined') && (typeof shopping_admin_front_v2.chatbot !== 'undefined') && (typeof shopping_admin_front_v2.chatbot.chatbot_state !== 'undefined')){
} else {
shopping_admin_front_v2.chatbot.chatbot_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),""], null));
}
shopping_admin_front_v2.chatbot.bot_reply = (function shopping_admin_front_v2$chatbot$bot_reply(user_msg){
return setTimeout((function (){
return cljs.core.swap_BANG_.call(null,shopping_admin_front_v2.chatbot.chatbot_state,cljs.core.update,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"bot","bot",-950896508),new cljs.core.Keyword(null,"text","text",-1790561697),["Bot: You said \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(user_msg),"\""].join('')], null));
}),(1000));
});
shopping_admin_front_v2.chatbot.send_message = (function shopping_admin_front_v2$chatbot$send_message(){
var msg = clojure.string.trim.call(null,new cljs.core.Keyword(null,"input-text","input-text",-1336297114).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,shopping_admin_front_v2.chatbot.chatbot_state)));
if((!(clojure.string.blank_QMARK_.call(null,msg)))){
cljs.core.swap_BANG_.call(null,shopping_admin_front_v2.chatbot.chatbot_state,cljs.core.update,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"text","text",-1790561697),msg], null));

cljs.core.swap_BANG_.call(null,shopping_admin_front_v2.chatbot.chatbot_state,cljs.core.assoc,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"");

return shopping_admin_front_v2.chatbot.bot_reply.call(null,msg);
} else {
return null;
}
});
shopping_admin_front_v2.chatbot.chat_message = (function shopping_admin_front_v2$chatbot$chat_message(p__21419){
var map__21420 = p__21419;
var map__21420__$1 = (((((!((map__21420 == null))))?(((((map__21420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21420):map__21420);
var from = cljs.core.get.call(null,map__21420__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var text = cljs.core.get.call(null,map__21420__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),((cljs.core._EQ_.call(null,from,new cljs.core.Keyword(null,"user","user",1532431356)))?"right":"left"),new cljs.core.Keyword(null,"margin","margin",-995903681),"5px 0"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px 10px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"background-color","background-color",570434026),((cljs.core._EQ_.call(null,from,new cljs.core.Keyword(null,"user","user",1532431356)))?"#a2d2ff":"#ccc")], null)], null),text], null)], null);
});
shopping_admin_front_v2.chatbot.chatbot_panel = (function shopping_admin_front_v2$chatbot$chatbot_panel(){
var input_text = reagent.core.cursor.call(null,shopping_admin_front_v2.chatbot.chatbot_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
var messages = reagent.core.cursor.call(null,shopping_admin_front_v2.chatbot.chatbot_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messages","messages",345434482)], null));
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #aaa",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"350px",new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f9f9f9"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"5px"], null)], null),(function (){var iter__4529__auto__ = (function shopping_admin_front_v2$chatbot$chatbot_panel_$_iter__21424(s__21425){
return (new cljs.core.LazySeq(null,(function (){
var s__21425__$1 = s__21425;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__21425__$1);
if(temp__5720__auto__){
var s__21425__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21425__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__21425__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__21427 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__21426 = (0);
while(true){
if((i__21426 < size__4528__auto__)){
var vec__21428 = cljs.core._nth.call(null,c__4527__auto__,i__21426);
var idx = cljs.core.nth.call(null,vec__21428,(0),null);
var msg = cljs.core.nth.call(null,vec__21428,(1),null);
cljs.core.chunk_append.call(null,b__21427,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shopping_admin_front_v2.chatbot.chat_message,msg], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__21434 = (i__21426 + (1));
i__21426 = G__21434;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21427),shopping_admin_front_v2$chatbot$chatbot_panel_$_iter__21424.call(null,cljs.core.chunk_rest.call(null,s__21425__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21427),null);
}
} else {
var vec__21431 = cljs.core.first.call(null,s__21425__$2);
var idx = cljs.core.nth.call(null,vec__21431,(0),null);
var msg = cljs.core.nth.call(null,vec__21431,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shopping_admin_front_v2.chatbot.chat_message,msg], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),shopping_admin_front_v2$chatbot$chatbot_panel_$_iter__21424.call(null,cljs.core.rest.call(null,s__21425__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.deref.call(null,messages)));
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,input_text),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Say something...",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"padding","padding",1660304693),"8px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ccc"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__21422_SHARP_){
return cljs.core.reset_BANG_.call(null,input_text,p1__21422_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__21423_SHARP_){
if(cljs.core._EQ_.call(null,p1__21423_SHARP_.key,"Enter")){
return shopping_admin_front_v2.chatbot.send_message.call(null);
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"8px",new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 12px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),shopping_admin_front_v2.chatbot.send_message], null),"Send"], null)], null)], null);
});
});

//# sourceMappingURL=chatbot.js.map?rel=1748865371744
