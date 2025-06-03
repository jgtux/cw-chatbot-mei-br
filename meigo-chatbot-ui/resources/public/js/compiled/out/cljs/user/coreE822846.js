// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.user.coreE822846');
goog.require('cljs.core');
goog.provide('shopping_admin_front_v2.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('cljs_http.client');
goog.require('clojure.string');
if((typeof shopping_admin_front_v2 !== 'undefined') && (typeof shopping_admin_front_v2.core !== 'undefined') && (typeof shopping_admin_front_v2.core.state !== 'undefined')){
} else {
shopping_admin_front_v2.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"search-query","search-query",-1077556709),"",new cljs.core.Keyword(null,"current-page","current-page",-101294180),(1),new cljs.core.Keyword(null,"page-size","page-size",223836073),(10),new cljs.core.Keyword(null,"list-type","list-type",-1245917502),"shoppings"], null));
}
if((typeof shopping_admin_front_v2 !== 'undefined') && (typeof shopping_admin_front_v2.core !== 'undefined') && (typeof shopping_admin_front_v2.core.sidebar_visible_QMARK_ !== 'undefined')){
} else {
shopping_admin_front_v2.core.sidebar_visible_QMARK_ = reagent.core.atom.call(null,null);
}
if((typeof shopping_admin_front_v2 !== 'undefined') && (typeof shopping_admin_front_v2.core !== 'undefined') && (typeof shopping_admin_front_v2.core.selected_item !== 'undefined')){
} else {
shopping_admin_front_v2.core.selected_item = reagent.core.atom.call(null,null);
}
if((typeof shopping_admin_front_v2 !== 'undefined') && (typeof shopping_admin_front_v2.core !== 'undefined') && (typeof shopping_admin_front_v2.core.modal_visible_QMARK_ !== 'undefined')){
} else {
shopping_admin_front_v2.core.modal_visible_QMARK_ = reagent.core.atom.call(null,false);
}
if((typeof shopping_admin_front_v2 !== 'undefined') && (typeof shopping_admin_front_v2.core !== 'undefined') && (typeof shopping_admin_front_v2.core.edit_mode_QMARK_ !== 'undefined')){
} else {
shopping_admin_front_v2.core.edit_mode_QMARK_ = reagent.core.atom.call(null,false);
}
shopping_admin_front_v2.core.api_endpoints = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shoppings","shoppings",2007379970),"/api/shoppings",new cljs.core.Keyword(null,"lojas","lojas",-1844075508),"/api/lojas",new cljs.core.Keyword(null,"pedidos","pedidos",-805837908),"/api/pedidos",new cljs.core.Keyword(null,"clientes","clientes",-2011249991),"/api/clientes"], null);
shopping_admin_front_v2.core.parse_int = (function shopping_admin_front_v2$core$parse_int(s){
try{return Integer.parseInt(s);
}catch (e32055){if((e32055 instanceof shopping_admin_front_v2.core.NumberFormatException)){
var _ = e32055;
return (0);
} else {
throw e32055;

}
}});
shopping_admin_front_v2.core.fetch_data = (function shopping_admin_front_v2$core$fetch_data(){
var params = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"list-type","list-type",-1245917502),new cljs.core.Keyword(null,"list-type","list-type",-1245917502).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,shopping_admin_front_v2.core.state)),new cljs.core.Keyword(null,"search-query","search-query",-1077556709),new cljs.core.Keyword(null,"search-query","search-query",-1077556709).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,shopping_admin_front_v2.core.state)),new cljs.core.Keyword(null,"page-size","page-size",223836073),shopping_admin_front_v2.core.parse_int.call(null,new cljs.core.Keyword(null,"page-size","page-size",223836073).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,shopping_admin_front_v2.core.state))),new cljs.core.Keyword(null,"offset","offset",296498311),(shopping_admin_front_v2.core.parse_int.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,shopping_admin_front_v2.core.state))) * shopping_admin_front_v2.core.parse_int.call(null,new cljs.core.Keyword(null,"page-size","page-size",223836073).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,shopping_admin_front_v2.core.state))))], null);
var url = cljs.core.get.call(null,shopping_admin_front_v2.core.api_endpoints,new cljs.core.Keyword(null,"list-type","list-type",-1245917502).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,shopping_admin_front_v2.core.state)),"/api/default");
console.log("Request params:",params);

return cljs_http.client.get.call(null,url,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return cljs.core.swap_BANG_.call(null,shopping_admin_front_v2.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(response));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (error){
return console.error("Error fetching data:",error);
})], null));
});
shopping_admin_front_v2.core.get_columns = (function shopping_admin_front_v2$core$get_columns(list_type){
var G__32056 = list_type;
switch (G__32056) {
case "shoppings":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"UUID",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uuid","uuid",-2145095719)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"NOME",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"nome","nome",1100401122)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"CPNJ",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"cpnj","cpnj",-1467474381)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"STATUS",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"status","status",-1997798413)], null)], null);

break;
case "lojas":
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"UUID",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uuid","uuid",-2145095719)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"NOME",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"Nome","Nome",-1369420542)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"CPNJ",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"cpnj","cpnj",-1467474381)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"SHOPPING",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"shopping","shopping",1440692574)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"STATUS",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"status","status",-1997798413)], null)], null);

break;
case "pedidos":
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"UUID",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uuid","uuid",-2145095719)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"NOME",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"nome","nome",1100401122)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"VALOR",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"valor","valor",-957162173)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"STATUS",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"FEITO EM",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"made_at","made_at",472285469)], null)], null);

break;
case "clientes":
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"UUID",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uuid","uuid",-2145095719)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"NOME",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"nome","nome",1100401122)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"CPF",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"cpf","cpf",916156833)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"EMAIL",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"email","email",1415816706)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"TELEFONE",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"tel","tel",224138159)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"STATUS",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"CRIADO EM",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"created_at","created_at",1484050750)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"ATUALIZADO EM",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"updated_at","updated_at",-460224592)], null)], null);

break;
default:
return cljs.core.PersistentVector.EMPTY;

}
});
if((typeof shopping_admin_front_v2 !== 'undefined') && (typeof shopping_admin_front_v2.core !== 'undefined') && (typeof shopping_admin_front_v2.core.editable_fields !== 'undefined')){
} else {
shopping_admin_front_v2.core.editable_fields = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shoppings","shoppings",2007379970),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nome","nome",1100401122),new cljs.core.Keyword(null,"cpnj","cpnj",-1467474381),new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"lojas","lojas",-1844075508),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nome","nome",1100401122),new cljs.core.Keyword(null,"cpnj","cpnj",-1467474381),new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"pedidos","pedidos",-805837908),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nome","nome",1100401122),new cljs.core.Keyword(null,"valor","valor",-957162173),new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"clientes","clientes",-2011249991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nome","nome",1100401122),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"tel","tel",224138159)], null)], null);
}
shopping_admin_front_v2.core.toggle_button_edit = (function shopping_admin_front_v2$core$toggle_button_edit(){
return cljs.core.swap_BANG_.call(null,shopping_admin_front_v2.core.edit_mode_QMARK_,cljs.core.not);
});
shopping_admin_front_v2.core.close_modal = (function shopping_admin_front_v2$core$close_modal(){
cljs.core.reset_BANG_.call(null,shopping_admin_front_v2.core.modal_visible_QMARK_,false);

cljs.core.reset_BANG_.call(null,shopping_admin_front_v2.core.selected_item,null);

return cljs.core.reset_BANG_.call(null,shopping_admin_front_v2.core.edit_mode_QMARK_,false);
});
shopping_admin_front_v2.core.save_item = (function shopping_admin_front_v2$core$save_item(){
return shopping_admin_front_v2.core.close_modal.call(null);
});
shopping_admin_front_v2.core.modal_panel = (function shopping_admin_front_v2$core$modal_panel(){
if(cljs.core.truth_(cljs.core.deref.call(null,shopping_admin_front_v2.core.modal_visible_QMARK_))){
var item = cljs.core.deref.call(null,shopping_admin_front_v2.core.selected_item);
var sector = cljs.core.keyword.call(null,new cljs.core.Keyword(null,"list-type","list-type",-1245917502).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,shopping_admin_front_v2.core.state)));
var editable_keys = cljs.core.get.call(null,shopping_admin_front_v2.core.editable_fields,sector,cljs.core.PersistentVector.EMPTY);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal","div.modal",-610985484),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_(cljs.core.deref.call(null,shopping_admin_front_v2.core.modal_visible_QMARK_))?"block":"none")], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-content","div.modal-content",-83470844),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.close","span.close",-217177185),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),shopping_admin_front_v2.core.close_modal], null),"X"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),(cljs.core.truth_(cljs.core.deref.call(null,shopping_admin_front_v2.core.edit_mode_QMARK_))?"Edit Item":"Item Details")], null),(function (){var iter__4529__auto__ = (function shopping_admin_front_v2$core$modal_panel_$_iter__32059(s__32060){
return (new cljs.core.LazySeq(null,(function (){
var s__32060__$1 = s__32060;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__32060__$1);
if(temp__5720__auto__){
var s__32060__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32060__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__32060__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__32062 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__32061 = (0);
while(true){
if((i__32061 < size__4528__auto__)){
var key = cljs.core._nth.call(null,c__4527__auto__,i__32061);
cljs.core.chunk_append.call(null,b__32062,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),[clojure.string.capitalize.call(null,cljs.core.name.call(null,key)),":"].join('')], null),(cljs.core.truth_(cljs.core.deref.call(null,shopping_admin_front_v2.core.edit_mode_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,item,key),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__32061,key,c__4527__auto__,size__4528__auto__,b__32062,s__32060__$2,temp__5720__auto__,item,sector,editable_keys){
return (function (p1__32058_SHARP_){
return cljs.core.swap_BANG_.call(null,shopping_admin_front_v2.core.selected_item,cljs.core.assoc,key,p1__32058_SHARP_.target.value());
});})(i__32061,key,c__4527__auto__,size__4528__auto__,b__32062,s__32060__$2,temp__5720__auto__,item,sector,editable_keys))
], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.get.call(null,item,key)], null))], null));

var G__32063 = (i__32061 + (1));
i__32061 = G__32063;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32062),shopping_admin_front_v2$core$modal_panel_$_iter__32059.call(null,cljs.core.chunk_rest.call(null,s__32060__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32062),null);
}
} else {
var key = cljs.core.first.call(null,s__32060__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),[clojure.string.capitalize.call(null,cljs.core.name.call(null,key)),":"].join('')], null),(cljs.core.truth_(cljs.core.deref.call(null,shopping_admin_front_v2.core.edit_mode_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,item,key),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (key,s__32060__$2,temp__5720__auto__,item,sector,editable_keys){
return (function (p1__32058_SHARP_){
return cljs.core.swap_BANG_.call(null,shopping_admin_front_v2.core.selected_item,cljs.core.assoc,key,p1__32058_SHARP_.target.value());
});})(key,s__32060__$2,temp__5720__auto__,item,sector,editable_keys))
], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.get.call(null,item,key)], null))], null),shopping_admin_front_v2$core$modal_panel_$_iter__32059.call(null,cljs.core.rest.call(null,s__32060__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,editable_keys);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(cljs.core.deref.call(null,shopping_admin_front_v2.core.edit_mode_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),shopping_admin_front_v2.core.save_item], null),"Save"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onclick","onclick",1297553739),shopping_admin_front_v2.core.toggle_button_edit], null),"Edit"], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),shopping_admin_front_v2.core.close_modal], null),"Cancel"], null)], null)], null);
} else {
return null;
}
});
shopping_admin_front_v2.core.generic_table = (function shopping_admin_front_v2$core$generic_table(columns,data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4529__auto__ = (function shopping_admin_front_v2$core$generic_table_$_iter__32064(s__32065){
return (new cljs.core.LazySeq(null,(function (){
var s__32065__$1 = s__32065;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__32065__$1);
if(temp__5720__auto__){
var s__32065__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32065__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__32065__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__32067 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__32066 = (0);
while(true){
if((i__32066 < size__4528__auto__)){
var col = cljs.core._nth.call(null,c__4527__auto__,i__32066);
cljs.core.chunk_append.call(null,b__32067,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(col)], null));

var G__32080 = (i__32066 + (1));
i__32066 = G__32080;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32067),shopping_admin_front_v2$core$generic_table_$_iter__32064.call(null,cljs.core.chunk_rest.call(null,s__32065__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32067),null);
}
} else {
var col = cljs.core.first.call(null,s__32065__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(col)], null),shopping_admin_front_v2$core$generic_table_$_iter__32064.call(null,cljs.core.rest.call(null,s__32065__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,columns);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4529__auto__ = (function shopping_admin_front_v2$core$generic_table_$_iter__32068(s__32069){
return (new cljs.core.LazySeq(null,(function (){
var s__32069__$1 = s__32069;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__32069__$1);
if(temp__5720__auto__){
var s__32069__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32069__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__32069__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__32071 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__32070 = (0);
while(true){
if((i__32070 < size__4528__auto__)){
var item = cljs.core._nth.call(null,c__4527__auto__,i__32070);
cljs.core.chunk_append.call(null,b__32071,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__32070,item,c__4527__auto__,size__4528__auto__,b__32071,s__32069__$2,temp__5720__auto__){
return (function (){
cljs.core.reset_BANG_.call(null,shopping_admin_front_v2.core.selected_item,item);

return cljs.core.reset_BANG_.call(null,shopping_admin_front_v2.core.modal_visible_QMARK_,true);
});})(i__32070,item,c__4527__auto__,size__4528__auto__,b__32071,s__32069__$2,temp__5720__auto__))
], null),(function (){var iter__4529__auto__ = ((function (i__32070,item,c__4527__auto__,size__4528__auto__,b__32071,s__32069__$2,temp__5720__auto__){
return (function shopping_admin_front_v2$core$generic_table_$_iter__32068_$_iter__32072(s__32073){
return (new cljs.core.LazySeq(null,((function (i__32070,item,c__4527__auto__,size__4528__auto__,b__32071,s__32069__$2,temp__5720__auto__){
return (function (){
var s__32073__$1 = s__32073;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__32073__$1);
if(temp__5720__auto____$1){
var s__32073__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32073__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first.call(null,s__32073__$2);
var size__4528__auto____$1 = cljs.core.count.call(null,c__4527__auto____$1);
var b__32075 = cljs.core.chunk_buffer.call(null,size__4528__auto____$1);
if((function (){var i__32074 = (0);
while(true){
if((i__32074 < size__4528__auto____$1)){
var col = cljs.core._nth.call(null,c__4527__auto____$1,i__32074);
cljs.core.chunk_append.call(null,b__32075,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(item))].join('')], null),cljs.core.get.call(null,item,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col))], null));

var G__32081 = (i__32074 + (1));
i__32074 = G__32081;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32075),shopping_admin_front_v2$core$generic_table_$_iter__32068_$_iter__32072.call(null,cljs.core.chunk_rest.call(null,s__32073__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32075),null);
}
} else {
var col = cljs.core.first.call(null,s__32073__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(item))].join('')], null),cljs.core.get.call(null,item,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col))], null),shopping_admin_front_v2$core$generic_table_$_iter__32068_$_iter__32072.call(null,cljs.core.rest.call(null,s__32073__$2)));
}
} else {
return null;
}
break;
}
});})(i__32070,item,c__4527__auto__,size__4528__auto__,b__32071,s__32069__$2,temp__5720__auto__))
,null,null));
});})(i__32070,item,c__4527__auto__,size__4528__auto__,b__32071,s__32069__$2,temp__5720__auto__))
;
return iter__4529__auto__.call(null,columns);
})()], null));

var G__32082 = (i__32070 + (1));
i__32070 = G__32082;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32071),shopping_admin_front_v2$core$generic_table_$_iter__32068.call(null,cljs.core.chunk_rest.call(null,s__32069__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32071),null);
}
} else {
var item = cljs.core.first.call(null,s__32069__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__32069__$2,temp__5720__auto__){
return (function (){
cljs.core.reset_BANG_.call(null,shopping_admin_front_v2.core.selected_item,item);

return cljs.core.reset_BANG_.call(null,shopping_admin_front_v2.core.modal_visible_QMARK_,true);
});})(item,s__32069__$2,temp__5720__auto__))
], null),(function (){var iter__4529__auto__ = ((function (item,s__32069__$2,temp__5720__auto__){
return (function shopping_admin_front_v2$core$generic_table_$_iter__32068_$_iter__32076(s__32077){
return (new cljs.core.LazySeq(null,(function (){
var s__32077__$1 = s__32077;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__32077__$1);
if(temp__5720__auto____$1){
var s__32077__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32077__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__32077__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__32079 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__32078 = (0);
while(true){
if((i__32078 < size__4528__auto__)){
var col = cljs.core._nth.call(null,c__4527__auto__,i__32078);
cljs.core.chunk_append.call(null,b__32079,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(item))].join('')], null),cljs.core.get.call(null,item,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col))], null));

var G__32083 = (i__32078 + (1));
i__32078 = G__32083;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32079),shopping_admin_front_v2$core$generic_table_$_iter__32068_$_iter__32076.call(null,cljs.core.chunk_rest.call(null,s__32077__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32079),null);
}
} else {
var col = cljs.core.first.call(null,s__32077__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(item))].join('')], null),cljs.core.get.call(null,item,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(col))], null),shopping_admin_front_v2$core$generic_table_$_iter__32068_$_iter__32076.call(null,cljs.core.rest.call(null,s__32077__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(item,s__32069__$2,temp__5720__auto__))
;
return iter__4529__auto__.call(null,columns);
})()], null),shopping_admin_front_v2$core$generic_table_$_iter__32068.call(null,cljs.core.rest.call(null,s__32069__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,data);
})()], null)], null);
});
shopping_admin_front_v2.core.sidebar = (function shopping_admin_front_v2$core$sidebar(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sidebar","div.sidebar",1454675964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref.call(null,shopping_admin_front_v2.core.sidebar_visible_QMARK_))?null:"sidebar-hidden")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.logo","img.logo",-1845330328),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/icon.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Logo"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.call(null,shopping_admin_front_v2.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"list-type","list-type",-1245917502),"");

return shopping_admin_front_v2.core.fetch_data.call(null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-home"], null)], null),"Dashboard"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.call(null,shopping_admin_front_v2.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"list-type","list-type",-1245917502),"shoppings");

return shopping_admin_front_v2.core.fetch_data.call(null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-building"], null)], null),"Shoppings"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.call(null,shopping_admin_front_v2.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"list-type","list-type",-1245917502),"lojas");

return shopping_admin_front_v2.core.fetch_data.call(null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-store"], null)], null),"Lojas"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.call(null,shopping_admin_front_v2.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"list-type","list-type",-1245917502),"pedidos");

return shopping_admin_front_v2.core.fetch_data.call(null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-credit-card"], null)], null),"Pedidos"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.call(null,shopping_admin_front_v2.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"list-type","list-type",-1245917502),"clientes");

return shopping_admin_front_v2.core.fetch_data.call(null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-users"], null)], null),"Clientes"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-sign-out-alt"], null)], null),"Sair"], null)], null);
});
shopping_admin_front_v2.core.toggle_button_side = (function shopping_admin_front_v2$core$toggle_button_side(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.toggle-side","button.toggle-side",-1612122688),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,shopping_admin_front_v2.core.sidebar_visible_QMARK_,cljs.core.not);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-list"], null)], null)], null);
});
shopping_admin_front_v2.core.main_panel = (function shopping_admin_front_v2$core$main_panel(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sidebar-wrapper","div.sidebar-wrapper",1156124693),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shopping_admin_front_v2.core.sidebar], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.topbar","div.topbar",1355117265),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(cljs.core.truth_(cljs.core.deref.call(null,shopping_admin_front_v2.core.sidebar_visible_QMARK_))?"240px":"0px")], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shopping_admin_front_v2.core.toggle_button_side], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(cljs.core.truth_(cljs.core.deref.call(null,shopping_admin_front_v2.core.sidebar_visible_QMARK_))?"220px":"0px")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Conteudo"], null),(function (){var columns = shopping_admin_front_v2.core.get_columns.call(null,new cljs.core.Keyword(null,"list-type","list-type",-1245917502).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,shopping_admin_front_v2.core.state)));
if(cljs.core.empty_QMARK_.call(null,columns)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Nada"], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [shopping_admin_front_v2.core.generic_table,columns,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,shopping_admin_front_v2.core.state))], null);
}
})()], null)], null);
});
shopping_admin_front_v2.core.mount_root = (function shopping_admin_front_v2$core$mount_root(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shopping_admin_front_v2.core.main_panel], null),document.getElementById("app"));
});
shopping_admin_front_v2.core.init = (function shopping_admin_front_v2$core$init(){
return shopping_admin_front_v2.core.mount_root.call(null);
});
goog.exportSymbol('shopping_admin_front_v2.core.init', shopping_admin_front_v2.core.init);
shopping_admin_front_v2.core.init.call(null);

//# sourceMappingURL=coreE822846.js.map?rel=1738260178986
