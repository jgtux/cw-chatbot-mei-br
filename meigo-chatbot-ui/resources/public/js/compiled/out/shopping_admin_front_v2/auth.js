// Compiled by ClojureScript 1.10.773 {}
goog.provide('shopping_admin_front_v2.auth');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('shopping_admin_front_v2.config');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
if((typeof shopping_admin_front_v2 !== 'undefined') && (typeof shopping_admin_front_v2.auth !== 'undefined') && (typeof shopping_admin_front_v2.auth.username !== 'undefined')){
} else {
shopping_admin_front_v2.auth.username = reagent.core.atom.call(null,"");
}
if((typeof shopping_admin_front_v2 !== 'undefined') && (typeof shopping_admin_front_v2.auth !== 'undefined') && (typeof shopping_admin_front_v2.auth.password !== 'undefined')){
} else {
shopping_admin_front_v2.auth.password = reagent.core.atom.call(null,"");
}
if((typeof shopping_admin_front_v2 !== 'undefined') && (typeof shopping_admin_front_v2.auth !== 'undefined') && (typeof shopping_admin_front_v2.auth.error_message !== 'undefined')){
} else {
shopping_admin_front_v2.auth.error_message = reagent.core.atom.call(null,"");
}
shopping_admin_front_v2.auth.log_in = (function shopping_admin_front_v2$auth$log_in(){
cljs.core.reset_BANG_.call(null,shopping_admin_front_v2.config.loading_QMARK_,true);

cljs.core.reset_BANG_.call(null,shopping_admin_front_v2.auth.error_message,"");

var c__22741__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22742__auto__ = (function (){var switch__22718__auto__ = (function (state_22855){
var state_val_22856 = (state_22855[(1)]);
if((state_val_22856 === (7))){
var inst_22839 = cljs.core.reset_BANG_.call(null,shopping_admin_front_v2.auth.error_message,"Usuario ou senha incorretos.");
var state_22855__$1 = state_22855;
var statearr_22857_22876 = state_22855__$1;
(statearr_22857_22876[(2)] = inst_22839);

(statearr_22857_22876[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22856 === (1))){
var inst_22819 = [shopping_admin_front_v2.config.api_url,"/signin"].join('');
var inst_22820 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_22821 = [new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"password","password",417022471)];
var inst_22822 = cljs.core.deref.call(null,shopping_admin_front_v2.auth.username);
var inst_22823 = cljs.core.deref.call(null,shopping_admin_front_v2.auth.password);
var inst_22824 = [inst_22822,inst_22823];
var inst_22825 = cljs.core.PersistentHashMap.fromArrays(inst_22821,inst_22824);
var inst_22826 = [inst_22825,new cljs.core.Keyword(null,"json","json",1279968570),true];
var inst_22827 = cljs.core.PersistentHashMap.fromArrays(inst_22820,inst_22826);
var inst_22828 = cljs_http.client.post.call(null,inst_22819,inst_22827);
var state_22855__$1 = state_22855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22855__$1,(2),inst_22828);
} else {
if((state_val_22856 === (4))){
var inst_22830 = (state_22855[(7)]);
var inst_22849 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_22830);
var state_22855__$1 = state_22855;
var G__22858_22877 = inst_22849;
switch (G__22858_22877) {
case (401):
var statearr_22859_22879 = state_22855__$1;
(statearr_22859_22879[(1)] = (7));


break;
case (403):
var statearr_22860_22880 = state_22855__$1;
(statearr_22860_22880[(1)] = (8));


break;
case (500):
var statearr_22861_22881 = state_22855__$1;
(statearr_22861_22881[(1)] = (9));


break;
default:
var statearr_22862_22882 = state_22855__$1;
(statearr_22862_22882[(1)] = (10));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22856 === (6))){
var inst_22851 = (state_22855[(2)]);
var state_22855__$1 = state_22855;
var statearr_22863_22883 = state_22855__$1;
(statearr_22863_22883[(2)] = inst_22851);

(statearr_22863_22883[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22856 === (3))){
var inst_22835 = cljs.core.reset_BANG_.call(null,shopping_admin_front_v2.auth.username,"");
var inst_22836 = cljs.core.reset_BANG_.call(null,shopping_admin_front_v2.auth.password,"");
var inst_22837 = window.location.reload();
var state_22855__$1 = (function (){var statearr_22864 = state_22855;
(statearr_22864[(8)] = inst_22836);

(statearr_22864[(9)] = inst_22835);

return statearr_22864;
})();
var statearr_22865_22884 = state_22855__$1;
(statearr_22865_22884[(2)] = inst_22837);

(statearr_22865_22884[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22856 === (2))){
var inst_22830 = (state_22855[(7)]);
var inst_22830__$1 = (state_22855[(2)]);
var inst_22831 = cljs.core.reset_BANG_.call(null,shopping_admin_front_v2.config.loading_QMARK_,false);
var inst_22832 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_22830__$1);
var inst_22833 = cljs.core._EQ_.call(null,inst_22832,(200));
var state_22855__$1 = (function (){var statearr_22866 = state_22855;
(statearr_22866[(7)] = inst_22830__$1);

(statearr_22866[(10)] = inst_22831);

return statearr_22866;
})();
if(inst_22833){
var statearr_22867_22885 = state_22855__$1;
(statearr_22867_22885[(1)] = (3));

} else {
var statearr_22868_22886 = state_22855__$1;
(statearr_22868_22886[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22856 === (9))){
var inst_22843 = cljs.core.reset_BANG_.call(null,shopping_admin_front_v2.auth.error_message,"Erro no servidor. Tente novamente.");
var state_22855__$1 = state_22855;
var statearr_22869_22887 = state_22855__$1;
(statearr_22869_22887[(2)] = inst_22843);

(statearr_22869_22887[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22856 === (5))){
var inst_22853 = (state_22855[(2)]);
var state_22855__$1 = state_22855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22855__$1,inst_22853);
} else {
if((state_val_22856 === (10))){
var inst_22830 = (state_22855[(7)]);
var inst_22845 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_22830);
var inst_22846 = ["Error inesperado: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22845)].join('');
var inst_22847 = cljs.core.reset_BANG_.call(null,shopping_admin_front_v2.auth.error_message,inst_22846);
var state_22855__$1 = state_22855;
var statearr_22870_22888 = state_22855__$1;
(statearr_22870_22888[(2)] = inst_22847);

(statearr_22870_22888[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22856 === (8))){
var inst_22841 = cljs.core.reset_BANG_.call(null,shopping_admin_front_v2.auth.error_message,"Acesso negado.");
var state_22855__$1 = state_22855;
var statearr_22871_22889 = state_22855__$1;
(statearr_22871_22889[(2)] = inst_22841);

(statearr_22871_22889[(1)] = (6));


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
});
return (function() {
var shopping_admin_front_v2$auth$log_in_$_state_machine__22719__auto__ = null;
var shopping_admin_front_v2$auth$log_in_$_state_machine__22719__auto____0 = (function (){
var statearr_22872 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22872[(0)] = shopping_admin_front_v2$auth$log_in_$_state_machine__22719__auto__);

(statearr_22872[(1)] = (1));

return statearr_22872;
});
var shopping_admin_front_v2$auth$log_in_$_state_machine__22719__auto____1 = (function (state_22855){
while(true){
var ret_value__22720__auto__ = (function (){try{while(true){
var result__22721__auto__ = switch__22718__auto__.call(null,state_22855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22721__auto__;
}
break;
}
}catch (e22873){if((e22873 instanceof Object)){
var ex__22722__auto__ = e22873;
var statearr_22874_22890 = state_22855;
(statearr_22874_22890[(5)] = ex__22722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22891 = state_22855;
state_22855 = G__22891;
continue;
} else {
return ret_value__22720__auto__;
}
break;
}
});
shopping_admin_front_v2$auth$log_in_$_state_machine__22719__auto__ = function(state_22855){
switch(arguments.length){
case 0:
return shopping_admin_front_v2$auth$log_in_$_state_machine__22719__auto____0.call(this);
case 1:
return shopping_admin_front_v2$auth$log_in_$_state_machine__22719__auto____1.call(this,state_22855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shopping_admin_front_v2$auth$log_in_$_state_machine__22719__auto__.cljs$core$IFn$_invoke$arity$0 = shopping_admin_front_v2$auth$log_in_$_state_machine__22719__auto____0;
shopping_admin_front_v2$auth$log_in_$_state_machine__22719__auto__.cljs$core$IFn$_invoke$arity$1 = shopping_admin_front_v2$auth$log_in_$_state_machine__22719__auto____1;
return shopping_admin_front_v2$auth$log_in_$_state_machine__22719__auto__;
})()
})();
var state__22743__auto__ = (function (){var statearr_22875 = f__22742__auto__.call(null);
(statearr_22875[(6)] = c__22741__auto__);

return statearr_22875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22743__auto__);
}));

return c__22741__auto__;
});
shopping_admin_front_v2.auth.log_out = (function shopping_admin_front_v2$auth$log_out(){
cljs.core.reset_BANG_.call(null,shopping_admin_front_v2.config.loading_QMARK_,true);

var c__22741__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22742__auto__ = (function (){var switch__22718__auto__ = (function (state_22902){
var state_val_22903 = (state_22902[(1)]);
if((state_val_22903 === (1))){
var inst_22892 = [shopping_admin_front_v2.config.api_url,"/signout"].join('');
var inst_22893 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_22894 = [true];
var inst_22895 = cljs.core.PersistentHashMap.fromArrays(inst_22893,inst_22894);
var inst_22896 = cljs_http.client.post.call(null,inst_22892,inst_22895);
var state_22902__$1 = state_22902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22902__$1,(2),inst_22896);
} else {
if((state_val_22903 === (2))){
var inst_22898 = (state_22902[(2)]);
var inst_22899 = cljs.core.reset_BANG_.call(null,shopping_admin_front_v2.config.loading_QMARK_,false);
var inst_22900 = window.location.reload();
var state_22902__$1 = (function (){var statearr_22904 = state_22902;
(statearr_22904[(7)] = inst_22899);

(statearr_22904[(8)] = inst_22898);

return statearr_22904;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22902__$1,inst_22900);
} else {
return null;
}
}
});
return (function() {
var shopping_admin_front_v2$auth$log_out_$_state_machine__22719__auto__ = null;
var shopping_admin_front_v2$auth$log_out_$_state_machine__22719__auto____0 = (function (){
var statearr_22905 = [null,null,null,null,null,null,null,null,null];
(statearr_22905[(0)] = shopping_admin_front_v2$auth$log_out_$_state_machine__22719__auto__);

(statearr_22905[(1)] = (1));

return statearr_22905;
});
var shopping_admin_front_v2$auth$log_out_$_state_machine__22719__auto____1 = (function (state_22902){
while(true){
var ret_value__22720__auto__ = (function (){try{while(true){
var result__22721__auto__ = switch__22718__auto__.call(null,state_22902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22721__auto__;
}
break;
}
}catch (e22906){if((e22906 instanceof Object)){
var ex__22722__auto__ = e22906;
var statearr_22907_22909 = state_22902;
(statearr_22907_22909[(5)] = ex__22722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22910 = state_22902;
state_22902 = G__22910;
continue;
} else {
return ret_value__22720__auto__;
}
break;
}
});
shopping_admin_front_v2$auth$log_out_$_state_machine__22719__auto__ = function(state_22902){
switch(arguments.length){
case 0:
return shopping_admin_front_v2$auth$log_out_$_state_machine__22719__auto____0.call(this);
case 1:
return shopping_admin_front_v2$auth$log_out_$_state_machine__22719__auto____1.call(this,state_22902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shopping_admin_front_v2$auth$log_out_$_state_machine__22719__auto__.cljs$core$IFn$_invoke$arity$0 = shopping_admin_front_v2$auth$log_out_$_state_machine__22719__auto____0;
shopping_admin_front_v2$auth$log_out_$_state_machine__22719__auto__.cljs$core$IFn$_invoke$arity$1 = shopping_admin_front_v2$auth$log_out_$_state_machine__22719__auto____1;
return shopping_admin_front_v2$auth$log_out_$_state_machine__22719__auto__;
})()
})();
var state__22743__auto__ = (function (){var statearr_22908 = f__22742__auto__.call(null);
(statearr_22908[(6)] = c__22741__auto__);

return statearr_22908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22743__auto__);
}));

return c__22741__auto__;
});
/**
 * Makes an authenticated HTTP request.
 * - method: :get, :post, :put, :delete
 * - url: endpoint URL
 * - opts: map with optional keys:
 *   - :params - query params for GET
 *   - :json-body - Clojure data to send as JSON body
 *   Returns a core.async channel with response body or nil on failure.
 */
shopping_admin_front_v2.auth.authed_request = (function shopping_admin_front_v2$auth$authed_request(method,url,p__22911){
var map__22912 = p__22911;
var map__22912__$1 = (((((!((map__22912 == null))))?(((((map__22912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22912):map__22912);
var params = cljs.core.get.call(null,map__22912__$1,new cljs.core.Keyword(null,"params","params",710516235));
var json_body = cljs.core.get.call(null,map__22912__$1,new cljs.core.Keyword(null,"json-body","json-body",1827874300));
var c__22741__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22742__auto__ = (function (){var switch__22718__auto__ = (function (state_22942){
var state_val_22943 = (state_22942[(1)]);
if((state_val_22943 === (7))){
var inst_22927 = (state_22942[(2)]);
var inst_22928 = cljs.core.assoc.call(null,inst_22927,new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"url","url",276297046),url);
var inst_22929 = cljs_http.client.request.call(null,inst_22928);
var state_22942__$1 = state_22942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22942__$1,(8),inst_22929);
} else {
if((state_val_22943 === (1))){
var inst_22915 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_22916 = [true];
var inst_22917 = cljs.core.PersistentHashMap.fromArrays(inst_22915,inst_22916);
var state_22942__$1 = (function (){var statearr_22944 = state_22942;
(statearr_22944[(7)] = inst_22917);

return statearr_22944;
})();
if(cljs.core.truth_(params)){
var statearr_22945_22964 = state_22942__$1;
(statearr_22945_22964[(1)] = (2));

} else {
var statearr_22946_22965 = state_22942__$1;
(statearr_22946_22965[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22943 === (4))){
var inst_22922 = (state_22942[(2)]);
var state_22942__$1 = (function (){var statearr_22947 = state_22942;
(statearr_22947[(8)] = inst_22922);

return statearr_22947;
})();
if(cljs.core.truth_(json_body)){
var statearr_22948_22966 = state_22942__$1;
(statearr_22948_22966[(1)] = (5));

} else {
var statearr_22949_22967 = state_22942__$1;
(statearr_22949_22967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22943 === (6))){
var inst_22922 = (state_22942[(8)]);
var state_22942__$1 = state_22942;
var statearr_22950_22968 = state_22942__$1;
(statearr_22950_22968[(2)] = inst_22922);

(statearr_22950_22968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22943 === (3))){
var inst_22917 = (state_22942[(7)]);
var state_22942__$1 = state_22942;
var statearr_22951_22969 = state_22942__$1;
(statearr_22951_22969[(2)] = inst_22917);

(statearr_22951_22969[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22943 === (2))){
var inst_22917 = (state_22942[(7)]);
var inst_22919 = cljs.core.assoc.call(null,inst_22917,new cljs.core.Keyword(null,"query-params","query-params",900640534),params);
var state_22942__$1 = state_22942;
var statearr_22952_22970 = state_22942__$1;
(statearr_22952_22970[(2)] = inst_22919);

(statearr_22952_22970[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22943 === (11))){
var inst_22940 = (state_22942[(2)]);
var state_22942__$1 = state_22942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22942__$1,inst_22940);
} else {
if((state_val_22943 === (9))){
var inst_22931 = (state_22942[(9)]);
var inst_22935 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_22931);
var state_22942__$1 = state_22942;
var statearr_22953_22971 = state_22942__$1;
(statearr_22953_22971[(2)] = inst_22935);

(statearr_22953_22971[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22943 === (5))){
var inst_22922 = (state_22942[(8)]);
var inst_22924 = cljs.core.assoc.call(null,inst_22922,new cljs.core.Keyword(null,"json-params","json-params",-1112693596),json_body,new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"json","json",1279968570));
var state_22942__$1 = state_22942;
var statearr_22954_22972 = state_22942__$1;
(statearr_22954_22972[(2)] = inst_22924);

(statearr_22954_22972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22943 === (10))){
var inst_22931 = (state_22942[(9)]);
var inst_22937 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_22931);
var inst_22938 = cljs.core.println.call(null,"Request failed with status",inst_22937);
var state_22942__$1 = (function (){var statearr_22955 = state_22942;
(statearr_22955[(10)] = inst_22938);

return statearr_22955;
})();
var statearr_22956_22973 = state_22942__$1;
(statearr_22956_22973[(2)] = null);

(statearr_22956_22973[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22943 === (8))){
var inst_22931 = (state_22942[(9)]);
var inst_22931__$1 = (state_22942[(2)]);
var inst_22932 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_22931__$1);
var inst_22933 = cljs.core._EQ_.call(null,(200),inst_22932);
var state_22942__$1 = (function (){var statearr_22957 = state_22942;
(statearr_22957[(9)] = inst_22931__$1);

return statearr_22957;
})();
if(inst_22933){
var statearr_22958_22974 = state_22942__$1;
(statearr_22958_22974[(1)] = (9));

} else {
var statearr_22959_22975 = state_22942__$1;
(statearr_22959_22975[(1)] = (10));

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
});
return (function() {
var shopping_admin_front_v2$auth$authed_request_$_state_machine__22719__auto__ = null;
var shopping_admin_front_v2$auth$authed_request_$_state_machine__22719__auto____0 = (function (){
var statearr_22960 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22960[(0)] = shopping_admin_front_v2$auth$authed_request_$_state_machine__22719__auto__);

(statearr_22960[(1)] = (1));

return statearr_22960;
});
var shopping_admin_front_v2$auth$authed_request_$_state_machine__22719__auto____1 = (function (state_22942){
while(true){
var ret_value__22720__auto__ = (function (){try{while(true){
var result__22721__auto__ = switch__22718__auto__.call(null,state_22942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22721__auto__;
}
break;
}
}catch (e22961){if((e22961 instanceof Object)){
var ex__22722__auto__ = e22961;
var statearr_22962_22976 = state_22942;
(statearr_22962_22976[(5)] = ex__22722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22977 = state_22942;
state_22942 = G__22977;
continue;
} else {
return ret_value__22720__auto__;
}
break;
}
});
shopping_admin_front_v2$auth$authed_request_$_state_machine__22719__auto__ = function(state_22942){
switch(arguments.length){
case 0:
return shopping_admin_front_v2$auth$authed_request_$_state_machine__22719__auto____0.call(this);
case 1:
return shopping_admin_front_v2$auth$authed_request_$_state_machine__22719__auto____1.call(this,state_22942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shopping_admin_front_v2$auth$authed_request_$_state_machine__22719__auto__.cljs$core$IFn$_invoke$arity$0 = shopping_admin_front_v2$auth$authed_request_$_state_machine__22719__auto____0;
shopping_admin_front_v2$auth$authed_request_$_state_machine__22719__auto__.cljs$core$IFn$_invoke$arity$1 = shopping_admin_front_v2$auth$authed_request_$_state_machine__22719__auto____1;
return shopping_admin_front_v2$auth$authed_request_$_state_machine__22719__auto__;
})()
})();
var state__22743__auto__ = (function (){var statearr_22963 = f__22742__auto__.call(null);
(statearr_22963[(6)] = c__22741__auto__);

return statearr_22963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22743__auto__);
}));

return c__22741__auto__;
});
shopping_admin_front_v2.auth.auth_form = (function shopping_admin_front_v2$auth$auth_form(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.auth-form","div.auth-form",-733559273),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.logo","img.logo",-1845330328),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/icon.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"logo"], null)], null),(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,shopping_admin_front_v2.auth.error_message)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.error-message","div.error-message",926006572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.deref.call(null,shopping_admin_front_v2.auth.error_message)], null)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

if(cljs.core.truth_(cljs.core.deref.call(null,shopping_admin_front_v2.config.loading_QMARK_))){
return null;
} else {
return shopping_admin_front_v2.auth.log_in.call(null);
}
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.auth-fields","div.auth-fields",1312538966),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Usu\u00E1rio"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Username",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,shopping_admin_front_v2.auth.username),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref.call(null,shopping_admin_front_v2.config.loading_QMARK_),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__22978_SHARP_){
return cljs.core.reset_BANG_.call(null,shopping_admin_front_v2.auth.username,p1__22978_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Senha"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Password",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,shopping_admin_front_v2.auth.password),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref.call(null,shopping_admin_front_v2.config.loading_QMARK_),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__22979_SHARP_){
return cljs.core.reset_BANG_.call(null,shopping_admin_front_v2.auth.password,p1__22979_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.auth-submit","div.auth-submit",242017586),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref.call(null,shopping_admin_front_v2.config.loading_QMARK_)], null),(cljs.core.truth_(cljs.core.deref.call(null,shopping_admin_front_v2.config.loading_QMARK_))?"Entrando...":"Entrar")], null)], null)], null)], null);
});

//# sourceMappingURL=auth.js.map?rel=1748865612568
