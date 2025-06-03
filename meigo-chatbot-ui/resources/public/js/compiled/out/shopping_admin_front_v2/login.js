// Compiled by ClojureScript 1.10.773 {}
goog.provide('shopping_admin_front_v2.login');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('shopping_admin_front_v2.config');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
if((typeof shopping_admin_front_v2 !== 'undefined') && (typeof shopping_admin_front_v2.login !== 'undefined') && (typeof shopping_admin_front_v2.login.username !== 'undefined')){
} else {
shopping_admin_front_v2.login.username = reagent.core.atom.call(null,"");
}
if((typeof shopping_admin_front_v2 !== 'undefined') && (typeof shopping_admin_front_v2.login !== 'undefined') && (typeof shopping_admin_front_v2.login.password !== 'undefined')){
} else {
shopping_admin_front_v2.login.password = reagent.core.atom.call(null,"");
}
