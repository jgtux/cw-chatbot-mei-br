// Compiled by ClojureScript 1.10.773 {}
goog.provide('meigo_chat.config');
goog.require('cljs.core');
goog.require('reagent.core');
if((typeof meigo_chat !== 'undefined') && (typeof meigo_chat.config !== 'undefined') && (typeof meigo_chat.config.api_url !== 'undefined')){
} else {
meigo_chat.config.api_url = "http://localhost:3000/v1/admin";
}
if((typeof meigo_chat !== 'undefined') && (typeof meigo_chat.config !== 'undefined') && (typeof meigo_chat.config.state !== 'undefined')){
} else {
meigo_chat.config.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list-type","list-type",-1245917502),"",new cljs.core.Keyword(null,"search-key","search-key",-655412548),"",new cljs.core.Keyword(null,"search-query","search-query",-1077556709),""], null));
}
if((typeof meigo_chat !== 'undefined') && (typeof meigo_chat.config !== 'undefined') && (typeof meigo_chat.config.sidebar_visible_QMARK_ !== 'undefined')){
} else {
meigo_chat.config.sidebar_visible_QMARK_ = reagent.core.atom.call(null,true);
}
if((typeof meigo_chat !== 'undefined') && (typeof meigo_chat.config !== 'undefined') && (typeof meigo_chat.config.loading_QMARK_ !== 'undefined')){
} else {
meigo_chat.config.loading_QMARK_ = reagent.core.atom.call(null,true);
}
if((typeof meigo_chat !== 'undefined') && (typeof meigo_chat.config !== 'undefined') && (typeof meigo_chat.config.sidebar_visible_QMARK_ !== 'undefined')){
} else {
meigo_chat.config.sidebar_visible_QMARK_ = reagent.core.atom.call(null,null);
}

//# sourceMappingURL=config.js.map?rel=1748866289594
