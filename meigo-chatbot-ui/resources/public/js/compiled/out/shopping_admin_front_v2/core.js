// Compiled by ClojureScript 1.10.773 {}
goog.provide('shopping_admin_front_v2.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('cljs_http.client');
goog.require('shopping_admin_front_v2.modal');
goog.require('shopping_admin_front_v2.tables');
goog.require('shopping_admin_front_v2.sidebar');
goog.require('shopping_admin_front_v2.config');
goog.require('shopping_admin_front_v2.auth');
goog.require('shopping_admin_front_v2.utils');
shopping_admin_front_v2.core.parse_int = (function shopping_admin_front_v2$core$parse_int(s){
var parsed = parseInt(s);
if(cljs.core.truth_(isNaN(parsed))){
return (0);
} else {
return parsed;
}
});
shopping_admin_front_v2.core.main_panel = (function shopping_admin_front_v2$core$main_panel(){
if(cljs.core.truth_(cljs.core.deref.call(null,shopping_admin_front_v2.config.loading_QMARK_))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shopping_admin_front_v2.utils.loading_screen], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sidebar-wrapper","div.sidebar-wrapper",1156124693),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shopping_admin_front_v2.sidebar.sidebar], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.topbar","div.topbar",1355117265),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(cljs.core.truth_(cljs.core.deref.call(null,shopping_admin_front_v2.config.sidebar_visible_QMARK_))?"240px":"0px")], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shopping_admin_front_v2.sidebar.toggle_button_side], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(cljs.core.truth_(cljs.core.deref.call(null,shopping_admin_front_v2.config.sidebar_visible_QMARK_))?"240px":"0px")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),(function (){var G__23010 = new cljs.core.Keyword(null,"list-type","list-type",-1245917502).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,shopping_admin_front_v2.config.state));
switch (G__23010) {
case "shoppings":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-building"], null)], null),"Shoppings"], null);

break;
case "lojas":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-store"], null)], null),"Lojas"], null);

break;
case "pedidos":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-credit-card"], null)], null),"Pedidos"], null);

break;
case "clientes":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-users"], null)], null),"Clientes"], null);

break;
default:
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-home"], null)], null),"Conteudo"], null);

}
})()], null),(function (){var columns = shopping_admin_front_v2.config.get_columns.call(null,new cljs.core.Keyword(null,"list-type","list-type",-1245917502).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,shopping_admin_front_v2.config.state)));
if(cljs.core.empty_QMARK_.call(null,columns)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Nada"], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [shopping_admin_front_v2.tables.generic_table,columns,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,shopping_admin_front_v2.config.state))], null);
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shopping_admin_front_v2.modal.modal_panel], null)], null)], null);
}
});
shopping_admin_front_v2.core.mount_root = (function shopping_admin_front_v2$core$mount_root(){
setTimeout((function (){
return cljs.core.reset_BANG_.call(null,shopping_admin_front_v2.config.loading_QMARK_,false);
}),(1000));

return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shopping_admin_front_v2.core.main_panel], null),document.getElementById("app"));
});
shopping_admin_front_v2.core.init = (function shopping_admin_front_v2$core$init(){
return shopping_admin_front_v2.core.mount_root.call(null);
});
goog.exportSymbol('shopping_admin_front_v2.core.init', shopping_admin_front_v2.core.init);
shopping_admin_front_v2.core.init.call(null);

//# sourceMappingURL=core.js.map?rel=1748864073813
