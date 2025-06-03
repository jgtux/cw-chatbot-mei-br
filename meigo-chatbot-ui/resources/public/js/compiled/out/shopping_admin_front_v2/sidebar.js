// Compiled by ClojureScript 1.10.773 {}
goog.provide('shopping_admin_front_v2.sidebar');
goog.require('cljs.core');
goog.require('shopping_admin_front_v2.config');
goog.require('reagent.core');
goog.require('shopping_admin_front_v2.auth');
shopping_admin_front_v2.sidebar.nav_items = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"",new cljs.core.Keyword(null,"icon","icon",1679606541),"home",new cljs.core.Keyword(null,"label","label",1718410804),"Dashboard"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"chat",new cljs.core.Keyword(null,"icon","icon",1679606541),"comments",new cljs.core.Keyword(null,"label","label",1718410804),"Chat"], null)], null);
shopping_admin_front_v2.sidebar.sidebar_button = (function shopping_admin_front_v2$sidebar$sidebar_button(p__23024){
var map__23025 = p__23024;
var map__23025__$1 = (((((!((map__23025 == null))))?(((((map__23025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23025):map__23025);
var list_type = cljs.core.get.call(null,map__23025__$1,new cljs.core.Keyword(null,"list-type","list-type",-1245917502));
var icon = cljs.core.get.call(null,map__23025__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var label = cljs.core.get.call(null,map__23025__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var active_QMARK_ = cljs.core.get.call(null,map__23025__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.sidebar-btn","button.sidebar-btn",-1000554135),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(active_QMARK_)?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,shopping_admin_front_v2.config.state,cljs.core.assoc,new cljs.core.Keyword(null,"list-type","list-type",-1245917502),list_type,new cljs.core.Keyword(null,"search-key","search-key",-655412548),"",new cljs.core.Keyword(null,"search-query","search-query",-1077556709),"");
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.sidebar-icon","i.sidebar-icon",1759246766),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["fas fa-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon)].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sidebar-label","span.sidebar-label",2041383421),label], null)], null);
});
shopping_admin_front_v2.sidebar.logout_button = (function shopping_admin_front_v2$sidebar$logout_button(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.logout-btn","button.logout-btn",-36393461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),shopping_admin_front_v2.auth.log_out], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.sidebar-icon","i.sidebar-icon",1759246766),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-sign-out-alt"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sidebar-label","span.sidebar-label",2041383421),"Sair"], null)], null);
});
shopping_admin_front_v2.sidebar.sidebar_header = (function shopping_admin_front_v2$sidebar$sidebar_header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sidebar-header","div.sidebar-header",-1668016167),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.logo","img.logo",-1845330328),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/icon.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"Axxispay Logo"], null)], null)], null);
});
shopping_admin_front_v2.sidebar.sidebar_nav = (function shopping_admin_front_v2$sidebar$sidebar_nav(){
var current_list_type = new cljs.core.Keyword(null,"list-type","list-type",-1245917502).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,shopping_admin_front_v2.config.state));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.sidebar-nav","nav.sidebar-nav",-1706292404),(function (){var iter__4529__auto__ = (function shopping_admin_front_v2$sidebar$sidebar_nav_$_iter__23027(s__23028){
return (new cljs.core.LazySeq(null,(function (){
var s__23028__$1 = s__23028;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__23028__$1);
if(temp__5720__auto__){
var s__23028__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23028__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__23028__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__23030 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__23029 = (0);
while(true){
if((i__23029 < size__4528__auto__)){
var item = cljs.core._nth.call(null,c__4527__auto__,i__23029);
cljs.core.chunk_append.call(null,b__23030,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shopping_admin_front_v2.sidebar.sidebar_button,cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"list-type","list-type",-1245917502),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core._EQ_.call(null,current_list_type,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__23031 = (i__23029 + (1));
i__23029 = G__23031;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23030),shopping_admin_front_v2$sidebar$sidebar_nav_$_iter__23027.call(null,cljs.core.chunk_rest.call(null,s__23028__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23030),null);
}
} else {
var item = cljs.core.first.call(null,s__23028__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shopping_admin_front_v2.sidebar.sidebar_button,cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"list-type","list-type",-1245917502),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core._EQ_.call(null,current_list_type,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null)),shopping_admin_front_v2$sidebar$sidebar_nav_$_iter__23027.call(null,cljs.core.rest.call(null,s__23028__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,shopping_admin_front_v2.sidebar.nav_items);
})()], null);
});
shopping_admin_front_v2.sidebar.sidebar_footer = (function shopping_admin_front_v2$sidebar$sidebar_footer(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.sidebar-footer","footer.sidebar-footer",1469753681),"Axxispay \u00A9 2025"], null);
});
shopping_admin_front_v2.sidebar.sidebar = (function shopping_admin_front_v2$sidebar$sidebar(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside.sidebar","aside.sidebar",670380092),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.deref.call(null,shopping_admin_front_v2.config.sidebar_visible_QMARK_))?null:"sidebar-hidden")], null),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Navega\u00E7\u00E3o principal"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shopping_admin_front_v2.sidebar.sidebar_header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shopping_admin_front_v2.sidebar.sidebar_nav], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shopping_admin_front_v2.sidebar.logout_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shopping_admin_front_v2.sidebar.sidebar_footer], null)], null);
});
shopping_admin_front_v2.sidebar.toggle_button_side = (function shopping_admin_front_v2$sidebar$toggle_button_side(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.toggle-side","button.toggle-side",-1612122688),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,shopping_admin_front_v2.config.sidebar_visible_QMARK_,cljs.core.not);
}),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),(cljs.core.truth_(cljs.core.deref.call(null,shopping_admin_front_v2.config.sidebar_visible_QMARK_))?"Ocultar menu":"Mostrar menu"),new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(cljs.core.deref.call(null,shopping_admin_front_v2.config.sidebar_visible_QMARK_))?"Ocultar menu":"Mostrar menu")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fas fa-list"], null)], null)], null);
});

//# sourceMappingURL=sidebar.js.map?rel=1748865612717
