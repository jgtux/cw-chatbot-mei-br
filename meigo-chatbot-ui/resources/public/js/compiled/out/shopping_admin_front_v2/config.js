// Compiled by ClojureScript 1.10.773 {}
goog.provide('shopping_admin_front_v2.config');
goog.require('cljs.core');
goog.require('reagent.core');
if((typeof shopping_admin_front_v2 !== 'undefined') && (typeof shopping_admin_front_v2.config !== 'undefined') && (typeof shopping_admin_front_v2.config.api_url !== 'undefined')){
} else {
shopping_admin_front_v2.config.api_url = "http://localhost:3000/v1/admin";
}
if((typeof shopping_admin_front_v2 !== 'undefined') && (typeof shopping_admin_front_v2.config !== 'undefined') && (typeof shopping_admin_front_v2.config.state !== 'undefined')){
} else {
shopping_admin_front_v2.config.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nome","nome",1100401122),"Shopping 1",new cljs.core.Keyword(null,"cnpj","cnpj",-643671792),"12345678000195",new cljs.core.Keyword(null,"status","status",-1997798413),"active"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nome","nome",1100401122),"Shopping 2",new cljs.core.Keyword(null,"cnpj","cnpj",-643671792),"98765432000187",new cljs.core.Keyword(null,"status","status",-1997798413),"inactive"], null)], null),new cljs.core.Keyword(null,"search-query","search-query",-1077556709),"",new cljs.core.Keyword(null,"search-key","search-key",-655412548),"",new cljs.core.Keyword(null,"current-page","current-page",-101294180),(1),new cljs.core.Keyword(null,"page-size","page-size",223836073),(10),new cljs.core.Keyword(null,"list-type","list-type",-1245917502),"shoppings"], null));
}
if((typeof shopping_admin_front_v2 !== 'undefined') && (typeof shopping_admin_front_v2.config !== 'undefined') && (typeof shopping_admin_front_v2.config.loading_QMARK_ !== 'undefined')){
} else {
shopping_admin_front_v2.config.loading_QMARK_ = reagent.core.atom.call(null,true);
}
if((typeof shopping_admin_front_v2 !== 'undefined') && (typeof shopping_admin_front_v2.config !== 'undefined') && (typeof shopping_admin_front_v2.config.sidebar_visible_QMARK_ !== 'undefined')){
} else {
shopping_admin_front_v2.config.sidebar_visible_QMARK_ = reagent.core.atom.call(null,null);
}

//# sourceMappingURL=config.js.map?rel=1748865612044
