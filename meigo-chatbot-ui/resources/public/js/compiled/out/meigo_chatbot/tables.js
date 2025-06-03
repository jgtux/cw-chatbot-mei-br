// Compiled by ClojureScript 1.10.773 {}
goog.provide('meigo_chatbot.tables');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('meigo_chatbot.config');
goog.require('meigo_chatbot.auth');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
meigo_chatbot.tables.generic_table = (function meigo_chatbot$tables$generic_table(columns,data){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Pesquisar",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"search-query","search-query",-1077556709).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,meigo_chatbot.config.state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__28818_SHARP_){
return cljs.core.swap_BANG_.call(null,meigo_chatbot.config.state,cljs.core.assoc,new cljs.core.Keyword(null,"search-query","search-query",-1077556709),p1__28818_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"search-key","search-key",-655412548).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,meigo_chatbot.config.state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__28819_SHARP_){
return cljs.core.swap_BANG_.call(null,meigo_chatbot.config.state,cljs.core.assoc,new cljs.core.Keyword(null,"search-key","search-key",-655412548),p1__28819_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"name"], null),"Nome"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"cpf"], null),"CPF"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"cnpj"], null),"CNPJ"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),meigo_chatbot.tables.fetch_data], null),"Pesquisar"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4529__auto__ = (function meigo_chatbot$tables$generic_table_$_iter__28820(s__28821){
return (new cljs.core.LazySeq(null,(function (){
var s__28821__$1 = s__28821;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__28821__$1);
if(temp__5720__auto__){
var s__28821__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28821__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__28821__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__28823 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__28822 = (0);
while(true){
if((i__28822 < size__4528__auto__)){
var col = cljs.core._nth.call(null,c__4527__auto__,i__28822);
cljs.core.chunk_append.call(null,b__28823,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(col)], null));

var G__28842 = (i__28822 + (1));
i__28822 = G__28842;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28823),meigo_chatbot$tables$generic_table_$_iter__28820.call(null,cljs.core.chunk_rest.call(null,s__28821__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28823),null);
}
} else {
var col = cljs.core.first.call(null,s__28821__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(col)], null),meigo_chatbot$tables$generic_table_$_iter__28820.call(null,cljs.core.rest.call(null,s__28821__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,columns);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4529__auto__ = (function meigo_chatbot$tables$generic_table_$_iter__28824(s__28825){
return (new cljs.core.LazySeq(null,(function (){
var s__28825__$1 = s__28825;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__28825__$1);
if(temp__5720__auto__){
var s__28825__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28825__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__28825__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__28827 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__28826 = (0);
while(true){
if((i__28826 < size__4528__auto__)){
var vec__28828 = cljs.core._nth.call(null,c__4527__auto__,i__28826);
var idx = cljs.core.nth.call(null,vec__28828,(0),null);
var item = cljs.core.nth.call(null,vec__28828,(1),null);
cljs.core.chunk_append.call(null,b__28827,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__28826,vec__28828,idx,item,c__4527__auto__,size__4528__auto__,b__28827,s__28825__$2,temp__5720__auto__){
return (function (){
cljs.core.reset_BANG_.call(null,meigo_chatbot.config.selected_item,item);

return cljs.core.reset_BANG_.call(null,meigo_chatbot.config.modal_visible_QMARK_,true);
});})(i__28826,vec__28828,idx,item,c__4527__auto__,size__4528__auto__,b__28827,s__28825__$2,temp__5720__auto__))
], null),(function (){var iter__4529__auto__ = ((function (i__28826,vec__28828,idx,item,c__4527__auto__,size__4528__auto__,b__28827,s__28825__$2,temp__5720__auto__){
return (function meigo_chatbot$tables$generic_table_$_iter__28824_$_iter__28831(s__28832){
return (new cljs.core.LazySeq(null,((function (i__28826,vec__28828,idx,item,c__4527__auto__,size__4528__auto__,b__28827,s__28825__$2,temp__5720__auto__){
return (function (){
var s__28832__$1 = s__28832;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__28832__$1);
if(temp__5720__auto____$1){
var s__28832__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28832__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first.call(null,s__28832__$2);
var size__4528__auto____$1 = cljs.core.count.call(null,c__4527__auto____$1);
var b__28834 = cljs.core.chunk_buffer.call(null,size__4528__auto____$1);
if((function (){var i__28833 = (0);
while(true){
if((i__28833 < size__4528__auto____$1)){
var col = cljs.core._nth.call(null,c__4527__auto____$1,i__28833);
cljs.core.chunk_append.call(null,b__28834,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null),cljs.core.get.call(null,item,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col))], null));

var G__28843 = (i__28833 + (1));
i__28833 = G__28843;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28834),meigo_chatbot$tables$generic_table_$_iter__28824_$_iter__28831.call(null,cljs.core.chunk_rest.call(null,s__28832__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28834),null);
}
} else {
var col = cljs.core.first.call(null,s__28832__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null),cljs.core.get.call(null,item,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col))], null),meigo_chatbot$tables$generic_table_$_iter__28824_$_iter__28831.call(null,cljs.core.rest.call(null,s__28832__$2)));
}
} else {
return null;
}
break;
}
});})(i__28826,vec__28828,idx,item,c__4527__auto__,size__4528__auto__,b__28827,s__28825__$2,temp__5720__auto__))
,null,null));
});})(i__28826,vec__28828,idx,item,c__4527__auto__,size__4528__auto__,b__28827,s__28825__$2,temp__5720__auto__))
;
return iter__4529__auto__.call(null,columns);
})()], null));

var G__28844 = (i__28826 + (1));
i__28826 = G__28844;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28827),meigo_chatbot$tables$generic_table_$_iter__28824.call(null,cljs.core.chunk_rest.call(null,s__28825__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28827),null);
}
} else {
var vec__28835 = cljs.core.first.call(null,s__28825__$2);
var idx = cljs.core.nth.call(null,vec__28835,(0),null);
var item = cljs.core.nth.call(null,vec__28835,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__28835,idx,item,s__28825__$2,temp__5720__auto__){
return (function (){
cljs.core.reset_BANG_.call(null,meigo_chatbot.config.selected_item,item);

return cljs.core.reset_BANG_.call(null,meigo_chatbot.config.modal_visible_QMARK_,true);
});})(vec__28835,idx,item,s__28825__$2,temp__5720__auto__))
], null),(function (){var iter__4529__auto__ = ((function (vec__28835,idx,item,s__28825__$2,temp__5720__auto__){
return (function meigo_chatbot$tables$generic_table_$_iter__28824_$_iter__28838(s__28839){
return (new cljs.core.LazySeq(null,(function (){
var s__28839__$1 = s__28839;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__28839__$1);
if(temp__5720__auto____$1){
var s__28839__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28839__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__28839__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__28841 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__28840 = (0);
while(true){
if((i__28840 < size__4528__auto__)){
var col = cljs.core._nth.call(null,c__4527__auto__,i__28840);
cljs.core.chunk_append.call(null,b__28841,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null),cljs.core.get.call(null,item,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col))], null));

var G__28845 = (i__28840 + (1));
i__28840 = G__28845;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28841),meigo_chatbot$tables$generic_table_$_iter__28824_$_iter__28838.call(null,cljs.core.chunk_rest.call(null,s__28839__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28841),null);
}
} else {
var col = cljs.core.first.call(null,s__28839__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null),cljs.core.get.call(null,item,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col))], null),meigo_chatbot$tables$generic_table_$_iter__28824_$_iter__28838.call(null,cljs.core.rest.call(null,s__28839__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__28835,idx,item,s__28825__$2,temp__5720__auto__))
;
return iter__4529__auto__.call(null,columns);
})()], null),meigo_chatbot$tables$generic_table_$_iter__28824.call(null,cljs.core.rest.call(null,s__28825__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,data));
})()], null)], null),(function (){var current_page = new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,meigo_chatbot.config.state));
var page_size = new cljs.core.Keyword(null,"page-size","page-size",223836073).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,meigo_chatbot.config.state));
var total_pages = (Math.ceil((cljs.core.count.call(null,data) / page_size)) | (0));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pagination","div.pagination",-776363526),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(current_page <= (1)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.call(null,meigo_chatbot.config.state,cljs.core.update,new cljs.core.Keyword(null,"current-page","current-page",-101294180),cljs.core.dec);

return meigo_chatbot.tables.fetch_data.call(null);
})], null),"Antes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Pag. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_page)," de ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_pages)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(current_page >= total_pages),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.call(null,meigo_chatbot.config.state,cljs.core.update,new cljs.core.Keyword(null,"current-page","current-page",-101294180),cljs.core.inc);

return meigo_chatbot.tables.fetch_data.call(null);
})], null),"Depois"], null)], null);
})()], null);
});

//# sourceMappingURL=tables.js.map?rel=1748914505201
