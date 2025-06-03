// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5720__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__5720__auto__)){
var req = temp__5720__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p__28920){
var vec__28921 = p__28920;
var k = cljs.core.nth.call(null,vec__28921,(0),null);
var v = cljs.core.nth.call(null,vec__28921,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__28924 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__28924)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__28924)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__28924)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__28924)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__28924)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__28924)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28924)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__28925){
var map__28926 = p__28925;
var map__28926__$1 = (((((!((map__28926 == null))))?(((((map__28926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28926):map__28926);
var request = map__28926__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__28926__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__28926__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__28926__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__28928 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__28928,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__28928,response_type);

G__28928.setTimeoutInterval(timeout);

G__28928.setWithCredentials(send_credentials);

return G__28928;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__28929){
var map__28930 = p__28929;
var map__28930__$1 = (((((!((map__28930 == null))))?(((((map__28930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28930):map__28930);
var request = map__28930__$1;
var request_method = cljs.core.get.call(null,map__28930__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__28930__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__28930__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var cancel = cljs.core.get.call(null,map__28930__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__28930__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__4126__auto__ = request_method;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_.call(null,xhr)))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}));

if(cljs.core.truth_(progress)){
var listener_28954 = (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});
var G__28932_28955 = xhr;
G__28932_28955.setProgressEventsEnabled(true);

G__28932_28955.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_28954,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__28932_28955.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_28954,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__25024__auto___28956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25025__auto__ = (function (){var switch__24857__auto__ = (function (state_28943){
var state_val_28944 = (state_28943[(1)]);
if((state_val_28944 === (1))){
var state_28943__$1 = state_28943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28943__$1,(2),cancel);
} else {
if((state_val_28944 === (2))){
var inst_28934 = (state_28943[(2)]);
var inst_28935 = xhr.isComplete();
var inst_28936 = cljs.core.not.call(null,inst_28935);
var state_28943__$1 = (function (){var statearr_28945 = state_28943;
(statearr_28945[(7)] = inst_28934);

return statearr_28945;
})();
if(inst_28936){
var statearr_28946_28957 = state_28943__$1;
(statearr_28946_28957[(1)] = (3));

} else {
var statearr_28947_28958 = state_28943__$1;
(statearr_28947_28958[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (3))){
var inst_28938 = xhr.abort();
var state_28943__$1 = state_28943;
var statearr_28948_28959 = state_28943__$1;
(statearr_28948_28959[(2)] = inst_28938);

(statearr_28948_28959[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (4))){
var state_28943__$1 = state_28943;
var statearr_28949_28960 = state_28943__$1;
(statearr_28949_28960[(2)] = null);

(statearr_28949_28960[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (5))){
var inst_28941 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28943__$1,inst_28941);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__24858__auto__ = null;
var cljs_http$core$xhr_$_state_machine__24858__auto____0 = (function (){
var statearr_28950 = [null,null,null,null,null,null,null,null];
(statearr_28950[(0)] = cljs_http$core$xhr_$_state_machine__24858__auto__);

(statearr_28950[(1)] = (1));

return statearr_28950;
});
var cljs_http$core$xhr_$_state_machine__24858__auto____1 = (function (state_28943){
while(true){
var ret_value__24859__auto__ = (function (){try{while(true){
var result__24860__auto__ = switch__24857__auto__.call(null,state_28943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24860__auto__;
}
break;
}
}catch (e28951){if((e28951 instanceof Object)){
var ex__24861__auto__ = e28951;
var statearr_28952_28961 = state_28943;
(statearr_28952_28961[(5)] = ex__24861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28962 = state_28943;
state_28943 = G__28962;
continue;
} else {
return ret_value__24859__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__24858__auto__ = function(state_28943){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__24858__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__24858__auto____1.call(this,state_28943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__24858__auto____0;
cljs_http$core$xhr_$_state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__24858__auto____1;
return cljs_http$core$xhr_$_state_machine__24858__auto__;
})()
})();
var state__25026__auto__ = (function (){var statearr_28953 = f__25025__auto__.call(null);
(statearr_28953[(6)] = c__25024__auto___28956);

return statearr_28953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25026__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__28963){
var map__28964 = p__28963;
var map__28964__$1 = (((((!((map__28964 == null))))?(((((map__28964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28964):map__28964);
var request = map__28964__$1;
var timeout = cljs.core.get.call(null,map__28964__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__28964__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__28964__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__28964__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_28977 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}));
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_28977], null));

if(cljs.core.truth_(cancel)){
var c__25024__auto___28978 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25025__auto__ = (function (){var switch__24857__auto__ = (function (state_28970){
var state_val_28971 = (state_28970[(1)]);
if((state_val_28971 === (1))){
var state_28970__$1 = state_28970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28970__$1,(2),cancel);
} else {
if((state_val_28971 === (2))){
var inst_28967 = (state_28970[(2)]);
var inst_28968 = jsonp.cancel(req_28977);
var state_28970__$1 = (function (){var statearr_28972 = state_28970;
(statearr_28972[(7)] = inst_28967);

return statearr_28972;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28970__$1,inst_28968);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__24858__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__24858__auto____0 = (function (){
var statearr_28973 = [null,null,null,null,null,null,null,null];
(statearr_28973[(0)] = cljs_http$core$jsonp_$_state_machine__24858__auto__);

(statearr_28973[(1)] = (1));

return statearr_28973;
});
var cljs_http$core$jsonp_$_state_machine__24858__auto____1 = (function (state_28970){
while(true){
var ret_value__24859__auto__ = (function (){try{while(true){
var result__24860__auto__ = switch__24857__auto__.call(null,state_28970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24860__auto__;
}
break;
}
}catch (e28974){if((e28974 instanceof Object)){
var ex__24861__auto__ = e28974;
var statearr_28975_28979 = state_28970;
(statearr_28975_28979[(5)] = ex__24861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28980 = state_28970;
state_28970 = G__28980;
continue;
} else {
return ret_value__24859__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__24858__auto__ = function(state_28970){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__24858__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__24858__auto____1.call(this,state_28970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__24858__auto____0;
cljs_http$core$jsonp_$_state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__24858__auto____1;
return cljs_http$core$jsonp_$_state_machine__24858__auto__;
})()
})();
var state__25026__auto__ = (function (){var statearr_28976 = f__25025__auto__.call(null);
(statearr_28976[(6)] = c__25024__auto___28978);

return statearr_28976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25026__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__28981){
var map__28982 = p__28981;
var map__28982__$1 = (((((!((map__28982 == null))))?(((((map__28982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28982):map__28982);
var request = map__28982__$1;
var request_method = cljs.core.get.call(null,map__28982__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request);
} else {
return cljs_http.core.xhr.call(null,request);
}
});

//# sourceMappingURL=core.js.map?rel=1748881104863
