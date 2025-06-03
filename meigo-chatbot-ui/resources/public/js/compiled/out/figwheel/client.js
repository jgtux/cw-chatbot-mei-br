// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e27392){if((e27392 instanceof Error)){
var e = e27392;
return "Error: Unable to stringify";
} else {
throw e27392;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__27395 = arguments.length;
switch (G__27395) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__27393_SHARP_){
if(typeof p1__27393_SHARP_ === 'string'){
return p1__27393_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__27393_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27398 = arguments.length;
var i__4737__auto___27399 = (0);
while(true){
if((i__4737__auto___27399 < len__4736__auto___27398)){
args__4742__auto__.push((arguments[i__4737__auto___27399]));

var G__27400 = (i__4737__auto___27399 + (1));
i__4737__auto___27399 = G__27400;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq27397){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27397));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27402 = arguments.length;
var i__4737__auto___27403 = (0);
while(true){
if((i__4737__auto___27403 < len__4736__auto___27402)){
args__4742__auto__.push((arguments[i__4737__auto___27403]));

var G__27404 = (i__4737__auto___27403 + (1));
i__4737__auto___27403 = G__27404;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq27401){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27401));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27405){
var map__27406 = p__27405;
var map__27406__$1 = (((((!((map__27406 == null))))?(((((map__27406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27406):map__27406);
var message = cljs.core.get.call(null,map__27406__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27406__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4126__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__24963__auto___27485 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24964__auto__ = (function (){var switch__24940__auto__ = (function (state_27457){
var state_val_27458 = (state_27457[(1)]);
if((state_val_27458 === (7))){
var inst_27453 = (state_27457[(2)]);
var state_27457__$1 = state_27457;
var statearr_27459_27486 = state_27457__$1;
(statearr_27459_27486[(2)] = inst_27453);

(statearr_27459_27486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (1))){
var state_27457__$1 = state_27457;
var statearr_27460_27487 = state_27457__$1;
(statearr_27460_27487[(2)] = null);

(statearr_27460_27487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (4))){
var inst_27410 = (state_27457[(7)]);
var inst_27410__$1 = (state_27457[(2)]);
var state_27457__$1 = (function (){var statearr_27461 = state_27457;
(statearr_27461[(7)] = inst_27410__$1);

return statearr_27461;
})();
if(cljs.core.truth_(inst_27410__$1)){
var statearr_27462_27488 = state_27457__$1;
(statearr_27462_27488[(1)] = (5));

} else {
var statearr_27463_27489 = state_27457__$1;
(statearr_27463_27489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (15))){
var inst_27417 = (state_27457[(8)]);
var inst_27432 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27417);
var inst_27433 = cljs.core.first.call(null,inst_27432);
var inst_27434 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27433);
var inst_27435 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27434)].join('');
var inst_27436 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_27435);
var state_27457__$1 = state_27457;
var statearr_27464_27490 = state_27457__$1;
(statearr_27464_27490[(2)] = inst_27436);

(statearr_27464_27490[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (13))){
var inst_27441 = (state_27457[(2)]);
var state_27457__$1 = state_27457;
var statearr_27465_27491 = state_27457__$1;
(statearr_27465_27491[(2)] = inst_27441);

(statearr_27465_27491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (6))){
var state_27457__$1 = state_27457;
var statearr_27466_27492 = state_27457__$1;
(statearr_27466_27492[(2)] = null);

(statearr_27466_27492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (17))){
var inst_27439 = (state_27457[(2)]);
var state_27457__$1 = state_27457;
var statearr_27467_27493 = state_27457__$1;
(statearr_27467_27493[(2)] = inst_27439);

(statearr_27467_27493[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (3))){
var inst_27455 = (state_27457[(2)]);
var state_27457__$1 = state_27457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27457__$1,inst_27455);
} else {
if((state_val_27458 === (12))){
var inst_27416 = (state_27457[(9)]);
var inst_27430 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27416,opts);
var state_27457__$1 = state_27457;
if(inst_27430){
var statearr_27468_27494 = state_27457__$1;
(statearr_27468_27494[(1)] = (15));

} else {
var statearr_27469_27495 = state_27457__$1;
(statearr_27469_27495[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (2))){
var state_27457__$1 = state_27457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27457__$1,(4),ch);
} else {
if((state_val_27458 === (11))){
var inst_27417 = (state_27457[(8)]);
var inst_27422 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27423 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27417);
var inst_27424 = cljs.core.async.timeout.call(null,(1000));
var inst_27425 = [inst_27423,inst_27424];
var inst_27426 = (new cljs.core.PersistentVector(null,2,(5),inst_27422,inst_27425,null));
var state_27457__$1 = state_27457;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27457__$1,(14),inst_27426);
} else {
if((state_val_27458 === (9))){
var inst_27417 = (state_27457[(8)]);
var inst_27443 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_27444 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27417);
var inst_27445 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27444);
var inst_27446 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27445)].join('');
var inst_27447 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_27446);
var state_27457__$1 = (function (){var statearr_27470 = state_27457;
(statearr_27470[(10)] = inst_27443);

return statearr_27470;
})();
var statearr_27471_27496 = state_27457__$1;
(statearr_27471_27496[(2)] = inst_27447);

(statearr_27471_27496[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (5))){
var inst_27410 = (state_27457[(7)]);
var inst_27412 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27413 = (new cljs.core.PersistentArrayMap(null,2,inst_27412,null));
var inst_27414 = (new cljs.core.PersistentHashSet(null,inst_27413,null));
var inst_27415 = figwheel.client.focus_msgs.call(null,inst_27414,inst_27410);
var inst_27416 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27415);
var inst_27417 = cljs.core.first.call(null,inst_27415);
var inst_27418 = figwheel.client.autoload_QMARK_.call(null);
var state_27457__$1 = (function (){var statearr_27472 = state_27457;
(statearr_27472[(9)] = inst_27416);

(statearr_27472[(8)] = inst_27417);

return statearr_27472;
})();
if(cljs.core.truth_(inst_27418)){
var statearr_27473_27497 = state_27457__$1;
(statearr_27473_27497[(1)] = (8));

} else {
var statearr_27474_27498 = state_27457__$1;
(statearr_27474_27498[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (14))){
var inst_27428 = (state_27457[(2)]);
var state_27457__$1 = state_27457;
var statearr_27475_27499 = state_27457__$1;
(statearr_27475_27499[(2)] = inst_27428);

(statearr_27475_27499[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (16))){
var state_27457__$1 = state_27457;
var statearr_27476_27500 = state_27457__$1;
(statearr_27476_27500[(2)] = null);

(statearr_27476_27500[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (10))){
var inst_27449 = (state_27457[(2)]);
var state_27457__$1 = (function (){var statearr_27477 = state_27457;
(statearr_27477[(11)] = inst_27449);

return statearr_27477;
})();
var statearr_27478_27501 = state_27457__$1;
(statearr_27478_27501[(2)] = null);

(statearr_27478_27501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (8))){
var inst_27416 = (state_27457[(9)]);
var inst_27420 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27416,opts);
var state_27457__$1 = state_27457;
if(cljs.core.truth_(inst_27420)){
var statearr_27479_27502 = state_27457__$1;
(statearr_27479_27502[(1)] = (11));

} else {
var statearr_27480_27503 = state_27457__$1;
(statearr_27480_27503[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24941__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24941__auto____0 = (function (){
var statearr_27481 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27481[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24941__auto__);

(statearr_27481[(1)] = (1));

return statearr_27481;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24941__auto____1 = (function (state_27457){
while(true){
var ret_value__24942__auto__ = (function (){try{while(true){
var result__24943__auto__ = switch__24940__auto__.call(null,state_27457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24943__auto__;
}
break;
}
}catch (e27482){if((e27482 instanceof Object)){
var ex__24944__auto__ = e27482;
var statearr_27483_27504 = state_27457;
(statearr_27483_27504[(5)] = ex__24944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27505 = state_27457;
state_27457 = G__27505;
continue;
} else {
return ret_value__24942__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24941__auto__ = function(state_27457){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24941__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24941__auto____1.call(this,state_27457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24941__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24941__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24941__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24941__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24941__auto__;
})()
})();
var state__24965__auto__ = (function (){var statearr_27484 = f__24964__auto__.call(null);
(statearr_27484[(6)] = c__24963__auto___27485);

return statearr_27484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24965__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27506_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27506_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_27512 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27508 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27509 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27510 = true;
var _STAR_print_fn_STAR__temp_val__27511 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27510);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27511);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27509);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27508);
}}catch (e27507){if((e27507 instanceof Error)){
var e = e27507;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27512], null));
} else {
var e = e27507;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27513){
var map__27514 = p__27513;
var map__27514__$1 = (((((!((map__27514 == null))))?(((((map__27514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27514):map__27514);
var opts = map__27514__$1;
var build_id = cljs.core.get.call(null,map__27514__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__27516){
var vec__27517 = p__27516;
var seq__27518 = cljs.core.seq.call(null,vec__27517);
var first__27519 = cljs.core.first.call(null,seq__27518);
var seq__27518__$1 = cljs.core.next.call(null,seq__27518);
var map__27520 = first__27519;
var map__27520__$1 = (((((!((map__27520 == null))))?(((((map__27520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27520):map__27520);
var msg = map__27520__$1;
var msg_name = cljs.core.get.call(null,map__27520__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__27518__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27522){
var vec__27523 = p__27522;
var seq__27524 = cljs.core.seq.call(null,vec__27523);
var first__27525 = cljs.core.first.call(null,seq__27524);
var seq__27524__$1 = cljs.core.next.call(null,seq__27524);
var map__27526 = first__27525;
var map__27526__$1 = (((((!((map__27526 == null))))?(((((map__27526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27526):map__27526);
var msg = map__27526__$1;
var msg_name = cljs.core.get.call(null,map__27526__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__27524__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27528){
var map__27529 = p__27528;
var map__27529__$1 = (((((!((map__27529 == null))))?(((((map__27529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27529):map__27529);
var on_compile_warning = cljs.core.get.call(null,map__27529__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27529__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__27531){
var vec__27532 = p__27531;
var seq__27533 = cljs.core.seq.call(null,vec__27532);
var first__27534 = cljs.core.first.call(null,seq__27533);
var seq__27533__$1 = cljs.core.next.call(null,seq__27533);
var map__27535 = first__27534;
var map__27535__$1 = (((((!((map__27535 == null))))?(((((map__27535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27535):map__27535);
var msg = map__27535__$1;
var msg_name = cljs.core.get.call(null,map__27535__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__27533__$1;
var pred__27537 = cljs.core._EQ_;
var expr__27538 = msg_name;
if(cljs.core.truth_(pred__27537.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27538))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27537.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27538))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24963__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24964__auto__ = (function (){var switch__24940__auto__ = (function (state_27627){
var state_val_27628 = (state_27627[(1)]);
if((state_val_27628 === (7))){
var inst_27547 = (state_27627[(2)]);
var state_27627__$1 = state_27627;
if(cljs.core.truth_(inst_27547)){
var statearr_27629_27676 = state_27627__$1;
(statearr_27629_27676[(1)] = (8));

} else {
var statearr_27630_27677 = state_27627__$1;
(statearr_27630_27677[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (20))){
var inst_27621 = (state_27627[(2)]);
var state_27627__$1 = state_27627;
var statearr_27631_27678 = state_27627__$1;
(statearr_27631_27678[(2)] = inst_27621);

(statearr_27631_27678[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (27))){
var inst_27617 = (state_27627[(2)]);
var state_27627__$1 = state_27627;
var statearr_27632_27679 = state_27627__$1;
(statearr_27632_27679[(2)] = inst_27617);

(statearr_27632_27679[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (1))){
var inst_27540 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27627__$1 = state_27627;
if(cljs.core.truth_(inst_27540)){
var statearr_27633_27680 = state_27627__$1;
(statearr_27633_27680[(1)] = (2));

} else {
var statearr_27634_27681 = state_27627__$1;
(statearr_27634_27681[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (24))){
var inst_27619 = (state_27627[(2)]);
var state_27627__$1 = state_27627;
var statearr_27635_27682 = state_27627__$1;
(statearr_27635_27682[(2)] = inst_27619);

(statearr_27635_27682[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (4))){
var inst_27625 = (state_27627[(2)]);
var state_27627__$1 = state_27627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27627__$1,inst_27625);
} else {
if((state_val_27628 === (15))){
var inst_27623 = (state_27627[(2)]);
var state_27627__$1 = state_27627;
var statearr_27636_27683 = state_27627__$1;
(statearr_27636_27683[(2)] = inst_27623);

(statearr_27636_27683[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (21))){
var inst_27576 = (state_27627[(2)]);
var inst_27577 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27578 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27577);
var state_27627__$1 = (function (){var statearr_27637 = state_27627;
(statearr_27637[(7)] = inst_27576);

return statearr_27637;
})();
var statearr_27638_27684 = state_27627__$1;
(statearr_27638_27684[(2)] = inst_27578);

(statearr_27638_27684[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (31))){
var inst_27606 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27627__$1 = state_27627;
if(inst_27606){
var statearr_27639_27685 = state_27627__$1;
(statearr_27639_27685[(1)] = (34));

} else {
var statearr_27640_27686 = state_27627__$1;
(statearr_27640_27686[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (32))){
var inst_27615 = (state_27627[(2)]);
var state_27627__$1 = state_27627;
var statearr_27641_27687 = state_27627__$1;
(statearr_27641_27687[(2)] = inst_27615);

(statearr_27641_27687[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (33))){
var inst_27602 = (state_27627[(2)]);
var inst_27603 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27604 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27603);
var state_27627__$1 = (function (){var statearr_27642 = state_27627;
(statearr_27642[(8)] = inst_27602);

return statearr_27642;
})();
var statearr_27643_27688 = state_27627__$1;
(statearr_27643_27688[(2)] = inst_27604);

(statearr_27643_27688[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (13))){
var inst_27561 = figwheel.client.heads_up.clear.call(null);
var state_27627__$1 = state_27627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27627__$1,(16),inst_27561);
} else {
if((state_val_27628 === (22))){
var inst_27582 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27583 = figwheel.client.heads_up.append_warning_message.call(null,inst_27582);
var state_27627__$1 = state_27627;
var statearr_27644_27689 = state_27627__$1;
(statearr_27644_27689[(2)] = inst_27583);

(statearr_27644_27689[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (36))){
var inst_27613 = (state_27627[(2)]);
var state_27627__$1 = state_27627;
var statearr_27645_27690 = state_27627__$1;
(statearr_27645_27690[(2)] = inst_27613);

(statearr_27645_27690[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (29))){
var inst_27593 = (state_27627[(2)]);
var inst_27594 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27595 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27594);
var state_27627__$1 = (function (){var statearr_27646 = state_27627;
(statearr_27646[(9)] = inst_27593);

return statearr_27646;
})();
var statearr_27647_27691 = state_27627__$1;
(statearr_27647_27691[(2)] = inst_27595);

(statearr_27647_27691[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (6))){
var inst_27542 = (state_27627[(10)]);
var state_27627__$1 = state_27627;
var statearr_27648_27692 = state_27627__$1;
(statearr_27648_27692[(2)] = inst_27542);

(statearr_27648_27692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (28))){
var inst_27589 = (state_27627[(2)]);
var inst_27590 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27591 = figwheel.client.heads_up.display_warning.call(null,inst_27590);
var state_27627__$1 = (function (){var statearr_27649 = state_27627;
(statearr_27649[(11)] = inst_27589);

return statearr_27649;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27627__$1,(29),inst_27591);
} else {
if((state_val_27628 === (25))){
var inst_27587 = figwheel.client.heads_up.clear.call(null);
var state_27627__$1 = state_27627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27627__$1,(28),inst_27587);
} else {
if((state_val_27628 === (34))){
var inst_27608 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27627__$1 = state_27627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27627__$1,(37),inst_27608);
} else {
if((state_val_27628 === (17))){
var inst_27567 = (state_27627[(2)]);
var inst_27568 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27569 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27568);
var state_27627__$1 = (function (){var statearr_27650 = state_27627;
(statearr_27650[(12)] = inst_27567);

return statearr_27650;
})();
var statearr_27651_27693 = state_27627__$1;
(statearr_27651_27693[(2)] = inst_27569);

(statearr_27651_27693[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (3))){
var inst_27559 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27627__$1 = state_27627;
if(inst_27559){
var statearr_27652_27694 = state_27627__$1;
(statearr_27652_27694[(1)] = (13));

} else {
var statearr_27653_27695 = state_27627__$1;
(statearr_27653_27695[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (12))){
var inst_27555 = (state_27627[(2)]);
var state_27627__$1 = state_27627;
var statearr_27654_27696 = state_27627__$1;
(statearr_27654_27696[(2)] = inst_27555);

(statearr_27654_27696[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (2))){
var inst_27542 = (state_27627[(10)]);
var inst_27542__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_27627__$1 = (function (){var statearr_27655 = state_27627;
(statearr_27655[(10)] = inst_27542__$1);

return statearr_27655;
})();
if(cljs.core.truth_(inst_27542__$1)){
var statearr_27656_27697 = state_27627__$1;
(statearr_27656_27697[(1)] = (5));

} else {
var statearr_27657_27698 = state_27627__$1;
(statearr_27657_27698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (23))){
var inst_27585 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27627__$1 = state_27627;
if(inst_27585){
var statearr_27658_27699 = state_27627__$1;
(statearr_27658_27699[(1)] = (25));

} else {
var statearr_27659_27700 = state_27627__$1;
(statearr_27659_27700[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (35))){
var state_27627__$1 = state_27627;
var statearr_27660_27701 = state_27627__$1;
(statearr_27660_27701[(2)] = null);

(statearr_27660_27701[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (19))){
var inst_27580 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27627__$1 = state_27627;
if(inst_27580){
var statearr_27661_27702 = state_27627__$1;
(statearr_27661_27702[(1)] = (22));

} else {
var statearr_27662_27703 = state_27627__$1;
(statearr_27662_27703[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (11))){
var inst_27551 = (state_27627[(2)]);
var state_27627__$1 = state_27627;
var statearr_27663_27704 = state_27627__$1;
(statearr_27663_27704[(2)] = inst_27551);

(statearr_27663_27704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (9))){
var inst_27553 = figwheel.client.heads_up.clear.call(null);
var state_27627__$1 = state_27627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27627__$1,(12),inst_27553);
} else {
if((state_val_27628 === (5))){
var inst_27544 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27627__$1 = state_27627;
var statearr_27664_27705 = state_27627__$1;
(statearr_27664_27705[(2)] = inst_27544);

(statearr_27664_27705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (14))){
var inst_27571 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27627__$1 = state_27627;
if(inst_27571){
var statearr_27665_27706 = state_27627__$1;
(statearr_27665_27706[(1)] = (18));

} else {
var statearr_27666_27707 = state_27627__$1;
(statearr_27666_27707[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (26))){
var inst_27597 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27627__$1 = state_27627;
if(inst_27597){
var statearr_27667_27708 = state_27627__$1;
(statearr_27667_27708[(1)] = (30));

} else {
var statearr_27668_27709 = state_27627__$1;
(statearr_27668_27709[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (16))){
var inst_27563 = (state_27627[(2)]);
var inst_27564 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27565 = figwheel.client.heads_up.display_exception.call(null,inst_27564);
var state_27627__$1 = (function (){var statearr_27669 = state_27627;
(statearr_27669[(13)] = inst_27563);

return statearr_27669;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27627__$1,(17),inst_27565);
} else {
if((state_val_27628 === (30))){
var inst_27599 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27600 = figwheel.client.heads_up.display_warning.call(null,inst_27599);
var state_27627__$1 = state_27627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27627__$1,(33),inst_27600);
} else {
if((state_val_27628 === (10))){
var inst_27557 = (state_27627[(2)]);
var state_27627__$1 = state_27627;
var statearr_27670_27710 = state_27627__$1;
(statearr_27670_27710[(2)] = inst_27557);

(statearr_27670_27710[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (18))){
var inst_27573 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27574 = figwheel.client.heads_up.display_exception.call(null,inst_27573);
var state_27627__$1 = state_27627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27627__$1,(21),inst_27574);
} else {
if((state_val_27628 === (37))){
var inst_27610 = (state_27627[(2)]);
var state_27627__$1 = state_27627;
var statearr_27671_27711 = state_27627__$1;
(statearr_27671_27711[(2)] = inst_27610);

(statearr_27671_27711[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27628 === (8))){
var inst_27549 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27627__$1 = state_27627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27627__$1,(11),inst_27549);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24941__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24941__auto____0 = (function (){
var statearr_27672 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27672[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24941__auto__);

(statearr_27672[(1)] = (1));

return statearr_27672;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24941__auto____1 = (function (state_27627){
while(true){
var ret_value__24942__auto__ = (function (){try{while(true){
var result__24943__auto__ = switch__24940__auto__.call(null,state_27627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24943__auto__;
}
break;
}
}catch (e27673){if((e27673 instanceof Object)){
var ex__24944__auto__ = e27673;
var statearr_27674_27712 = state_27627;
(statearr_27674_27712[(5)] = ex__24944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27713 = state_27627;
state_27627 = G__27713;
continue;
} else {
return ret_value__24942__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24941__auto__ = function(state_27627){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24941__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24941__auto____1.call(this,state_27627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24941__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24941__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24941__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24941__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24941__auto__;
})()
})();
var state__24965__auto__ = (function (){var statearr_27675 = f__24964__auto__.call(null);
(statearr_27675[(6)] = c__24963__auto__);

return statearr_27675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24965__auto__);
}));

return c__24963__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24963__auto___27742 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24964__auto__ = (function (){var switch__24940__auto__ = (function (state_27728){
var state_val_27729 = (state_27728[(1)]);
if((state_val_27729 === (1))){
var state_27728__$1 = state_27728;
var statearr_27730_27743 = state_27728__$1;
(statearr_27730_27743[(2)] = null);

(statearr_27730_27743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (2))){
var state_27728__$1 = state_27728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27728__$1,(4),ch);
} else {
if((state_val_27729 === (3))){
var inst_27726 = (state_27728[(2)]);
var state_27728__$1 = state_27728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27728__$1,inst_27726);
} else {
if((state_val_27729 === (4))){
var inst_27716 = (state_27728[(7)]);
var inst_27716__$1 = (state_27728[(2)]);
var state_27728__$1 = (function (){var statearr_27731 = state_27728;
(statearr_27731[(7)] = inst_27716__$1);

return statearr_27731;
})();
if(cljs.core.truth_(inst_27716__$1)){
var statearr_27732_27744 = state_27728__$1;
(statearr_27732_27744[(1)] = (5));

} else {
var statearr_27733_27745 = state_27728__$1;
(statearr_27733_27745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (5))){
var inst_27716 = (state_27728[(7)]);
var inst_27718 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27716);
var state_27728__$1 = state_27728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27728__$1,(8),inst_27718);
} else {
if((state_val_27729 === (6))){
var state_27728__$1 = state_27728;
var statearr_27734_27746 = state_27728__$1;
(statearr_27734_27746[(2)] = null);

(statearr_27734_27746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (7))){
var inst_27724 = (state_27728[(2)]);
var state_27728__$1 = state_27728;
var statearr_27735_27747 = state_27728__$1;
(statearr_27735_27747[(2)] = inst_27724);

(statearr_27735_27747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27729 === (8))){
var inst_27720 = (state_27728[(2)]);
var state_27728__$1 = (function (){var statearr_27736 = state_27728;
(statearr_27736[(8)] = inst_27720);

return statearr_27736;
})();
var statearr_27737_27748 = state_27728__$1;
(statearr_27737_27748[(2)] = null);

(statearr_27737_27748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24941__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24941__auto____0 = (function (){
var statearr_27738 = [null,null,null,null,null,null,null,null,null];
(statearr_27738[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24941__auto__);

(statearr_27738[(1)] = (1));

return statearr_27738;
});
var figwheel$client$heads_up_plugin_$_state_machine__24941__auto____1 = (function (state_27728){
while(true){
var ret_value__24942__auto__ = (function (){try{while(true){
var result__24943__auto__ = switch__24940__auto__.call(null,state_27728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24943__auto__;
}
break;
}
}catch (e27739){if((e27739 instanceof Object)){
var ex__24944__auto__ = e27739;
var statearr_27740_27749 = state_27728;
(statearr_27740_27749[(5)] = ex__24944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27750 = state_27728;
state_27728 = G__27750;
continue;
} else {
return ret_value__24942__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24941__auto__ = function(state_27728){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24941__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24941__auto____1.call(this,state_27728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24941__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24941__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24941__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24941__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24941__auto__;
})()
})();
var state__24965__auto__ = (function (){var statearr_27741 = f__24964__auto__.call(null);
(statearr_27741[(6)] = c__24963__auto___27742);

return statearr_27741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24965__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24963__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24964__auto__ = (function (){var switch__24940__auto__ = (function (state_27756){
var state_val_27757 = (state_27756[(1)]);
if((state_val_27757 === (1))){
var inst_27751 = cljs.core.async.timeout.call(null,(3000));
var state_27756__$1 = state_27756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27756__$1,(2),inst_27751);
} else {
if((state_val_27757 === (2))){
var inst_27753 = (state_27756[(2)]);
var inst_27754 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27756__$1 = (function (){var statearr_27758 = state_27756;
(statearr_27758[(7)] = inst_27753);

return statearr_27758;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27756__$1,inst_27754);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24941__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24941__auto____0 = (function (){
var statearr_27759 = [null,null,null,null,null,null,null,null];
(statearr_27759[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24941__auto__);

(statearr_27759[(1)] = (1));

return statearr_27759;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24941__auto____1 = (function (state_27756){
while(true){
var ret_value__24942__auto__ = (function (){try{while(true){
var result__24943__auto__ = switch__24940__auto__.call(null,state_27756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24943__auto__;
}
break;
}
}catch (e27760){if((e27760 instanceof Object)){
var ex__24944__auto__ = e27760;
var statearr_27761_27763 = state_27756;
(statearr_27761_27763[(5)] = ex__24944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27764 = state_27756;
state_27756 = G__27764;
continue;
} else {
return ret_value__24942__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24941__auto__ = function(state_27756){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24941__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24941__auto____1.call(this,state_27756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24941__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24941__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24941__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24941__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24941__auto__;
})()
})();
var state__24965__auto__ = (function (){var statearr_27762 = f__24964__auto__.call(null);
(statearr_27762[(6)] = c__24963__auto__);

return statearr_27762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24965__auto__);
}));

return c__24963__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24963__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24964__auto__ = (function (){var switch__24940__auto__ = (function (state_27771){
var state_val_27772 = (state_27771[(1)]);
if((state_val_27772 === (1))){
var inst_27765 = cljs.core.async.timeout.call(null,(2000));
var state_27771__$1 = state_27771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27771__$1,(2),inst_27765);
} else {
if((state_val_27772 === (2))){
var inst_27767 = (state_27771[(2)]);
var inst_27768 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_27769 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_27768);
var state_27771__$1 = (function (){var statearr_27773 = state_27771;
(statearr_27773[(7)] = inst_27767);

return statearr_27773;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27771__$1,inst_27769);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24941__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24941__auto____0 = (function (){
var statearr_27774 = [null,null,null,null,null,null,null,null];
(statearr_27774[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24941__auto__);

(statearr_27774[(1)] = (1));

return statearr_27774;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24941__auto____1 = (function (state_27771){
while(true){
var ret_value__24942__auto__ = (function (){try{while(true){
var result__24943__auto__ = switch__24940__auto__.call(null,state_27771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24943__auto__;
}
break;
}
}catch (e27775){if((e27775 instanceof Object)){
var ex__24944__auto__ = e27775;
var statearr_27776_27778 = state_27771;
(statearr_27776_27778[(5)] = ex__24944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27779 = state_27771;
state_27771 = G__27779;
continue;
} else {
return ret_value__24942__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24941__auto__ = function(state_27771){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24941__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24941__auto____1.call(this,state_27771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24941__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24941__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24941__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24941__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24941__auto__;
})()
})();
var state__24965__auto__ = (function (){var statearr_27777 = f__24964__auto__.call(null);
(statearr_27777[(6)] = c__24963__auto__);

return statearr_27777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24965__auto__);
}));

return c__24963__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__27780){
var map__27781 = p__27780;
var map__27781__$1 = (((((!((map__27781 == null))))?(((((map__27781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27781):map__27781);
var file = cljs.core.get.call(null,map__27781__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__27781__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__27781__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__27783 = "";
var G__27783__$1 = (cljs.core.truth_(file)?[G__27783,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__27783);
var G__27783__$2 = (cljs.core.truth_(line)?[G__27783__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__27783__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__27783__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__27783__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27784){
var map__27785 = p__27784;
var map__27785__$1 = (((((!((map__27785 == null))))?(((((map__27785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27785):map__27785);
var ed = map__27785__$1;
var exception_data = cljs.core.get.call(null,map__27785__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27785__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_27788 = (function (){var G__27787 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27787)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__27787;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_27788);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27789){
var map__27790 = p__27789;
var map__27790__$1 = (((((!((map__27790 == null))))?(((((map__27790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27790):map__27790);
var w = map__27790__$1;
var message = cljs.core.get.call(null,map__27790__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4115__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__27792 = cljs.core.seq.call(null,plugins);
var chunk__27793 = null;
var count__27794 = (0);
var i__27795 = (0);
while(true){
if((i__27795 < count__27794)){
var vec__27802 = cljs.core._nth.call(null,chunk__27793,i__27795);
var k = cljs.core.nth.call(null,vec__27802,(0),null);
var plugin = cljs.core.nth.call(null,vec__27802,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27808 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27792,chunk__27793,count__27794,i__27795,pl_27808,vec__27802,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27808.call(null,msg_hist);
});})(seq__27792,chunk__27793,count__27794,i__27795,pl_27808,vec__27802,k,plugin))
);
} else {
}


var G__27809 = seq__27792;
var G__27810 = chunk__27793;
var G__27811 = count__27794;
var G__27812 = (i__27795 + (1));
seq__27792 = G__27809;
chunk__27793 = G__27810;
count__27794 = G__27811;
i__27795 = G__27812;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__27792);
if(temp__5720__auto__){
var seq__27792__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27792__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__27792__$1);
var G__27813 = cljs.core.chunk_rest.call(null,seq__27792__$1);
var G__27814 = c__4556__auto__;
var G__27815 = cljs.core.count.call(null,c__4556__auto__);
var G__27816 = (0);
seq__27792 = G__27813;
chunk__27793 = G__27814;
count__27794 = G__27815;
i__27795 = G__27816;
continue;
} else {
var vec__27805 = cljs.core.first.call(null,seq__27792__$1);
var k = cljs.core.nth.call(null,vec__27805,(0),null);
var plugin = cljs.core.nth.call(null,vec__27805,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27817 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27792,chunk__27793,count__27794,i__27795,pl_27817,vec__27805,k,plugin,seq__27792__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27817.call(null,msg_hist);
});})(seq__27792,chunk__27793,count__27794,i__27795,pl_27817,vec__27805,k,plugin,seq__27792__$1,temp__5720__auto__))
);
} else {
}


var G__27818 = cljs.core.next.call(null,seq__27792__$1);
var G__27819 = null;
var G__27820 = (0);
var G__27821 = (0);
seq__27792 = G__27818;
chunk__27793 = G__27819;
count__27794 = G__27820;
i__27795 = G__27821;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__27823 = arguments.length;
switch (G__27823) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__27824_27829 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__27825_27830 = null;
var count__27826_27831 = (0);
var i__27827_27832 = (0);
while(true){
if((i__27827_27832 < count__27826_27831)){
var msg_27833 = cljs.core._nth.call(null,chunk__27825_27830,i__27827_27832);
figwheel.client.socket.handle_incoming_message.call(null,msg_27833);


var G__27834 = seq__27824_27829;
var G__27835 = chunk__27825_27830;
var G__27836 = count__27826_27831;
var G__27837 = (i__27827_27832 + (1));
seq__27824_27829 = G__27834;
chunk__27825_27830 = G__27835;
count__27826_27831 = G__27836;
i__27827_27832 = G__27837;
continue;
} else {
var temp__5720__auto___27838 = cljs.core.seq.call(null,seq__27824_27829);
if(temp__5720__auto___27838){
var seq__27824_27839__$1 = temp__5720__auto___27838;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27824_27839__$1)){
var c__4556__auto___27840 = cljs.core.chunk_first.call(null,seq__27824_27839__$1);
var G__27841 = cljs.core.chunk_rest.call(null,seq__27824_27839__$1);
var G__27842 = c__4556__auto___27840;
var G__27843 = cljs.core.count.call(null,c__4556__auto___27840);
var G__27844 = (0);
seq__27824_27829 = G__27841;
chunk__27825_27830 = G__27842;
count__27826_27831 = G__27843;
i__27827_27832 = G__27844;
continue;
} else {
var msg_27845 = cljs.core.first.call(null,seq__27824_27839__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_27845);


var G__27846 = cljs.core.next.call(null,seq__27824_27839__$1);
var G__27847 = null;
var G__27848 = (0);
var G__27849 = (0);
seq__27824_27829 = G__27846;
chunk__27825_27830 = G__27847;
count__27826_27831 = G__27848;
i__27827_27832 = G__27849;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27854 = arguments.length;
var i__4737__auto___27855 = (0);
while(true){
if((i__4737__auto___27855 < len__4736__auto___27854)){
args__4742__auto__.push((arguments[i__4737__auto___27855]));

var G__27856 = (i__4737__auto___27855 + (1));
i__4737__auto___27855 = G__27856;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27851){
var map__27852 = p__27851;
var map__27852__$1 = (((((!((map__27852 == null))))?(((((map__27852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27852):map__27852);
var opts = map__27852__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27850){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27850));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e27857){if((e27857 instanceof Error)){
var e = e27857;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e27857;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__27858){
var map__27859 = p__27858;
var map__27859__$1 = (((((!((map__27859 == null))))?(((((map__27859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27859):map__27859);
var msg_name = cljs.core.get.call(null,map__27859__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1748975099481
