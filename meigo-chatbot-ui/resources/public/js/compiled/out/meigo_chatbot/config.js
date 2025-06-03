// Compiled by ClojureScript 1.10.773 {}
goog.provide('meigo_chatbot.config');
goog.require('cljs.core');
goog.require('reagent.core');
if((typeof meigo_chatbot !== 'undefined') && (typeof meigo_chatbot.config !== 'undefined') && (typeof meigo_chatbot.config.api_url !== 'undefined')){
} else {
meigo_chatbot.config.api_url = "http://localhost:5000";
}
if((typeof meigo_chatbot !== 'undefined') && (typeof meigo_chatbot.config !== 'undefined') && (typeof meigo_chatbot.config.state !== 'undefined')){
} else {
meigo_chatbot.config.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"section","section",-300141526),"chat"], null));
}
if((typeof meigo_chatbot !== 'undefined') && (typeof meigo_chatbot.config !== 'undefined') && (typeof meigo_chatbot.config.sidebar_visible_QMARK_ !== 'undefined')){
} else {
meigo_chatbot.config.sidebar_visible_QMARK_ = reagent.core.atom.call(null,null);
}
if((typeof meigo_chatbot !== 'undefined') && (typeof meigo_chatbot.config !== 'undefined') && (typeof meigo_chatbot.config.authenticated_QMARK_ !== 'undefined')){
} else {
meigo_chatbot.config.authenticated_QMARK_ = reagent.core.atom.call(null,null);
}
if((typeof meigo_chatbot !== 'undefined') && (typeof meigo_chatbot.config !== 'undefined') && (typeof meigo_chatbot.config.loading_QMARK_ !== 'undefined')){
} else {
meigo_chatbot.config.loading_QMARK_ = reagent.core.atom.call(null,null);
}
if((typeof meigo_chatbot !== 'undefined') && (typeof meigo_chatbot.config !== 'undefined') && (typeof meigo_chatbot.config.sidebar_visible_QMARK_ !== 'undefined')){
} else {
meigo_chatbot.config.sidebar_visible_QMARK_ = reagent.core.atom.call(null,null);
}
if((typeof meigo_chatbot !== 'undefined') && (typeof meigo_chatbot.config !== 'undefined') && (typeof meigo_chatbot.config.checking_auth_QMARK_ !== 'undefined')){
} else {
meigo_chatbot.config.checking_auth_QMARK_ = reagent.core.atom.call(null,true);
}

//# sourceMappingURL=config.js.map?rel=1748957863102
