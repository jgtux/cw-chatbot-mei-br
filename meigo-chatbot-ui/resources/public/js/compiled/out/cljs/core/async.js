// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__26960 = arguments.length;
switch (G__26960) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26961 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26961 = (function (f,blockable,meta26962){
this.f = f;
this.blockable = blockable;
this.meta26962 = meta26962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26963,meta26962__$1){
var self__ = this;
var _26963__$1 = this;
return (new cljs.core.async.t_cljs$core$async26961(self__.f,self__.blockable,meta26962__$1));
}));

(cljs.core.async.t_cljs$core$async26961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26963){
var self__ = this;
var _26963__$1 = this;
return self__.meta26962;
}));

(cljs.core.async.t_cljs$core$async26961.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26961.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26961.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async26961.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async26961.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26962","meta26962",890583983,null)], null);
}));

(cljs.core.async.t_cljs$core$async26961.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26961.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26961");

(cljs.core.async.t_cljs$core$async26961.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26961");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26961.
 */
cljs.core.async.__GT_t_cljs$core$async26961 = (function cljs$core$async$__GT_t_cljs$core$async26961(f__$1,blockable__$1,meta26962){
return (new cljs.core.async.t_cljs$core$async26961(f__$1,blockable__$1,meta26962));
});

}

return (new cljs.core.async.t_cljs$core$async26961(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__26967 = arguments.length;
switch (G__26967) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__26970 = arguments.length;
switch (G__26970) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__26973 = arguments.length;
switch (G__26973) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26975 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26975);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_26975);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__26977 = arguments.length;
switch (G__26977) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___26979 = n;
var x_26980 = (0);
while(true){
if((x_26980 < n__4613__auto___26979)){
(a[x_26980] = x_26980);

var G__26981 = (x_26980 + (1));
x_26980 = G__26981;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26982 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26982 = (function (flag,meta26983){
this.flag = flag;
this.meta26983 = meta26983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26984,meta26983__$1){
var self__ = this;
var _26984__$1 = this;
return (new cljs.core.async.t_cljs$core$async26982(self__.flag,meta26983__$1));
}));

(cljs.core.async.t_cljs$core$async26982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26984){
var self__ = this;
var _26984__$1 = this;
return self__.meta26983;
}));

(cljs.core.async.t_cljs$core$async26982.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26982.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async26982.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26982.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async26982.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26983","meta26983",-987127244,null)], null);
}));

(cljs.core.async.t_cljs$core$async26982.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26982.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26982");

(cljs.core.async.t_cljs$core$async26982.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26982");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26982.
 */
cljs.core.async.__GT_t_cljs$core$async26982 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26982(flag__$1,meta26983){
return (new cljs.core.async.t_cljs$core$async26982(flag__$1,meta26983));
});

}

return (new cljs.core.async.t_cljs$core$async26982(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26985 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26985 = (function (flag,cb,meta26986){
this.flag = flag;
this.cb = cb;
this.meta26986 = meta26986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26987,meta26986__$1){
var self__ = this;
var _26987__$1 = this;
return (new cljs.core.async.t_cljs$core$async26985(self__.flag,self__.cb,meta26986__$1));
}));

(cljs.core.async.t_cljs$core$async26985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26987){
var self__ = this;
var _26987__$1 = this;
return self__.meta26986;
}));

(cljs.core.async.t_cljs$core$async26985.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26985.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async26985.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26985.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async26985.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26986","meta26986",205098328,null)], null);
}));

(cljs.core.async.t_cljs$core$async26985.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26985.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26985");

(cljs.core.async.t_cljs$core$async26985.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26985");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26985.
 */
cljs.core.async.__GT_t_cljs$core$async26985 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26985(flag__$1,cb__$1,meta26986){
return (new cljs.core.async.t_cljs$core$async26985(flag__$1,cb__$1,meta26986));
});

}

return (new cljs.core.async.t_cljs$core$async26985(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26988_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26988_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26989_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26989_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26990 = (i + (1));
i = G__26990;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26996 = arguments.length;
var i__4737__auto___26997 = (0);
while(true){
if((i__4737__auto___26997 < len__4736__auto___26996)){
args__4742__auto__.push((arguments[i__4737__auto___26997]));

var G__26998 = (i__4737__auto___26997 + (1));
i__4737__auto___26997 = G__26998;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26993){
var map__26994 = p__26993;
var map__26994__$1 = (((((!((map__26994 == null))))?(((((map__26994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26994):map__26994);
var opts = map__26994__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26991){
var G__26992 = cljs.core.first.call(null,seq26991);
var seq26991__$1 = cljs.core.next.call(null,seq26991);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26992,seq26991__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__27000 = arguments.length;
switch (G__27000) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25024__auto___27046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25025__auto__ = (function (){var switch__24857__auto__ = (function (state_27024){
var state_val_27025 = (state_27024[(1)]);
if((state_val_27025 === (7))){
var inst_27020 = (state_27024[(2)]);
var state_27024__$1 = state_27024;
var statearr_27026_27047 = state_27024__$1;
(statearr_27026_27047[(2)] = inst_27020);

(statearr_27026_27047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27025 === (1))){
var state_27024__$1 = state_27024;
var statearr_27027_27048 = state_27024__$1;
(statearr_27027_27048[(2)] = null);

(statearr_27027_27048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27025 === (4))){
var inst_27003 = (state_27024[(7)]);
var inst_27003__$1 = (state_27024[(2)]);
var inst_27004 = (inst_27003__$1 == null);
var state_27024__$1 = (function (){var statearr_27028 = state_27024;
(statearr_27028[(7)] = inst_27003__$1);

return statearr_27028;
})();
if(cljs.core.truth_(inst_27004)){
var statearr_27029_27049 = state_27024__$1;
(statearr_27029_27049[(1)] = (5));

} else {
var statearr_27030_27050 = state_27024__$1;
(statearr_27030_27050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27025 === (13))){
var state_27024__$1 = state_27024;
var statearr_27031_27051 = state_27024__$1;
(statearr_27031_27051[(2)] = null);

(statearr_27031_27051[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27025 === (6))){
var inst_27003 = (state_27024[(7)]);
var state_27024__$1 = state_27024;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27024__$1,(11),to,inst_27003);
} else {
if((state_val_27025 === (3))){
var inst_27022 = (state_27024[(2)]);
var state_27024__$1 = state_27024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27024__$1,inst_27022);
} else {
if((state_val_27025 === (12))){
var state_27024__$1 = state_27024;
var statearr_27032_27052 = state_27024__$1;
(statearr_27032_27052[(2)] = null);

(statearr_27032_27052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27025 === (2))){
var state_27024__$1 = state_27024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27024__$1,(4),from);
} else {
if((state_val_27025 === (11))){
var inst_27013 = (state_27024[(2)]);
var state_27024__$1 = state_27024;
if(cljs.core.truth_(inst_27013)){
var statearr_27033_27053 = state_27024__$1;
(statearr_27033_27053[(1)] = (12));

} else {
var statearr_27034_27054 = state_27024__$1;
(statearr_27034_27054[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27025 === (9))){
var state_27024__$1 = state_27024;
var statearr_27035_27055 = state_27024__$1;
(statearr_27035_27055[(2)] = null);

(statearr_27035_27055[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27025 === (5))){
var state_27024__$1 = state_27024;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27036_27056 = state_27024__$1;
(statearr_27036_27056[(1)] = (8));

} else {
var statearr_27037_27057 = state_27024__$1;
(statearr_27037_27057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27025 === (14))){
var inst_27018 = (state_27024[(2)]);
var state_27024__$1 = state_27024;
var statearr_27038_27058 = state_27024__$1;
(statearr_27038_27058[(2)] = inst_27018);

(statearr_27038_27058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27025 === (10))){
var inst_27010 = (state_27024[(2)]);
var state_27024__$1 = state_27024;
var statearr_27039_27059 = state_27024__$1;
(statearr_27039_27059[(2)] = inst_27010);

(statearr_27039_27059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27025 === (8))){
var inst_27007 = cljs.core.async.close_BANG_.call(null,to);
var state_27024__$1 = state_27024;
var statearr_27040_27060 = state_27024__$1;
(statearr_27040_27060[(2)] = inst_27007);

(statearr_27040_27060[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__24858__auto__ = null;
var cljs$core$async$state_machine__24858__auto____0 = (function (){
var statearr_27041 = [null,null,null,null,null,null,null,null];
(statearr_27041[(0)] = cljs$core$async$state_machine__24858__auto__);

(statearr_27041[(1)] = (1));

return statearr_27041;
});
var cljs$core$async$state_machine__24858__auto____1 = (function (state_27024){
while(true){
var ret_value__24859__auto__ = (function (){try{while(true){
var result__24860__auto__ = switch__24857__auto__.call(null,state_27024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24860__auto__;
}
break;
}
}catch (e27042){if((e27042 instanceof Object)){
var ex__24861__auto__ = e27042;
var statearr_27043_27061 = state_27024;
(statearr_27043_27061[(5)] = ex__24861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27062 = state_27024;
state_27024 = G__27062;
continue;
} else {
return ret_value__24859__auto__;
}
break;
}
});
cljs$core$async$state_machine__24858__auto__ = function(state_27024){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24858__auto____1.call(this,state_27024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24858__auto____0;
cljs$core$async$state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24858__auto____1;
return cljs$core$async$state_machine__24858__auto__;
})()
})();
var state__25026__auto__ = (function (){var statearr_27044 = f__25025__auto__.call(null);
(statearr_27044[(6)] = c__25024__auto___27046);

return statearr_27044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25026__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__27063){
var vec__27064 = p__27063;
var v = cljs.core.nth.call(null,vec__27064,(0),null);
var p = cljs.core.nth.call(null,vec__27064,(1),null);
var job = vec__27064;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25024__auto___27235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25025__auto__ = (function (){var switch__24857__auto__ = (function (state_27071){
var state_val_27072 = (state_27071[(1)]);
if((state_val_27072 === (1))){
var state_27071__$1 = state_27071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27071__$1,(2),res,v);
} else {
if((state_val_27072 === (2))){
var inst_27068 = (state_27071[(2)]);
var inst_27069 = cljs.core.async.close_BANG_.call(null,res);
var state_27071__$1 = (function (){var statearr_27073 = state_27071;
(statearr_27073[(7)] = inst_27068);

return statearr_27073;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27071__$1,inst_27069);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24858__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24858__auto____0 = (function (){
var statearr_27074 = [null,null,null,null,null,null,null,null];
(statearr_27074[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24858__auto__);

(statearr_27074[(1)] = (1));

return statearr_27074;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24858__auto____1 = (function (state_27071){
while(true){
var ret_value__24859__auto__ = (function (){try{while(true){
var result__24860__auto__ = switch__24857__auto__.call(null,state_27071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24860__auto__;
}
break;
}
}catch (e27075){if((e27075 instanceof Object)){
var ex__24861__auto__ = e27075;
var statearr_27076_27236 = state_27071;
(statearr_27076_27236[(5)] = ex__24861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27237 = state_27071;
state_27071 = G__27237;
continue;
} else {
return ret_value__24859__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24858__auto__ = function(state_27071){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24858__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24858__auto____1.call(this,state_27071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24858__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24858__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24858__auto__;
})()
})();
var state__25026__auto__ = (function (){var statearr_27077 = f__25025__auto__.call(null);
(statearr_27077[(6)] = c__25024__auto___27235);

return statearr_27077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25026__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__27078){
var vec__27079 = p__27078;
var v = cljs.core.nth.call(null,vec__27079,(0),null);
var p = cljs.core.nth.call(null,vec__27079,(1),null);
var job = vec__27079;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___27238 = n;
var __27239 = (0);
while(true){
if((__27239 < n__4613__auto___27238)){
var G__27082_27240 = type;
var G__27082_27241__$1 = (((G__27082_27240 instanceof cljs.core.Keyword))?G__27082_27240.fqn:null);
switch (G__27082_27241__$1) {
case "compute":
var c__25024__auto___27243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27239,c__25024__auto___27243,G__27082_27240,G__27082_27241__$1,n__4613__auto___27238,jobs,results,process,async){
return (function (){
var f__25025__auto__ = (function (){var switch__24857__auto__ = ((function (__27239,c__25024__auto___27243,G__27082_27240,G__27082_27241__$1,n__4613__auto___27238,jobs,results,process,async){
return (function (state_27095){
var state_val_27096 = (state_27095[(1)]);
if((state_val_27096 === (1))){
var state_27095__$1 = state_27095;
var statearr_27097_27244 = state_27095__$1;
(statearr_27097_27244[(2)] = null);

(statearr_27097_27244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (2))){
var state_27095__$1 = state_27095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27095__$1,(4),jobs);
} else {
if((state_val_27096 === (3))){
var inst_27093 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27095__$1,inst_27093);
} else {
if((state_val_27096 === (4))){
var inst_27085 = (state_27095[(2)]);
var inst_27086 = process.call(null,inst_27085);
var state_27095__$1 = state_27095;
if(cljs.core.truth_(inst_27086)){
var statearr_27098_27245 = state_27095__$1;
(statearr_27098_27245[(1)] = (5));

} else {
var statearr_27099_27246 = state_27095__$1;
(statearr_27099_27246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (5))){
var state_27095__$1 = state_27095;
var statearr_27100_27247 = state_27095__$1;
(statearr_27100_27247[(2)] = null);

(statearr_27100_27247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (6))){
var state_27095__$1 = state_27095;
var statearr_27101_27248 = state_27095__$1;
(statearr_27101_27248[(2)] = null);

(statearr_27101_27248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (7))){
var inst_27091 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
var statearr_27102_27249 = state_27095__$1;
(statearr_27102_27249[(2)] = inst_27091);

(statearr_27102_27249[(1)] = (3));


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
});})(__27239,c__25024__auto___27243,G__27082_27240,G__27082_27241__$1,n__4613__auto___27238,jobs,results,process,async))
;
return ((function (__27239,switch__24857__auto__,c__25024__auto___27243,G__27082_27240,G__27082_27241__$1,n__4613__auto___27238,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24858__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24858__auto____0 = (function (){
var statearr_27103 = [null,null,null,null,null,null,null];
(statearr_27103[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24858__auto__);

(statearr_27103[(1)] = (1));

return statearr_27103;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24858__auto____1 = (function (state_27095){
while(true){
var ret_value__24859__auto__ = (function (){try{while(true){
var result__24860__auto__ = switch__24857__auto__.call(null,state_27095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24860__auto__;
}
break;
}
}catch (e27104){if((e27104 instanceof Object)){
var ex__24861__auto__ = e27104;
var statearr_27105_27250 = state_27095;
(statearr_27105_27250[(5)] = ex__24861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27251 = state_27095;
state_27095 = G__27251;
continue;
} else {
return ret_value__24859__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24858__auto__ = function(state_27095){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24858__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24858__auto____1.call(this,state_27095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24858__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24858__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24858__auto__;
})()
;})(__27239,switch__24857__auto__,c__25024__auto___27243,G__27082_27240,G__27082_27241__$1,n__4613__auto___27238,jobs,results,process,async))
})();
var state__25026__auto__ = (function (){var statearr_27106 = f__25025__auto__.call(null);
(statearr_27106[(6)] = c__25024__auto___27243);

return statearr_27106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25026__auto__);
});})(__27239,c__25024__auto___27243,G__27082_27240,G__27082_27241__$1,n__4613__auto___27238,jobs,results,process,async))
);


break;
case "async":
var c__25024__auto___27252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27239,c__25024__auto___27252,G__27082_27240,G__27082_27241__$1,n__4613__auto___27238,jobs,results,process,async){
return (function (){
var f__25025__auto__ = (function (){var switch__24857__auto__ = ((function (__27239,c__25024__auto___27252,G__27082_27240,G__27082_27241__$1,n__4613__auto___27238,jobs,results,process,async){
return (function (state_27119){
var state_val_27120 = (state_27119[(1)]);
if((state_val_27120 === (1))){
var state_27119__$1 = state_27119;
var statearr_27121_27253 = state_27119__$1;
(statearr_27121_27253[(2)] = null);

(statearr_27121_27253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27120 === (2))){
var state_27119__$1 = state_27119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27119__$1,(4),jobs);
} else {
if((state_val_27120 === (3))){
var inst_27117 = (state_27119[(2)]);
var state_27119__$1 = state_27119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27119__$1,inst_27117);
} else {
if((state_val_27120 === (4))){
var inst_27109 = (state_27119[(2)]);
var inst_27110 = async.call(null,inst_27109);
var state_27119__$1 = state_27119;
if(cljs.core.truth_(inst_27110)){
var statearr_27122_27254 = state_27119__$1;
(statearr_27122_27254[(1)] = (5));

} else {
var statearr_27123_27255 = state_27119__$1;
(statearr_27123_27255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27120 === (5))){
var state_27119__$1 = state_27119;
var statearr_27124_27256 = state_27119__$1;
(statearr_27124_27256[(2)] = null);

(statearr_27124_27256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27120 === (6))){
var state_27119__$1 = state_27119;
var statearr_27125_27257 = state_27119__$1;
(statearr_27125_27257[(2)] = null);

(statearr_27125_27257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27120 === (7))){
var inst_27115 = (state_27119[(2)]);
var state_27119__$1 = state_27119;
var statearr_27126_27258 = state_27119__$1;
(statearr_27126_27258[(2)] = inst_27115);

(statearr_27126_27258[(1)] = (3));


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
});})(__27239,c__25024__auto___27252,G__27082_27240,G__27082_27241__$1,n__4613__auto___27238,jobs,results,process,async))
;
return ((function (__27239,switch__24857__auto__,c__25024__auto___27252,G__27082_27240,G__27082_27241__$1,n__4613__auto___27238,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24858__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24858__auto____0 = (function (){
var statearr_27127 = [null,null,null,null,null,null,null];
(statearr_27127[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24858__auto__);

(statearr_27127[(1)] = (1));

return statearr_27127;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24858__auto____1 = (function (state_27119){
while(true){
var ret_value__24859__auto__ = (function (){try{while(true){
var result__24860__auto__ = switch__24857__auto__.call(null,state_27119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24860__auto__;
}
break;
}
}catch (e27128){if((e27128 instanceof Object)){
var ex__24861__auto__ = e27128;
var statearr_27129_27259 = state_27119;
(statearr_27129_27259[(5)] = ex__24861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27260 = state_27119;
state_27119 = G__27260;
continue;
} else {
return ret_value__24859__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24858__auto__ = function(state_27119){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24858__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24858__auto____1.call(this,state_27119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24858__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24858__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24858__auto__;
})()
;})(__27239,switch__24857__auto__,c__25024__auto___27252,G__27082_27240,G__27082_27241__$1,n__4613__auto___27238,jobs,results,process,async))
})();
var state__25026__auto__ = (function (){var statearr_27130 = f__25025__auto__.call(null);
(statearr_27130[(6)] = c__25024__auto___27252);

return statearr_27130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25026__auto__);
});})(__27239,c__25024__auto___27252,G__27082_27240,G__27082_27241__$1,n__4613__auto___27238,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27082_27241__$1)].join('')));

}

var G__27261 = (__27239 + (1));
__27239 = G__27261;
continue;
} else {
}
break;
}

var c__25024__auto___27262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25025__auto__ = (function (){var switch__24857__auto__ = (function (state_27152){
var state_val_27153 = (state_27152[(1)]);
if((state_val_27153 === (7))){
var inst_27148 = (state_27152[(2)]);
var state_27152__$1 = state_27152;
var statearr_27154_27263 = state_27152__$1;
(statearr_27154_27263[(2)] = inst_27148);

(statearr_27154_27263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27153 === (1))){
var state_27152__$1 = state_27152;
var statearr_27155_27264 = state_27152__$1;
(statearr_27155_27264[(2)] = null);

(statearr_27155_27264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27153 === (4))){
var inst_27133 = (state_27152[(7)]);
var inst_27133__$1 = (state_27152[(2)]);
var inst_27134 = (inst_27133__$1 == null);
var state_27152__$1 = (function (){var statearr_27156 = state_27152;
(statearr_27156[(7)] = inst_27133__$1);

return statearr_27156;
})();
if(cljs.core.truth_(inst_27134)){
var statearr_27157_27265 = state_27152__$1;
(statearr_27157_27265[(1)] = (5));

} else {
var statearr_27158_27266 = state_27152__$1;
(statearr_27158_27266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27153 === (6))){
var inst_27133 = (state_27152[(7)]);
var inst_27138 = (state_27152[(8)]);
var inst_27138__$1 = cljs.core.async.chan.call(null,(1));
var inst_27139 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27140 = [inst_27133,inst_27138__$1];
var inst_27141 = (new cljs.core.PersistentVector(null,2,(5),inst_27139,inst_27140,null));
var state_27152__$1 = (function (){var statearr_27159 = state_27152;
(statearr_27159[(8)] = inst_27138__$1);

return statearr_27159;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27152__$1,(8),jobs,inst_27141);
} else {
if((state_val_27153 === (3))){
var inst_27150 = (state_27152[(2)]);
var state_27152__$1 = state_27152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27152__$1,inst_27150);
} else {
if((state_val_27153 === (2))){
var state_27152__$1 = state_27152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27152__$1,(4),from);
} else {
if((state_val_27153 === (9))){
var inst_27145 = (state_27152[(2)]);
var state_27152__$1 = (function (){var statearr_27160 = state_27152;
(statearr_27160[(9)] = inst_27145);

return statearr_27160;
})();
var statearr_27161_27267 = state_27152__$1;
(statearr_27161_27267[(2)] = null);

(statearr_27161_27267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27153 === (5))){
var inst_27136 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27152__$1 = state_27152;
var statearr_27162_27268 = state_27152__$1;
(statearr_27162_27268[(2)] = inst_27136);

(statearr_27162_27268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27153 === (8))){
var inst_27138 = (state_27152[(8)]);
var inst_27143 = (state_27152[(2)]);
var state_27152__$1 = (function (){var statearr_27163 = state_27152;
(statearr_27163[(10)] = inst_27143);

return statearr_27163;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27152__$1,(9),results,inst_27138);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24858__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24858__auto____0 = (function (){
var statearr_27164 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27164[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24858__auto__);

(statearr_27164[(1)] = (1));

return statearr_27164;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24858__auto____1 = (function (state_27152){
while(true){
var ret_value__24859__auto__ = (function (){try{while(true){
var result__24860__auto__ = switch__24857__auto__.call(null,state_27152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24860__auto__;
}
break;
}
}catch (e27165){if((e27165 instanceof Object)){
var ex__24861__auto__ = e27165;
var statearr_27166_27269 = state_27152;
(statearr_27166_27269[(5)] = ex__24861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27270 = state_27152;
state_27152 = G__27270;
continue;
} else {
return ret_value__24859__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24858__auto__ = function(state_27152){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24858__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24858__auto____1.call(this,state_27152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24858__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24858__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24858__auto__;
})()
})();
var state__25026__auto__ = (function (){var statearr_27167 = f__25025__auto__.call(null);
(statearr_27167[(6)] = c__25024__auto___27262);

return statearr_27167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25026__auto__);
}));


var c__25024__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25025__auto__ = (function (){var switch__24857__auto__ = (function (state_27205){
var state_val_27206 = (state_27205[(1)]);
if((state_val_27206 === (7))){
var inst_27201 = (state_27205[(2)]);
var state_27205__$1 = state_27205;
var statearr_27207_27271 = state_27205__$1;
(statearr_27207_27271[(2)] = inst_27201);

(statearr_27207_27271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27206 === (20))){
var state_27205__$1 = state_27205;
var statearr_27208_27272 = state_27205__$1;
(statearr_27208_27272[(2)] = null);

(statearr_27208_27272[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27206 === (1))){
var state_27205__$1 = state_27205;
var statearr_27209_27273 = state_27205__$1;
(statearr_27209_27273[(2)] = null);

(statearr_27209_27273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27206 === (4))){
var inst_27170 = (state_27205[(7)]);
var inst_27170__$1 = (state_27205[(2)]);
var inst_27171 = (inst_27170__$1 == null);
var state_27205__$1 = (function (){var statearr_27210 = state_27205;
(statearr_27210[(7)] = inst_27170__$1);

return statearr_27210;
})();
if(cljs.core.truth_(inst_27171)){
var statearr_27211_27274 = state_27205__$1;
(statearr_27211_27274[(1)] = (5));

} else {
var statearr_27212_27275 = state_27205__$1;
(statearr_27212_27275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27206 === (15))){
var inst_27183 = (state_27205[(8)]);
var state_27205__$1 = state_27205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27205__$1,(18),to,inst_27183);
} else {
if((state_val_27206 === (21))){
var inst_27196 = (state_27205[(2)]);
var state_27205__$1 = state_27205;
var statearr_27213_27276 = state_27205__$1;
(statearr_27213_27276[(2)] = inst_27196);

(statearr_27213_27276[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27206 === (13))){
var inst_27198 = (state_27205[(2)]);
var state_27205__$1 = (function (){var statearr_27214 = state_27205;
(statearr_27214[(9)] = inst_27198);

return statearr_27214;
})();
var statearr_27215_27277 = state_27205__$1;
(statearr_27215_27277[(2)] = null);

(statearr_27215_27277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27206 === (6))){
var inst_27170 = (state_27205[(7)]);
var state_27205__$1 = state_27205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27205__$1,(11),inst_27170);
} else {
if((state_val_27206 === (17))){
var inst_27191 = (state_27205[(2)]);
var state_27205__$1 = state_27205;
if(cljs.core.truth_(inst_27191)){
var statearr_27216_27278 = state_27205__$1;
(statearr_27216_27278[(1)] = (19));

} else {
var statearr_27217_27279 = state_27205__$1;
(statearr_27217_27279[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27206 === (3))){
var inst_27203 = (state_27205[(2)]);
var state_27205__$1 = state_27205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27205__$1,inst_27203);
} else {
if((state_val_27206 === (12))){
var inst_27180 = (state_27205[(10)]);
var state_27205__$1 = state_27205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27205__$1,(14),inst_27180);
} else {
if((state_val_27206 === (2))){
var state_27205__$1 = state_27205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27205__$1,(4),results);
} else {
if((state_val_27206 === (19))){
var state_27205__$1 = state_27205;
var statearr_27218_27280 = state_27205__$1;
(statearr_27218_27280[(2)] = null);

(statearr_27218_27280[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27206 === (11))){
var inst_27180 = (state_27205[(2)]);
var state_27205__$1 = (function (){var statearr_27219 = state_27205;
(statearr_27219[(10)] = inst_27180);

return statearr_27219;
})();
var statearr_27220_27281 = state_27205__$1;
(statearr_27220_27281[(2)] = null);

(statearr_27220_27281[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27206 === (9))){
var state_27205__$1 = state_27205;
var statearr_27221_27282 = state_27205__$1;
(statearr_27221_27282[(2)] = null);

(statearr_27221_27282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27206 === (5))){
var state_27205__$1 = state_27205;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27222_27283 = state_27205__$1;
(statearr_27222_27283[(1)] = (8));

} else {
var statearr_27223_27284 = state_27205__$1;
(statearr_27223_27284[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27206 === (14))){
var inst_27183 = (state_27205[(8)]);
var inst_27183__$1 = (state_27205[(2)]);
var inst_27184 = (inst_27183__$1 == null);
var inst_27185 = cljs.core.not.call(null,inst_27184);
var state_27205__$1 = (function (){var statearr_27224 = state_27205;
(statearr_27224[(8)] = inst_27183__$1);

return statearr_27224;
})();
if(inst_27185){
var statearr_27225_27285 = state_27205__$1;
(statearr_27225_27285[(1)] = (15));

} else {
var statearr_27226_27286 = state_27205__$1;
(statearr_27226_27286[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27206 === (16))){
var state_27205__$1 = state_27205;
var statearr_27227_27287 = state_27205__$1;
(statearr_27227_27287[(2)] = false);

(statearr_27227_27287[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27206 === (10))){
var inst_27177 = (state_27205[(2)]);
var state_27205__$1 = state_27205;
var statearr_27228_27288 = state_27205__$1;
(statearr_27228_27288[(2)] = inst_27177);

(statearr_27228_27288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27206 === (18))){
var inst_27188 = (state_27205[(2)]);
var state_27205__$1 = state_27205;
var statearr_27229_27289 = state_27205__$1;
(statearr_27229_27289[(2)] = inst_27188);

(statearr_27229_27289[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27206 === (8))){
var inst_27174 = cljs.core.async.close_BANG_.call(null,to);
var state_27205__$1 = state_27205;
var statearr_27230_27290 = state_27205__$1;
(statearr_27230_27290[(2)] = inst_27174);

(statearr_27230_27290[(1)] = (10));


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
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24858__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24858__auto____0 = (function (){
var statearr_27231 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27231[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24858__auto__);

(statearr_27231[(1)] = (1));

return statearr_27231;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24858__auto____1 = (function (state_27205){
while(true){
var ret_value__24859__auto__ = (function (){try{while(true){
var result__24860__auto__ = switch__24857__auto__.call(null,state_27205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24860__auto__;
}
break;
}
}catch (e27232){if((e27232 instanceof Object)){
var ex__24861__auto__ = e27232;
var statearr_27233_27291 = state_27205;
(statearr_27233_27291[(5)] = ex__24861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27292 = state_27205;
state_27205 = G__27292;
continue;
} else {
return ret_value__24859__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24858__auto__ = function(state_27205){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24858__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24858__auto____1.call(this,state_27205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24858__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24858__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24858__auto__;
})()
})();
var state__25026__auto__ = (function (){var statearr_27234 = f__25025__auto__.call(null);
(statearr_27234[(6)] = c__25024__auto__);

return statearr_27234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25026__auto__);
}));

return c__25024__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__27294 = arguments.length;
switch (G__27294) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__27297 = arguments.length;
switch (G__27297) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__27300 = arguments.length;
switch (G__27300) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__25024__auto___27349 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25025__auto__ = (function (){var switch__24857__auto__ = (function (state_27326){
var state_val_27327 = (state_27326[(1)]);
if((state_val_27327 === (7))){
var inst_27322 = (state_27326[(2)]);
var state_27326__$1 = state_27326;
var statearr_27328_27350 = state_27326__$1;
(statearr_27328_27350[(2)] = inst_27322);

(statearr_27328_27350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27327 === (1))){
var state_27326__$1 = state_27326;
var statearr_27329_27351 = state_27326__$1;
(statearr_27329_27351[(2)] = null);

(statearr_27329_27351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27327 === (4))){
var inst_27303 = (state_27326[(7)]);
var inst_27303__$1 = (state_27326[(2)]);
var inst_27304 = (inst_27303__$1 == null);
var state_27326__$1 = (function (){var statearr_27330 = state_27326;
(statearr_27330[(7)] = inst_27303__$1);

return statearr_27330;
})();
if(cljs.core.truth_(inst_27304)){
var statearr_27331_27352 = state_27326__$1;
(statearr_27331_27352[(1)] = (5));

} else {
var statearr_27332_27353 = state_27326__$1;
(statearr_27332_27353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27327 === (13))){
var state_27326__$1 = state_27326;
var statearr_27333_27354 = state_27326__$1;
(statearr_27333_27354[(2)] = null);

(statearr_27333_27354[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27327 === (6))){
var inst_27303 = (state_27326[(7)]);
var inst_27309 = p.call(null,inst_27303);
var state_27326__$1 = state_27326;
if(cljs.core.truth_(inst_27309)){
var statearr_27334_27355 = state_27326__$1;
(statearr_27334_27355[(1)] = (9));

} else {
var statearr_27335_27356 = state_27326__$1;
(statearr_27335_27356[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27327 === (3))){
var inst_27324 = (state_27326[(2)]);
var state_27326__$1 = state_27326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27326__$1,inst_27324);
} else {
if((state_val_27327 === (12))){
var state_27326__$1 = state_27326;
var statearr_27336_27357 = state_27326__$1;
(statearr_27336_27357[(2)] = null);

(statearr_27336_27357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27327 === (2))){
var state_27326__$1 = state_27326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27326__$1,(4),ch);
} else {
if((state_val_27327 === (11))){
var inst_27303 = (state_27326[(7)]);
var inst_27313 = (state_27326[(2)]);
var state_27326__$1 = state_27326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27326__$1,(8),inst_27313,inst_27303);
} else {
if((state_val_27327 === (9))){
var state_27326__$1 = state_27326;
var statearr_27337_27358 = state_27326__$1;
(statearr_27337_27358[(2)] = tc);

(statearr_27337_27358[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27327 === (5))){
var inst_27306 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27307 = cljs.core.async.close_BANG_.call(null,fc);
var state_27326__$1 = (function (){var statearr_27338 = state_27326;
(statearr_27338[(8)] = inst_27306);

return statearr_27338;
})();
var statearr_27339_27359 = state_27326__$1;
(statearr_27339_27359[(2)] = inst_27307);

(statearr_27339_27359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27327 === (14))){
var inst_27320 = (state_27326[(2)]);
var state_27326__$1 = state_27326;
var statearr_27340_27360 = state_27326__$1;
(statearr_27340_27360[(2)] = inst_27320);

(statearr_27340_27360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27327 === (10))){
var state_27326__$1 = state_27326;
var statearr_27341_27361 = state_27326__$1;
(statearr_27341_27361[(2)] = fc);

(statearr_27341_27361[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27327 === (8))){
var inst_27315 = (state_27326[(2)]);
var state_27326__$1 = state_27326;
if(cljs.core.truth_(inst_27315)){
var statearr_27342_27362 = state_27326__$1;
(statearr_27342_27362[(1)] = (12));

} else {
var statearr_27343_27363 = state_27326__$1;
(statearr_27343_27363[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__24858__auto__ = null;
var cljs$core$async$state_machine__24858__auto____0 = (function (){
var statearr_27344 = [null,null,null,null,null,null,null,null,null];
(statearr_27344[(0)] = cljs$core$async$state_machine__24858__auto__);

(statearr_27344[(1)] = (1));

return statearr_27344;
});
var cljs$core$async$state_machine__24858__auto____1 = (function (state_27326){
while(true){
var ret_value__24859__auto__ = (function (){try{while(true){
var result__24860__auto__ = switch__24857__auto__.call(null,state_27326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24860__auto__;
}
break;
}
}catch (e27345){if((e27345 instanceof Object)){
var ex__24861__auto__ = e27345;
var statearr_27346_27364 = state_27326;
(statearr_27346_27364[(5)] = ex__24861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27365 = state_27326;
state_27326 = G__27365;
continue;
} else {
return ret_value__24859__auto__;
}
break;
}
});
cljs$core$async$state_machine__24858__auto__ = function(state_27326){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24858__auto____1.call(this,state_27326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24858__auto____0;
cljs$core$async$state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24858__auto____1;
return cljs$core$async$state_machine__24858__auto__;
})()
})();
var state__25026__auto__ = (function (){var statearr_27347 = f__25025__auto__.call(null);
(statearr_27347[(6)] = c__25024__auto___27349);

return statearr_27347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25026__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__25024__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25025__auto__ = (function (){var switch__24857__auto__ = (function (state_27386){
var state_val_27387 = (state_27386[(1)]);
if((state_val_27387 === (7))){
var inst_27382 = (state_27386[(2)]);
var state_27386__$1 = state_27386;
var statearr_27388_27406 = state_27386__$1;
(statearr_27388_27406[(2)] = inst_27382);

(statearr_27388_27406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (1))){
var inst_27366 = init;
var state_27386__$1 = (function (){var statearr_27389 = state_27386;
(statearr_27389[(7)] = inst_27366);

return statearr_27389;
})();
var statearr_27390_27407 = state_27386__$1;
(statearr_27390_27407[(2)] = null);

(statearr_27390_27407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (4))){
var inst_27369 = (state_27386[(8)]);
var inst_27369__$1 = (state_27386[(2)]);
var inst_27370 = (inst_27369__$1 == null);
var state_27386__$1 = (function (){var statearr_27391 = state_27386;
(statearr_27391[(8)] = inst_27369__$1);

return statearr_27391;
})();
if(cljs.core.truth_(inst_27370)){
var statearr_27392_27408 = state_27386__$1;
(statearr_27392_27408[(1)] = (5));

} else {
var statearr_27393_27409 = state_27386__$1;
(statearr_27393_27409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (6))){
var inst_27373 = (state_27386[(9)]);
var inst_27366 = (state_27386[(7)]);
var inst_27369 = (state_27386[(8)]);
var inst_27373__$1 = f.call(null,inst_27366,inst_27369);
var inst_27374 = cljs.core.reduced_QMARK_.call(null,inst_27373__$1);
var state_27386__$1 = (function (){var statearr_27394 = state_27386;
(statearr_27394[(9)] = inst_27373__$1);

return statearr_27394;
})();
if(inst_27374){
var statearr_27395_27410 = state_27386__$1;
(statearr_27395_27410[(1)] = (8));

} else {
var statearr_27396_27411 = state_27386__$1;
(statearr_27396_27411[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (3))){
var inst_27384 = (state_27386[(2)]);
var state_27386__$1 = state_27386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27386__$1,inst_27384);
} else {
if((state_val_27387 === (2))){
var state_27386__$1 = state_27386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27386__$1,(4),ch);
} else {
if((state_val_27387 === (9))){
var inst_27373 = (state_27386[(9)]);
var inst_27366 = inst_27373;
var state_27386__$1 = (function (){var statearr_27397 = state_27386;
(statearr_27397[(7)] = inst_27366);

return statearr_27397;
})();
var statearr_27398_27412 = state_27386__$1;
(statearr_27398_27412[(2)] = null);

(statearr_27398_27412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (5))){
var inst_27366 = (state_27386[(7)]);
var state_27386__$1 = state_27386;
var statearr_27399_27413 = state_27386__$1;
(statearr_27399_27413[(2)] = inst_27366);

(statearr_27399_27413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (10))){
var inst_27380 = (state_27386[(2)]);
var state_27386__$1 = state_27386;
var statearr_27400_27414 = state_27386__$1;
(statearr_27400_27414[(2)] = inst_27380);

(statearr_27400_27414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27387 === (8))){
var inst_27373 = (state_27386[(9)]);
var inst_27376 = cljs.core.deref.call(null,inst_27373);
var state_27386__$1 = state_27386;
var statearr_27401_27415 = state_27386__$1;
(statearr_27401_27415[(2)] = inst_27376);

(statearr_27401_27415[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__24858__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24858__auto____0 = (function (){
var statearr_27402 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27402[(0)] = cljs$core$async$reduce_$_state_machine__24858__auto__);

(statearr_27402[(1)] = (1));

return statearr_27402;
});
var cljs$core$async$reduce_$_state_machine__24858__auto____1 = (function (state_27386){
while(true){
var ret_value__24859__auto__ = (function (){try{while(true){
var result__24860__auto__ = switch__24857__auto__.call(null,state_27386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24860__auto__;
}
break;
}
}catch (e27403){if((e27403 instanceof Object)){
var ex__24861__auto__ = e27403;
var statearr_27404_27416 = state_27386;
(statearr_27404_27416[(5)] = ex__24861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27417 = state_27386;
state_27386 = G__27417;
continue;
} else {
return ret_value__24859__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24858__auto__ = function(state_27386){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24858__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24858__auto____1.call(this,state_27386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24858__auto____0;
cljs$core$async$reduce_$_state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24858__auto____1;
return cljs$core$async$reduce_$_state_machine__24858__auto__;
})()
})();
var state__25026__auto__ = (function (){var statearr_27405 = f__25025__auto__.call(null);
(statearr_27405[(6)] = c__25024__auto__);

return statearr_27405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25026__auto__);
}));

return c__25024__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__25024__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25025__auto__ = (function (){var switch__24857__auto__ = (function (state_27423){
var state_val_27424 = (state_27423[(1)]);
if((state_val_27424 === (1))){
var inst_27418 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27423__$1 = state_27423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27423__$1,(2),inst_27418);
} else {
if((state_val_27424 === (2))){
var inst_27420 = (state_27423[(2)]);
var inst_27421 = f__$1.call(null,inst_27420);
var state_27423__$1 = state_27423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27423__$1,inst_27421);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__24858__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24858__auto____0 = (function (){
var statearr_27425 = [null,null,null,null,null,null,null];
(statearr_27425[(0)] = cljs$core$async$transduce_$_state_machine__24858__auto__);

(statearr_27425[(1)] = (1));

return statearr_27425;
});
var cljs$core$async$transduce_$_state_machine__24858__auto____1 = (function (state_27423){
while(true){
var ret_value__24859__auto__ = (function (){try{while(true){
var result__24860__auto__ = switch__24857__auto__.call(null,state_27423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24860__auto__;
}
break;
}
}catch (e27426){if((e27426 instanceof Object)){
var ex__24861__auto__ = e27426;
var statearr_27427_27429 = state_27423;
(statearr_27427_27429[(5)] = ex__24861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27430 = state_27423;
state_27423 = G__27430;
continue;
} else {
return ret_value__24859__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24858__auto__ = function(state_27423){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24858__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24858__auto____1.call(this,state_27423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24858__auto____0;
cljs$core$async$transduce_$_state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24858__auto____1;
return cljs$core$async$transduce_$_state_machine__24858__auto__;
})()
})();
var state__25026__auto__ = (function (){var statearr_27428 = f__25025__auto__.call(null);
(statearr_27428[(6)] = c__25024__auto__);

return statearr_27428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25026__auto__);
}));

return c__25024__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__27432 = arguments.length;
switch (G__27432) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25024__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25025__auto__ = (function (){var switch__24857__auto__ = (function (state_27457){
var state_val_27458 = (state_27457[(1)]);
if((state_val_27458 === (7))){
var inst_27439 = (state_27457[(2)]);
var state_27457__$1 = state_27457;
var statearr_27459_27480 = state_27457__$1;
(statearr_27459_27480[(2)] = inst_27439);

(statearr_27459_27480[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (1))){
var inst_27433 = cljs.core.seq.call(null,coll);
var inst_27434 = inst_27433;
var state_27457__$1 = (function (){var statearr_27460 = state_27457;
(statearr_27460[(7)] = inst_27434);

return statearr_27460;
})();
var statearr_27461_27481 = state_27457__$1;
(statearr_27461_27481[(2)] = null);

(statearr_27461_27481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (4))){
var inst_27434 = (state_27457[(7)]);
var inst_27437 = cljs.core.first.call(null,inst_27434);
var state_27457__$1 = state_27457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27457__$1,(7),ch,inst_27437);
} else {
if((state_val_27458 === (13))){
var inst_27451 = (state_27457[(2)]);
var state_27457__$1 = state_27457;
var statearr_27462_27482 = state_27457__$1;
(statearr_27462_27482[(2)] = inst_27451);

(statearr_27462_27482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (6))){
var inst_27442 = (state_27457[(2)]);
var state_27457__$1 = state_27457;
if(cljs.core.truth_(inst_27442)){
var statearr_27463_27483 = state_27457__$1;
(statearr_27463_27483[(1)] = (8));

} else {
var statearr_27464_27484 = state_27457__$1;
(statearr_27464_27484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (3))){
var inst_27455 = (state_27457[(2)]);
var state_27457__$1 = state_27457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27457__$1,inst_27455);
} else {
if((state_val_27458 === (12))){
var state_27457__$1 = state_27457;
var statearr_27465_27485 = state_27457__$1;
(statearr_27465_27485[(2)] = null);

(statearr_27465_27485[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (2))){
var inst_27434 = (state_27457[(7)]);
var state_27457__$1 = state_27457;
if(cljs.core.truth_(inst_27434)){
var statearr_27466_27486 = state_27457__$1;
(statearr_27466_27486[(1)] = (4));

} else {
var statearr_27467_27487 = state_27457__$1;
(statearr_27467_27487[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (11))){
var inst_27448 = cljs.core.async.close_BANG_.call(null,ch);
var state_27457__$1 = state_27457;
var statearr_27468_27488 = state_27457__$1;
(statearr_27468_27488[(2)] = inst_27448);

(statearr_27468_27488[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (9))){
var state_27457__$1 = state_27457;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27469_27489 = state_27457__$1;
(statearr_27469_27489[(1)] = (11));

} else {
var statearr_27470_27490 = state_27457__$1;
(statearr_27470_27490[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (5))){
var inst_27434 = (state_27457[(7)]);
var state_27457__$1 = state_27457;
var statearr_27471_27491 = state_27457__$1;
(statearr_27471_27491[(2)] = inst_27434);

(statearr_27471_27491[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (10))){
var inst_27453 = (state_27457[(2)]);
var state_27457__$1 = state_27457;
var statearr_27472_27492 = state_27457__$1;
(statearr_27472_27492[(2)] = inst_27453);

(statearr_27472_27492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27458 === (8))){
var inst_27434 = (state_27457[(7)]);
var inst_27444 = cljs.core.next.call(null,inst_27434);
var inst_27434__$1 = inst_27444;
var state_27457__$1 = (function (){var statearr_27473 = state_27457;
(statearr_27473[(7)] = inst_27434__$1);

return statearr_27473;
})();
var statearr_27474_27493 = state_27457__$1;
(statearr_27474_27493[(2)] = null);

(statearr_27474_27493[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__24858__auto__ = null;
var cljs$core$async$state_machine__24858__auto____0 = (function (){
var statearr_27475 = [null,null,null,null,null,null,null,null];
(statearr_27475[(0)] = cljs$core$async$state_machine__24858__auto__);

(statearr_27475[(1)] = (1));

return statearr_27475;
});
var cljs$core$async$state_machine__24858__auto____1 = (function (state_27457){
while(true){
var ret_value__24859__auto__ = (function (){try{while(true){
var result__24860__auto__ = switch__24857__auto__.call(null,state_27457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24860__auto__;
}
break;
}
}catch (e27476){if((e27476 instanceof Object)){
var ex__24861__auto__ = e27476;
var statearr_27477_27494 = state_27457;
(statearr_27477_27494[(5)] = ex__24861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27495 = state_27457;
state_27457 = G__27495;
continue;
} else {
return ret_value__24859__auto__;
}
break;
}
});
cljs$core$async$state_machine__24858__auto__ = function(state_27457){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24858__auto____1.call(this,state_27457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24858__auto____0;
cljs$core$async$state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24858__auto____1;
return cljs$core$async$state_machine__24858__auto__;
})()
})();
var state__25026__auto__ = (function (){var statearr_27478 = f__25025__auto__.call(null);
(statearr_27478[(6)] = c__25024__auto__);

return statearr_27478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25026__auto__);
}));

return c__25024__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_27496 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_27496.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_27497 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_27497.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_27498 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_27498.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_27499 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_27499.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27500 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27500 = (function (ch,cs,meta27501){
this.ch = ch;
this.cs = cs;
this.meta27501 = meta27501;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27502,meta27501__$1){
var self__ = this;
var _27502__$1 = this;
return (new cljs.core.async.t_cljs$core$async27500(self__.ch,self__.cs,meta27501__$1));
}));

(cljs.core.async.t_cljs$core$async27500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27502){
var self__ = this;
var _27502__$1 = this;
return self__.meta27501;
}));

(cljs.core.async.t_cljs$core$async27500.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27500.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async27500.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27500.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async27500.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async27500.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async27500.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27501","meta27501",-590493430,null)], null);
}));

(cljs.core.async.t_cljs$core$async27500.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27500.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27500");

(cljs.core.async.t_cljs$core$async27500.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27500");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27500.
 */
cljs.core.async.__GT_t_cljs$core$async27500 = (function cljs$core$async$mult_$___GT_t_cljs$core$async27500(ch__$1,cs__$1,meta27501){
return (new cljs.core.async.t_cljs$core$async27500(ch__$1,cs__$1,meta27501));
});

}

return (new cljs.core.async.t_cljs$core$async27500(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__25024__auto___27722 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25025__auto__ = (function (){var switch__24857__auto__ = (function (state_27637){
var state_val_27638 = (state_27637[(1)]);
if((state_val_27638 === (7))){
var inst_27633 = (state_27637[(2)]);
var state_27637__$1 = state_27637;
var statearr_27639_27723 = state_27637__$1;
(statearr_27639_27723[(2)] = inst_27633);

(statearr_27639_27723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (20))){
var inst_27536 = (state_27637[(7)]);
var inst_27548 = cljs.core.first.call(null,inst_27536);
var inst_27549 = cljs.core.nth.call(null,inst_27548,(0),null);
var inst_27550 = cljs.core.nth.call(null,inst_27548,(1),null);
var state_27637__$1 = (function (){var statearr_27640 = state_27637;
(statearr_27640[(8)] = inst_27549);

return statearr_27640;
})();
if(cljs.core.truth_(inst_27550)){
var statearr_27641_27724 = state_27637__$1;
(statearr_27641_27724[(1)] = (22));

} else {
var statearr_27642_27725 = state_27637__$1;
(statearr_27642_27725[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (27))){
var inst_27578 = (state_27637[(9)]);
var inst_27580 = (state_27637[(10)]);
var inst_27585 = (state_27637[(11)]);
var inst_27505 = (state_27637[(12)]);
var inst_27585__$1 = cljs.core._nth.call(null,inst_27578,inst_27580);
var inst_27586 = cljs.core.async.put_BANG_.call(null,inst_27585__$1,inst_27505,done);
var state_27637__$1 = (function (){var statearr_27643 = state_27637;
(statearr_27643[(11)] = inst_27585__$1);

return statearr_27643;
})();
if(cljs.core.truth_(inst_27586)){
var statearr_27644_27726 = state_27637__$1;
(statearr_27644_27726[(1)] = (30));

} else {
var statearr_27645_27727 = state_27637__$1;
(statearr_27645_27727[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (1))){
var state_27637__$1 = state_27637;
var statearr_27646_27728 = state_27637__$1;
(statearr_27646_27728[(2)] = null);

(statearr_27646_27728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (24))){
var inst_27536 = (state_27637[(7)]);
var inst_27555 = (state_27637[(2)]);
var inst_27556 = cljs.core.next.call(null,inst_27536);
var inst_27514 = inst_27556;
var inst_27515 = null;
var inst_27516 = (0);
var inst_27517 = (0);
var state_27637__$1 = (function (){var statearr_27647 = state_27637;
(statearr_27647[(13)] = inst_27515);

(statearr_27647[(14)] = inst_27517);

(statearr_27647[(15)] = inst_27514);

(statearr_27647[(16)] = inst_27555);

(statearr_27647[(17)] = inst_27516);

return statearr_27647;
})();
var statearr_27648_27729 = state_27637__$1;
(statearr_27648_27729[(2)] = null);

(statearr_27648_27729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (39))){
var state_27637__$1 = state_27637;
var statearr_27652_27730 = state_27637__$1;
(statearr_27652_27730[(2)] = null);

(statearr_27652_27730[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (4))){
var inst_27505 = (state_27637[(12)]);
var inst_27505__$1 = (state_27637[(2)]);
var inst_27506 = (inst_27505__$1 == null);
var state_27637__$1 = (function (){var statearr_27653 = state_27637;
(statearr_27653[(12)] = inst_27505__$1);

return statearr_27653;
})();
if(cljs.core.truth_(inst_27506)){
var statearr_27654_27731 = state_27637__$1;
(statearr_27654_27731[(1)] = (5));

} else {
var statearr_27655_27732 = state_27637__$1;
(statearr_27655_27732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (15))){
var inst_27515 = (state_27637[(13)]);
var inst_27517 = (state_27637[(14)]);
var inst_27514 = (state_27637[(15)]);
var inst_27516 = (state_27637[(17)]);
var inst_27532 = (state_27637[(2)]);
var inst_27533 = (inst_27517 + (1));
var tmp27649 = inst_27515;
var tmp27650 = inst_27514;
var tmp27651 = inst_27516;
var inst_27514__$1 = tmp27650;
var inst_27515__$1 = tmp27649;
var inst_27516__$1 = tmp27651;
var inst_27517__$1 = inst_27533;
var state_27637__$1 = (function (){var statearr_27656 = state_27637;
(statearr_27656[(13)] = inst_27515__$1);

(statearr_27656[(14)] = inst_27517__$1);

(statearr_27656[(15)] = inst_27514__$1);

(statearr_27656[(18)] = inst_27532);

(statearr_27656[(17)] = inst_27516__$1);

return statearr_27656;
})();
var statearr_27657_27733 = state_27637__$1;
(statearr_27657_27733[(2)] = null);

(statearr_27657_27733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (21))){
var inst_27559 = (state_27637[(2)]);
var state_27637__$1 = state_27637;
var statearr_27661_27734 = state_27637__$1;
(statearr_27661_27734[(2)] = inst_27559);

(statearr_27661_27734[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (31))){
var inst_27585 = (state_27637[(11)]);
var inst_27589 = done.call(null,null);
var inst_27590 = cljs.core.async.untap_STAR_.call(null,m,inst_27585);
var state_27637__$1 = (function (){var statearr_27662 = state_27637;
(statearr_27662[(19)] = inst_27589);

return statearr_27662;
})();
var statearr_27663_27735 = state_27637__$1;
(statearr_27663_27735[(2)] = inst_27590);

(statearr_27663_27735[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (32))){
var inst_27579 = (state_27637[(20)]);
var inst_27577 = (state_27637[(21)]);
var inst_27578 = (state_27637[(9)]);
var inst_27580 = (state_27637[(10)]);
var inst_27592 = (state_27637[(2)]);
var inst_27593 = (inst_27580 + (1));
var tmp27658 = inst_27579;
var tmp27659 = inst_27577;
var tmp27660 = inst_27578;
var inst_27577__$1 = tmp27659;
var inst_27578__$1 = tmp27660;
var inst_27579__$1 = tmp27658;
var inst_27580__$1 = inst_27593;
var state_27637__$1 = (function (){var statearr_27664 = state_27637;
(statearr_27664[(20)] = inst_27579__$1);

(statearr_27664[(21)] = inst_27577__$1);

(statearr_27664[(9)] = inst_27578__$1);

(statearr_27664[(10)] = inst_27580__$1);

(statearr_27664[(22)] = inst_27592);

return statearr_27664;
})();
var statearr_27665_27736 = state_27637__$1;
(statearr_27665_27736[(2)] = null);

(statearr_27665_27736[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (40))){
var inst_27605 = (state_27637[(23)]);
var inst_27609 = done.call(null,null);
var inst_27610 = cljs.core.async.untap_STAR_.call(null,m,inst_27605);
var state_27637__$1 = (function (){var statearr_27666 = state_27637;
(statearr_27666[(24)] = inst_27609);

return statearr_27666;
})();
var statearr_27667_27737 = state_27637__$1;
(statearr_27667_27737[(2)] = inst_27610);

(statearr_27667_27737[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (33))){
var inst_27596 = (state_27637[(25)]);
var inst_27598 = cljs.core.chunked_seq_QMARK_.call(null,inst_27596);
var state_27637__$1 = state_27637;
if(inst_27598){
var statearr_27668_27738 = state_27637__$1;
(statearr_27668_27738[(1)] = (36));

} else {
var statearr_27669_27739 = state_27637__$1;
(statearr_27669_27739[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (13))){
var inst_27526 = (state_27637[(26)]);
var inst_27529 = cljs.core.async.close_BANG_.call(null,inst_27526);
var state_27637__$1 = state_27637;
var statearr_27670_27740 = state_27637__$1;
(statearr_27670_27740[(2)] = inst_27529);

(statearr_27670_27740[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (22))){
var inst_27549 = (state_27637[(8)]);
var inst_27552 = cljs.core.async.close_BANG_.call(null,inst_27549);
var state_27637__$1 = state_27637;
var statearr_27671_27741 = state_27637__$1;
(statearr_27671_27741[(2)] = inst_27552);

(statearr_27671_27741[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (36))){
var inst_27596 = (state_27637[(25)]);
var inst_27600 = cljs.core.chunk_first.call(null,inst_27596);
var inst_27601 = cljs.core.chunk_rest.call(null,inst_27596);
var inst_27602 = cljs.core.count.call(null,inst_27600);
var inst_27577 = inst_27601;
var inst_27578 = inst_27600;
var inst_27579 = inst_27602;
var inst_27580 = (0);
var state_27637__$1 = (function (){var statearr_27672 = state_27637;
(statearr_27672[(20)] = inst_27579);

(statearr_27672[(21)] = inst_27577);

(statearr_27672[(9)] = inst_27578);

(statearr_27672[(10)] = inst_27580);

return statearr_27672;
})();
var statearr_27673_27742 = state_27637__$1;
(statearr_27673_27742[(2)] = null);

(statearr_27673_27742[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (41))){
var inst_27596 = (state_27637[(25)]);
var inst_27612 = (state_27637[(2)]);
var inst_27613 = cljs.core.next.call(null,inst_27596);
var inst_27577 = inst_27613;
var inst_27578 = null;
var inst_27579 = (0);
var inst_27580 = (0);
var state_27637__$1 = (function (){var statearr_27674 = state_27637;
(statearr_27674[(20)] = inst_27579);

(statearr_27674[(21)] = inst_27577);

(statearr_27674[(27)] = inst_27612);

(statearr_27674[(9)] = inst_27578);

(statearr_27674[(10)] = inst_27580);

return statearr_27674;
})();
var statearr_27675_27743 = state_27637__$1;
(statearr_27675_27743[(2)] = null);

(statearr_27675_27743[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (43))){
var state_27637__$1 = state_27637;
var statearr_27676_27744 = state_27637__$1;
(statearr_27676_27744[(2)] = null);

(statearr_27676_27744[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (29))){
var inst_27621 = (state_27637[(2)]);
var state_27637__$1 = state_27637;
var statearr_27677_27745 = state_27637__$1;
(statearr_27677_27745[(2)] = inst_27621);

(statearr_27677_27745[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (44))){
var inst_27630 = (state_27637[(2)]);
var state_27637__$1 = (function (){var statearr_27678 = state_27637;
(statearr_27678[(28)] = inst_27630);

return statearr_27678;
})();
var statearr_27679_27746 = state_27637__$1;
(statearr_27679_27746[(2)] = null);

(statearr_27679_27746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (6))){
var inst_27569 = (state_27637[(29)]);
var inst_27568 = cljs.core.deref.call(null,cs);
var inst_27569__$1 = cljs.core.keys.call(null,inst_27568);
var inst_27570 = cljs.core.count.call(null,inst_27569__$1);
var inst_27571 = cljs.core.reset_BANG_.call(null,dctr,inst_27570);
var inst_27576 = cljs.core.seq.call(null,inst_27569__$1);
var inst_27577 = inst_27576;
var inst_27578 = null;
var inst_27579 = (0);
var inst_27580 = (0);
var state_27637__$1 = (function (){var statearr_27680 = state_27637;
(statearr_27680[(20)] = inst_27579);

(statearr_27680[(21)] = inst_27577);

(statearr_27680[(9)] = inst_27578);

(statearr_27680[(29)] = inst_27569__$1);

(statearr_27680[(10)] = inst_27580);

(statearr_27680[(30)] = inst_27571);

return statearr_27680;
})();
var statearr_27681_27747 = state_27637__$1;
(statearr_27681_27747[(2)] = null);

(statearr_27681_27747[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (28))){
var inst_27577 = (state_27637[(21)]);
var inst_27596 = (state_27637[(25)]);
var inst_27596__$1 = cljs.core.seq.call(null,inst_27577);
var state_27637__$1 = (function (){var statearr_27682 = state_27637;
(statearr_27682[(25)] = inst_27596__$1);

return statearr_27682;
})();
if(inst_27596__$1){
var statearr_27683_27748 = state_27637__$1;
(statearr_27683_27748[(1)] = (33));

} else {
var statearr_27684_27749 = state_27637__$1;
(statearr_27684_27749[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (25))){
var inst_27579 = (state_27637[(20)]);
var inst_27580 = (state_27637[(10)]);
var inst_27582 = (inst_27580 < inst_27579);
var inst_27583 = inst_27582;
var state_27637__$1 = state_27637;
if(cljs.core.truth_(inst_27583)){
var statearr_27685_27750 = state_27637__$1;
(statearr_27685_27750[(1)] = (27));

} else {
var statearr_27686_27751 = state_27637__$1;
(statearr_27686_27751[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (34))){
var state_27637__$1 = state_27637;
var statearr_27687_27752 = state_27637__$1;
(statearr_27687_27752[(2)] = null);

(statearr_27687_27752[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (17))){
var state_27637__$1 = state_27637;
var statearr_27688_27753 = state_27637__$1;
(statearr_27688_27753[(2)] = null);

(statearr_27688_27753[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (3))){
var inst_27635 = (state_27637[(2)]);
var state_27637__$1 = state_27637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27637__$1,inst_27635);
} else {
if((state_val_27638 === (12))){
var inst_27564 = (state_27637[(2)]);
var state_27637__$1 = state_27637;
var statearr_27689_27754 = state_27637__$1;
(statearr_27689_27754[(2)] = inst_27564);

(statearr_27689_27754[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (2))){
var state_27637__$1 = state_27637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27637__$1,(4),ch);
} else {
if((state_val_27638 === (23))){
var state_27637__$1 = state_27637;
var statearr_27690_27755 = state_27637__$1;
(statearr_27690_27755[(2)] = null);

(statearr_27690_27755[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (35))){
var inst_27619 = (state_27637[(2)]);
var state_27637__$1 = state_27637;
var statearr_27691_27756 = state_27637__$1;
(statearr_27691_27756[(2)] = inst_27619);

(statearr_27691_27756[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (19))){
var inst_27536 = (state_27637[(7)]);
var inst_27540 = cljs.core.chunk_first.call(null,inst_27536);
var inst_27541 = cljs.core.chunk_rest.call(null,inst_27536);
var inst_27542 = cljs.core.count.call(null,inst_27540);
var inst_27514 = inst_27541;
var inst_27515 = inst_27540;
var inst_27516 = inst_27542;
var inst_27517 = (0);
var state_27637__$1 = (function (){var statearr_27692 = state_27637;
(statearr_27692[(13)] = inst_27515);

(statearr_27692[(14)] = inst_27517);

(statearr_27692[(15)] = inst_27514);

(statearr_27692[(17)] = inst_27516);

return statearr_27692;
})();
var statearr_27693_27757 = state_27637__$1;
(statearr_27693_27757[(2)] = null);

(statearr_27693_27757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (11))){
var inst_27514 = (state_27637[(15)]);
var inst_27536 = (state_27637[(7)]);
var inst_27536__$1 = cljs.core.seq.call(null,inst_27514);
var state_27637__$1 = (function (){var statearr_27694 = state_27637;
(statearr_27694[(7)] = inst_27536__$1);

return statearr_27694;
})();
if(inst_27536__$1){
var statearr_27695_27758 = state_27637__$1;
(statearr_27695_27758[(1)] = (16));

} else {
var statearr_27696_27759 = state_27637__$1;
(statearr_27696_27759[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (9))){
var inst_27566 = (state_27637[(2)]);
var state_27637__$1 = state_27637;
var statearr_27697_27760 = state_27637__$1;
(statearr_27697_27760[(2)] = inst_27566);

(statearr_27697_27760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (5))){
var inst_27512 = cljs.core.deref.call(null,cs);
var inst_27513 = cljs.core.seq.call(null,inst_27512);
var inst_27514 = inst_27513;
var inst_27515 = null;
var inst_27516 = (0);
var inst_27517 = (0);
var state_27637__$1 = (function (){var statearr_27698 = state_27637;
(statearr_27698[(13)] = inst_27515);

(statearr_27698[(14)] = inst_27517);

(statearr_27698[(15)] = inst_27514);

(statearr_27698[(17)] = inst_27516);

return statearr_27698;
})();
var statearr_27699_27761 = state_27637__$1;
(statearr_27699_27761[(2)] = null);

(statearr_27699_27761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (14))){
var state_27637__$1 = state_27637;
var statearr_27700_27762 = state_27637__$1;
(statearr_27700_27762[(2)] = null);

(statearr_27700_27762[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (45))){
var inst_27627 = (state_27637[(2)]);
var state_27637__$1 = state_27637;
var statearr_27701_27763 = state_27637__$1;
(statearr_27701_27763[(2)] = inst_27627);

(statearr_27701_27763[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (26))){
var inst_27569 = (state_27637[(29)]);
var inst_27623 = (state_27637[(2)]);
var inst_27624 = cljs.core.seq.call(null,inst_27569);
var state_27637__$1 = (function (){var statearr_27702 = state_27637;
(statearr_27702[(31)] = inst_27623);

return statearr_27702;
})();
if(inst_27624){
var statearr_27703_27764 = state_27637__$1;
(statearr_27703_27764[(1)] = (42));

} else {
var statearr_27704_27765 = state_27637__$1;
(statearr_27704_27765[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (16))){
var inst_27536 = (state_27637[(7)]);
var inst_27538 = cljs.core.chunked_seq_QMARK_.call(null,inst_27536);
var state_27637__$1 = state_27637;
if(inst_27538){
var statearr_27705_27766 = state_27637__$1;
(statearr_27705_27766[(1)] = (19));

} else {
var statearr_27706_27767 = state_27637__$1;
(statearr_27706_27767[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (38))){
var inst_27616 = (state_27637[(2)]);
var state_27637__$1 = state_27637;
var statearr_27707_27768 = state_27637__$1;
(statearr_27707_27768[(2)] = inst_27616);

(statearr_27707_27768[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (30))){
var state_27637__$1 = state_27637;
var statearr_27708_27769 = state_27637__$1;
(statearr_27708_27769[(2)] = null);

(statearr_27708_27769[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (10))){
var inst_27515 = (state_27637[(13)]);
var inst_27517 = (state_27637[(14)]);
var inst_27525 = cljs.core._nth.call(null,inst_27515,inst_27517);
var inst_27526 = cljs.core.nth.call(null,inst_27525,(0),null);
var inst_27527 = cljs.core.nth.call(null,inst_27525,(1),null);
var state_27637__$1 = (function (){var statearr_27709 = state_27637;
(statearr_27709[(26)] = inst_27526);

return statearr_27709;
})();
if(cljs.core.truth_(inst_27527)){
var statearr_27710_27770 = state_27637__$1;
(statearr_27710_27770[(1)] = (13));

} else {
var statearr_27711_27771 = state_27637__$1;
(statearr_27711_27771[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (18))){
var inst_27562 = (state_27637[(2)]);
var state_27637__$1 = state_27637;
var statearr_27712_27772 = state_27637__$1;
(statearr_27712_27772[(2)] = inst_27562);

(statearr_27712_27772[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (42))){
var state_27637__$1 = state_27637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27637__$1,(45),dchan);
} else {
if((state_val_27638 === (37))){
var inst_27605 = (state_27637[(23)]);
var inst_27505 = (state_27637[(12)]);
var inst_27596 = (state_27637[(25)]);
var inst_27605__$1 = cljs.core.first.call(null,inst_27596);
var inst_27606 = cljs.core.async.put_BANG_.call(null,inst_27605__$1,inst_27505,done);
var state_27637__$1 = (function (){var statearr_27713 = state_27637;
(statearr_27713[(23)] = inst_27605__$1);

return statearr_27713;
})();
if(cljs.core.truth_(inst_27606)){
var statearr_27714_27773 = state_27637__$1;
(statearr_27714_27773[(1)] = (39));

} else {
var statearr_27715_27774 = state_27637__$1;
(statearr_27715_27774[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27638 === (8))){
var inst_27517 = (state_27637[(14)]);
var inst_27516 = (state_27637[(17)]);
var inst_27519 = (inst_27517 < inst_27516);
var inst_27520 = inst_27519;
var state_27637__$1 = state_27637;
if(cljs.core.truth_(inst_27520)){
var statearr_27716_27775 = state_27637__$1;
(statearr_27716_27775[(1)] = (10));

} else {
var statearr_27717_27776 = state_27637__$1;
(statearr_27717_27776[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__24858__auto__ = null;
var cljs$core$async$mult_$_state_machine__24858__auto____0 = (function (){
var statearr_27718 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27718[(0)] = cljs$core$async$mult_$_state_machine__24858__auto__);

(statearr_27718[(1)] = (1));

return statearr_27718;
});
var cljs$core$async$mult_$_state_machine__24858__auto____1 = (function (state_27637){
while(true){
var ret_value__24859__auto__ = (function (){try{while(true){
var result__24860__auto__ = switch__24857__auto__.call(null,state_27637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24860__auto__;
}
break;
}
}catch (e27719){if((e27719 instanceof Object)){
var ex__24861__auto__ = e27719;
var statearr_27720_27777 = state_27637;
(statearr_27720_27777[(5)] = ex__24861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27778 = state_27637;
state_27637 = G__27778;
continue;
} else {
return ret_value__24859__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24858__auto__ = function(state_27637){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24858__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24858__auto____1.call(this,state_27637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24858__auto____0;
cljs$core$async$mult_$_state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24858__auto____1;
return cljs$core$async$mult_$_state_machine__24858__auto__;
})()
})();
var state__25026__auto__ = (function (){var statearr_27721 = f__25025__auto__.call(null);
(statearr_27721[(6)] = c__25024__auto___27722);

return statearr_27721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25026__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__27780 = arguments.length;
switch (G__27780) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_27782 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_27782.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_27783 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_27783.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_27784 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_27784.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_27785 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_27785.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_27786 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_27786.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27797 = arguments.length;
var i__4737__auto___27798 = (0);
while(true){
if((i__4737__auto___27798 < len__4736__auto___27797)){
args__4742__auto__.push((arguments[i__4737__auto___27798]));

var G__27799 = (i__4737__auto___27798 + (1));
i__4737__auto___27798 = G__27799;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27791){
var map__27792 = p__27791;
var map__27792__$1 = (((((!((map__27792 == null))))?(((((map__27792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27792):map__27792);
var opts = map__27792__$1;
var statearr_27794_27800 = state;
(statearr_27794_27800[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_27795_27801 = state;
(statearr_27795_27801[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_27796_27802 = state;
(statearr_27796_27802[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27787){
var G__27788 = cljs.core.first.call(null,seq27787);
var seq27787__$1 = cljs.core.next.call(null,seq27787);
var G__27789 = cljs.core.first.call(null,seq27787__$1);
var seq27787__$2 = cljs.core.next.call(null,seq27787__$1);
var G__27790 = cljs.core.first.call(null,seq27787__$2);
var seq27787__$3 = cljs.core.next.call(null,seq27787__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27788,G__27789,G__27790,seq27787__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27803 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27803 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27804){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27804 = meta27804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27805,meta27804__$1){
var self__ = this;
var _27805__$1 = this;
return (new cljs.core.async.t_cljs$core$async27803(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27804__$1));
}));

(cljs.core.async.t_cljs$core$async27803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27805){
var self__ = this;
var _27805__$1 = this;
return self__.meta27804;
}));

(cljs.core.async.t_cljs$core$async27803.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27803.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async27803.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27803.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27803.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27803.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27803.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27803.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async27803.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27804","meta27804",-44422893,null)], null);
}));

(cljs.core.async.t_cljs$core$async27803.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27803.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27803");

(cljs.core.async.t_cljs$core$async27803.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27803");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27803.
 */
cljs.core.async.__GT_t_cljs$core$async27803 = (function cljs$core$async$mix_$___GT_t_cljs$core$async27803(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27804){
return (new cljs.core.async.t_cljs$core$async27803(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27804));
});

}

return (new cljs.core.async.t_cljs$core$async27803(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25024__auto___27967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25025__auto__ = (function (){var switch__24857__auto__ = (function (state_27907){
var state_val_27908 = (state_27907[(1)]);
if((state_val_27908 === (7))){
var inst_27822 = (state_27907[(2)]);
var state_27907__$1 = state_27907;
var statearr_27909_27968 = state_27907__$1;
(statearr_27909_27968[(2)] = inst_27822);

(statearr_27909_27968[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (20))){
var inst_27834 = (state_27907[(7)]);
var state_27907__$1 = state_27907;
var statearr_27910_27969 = state_27907__$1;
(statearr_27910_27969[(2)] = inst_27834);

(statearr_27910_27969[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (27))){
var state_27907__$1 = state_27907;
var statearr_27911_27970 = state_27907__$1;
(statearr_27911_27970[(2)] = null);

(statearr_27911_27970[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (1))){
var inst_27809 = (state_27907[(8)]);
var inst_27809__$1 = calc_state.call(null);
var inst_27811 = (inst_27809__$1 == null);
var inst_27812 = cljs.core.not.call(null,inst_27811);
var state_27907__$1 = (function (){var statearr_27912 = state_27907;
(statearr_27912[(8)] = inst_27809__$1);

return statearr_27912;
})();
if(inst_27812){
var statearr_27913_27971 = state_27907__$1;
(statearr_27913_27971[(1)] = (2));

} else {
var statearr_27914_27972 = state_27907__$1;
(statearr_27914_27972[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (24))){
var inst_27867 = (state_27907[(9)]);
var inst_27881 = (state_27907[(10)]);
var inst_27858 = (state_27907[(11)]);
var inst_27881__$1 = inst_27858.call(null,inst_27867);
var state_27907__$1 = (function (){var statearr_27915 = state_27907;
(statearr_27915[(10)] = inst_27881__$1);

return statearr_27915;
})();
if(cljs.core.truth_(inst_27881__$1)){
var statearr_27916_27973 = state_27907__$1;
(statearr_27916_27973[(1)] = (29));

} else {
var statearr_27917_27974 = state_27907__$1;
(statearr_27917_27974[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (4))){
var inst_27825 = (state_27907[(2)]);
var state_27907__$1 = state_27907;
if(cljs.core.truth_(inst_27825)){
var statearr_27918_27975 = state_27907__$1;
(statearr_27918_27975[(1)] = (8));

} else {
var statearr_27919_27976 = state_27907__$1;
(statearr_27919_27976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (15))){
var inst_27852 = (state_27907[(2)]);
var state_27907__$1 = state_27907;
if(cljs.core.truth_(inst_27852)){
var statearr_27920_27977 = state_27907__$1;
(statearr_27920_27977[(1)] = (19));

} else {
var statearr_27921_27978 = state_27907__$1;
(statearr_27921_27978[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (21))){
var inst_27857 = (state_27907[(12)]);
var inst_27857__$1 = (state_27907[(2)]);
var inst_27858 = cljs.core.get.call(null,inst_27857__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27859 = cljs.core.get.call(null,inst_27857__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27860 = cljs.core.get.call(null,inst_27857__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27907__$1 = (function (){var statearr_27922 = state_27907;
(statearr_27922[(12)] = inst_27857__$1);

(statearr_27922[(11)] = inst_27858);

(statearr_27922[(13)] = inst_27859);

return statearr_27922;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27907__$1,(22),inst_27860);
} else {
if((state_val_27908 === (31))){
var inst_27889 = (state_27907[(2)]);
var state_27907__$1 = state_27907;
if(cljs.core.truth_(inst_27889)){
var statearr_27923_27979 = state_27907__$1;
(statearr_27923_27979[(1)] = (32));

} else {
var statearr_27924_27980 = state_27907__$1;
(statearr_27924_27980[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (32))){
var inst_27866 = (state_27907[(14)]);
var state_27907__$1 = state_27907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27907__$1,(35),out,inst_27866);
} else {
if((state_val_27908 === (33))){
var inst_27857 = (state_27907[(12)]);
var inst_27834 = inst_27857;
var state_27907__$1 = (function (){var statearr_27925 = state_27907;
(statearr_27925[(7)] = inst_27834);

return statearr_27925;
})();
var statearr_27926_27981 = state_27907__$1;
(statearr_27926_27981[(2)] = null);

(statearr_27926_27981[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (13))){
var inst_27834 = (state_27907[(7)]);
var inst_27841 = inst_27834.cljs$lang$protocol_mask$partition0$;
var inst_27842 = (inst_27841 & (64));
var inst_27843 = inst_27834.cljs$core$ISeq$;
var inst_27844 = (cljs.core.PROTOCOL_SENTINEL === inst_27843);
var inst_27845 = ((inst_27842) || (inst_27844));
var state_27907__$1 = state_27907;
if(cljs.core.truth_(inst_27845)){
var statearr_27927_27982 = state_27907__$1;
(statearr_27927_27982[(1)] = (16));

} else {
var statearr_27928_27983 = state_27907__$1;
(statearr_27928_27983[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (22))){
var inst_27867 = (state_27907[(9)]);
var inst_27866 = (state_27907[(14)]);
var inst_27865 = (state_27907[(2)]);
var inst_27866__$1 = cljs.core.nth.call(null,inst_27865,(0),null);
var inst_27867__$1 = cljs.core.nth.call(null,inst_27865,(1),null);
var inst_27868 = (inst_27866__$1 == null);
var inst_27869 = cljs.core._EQ_.call(null,inst_27867__$1,change);
var inst_27870 = ((inst_27868) || (inst_27869));
var state_27907__$1 = (function (){var statearr_27929 = state_27907;
(statearr_27929[(9)] = inst_27867__$1);

(statearr_27929[(14)] = inst_27866__$1);

return statearr_27929;
})();
if(cljs.core.truth_(inst_27870)){
var statearr_27930_27984 = state_27907__$1;
(statearr_27930_27984[(1)] = (23));

} else {
var statearr_27931_27985 = state_27907__$1;
(statearr_27931_27985[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (36))){
var inst_27857 = (state_27907[(12)]);
var inst_27834 = inst_27857;
var state_27907__$1 = (function (){var statearr_27932 = state_27907;
(statearr_27932[(7)] = inst_27834);

return statearr_27932;
})();
var statearr_27933_27986 = state_27907__$1;
(statearr_27933_27986[(2)] = null);

(statearr_27933_27986[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (29))){
var inst_27881 = (state_27907[(10)]);
var state_27907__$1 = state_27907;
var statearr_27934_27987 = state_27907__$1;
(statearr_27934_27987[(2)] = inst_27881);

(statearr_27934_27987[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (6))){
var state_27907__$1 = state_27907;
var statearr_27935_27988 = state_27907__$1;
(statearr_27935_27988[(2)] = false);

(statearr_27935_27988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (28))){
var inst_27877 = (state_27907[(2)]);
var inst_27878 = calc_state.call(null);
var inst_27834 = inst_27878;
var state_27907__$1 = (function (){var statearr_27936 = state_27907;
(statearr_27936[(7)] = inst_27834);

(statearr_27936[(15)] = inst_27877);

return statearr_27936;
})();
var statearr_27937_27989 = state_27907__$1;
(statearr_27937_27989[(2)] = null);

(statearr_27937_27989[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (25))){
var inst_27903 = (state_27907[(2)]);
var state_27907__$1 = state_27907;
var statearr_27938_27990 = state_27907__$1;
(statearr_27938_27990[(2)] = inst_27903);

(statearr_27938_27990[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (34))){
var inst_27901 = (state_27907[(2)]);
var state_27907__$1 = state_27907;
var statearr_27939_27991 = state_27907__$1;
(statearr_27939_27991[(2)] = inst_27901);

(statearr_27939_27991[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (17))){
var state_27907__$1 = state_27907;
var statearr_27940_27992 = state_27907__$1;
(statearr_27940_27992[(2)] = false);

(statearr_27940_27992[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (3))){
var state_27907__$1 = state_27907;
var statearr_27941_27993 = state_27907__$1;
(statearr_27941_27993[(2)] = false);

(statearr_27941_27993[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (12))){
var inst_27905 = (state_27907[(2)]);
var state_27907__$1 = state_27907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27907__$1,inst_27905);
} else {
if((state_val_27908 === (2))){
var inst_27809 = (state_27907[(8)]);
var inst_27814 = inst_27809.cljs$lang$protocol_mask$partition0$;
var inst_27815 = (inst_27814 & (64));
var inst_27816 = inst_27809.cljs$core$ISeq$;
var inst_27817 = (cljs.core.PROTOCOL_SENTINEL === inst_27816);
var inst_27818 = ((inst_27815) || (inst_27817));
var state_27907__$1 = state_27907;
if(cljs.core.truth_(inst_27818)){
var statearr_27942_27994 = state_27907__$1;
(statearr_27942_27994[(1)] = (5));

} else {
var statearr_27943_27995 = state_27907__$1;
(statearr_27943_27995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (23))){
var inst_27866 = (state_27907[(14)]);
var inst_27872 = (inst_27866 == null);
var state_27907__$1 = state_27907;
if(cljs.core.truth_(inst_27872)){
var statearr_27944_27996 = state_27907__$1;
(statearr_27944_27996[(1)] = (26));

} else {
var statearr_27945_27997 = state_27907__$1;
(statearr_27945_27997[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (35))){
var inst_27892 = (state_27907[(2)]);
var state_27907__$1 = state_27907;
if(cljs.core.truth_(inst_27892)){
var statearr_27946_27998 = state_27907__$1;
(statearr_27946_27998[(1)] = (36));

} else {
var statearr_27947_27999 = state_27907__$1;
(statearr_27947_27999[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (19))){
var inst_27834 = (state_27907[(7)]);
var inst_27854 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27834);
var state_27907__$1 = state_27907;
var statearr_27948_28000 = state_27907__$1;
(statearr_27948_28000[(2)] = inst_27854);

(statearr_27948_28000[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (11))){
var inst_27834 = (state_27907[(7)]);
var inst_27838 = (inst_27834 == null);
var inst_27839 = cljs.core.not.call(null,inst_27838);
var state_27907__$1 = state_27907;
if(inst_27839){
var statearr_27949_28001 = state_27907__$1;
(statearr_27949_28001[(1)] = (13));

} else {
var statearr_27950_28002 = state_27907__$1;
(statearr_27950_28002[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (9))){
var inst_27809 = (state_27907[(8)]);
var state_27907__$1 = state_27907;
var statearr_27951_28003 = state_27907__$1;
(statearr_27951_28003[(2)] = inst_27809);

(statearr_27951_28003[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (5))){
var state_27907__$1 = state_27907;
var statearr_27952_28004 = state_27907__$1;
(statearr_27952_28004[(2)] = true);

(statearr_27952_28004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (14))){
var state_27907__$1 = state_27907;
var statearr_27953_28005 = state_27907__$1;
(statearr_27953_28005[(2)] = false);

(statearr_27953_28005[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (26))){
var inst_27867 = (state_27907[(9)]);
var inst_27874 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27867);
var state_27907__$1 = state_27907;
var statearr_27954_28006 = state_27907__$1;
(statearr_27954_28006[(2)] = inst_27874);

(statearr_27954_28006[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (16))){
var state_27907__$1 = state_27907;
var statearr_27955_28007 = state_27907__$1;
(statearr_27955_28007[(2)] = true);

(statearr_27955_28007[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (38))){
var inst_27897 = (state_27907[(2)]);
var state_27907__$1 = state_27907;
var statearr_27956_28008 = state_27907__$1;
(statearr_27956_28008[(2)] = inst_27897);

(statearr_27956_28008[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (30))){
var inst_27867 = (state_27907[(9)]);
var inst_27858 = (state_27907[(11)]);
var inst_27859 = (state_27907[(13)]);
var inst_27884 = cljs.core.empty_QMARK_.call(null,inst_27858);
var inst_27885 = inst_27859.call(null,inst_27867);
var inst_27886 = cljs.core.not.call(null,inst_27885);
var inst_27887 = ((inst_27884) && (inst_27886));
var state_27907__$1 = state_27907;
var statearr_27957_28009 = state_27907__$1;
(statearr_27957_28009[(2)] = inst_27887);

(statearr_27957_28009[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (10))){
var inst_27809 = (state_27907[(8)]);
var inst_27830 = (state_27907[(2)]);
var inst_27831 = cljs.core.get.call(null,inst_27830,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27832 = cljs.core.get.call(null,inst_27830,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27833 = cljs.core.get.call(null,inst_27830,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27834 = inst_27809;
var state_27907__$1 = (function (){var statearr_27958 = state_27907;
(statearr_27958[(7)] = inst_27834);

(statearr_27958[(16)] = inst_27831);

(statearr_27958[(17)] = inst_27832);

(statearr_27958[(18)] = inst_27833);

return statearr_27958;
})();
var statearr_27959_28010 = state_27907__$1;
(statearr_27959_28010[(2)] = null);

(statearr_27959_28010[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (18))){
var inst_27849 = (state_27907[(2)]);
var state_27907__$1 = state_27907;
var statearr_27960_28011 = state_27907__$1;
(statearr_27960_28011[(2)] = inst_27849);

(statearr_27960_28011[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (37))){
var state_27907__$1 = state_27907;
var statearr_27961_28012 = state_27907__$1;
(statearr_27961_28012[(2)] = null);

(statearr_27961_28012[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27908 === (8))){
var inst_27809 = (state_27907[(8)]);
var inst_27827 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27809);
var state_27907__$1 = state_27907;
var statearr_27962_28013 = state_27907__$1;
(statearr_27962_28013[(2)] = inst_27827);

(statearr_27962_28013[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__24858__auto__ = null;
var cljs$core$async$mix_$_state_machine__24858__auto____0 = (function (){
var statearr_27963 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27963[(0)] = cljs$core$async$mix_$_state_machine__24858__auto__);

(statearr_27963[(1)] = (1));

return statearr_27963;
});
var cljs$core$async$mix_$_state_machine__24858__auto____1 = (function (state_27907){
while(true){
var ret_value__24859__auto__ = (function (){try{while(true){
var result__24860__auto__ = switch__24857__auto__.call(null,state_27907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24860__auto__;
}
break;
}
}catch (e27964){if((e27964 instanceof Object)){
var ex__24861__auto__ = e27964;
var statearr_27965_28014 = state_27907;
(statearr_27965_28014[(5)] = ex__24861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28015 = state_27907;
state_27907 = G__28015;
continue;
} else {
return ret_value__24859__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24858__auto__ = function(state_27907){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24858__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24858__auto____1.call(this,state_27907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24858__auto____0;
cljs$core$async$mix_$_state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24858__auto____1;
return cljs$core$async$mix_$_state_machine__24858__auto__;
})()
})();
var state__25026__auto__ = (function (){var statearr_27966 = f__25025__auto__.call(null);
(statearr_27966[(6)] = c__25024__auto___27967);

return statearr_27966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25026__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_28018 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_28018.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_28019 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_28019.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_28020 = (function() {
var G__28021 = null;
var G__28021__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__28021__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__28021 = function(p,v){
switch(arguments.length){
case 1:
return G__28021__1.call(this,p);
case 2:
return G__28021__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28021.cljs$core$IFn$_invoke$arity$1 = G__28021__1;
G__28021.cljs$core$IFn$_invoke$arity$2 = G__28021__2;
return G__28021;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28017 = arguments.length;
switch (G__28017) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_28020.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_28020.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__28025 = arguments.length;
switch (G__28025) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__28023_SHARP_){
if(cljs.core.truth_(p1__28023_SHARP_.call(null,topic))){
return p1__28023_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28023_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28026 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28026 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28027){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28027 = meta28027;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28028,meta28027__$1){
var self__ = this;
var _28028__$1 = this;
return (new cljs.core.async.t_cljs$core$async28026(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28027__$1));
}));

(cljs.core.async.t_cljs$core$async28026.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28028){
var self__ = this;
var _28028__$1 = this;
return self__.meta28027;
}));

(cljs.core.async.t_cljs$core$async28026.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28026.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28026.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28026.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async28026.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async28026.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async28026.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async28026.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28027","meta28027",1896388472,null)], null);
}));

(cljs.core.async.t_cljs$core$async28026.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28026.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28026");

(cljs.core.async.t_cljs$core$async28026.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28026");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28026.
 */
cljs.core.async.__GT_t_cljs$core$async28026 = (function cljs$core$async$__GT_t_cljs$core$async28026(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28027){
return (new cljs.core.async.t_cljs$core$async28026(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28027));
});

}

return (new cljs.core.async.t_cljs$core$async28026(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25024__auto___28146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25025__auto__ = (function (){var switch__24857__auto__ = (function (state_28100){
var state_val_28101 = (state_28100[(1)]);
if((state_val_28101 === (7))){
var inst_28096 = (state_28100[(2)]);
var state_28100__$1 = state_28100;
var statearr_28102_28147 = state_28100__$1;
(statearr_28102_28147[(2)] = inst_28096);

(statearr_28102_28147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28101 === (20))){
var state_28100__$1 = state_28100;
var statearr_28103_28148 = state_28100__$1;
(statearr_28103_28148[(2)] = null);

(statearr_28103_28148[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28101 === (1))){
var state_28100__$1 = state_28100;
var statearr_28104_28149 = state_28100__$1;
(statearr_28104_28149[(2)] = null);

(statearr_28104_28149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28101 === (24))){
var inst_28079 = (state_28100[(7)]);
var inst_28088 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28079);
var state_28100__$1 = state_28100;
var statearr_28105_28150 = state_28100__$1;
(statearr_28105_28150[(2)] = inst_28088);

(statearr_28105_28150[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28101 === (4))){
var inst_28031 = (state_28100[(8)]);
var inst_28031__$1 = (state_28100[(2)]);
var inst_28032 = (inst_28031__$1 == null);
var state_28100__$1 = (function (){var statearr_28106 = state_28100;
(statearr_28106[(8)] = inst_28031__$1);

return statearr_28106;
})();
if(cljs.core.truth_(inst_28032)){
var statearr_28107_28151 = state_28100__$1;
(statearr_28107_28151[(1)] = (5));

} else {
var statearr_28108_28152 = state_28100__$1;
(statearr_28108_28152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28101 === (15))){
var inst_28073 = (state_28100[(2)]);
var state_28100__$1 = state_28100;
var statearr_28109_28153 = state_28100__$1;
(statearr_28109_28153[(2)] = inst_28073);

(statearr_28109_28153[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28101 === (21))){
var inst_28093 = (state_28100[(2)]);
var state_28100__$1 = (function (){var statearr_28110 = state_28100;
(statearr_28110[(9)] = inst_28093);

return statearr_28110;
})();
var statearr_28111_28154 = state_28100__$1;
(statearr_28111_28154[(2)] = null);

(statearr_28111_28154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28101 === (13))){
var inst_28055 = (state_28100[(10)]);
var inst_28057 = cljs.core.chunked_seq_QMARK_.call(null,inst_28055);
var state_28100__$1 = state_28100;
if(inst_28057){
var statearr_28112_28155 = state_28100__$1;
(statearr_28112_28155[(1)] = (16));

} else {
var statearr_28113_28156 = state_28100__$1;
(statearr_28113_28156[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28101 === (22))){
var inst_28085 = (state_28100[(2)]);
var state_28100__$1 = state_28100;
if(cljs.core.truth_(inst_28085)){
var statearr_28114_28157 = state_28100__$1;
(statearr_28114_28157[(1)] = (23));

} else {
var statearr_28115_28158 = state_28100__$1;
(statearr_28115_28158[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28101 === (6))){
var inst_28081 = (state_28100[(11)]);
var inst_28079 = (state_28100[(7)]);
var inst_28031 = (state_28100[(8)]);
var inst_28079__$1 = topic_fn.call(null,inst_28031);
var inst_28080 = cljs.core.deref.call(null,mults);
var inst_28081__$1 = cljs.core.get.call(null,inst_28080,inst_28079__$1);
var state_28100__$1 = (function (){var statearr_28116 = state_28100;
(statearr_28116[(11)] = inst_28081__$1);

(statearr_28116[(7)] = inst_28079__$1);

return statearr_28116;
})();
if(cljs.core.truth_(inst_28081__$1)){
var statearr_28117_28159 = state_28100__$1;
(statearr_28117_28159[(1)] = (19));

} else {
var statearr_28118_28160 = state_28100__$1;
(statearr_28118_28160[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28101 === (25))){
var inst_28090 = (state_28100[(2)]);
var state_28100__$1 = state_28100;
var statearr_28119_28161 = state_28100__$1;
(statearr_28119_28161[(2)] = inst_28090);

(statearr_28119_28161[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28101 === (17))){
var inst_28055 = (state_28100[(10)]);
var inst_28064 = cljs.core.first.call(null,inst_28055);
var inst_28065 = cljs.core.async.muxch_STAR_.call(null,inst_28064);
var inst_28066 = cljs.core.async.close_BANG_.call(null,inst_28065);
var inst_28067 = cljs.core.next.call(null,inst_28055);
var inst_28041 = inst_28067;
var inst_28042 = null;
var inst_28043 = (0);
var inst_28044 = (0);
var state_28100__$1 = (function (){var statearr_28120 = state_28100;
(statearr_28120[(12)] = inst_28041);

(statearr_28120[(13)] = inst_28043);

(statearr_28120[(14)] = inst_28042);

(statearr_28120[(15)] = inst_28066);

(statearr_28120[(16)] = inst_28044);

return statearr_28120;
})();
var statearr_28121_28162 = state_28100__$1;
(statearr_28121_28162[(2)] = null);

(statearr_28121_28162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28101 === (3))){
var inst_28098 = (state_28100[(2)]);
var state_28100__$1 = state_28100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28100__$1,inst_28098);
} else {
if((state_val_28101 === (12))){
var inst_28075 = (state_28100[(2)]);
var state_28100__$1 = state_28100;
var statearr_28122_28163 = state_28100__$1;
(statearr_28122_28163[(2)] = inst_28075);

(statearr_28122_28163[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28101 === (2))){
var state_28100__$1 = state_28100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28100__$1,(4),ch);
} else {
if((state_val_28101 === (23))){
var state_28100__$1 = state_28100;
var statearr_28123_28164 = state_28100__$1;
(statearr_28123_28164[(2)] = null);

(statearr_28123_28164[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28101 === (19))){
var inst_28081 = (state_28100[(11)]);
var inst_28031 = (state_28100[(8)]);
var inst_28083 = cljs.core.async.muxch_STAR_.call(null,inst_28081);
var state_28100__$1 = state_28100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28100__$1,(22),inst_28083,inst_28031);
} else {
if((state_val_28101 === (11))){
var inst_28041 = (state_28100[(12)]);
var inst_28055 = (state_28100[(10)]);
var inst_28055__$1 = cljs.core.seq.call(null,inst_28041);
var state_28100__$1 = (function (){var statearr_28124 = state_28100;
(statearr_28124[(10)] = inst_28055__$1);

return statearr_28124;
})();
if(inst_28055__$1){
var statearr_28125_28165 = state_28100__$1;
(statearr_28125_28165[(1)] = (13));

} else {
var statearr_28126_28166 = state_28100__$1;
(statearr_28126_28166[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28101 === (9))){
var inst_28077 = (state_28100[(2)]);
var state_28100__$1 = state_28100;
var statearr_28127_28167 = state_28100__$1;
(statearr_28127_28167[(2)] = inst_28077);

(statearr_28127_28167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28101 === (5))){
var inst_28038 = cljs.core.deref.call(null,mults);
var inst_28039 = cljs.core.vals.call(null,inst_28038);
var inst_28040 = cljs.core.seq.call(null,inst_28039);
var inst_28041 = inst_28040;
var inst_28042 = null;
var inst_28043 = (0);
var inst_28044 = (0);
var state_28100__$1 = (function (){var statearr_28128 = state_28100;
(statearr_28128[(12)] = inst_28041);

(statearr_28128[(13)] = inst_28043);

(statearr_28128[(14)] = inst_28042);

(statearr_28128[(16)] = inst_28044);

return statearr_28128;
})();
var statearr_28129_28168 = state_28100__$1;
(statearr_28129_28168[(2)] = null);

(statearr_28129_28168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28101 === (14))){
var state_28100__$1 = state_28100;
var statearr_28133_28169 = state_28100__$1;
(statearr_28133_28169[(2)] = null);

(statearr_28133_28169[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28101 === (16))){
var inst_28055 = (state_28100[(10)]);
var inst_28059 = cljs.core.chunk_first.call(null,inst_28055);
var inst_28060 = cljs.core.chunk_rest.call(null,inst_28055);
var inst_28061 = cljs.core.count.call(null,inst_28059);
var inst_28041 = inst_28060;
var inst_28042 = inst_28059;
var inst_28043 = inst_28061;
var inst_28044 = (0);
var state_28100__$1 = (function (){var statearr_28134 = state_28100;
(statearr_28134[(12)] = inst_28041);

(statearr_28134[(13)] = inst_28043);

(statearr_28134[(14)] = inst_28042);

(statearr_28134[(16)] = inst_28044);

return statearr_28134;
})();
var statearr_28135_28170 = state_28100__$1;
(statearr_28135_28170[(2)] = null);

(statearr_28135_28170[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28101 === (10))){
var inst_28041 = (state_28100[(12)]);
var inst_28043 = (state_28100[(13)]);
var inst_28042 = (state_28100[(14)]);
var inst_28044 = (state_28100[(16)]);
var inst_28049 = cljs.core._nth.call(null,inst_28042,inst_28044);
var inst_28050 = cljs.core.async.muxch_STAR_.call(null,inst_28049);
var inst_28051 = cljs.core.async.close_BANG_.call(null,inst_28050);
var inst_28052 = (inst_28044 + (1));
var tmp28130 = inst_28041;
var tmp28131 = inst_28043;
var tmp28132 = inst_28042;
var inst_28041__$1 = tmp28130;
var inst_28042__$1 = tmp28132;
var inst_28043__$1 = tmp28131;
var inst_28044__$1 = inst_28052;
var state_28100__$1 = (function (){var statearr_28136 = state_28100;
(statearr_28136[(12)] = inst_28041__$1);

(statearr_28136[(13)] = inst_28043__$1);

(statearr_28136[(14)] = inst_28042__$1);

(statearr_28136[(17)] = inst_28051);

(statearr_28136[(16)] = inst_28044__$1);

return statearr_28136;
})();
var statearr_28137_28171 = state_28100__$1;
(statearr_28137_28171[(2)] = null);

(statearr_28137_28171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28101 === (18))){
var inst_28070 = (state_28100[(2)]);
var state_28100__$1 = state_28100;
var statearr_28138_28172 = state_28100__$1;
(statearr_28138_28172[(2)] = inst_28070);

(statearr_28138_28172[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28101 === (8))){
var inst_28043 = (state_28100[(13)]);
var inst_28044 = (state_28100[(16)]);
var inst_28046 = (inst_28044 < inst_28043);
var inst_28047 = inst_28046;
var state_28100__$1 = state_28100;
if(cljs.core.truth_(inst_28047)){
var statearr_28139_28173 = state_28100__$1;
(statearr_28139_28173[(1)] = (10));

} else {
var statearr_28140_28174 = state_28100__$1;
(statearr_28140_28174[(1)] = (11));

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
var cljs$core$async$state_machine__24858__auto__ = null;
var cljs$core$async$state_machine__24858__auto____0 = (function (){
var statearr_28141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28141[(0)] = cljs$core$async$state_machine__24858__auto__);

(statearr_28141[(1)] = (1));

return statearr_28141;
});
var cljs$core$async$state_machine__24858__auto____1 = (function (state_28100){
while(true){
var ret_value__24859__auto__ = (function (){try{while(true){
var result__24860__auto__ = switch__24857__auto__.call(null,state_28100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24860__auto__;
}
break;
}
}catch (e28142){if((e28142 instanceof Object)){
var ex__24861__auto__ = e28142;
var statearr_28143_28175 = state_28100;
(statearr_28143_28175[(5)] = ex__24861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28176 = state_28100;
state_28100 = G__28176;
continue;
} else {
return ret_value__24859__auto__;
}
break;
}
});
cljs$core$async$state_machine__24858__auto__ = function(state_28100){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24858__auto____1.call(this,state_28100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24858__auto____0;
cljs$core$async$state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24858__auto____1;
return cljs$core$async$state_machine__24858__auto__;
})()
})();
var state__25026__auto__ = (function (){var statearr_28144 = f__25025__auto__.call(null);
(statearr_28144[(6)] = c__25024__auto___28146);

return statearr_28144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25026__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__28178 = arguments.length;
switch (G__28178) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__28181 = arguments.length;
switch (G__28181) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__28184 = arguments.length;
switch (G__28184) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__25024__auto___28251 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25025__auto__ = (function (){var switch__24857__auto__ = (function (state_28223){
var state_val_28224 = (state_28223[(1)]);
if((state_val_28224 === (7))){
var state_28223__$1 = state_28223;
var statearr_28225_28252 = state_28223__$1;
(statearr_28225_28252[(2)] = null);

(statearr_28225_28252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (1))){
var state_28223__$1 = state_28223;
var statearr_28226_28253 = state_28223__$1;
(statearr_28226_28253[(2)] = null);

(statearr_28226_28253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (4))){
var inst_28187 = (state_28223[(7)]);
var inst_28189 = (inst_28187 < cnt);
var state_28223__$1 = state_28223;
if(cljs.core.truth_(inst_28189)){
var statearr_28227_28254 = state_28223__$1;
(statearr_28227_28254[(1)] = (6));

} else {
var statearr_28228_28255 = state_28223__$1;
(statearr_28228_28255[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (15))){
var inst_28219 = (state_28223[(2)]);
var state_28223__$1 = state_28223;
var statearr_28229_28256 = state_28223__$1;
(statearr_28229_28256[(2)] = inst_28219);

(statearr_28229_28256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (13))){
var inst_28212 = cljs.core.async.close_BANG_.call(null,out);
var state_28223__$1 = state_28223;
var statearr_28230_28257 = state_28223__$1;
(statearr_28230_28257[(2)] = inst_28212);

(statearr_28230_28257[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (6))){
var state_28223__$1 = state_28223;
var statearr_28231_28258 = state_28223__$1;
(statearr_28231_28258[(2)] = null);

(statearr_28231_28258[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (3))){
var inst_28221 = (state_28223[(2)]);
var state_28223__$1 = state_28223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28223__$1,inst_28221);
} else {
if((state_val_28224 === (12))){
var inst_28209 = (state_28223[(8)]);
var inst_28209__$1 = (state_28223[(2)]);
var inst_28210 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28209__$1);
var state_28223__$1 = (function (){var statearr_28232 = state_28223;
(statearr_28232[(8)] = inst_28209__$1);

return statearr_28232;
})();
if(cljs.core.truth_(inst_28210)){
var statearr_28233_28259 = state_28223__$1;
(statearr_28233_28259[(1)] = (13));

} else {
var statearr_28234_28260 = state_28223__$1;
(statearr_28234_28260[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (2))){
var inst_28186 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28187 = (0);
var state_28223__$1 = (function (){var statearr_28235 = state_28223;
(statearr_28235[(9)] = inst_28186);

(statearr_28235[(7)] = inst_28187);

return statearr_28235;
})();
var statearr_28236_28261 = state_28223__$1;
(statearr_28236_28261[(2)] = null);

(statearr_28236_28261[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (11))){
var inst_28187 = (state_28223[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28223,(10),Object,null,(9));
var inst_28196 = chs__$1.call(null,inst_28187);
var inst_28197 = done.call(null,inst_28187);
var inst_28198 = cljs.core.async.take_BANG_.call(null,inst_28196,inst_28197);
var state_28223__$1 = state_28223;
var statearr_28237_28262 = state_28223__$1;
(statearr_28237_28262[(2)] = inst_28198);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28223__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (9))){
var inst_28187 = (state_28223[(7)]);
var inst_28200 = (state_28223[(2)]);
var inst_28201 = (inst_28187 + (1));
var inst_28187__$1 = inst_28201;
var state_28223__$1 = (function (){var statearr_28238 = state_28223;
(statearr_28238[(10)] = inst_28200);

(statearr_28238[(7)] = inst_28187__$1);

return statearr_28238;
})();
var statearr_28239_28263 = state_28223__$1;
(statearr_28239_28263[(2)] = null);

(statearr_28239_28263[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (5))){
var inst_28207 = (state_28223[(2)]);
var state_28223__$1 = (function (){var statearr_28240 = state_28223;
(statearr_28240[(11)] = inst_28207);

return statearr_28240;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28223__$1,(12),dchan);
} else {
if((state_val_28224 === (14))){
var inst_28209 = (state_28223[(8)]);
var inst_28214 = cljs.core.apply.call(null,f,inst_28209);
var state_28223__$1 = state_28223;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28223__$1,(16),out,inst_28214);
} else {
if((state_val_28224 === (16))){
var inst_28216 = (state_28223[(2)]);
var state_28223__$1 = (function (){var statearr_28241 = state_28223;
(statearr_28241[(12)] = inst_28216);

return statearr_28241;
})();
var statearr_28242_28264 = state_28223__$1;
(statearr_28242_28264[(2)] = null);

(statearr_28242_28264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (10))){
var inst_28191 = (state_28223[(2)]);
var inst_28192 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28223__$1 = (function (){var statearr_28243 = state_28223;
(statearr_28243[(13)] = inst_28191);

return statearr_28243;
})();
var statearr_28244_28265 = state_28223__$1;
(statearr_28244_28265[(2)] = inst_28192);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28223__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (8))){
var inst_28205 = (state_28223[(2)]);
var state_28223__$1 = state_28223;
var statearr_28245_28266 = state_28223__$1;
(statearr_28245_28266[(2)] = inst_28205);

(statearr_28245_28266[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__24858__auto__ = null;
var cljs$core$async$state_machine__24858__auto____0 = (function (){
var statearr_28246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28246[(0)] = cljs$core$async$state_machine__24858__auto__);

(statearr_28246[(1)] = (1));

return statearr_28246;
});
var cljs$core$async$state_machine__24858__auto____1 = (function (state_28223){
while(true){
var ret_value__24859__auto__ = (function (){try{while(true){
var result__24860__auto__ = switch__24857__auto__.call(null,state_28223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24860__auto__;
}
break;
}
}catch (e28247){if((e28247 instanceof Object)){
var ex__24861__auto__ = e28247;
var statearr_28248_28267 = state_28223;
(statearr_28248_28267[(5)] = ex__24861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28268 = state_28223;
state_28223 = G__28268;
continue;
} else {
return ret_value__24859__auto__;
}
break;
}
});
cljs$core$async$state_machine__24858__auto__ = function(state_28223){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24858__auto____1.call(this,state_28223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24858__auto____0;
cljs$core$async$state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24858__auto____1;
return cljs$core$async$state_machine__24858__auto__;
})()
})();
var state__25026__auto__ = (function (){var statearr_28249 = f__25025__auto__.call(null);
(statearr_28249[(6)] = c__25024__auto___28251);

return statearr_28249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25026__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__28271 = arguments.length;
switch (G__28271) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25024__auto___28325 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25025__auto__ = (function (){var switch__24857__auto__ = (function (state_28303){
var state_val_28304 = (state_28303[(1)]);
if((state_val_28304 === (7))){
var inst_28283 = (state_28303[(7)]);
var inst_28282 = (state_28303[(8)]);
var inst_28282__$1 = (state_28303[(2)]);
var inst_28283__$1 = cljs.core.nth.call(null,inst_28282__$1,(0),null);
var inst_28284 = cljs.core.nth.call(null,inst_28282__$1,(1),null);
var inst_28285 = (inst_28283__$1 == null);
var state_28303__$1 = (function (){var statearr_28305 = state_28303;
(statearr_28305[(9)] = inst_28284);

(statearr_28305[(7)] = inst_28283__$1);

(statearr_28305[(8)] = inst_28282__$1);

return statearr_28305;
})();
if(cljs.core.truth_(inst_28285)){
var statearr_28306_28326 = state_28303__$1;
(statearr_28306_28326[(1)] = (8));

} else {
var statearr_28307_28327 = state_28303__$1;
(statearr_28307_28327[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28304 === (1))){
var inst_28272 = cljs.core.vec.call(null,chs);
var inst_28273 = inst_28272;
var state_28303__$1 = (function (){var statearr_28308 = state_28303;
(statearr_28308[(10)] = inst_28273);

return statearr_28308;
})();
var statearr_28309_28328 = state_28303__$1;
(statearr_28309_28328[(2)] = null);

(statearr_28309_28328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28304 === (4))){
var inst_28273 = (state_28303[(10)]);
var state_28303__$1 = state_28303;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28303__$1,(7),inst_28273);
} else {
if((state_val_28304 === (6))){
var inst_28299 = (state_28303[(2)]);
var state_28303__$1 = state_28303;
var statearr_28310_28329 = state_28303__$1;
(statearr_28310_28329[(2)] = inst_28299);

(statearr_28310_28329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28304 === (3))){
var inst_28301 = (state_28303[(2)]);
var state_28303__$1 = state_28303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28303__$1,inst_28301);
} else {
if((state_val_28304 === (2))){
var inst_28273 = (state_28303[(10)]);
var inst_28275 = cljs.core.count.call(null,inst_28273);
var inst_28276 = (inst_28275 > (0));
var state_28303__$1 = state_28303;
if(cljs.core.truth_(inst_28276)){
var statearr_28312_28330 = state_28303__$1;
(statearr_28312_28330[(1)] = (4));

} else {
var statearr_28313_28331 = state_28303__$1;
(statearr_28313_28331[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28304 === (11))){
var inst_28273 = (state_28303[(10)]);
var inst_28292 = (state_28303[(2)]);
var tmp28311 = inst_28273;
var inst_28273__$1 = tmp28311;
var state_28303__$1 = (function (){var statearr_28314 = state_28303;
(statearr_28314[(11)] = inst_28292);

(statearr_28314[(10)] = inst_28273__$1);

return statearr_28314;
})();
var statearr_28315_28332 = state_28303__$1;
(statearr_28315_28332[(2)] = null);

(statearr_28315_28332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28304 === (9))){
var inst_28283 = (state_28303[(7)]);
var state_28303__$1 = state_28303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28303__$1,(11),out,inst_28283);
} else {
if((state_val_28304 === (5))){
var inst_28297 = cljs.core.async.close_BANG_.call(null,out);
var state_28303__$1 = state_28303;
var statearr_28316_28333 = state_28303__$1;
(statearr_28316_28333[(2)] = inst_28297);

(statearr_28316_28333[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28304 === (10))){
var inst_28295 = (state_28303[(2)]);
var state_28303__$1 = state_28303;
var statearr_28317_28334 = state_28303__$1;
(statearr_28317_28334[(2)] = inst_28295);

(statearr_28317_28334[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28304 === (8))){
var inst_28273 = (state_28303[(10)]);
var inst_28284 = (state_28303[(9)]);
var inst_28283 = (state_28303[(7)]);
var inst_28282 = (state_28303[(8)]);
var inst_28287 = (function (){var cs = inst_28273;
var vec__28278 = inst_28282;
var v = inst_28283;
var c = inst_28284;
return (function (p1__28269_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28269_SHARP_);
});
})();
var inst_28288 = cljs.core.filterv.call(null,inst_28287,inst_28273);
var inst_28273__$1 = inst_28288;
var state_28303__$1 = (function (){var statearr_28318 = state_28303;
(statearr_28318[(10)] = inst_28273__$1);

return statearr_28318;
})();
var statearr_28319_28335 = state_28303__$1;
(statearr_28319_28335[(2)] = null);

(statearr_28319_28335[(1)] = (2));


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
var cljs$core$async$state_machine__24858__auto__ = null;
var cljs$core$async$state_machine__24858__auto____0 = (function (){
var statearr_28320 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28320[(0)] = cljs$core$async$state_machine__24858__auto__);

(statearr_28320[(1)] = (1));

return statearr_28320;
});
var cljs$core$async$state_machine__24858__auto____1 = (function (state_28303){
while(true){
var ret_value__24859__auto__ = (function (){try{while(true){
var result__24860__auto__ = switch__24857__auto__.call(null,state_28303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24860__auto__;
}
break;
}
}catch (e28321){if((e28321 instanceof Object)){
var ex__24861__auto__ = e28321;
var statearr_28322_28336 = state_28303;
(statearr_28322_28336[(5)] = ex__24861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28337 = state_28303;
state_28303 = G__28337;
continue;
} else {
return ret_value__24859__auto__;
}
break;
}
});
cljs$core$async$state_machine__24858__auto__ = function(state_28303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24858__auto____1.call(this,state_28303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24858__auto____0;
cljs$core$async$state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24858__auto____1;
return cljs$core$async$state_machine__24858__auto__;
})()
})();
var state__25026__auto__ = (function (){var statearr_28323 = f__25025__auto__.call(null);
(statearr_28323[(6)] = c__25024__auto___28325);

return statearr_28323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25026__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__28339 = arguments.length;
switch (G__28339) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25024__auto___28384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25025__auto__ = (function (){var switch__24857__auto__ = (function (state_28363){
var state_val_28364 = (state_28363[(1)]);
if((state_val_28364 === (7))){
var inst_28345 = (state_28363[(7)]);
var inst_28345__$1 = (state_28363[(2)]);
var inst_28346 = (inst_28345__$1 == null);
var inst_28347 = cljs.core.not.call(null,inst_28346);
var state_28363__$1 = (function (){var statearr_28365 = state_28363;
(statearr_28365[(7)] = inst_28345__$1);

return statearr_28365;
})();
if(inst_28347){
var statearr_28366_28385 = state_28363__$1;
(statearr_28366_28385[(1)] = (8));

} else {
var statearr_28367_28386 = state_28363__$1;
(statearr_28367_28386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28364 === (1))){
var inst_28340 = (0);
var state_28363__$1 = (function (){var statearr_28368 = state_28363;
(statearr_28368[(8)] = inst_28340);

return statearr_28368;
})();
var statearr_28369_28387 = state_28363__$1;
(statearr_28369_28387[(2)] = null);

(statearr_28369_28387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28364 === (4))){
var state_28363__$1 = state_28363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28363__$1,(7),ch);
} else {
if((state_val_28364 === (6))){
var inst_28358 = (state_28363[(2)]);
var state_28363__$1 = state_28363;
var statearr_28370_28388 = state_28363__$1;
(statearr_28370_28388[(2)] = inst_28358);

(statearr_28370_28388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28364 === (3))){
var inst_28360 = (state_28363[(2)]);
var inst_28361 = cljs.core.async.close_BANG_.call(null,out);
var state_28363__$1 = (function (){var statearr_28371 = state_28363;
(statearr_28371[(9)] = inst_28360);

return statearr_28371;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28363__$1,inst_28361);
} else {
if((state_val_28364 === (2))){
var inst_28340 = (state_28363[(8)]);
var inst_28342 = (inst_28340 < n);
var state_28363__$1 = state_28363;
if(cljs.core.truth_(inst_28342)){
var statearr_28372_28389 = state_28363__$1;
(statearr_28372_28389[(1)] = (4));

} else {
var statearr_28373_28390 = state_28363__$1;
(statearr_28373_28390[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28364 === (11))){
var inst_28340 = (state_28363[(8)]);
var inst_28350 = (state_28363[(2)]);
var inst_28351 = (inst_28340 + (1));
var inst_28340__$1 = inst_28351;
var state_28363__$1 = (function (){var statearr_28374 = state_28363;
(statearr_28374[(10)] = inst_28350);

(statearr_28374[(8)] = inst_28340__$1);

return statearr_28374;
})();
var statearr_28375_28391 = state_28363__$1;
(statearr_28375_28391[(2)] = null);

(statearr_28375_28391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28364 === (9))){
var state_28363__$1 = state_28363;
var statearr_28376_28392 = state_28363__$1;
(statearr_28376_28392[(2)] = null);

(statearr_28376_28392[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28364 === (5))){
var state_28363__$1 = state_28363;
var statearr_28377_28393 = state_28363__$1;
(statearr_28377_28393[(2)] = null);

(statearr_28377_28393[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28364 === (10))){
var inst_28355 = (state_28363[(2)]);
var state_28363__$1 = state_28363;
var statearr_28378_28394 = state_28363__$1;
(statearr_28378_28394[(2)] = inst_28355);

(statearr_28378_28394[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28364 === (8))){
var inst_28345 = (state_28363[(7)]);
var state_28363__$1 = state_28363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28363__$1,(11),out,inst_28345);
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
var cljs$core$async$state_machine__24858__auto__ = null;
var cljs$core$async$state_machine__24858__auto____0 = (function (){
var statearr_28379 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28379[(0)] = cljs$core$async$state_machine__24858__auto__);

(statearr_28379[(1)] = (1));

return statearr_28379;
});
var cljs$core$async$state_machine__24858__auto____1 = (function (state_28363){
while(true){
var ret_value__24859__auto__ = (function (){try{while(true){
var result__24860__auto__ = switch__24857__auto__.call(null,state_28363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24860__auto__;
}
break;
}
}catch (e28380){if((e28380 instanceof Object)){
var ex__24861__auto__ = e28380;
var statearr_28381_28395 = state_28363;
(statearr_28381_28395[(5)] = ex__24861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28396 = state_28363;
state_28363 = G__28396;
continue;
} else {
return ret_value__24859__auto__;
}
break;
}
});
cljs$core$async$state_machine__24858__auto__ = function(state_28363){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24858__auto____1.call(this,state_28363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24858__auto____0;
cljs$core$async$state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24858__auto____1;
return cljs$core$async$state_machine__24858__auto__;
})()
})();
var state__25026__auto__ = (function (){var statearr_28382 = f__25025__auto__.call(null);
(statearr_28382[(6)] = c__25024__auto___28384);

return statearr_28382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25026__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28398 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28398 = (function (f,ch,meta28399){
this.f = f;
this.ch = ch;
this.meta28399 = meta28399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28400,meta28399__$1){
var self__ = this;
var _28400__$1 = this;
return (new cljs.core.async.t_cljs$core$async28398(self__.f,self__.ch,meta28399__$1));
}));

(cljs.core.async.t_cljs$core$async28398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28400){
var self__ = this;
var _28400__$1 = this;
return self__.meta28399;
}));

(cljs.core.async.t_cljs$core$async28398.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28398.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28398.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28398.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28398.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28401 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28401 = (function (f,ch,meta28399,_,fn1,meta28402){
this.f = f;
this.ch = ch;
this.meta28399 = meta28399;
this._ = _;
this.fn1 = fn1;
this.meta28402 = meta28402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28403,meta28402__$1){
var self__ = this;
var _28403__$1 = this;
return (new cljs.core.async.t_cljs$core$async28401(self__.f,self__.ch,self__.meta28399,self__._,self__.fn1,meta28402__$1));
}));

(cljs.core.async.t_cljs$core$async28401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28403){
var self__ = this;
var _28403__$1 = this;
return self__.meta28402;
}));

(cljs.core.async.t_cljs$core$async28401.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28401.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async28401.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28401.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__28397_SHARP_){
return f1.call(null,(((p1__28397_SHARP_ == null))?null:self__.f.call(null,p1__28397_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async28401.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28399","meta28399",-2133298971,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28398","cljs.core.async/t_cljs$core$async28398",197842536,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28402","meta28402",549377662,null)], null);
}));

(cljs.core.async.t_cljs$core$async28401.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28401.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28401");

(cljs.core.async.t_cljs$core$async28401.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28401");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28401.
 */
cljs.core.async.__GT_t_cljs$core$async28401 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28401(f__$1,ch__$1,meta28399__$1,___$2,fn1__$1,meta28402){
return (new cljs.core.async.t_cljs$core$async28401(f__$1,ch__$1,meta28399__$1,___$2,fn1__$1,meta28402));
});

}

return (new cljs.core.async.t_cljs$core$async28401(self__.f,self__.ch,self__.meta28399,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async28398.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28398.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async28398.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28399","meta28399",-2133298971,null)], null);
}));

(cljs.core.async.t_cljs$core$async28398.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28398.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28398");

(cljs.core.async.t_cljs$core$async28398.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28398");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28398.
 */
cljs.core.async.__GT_t_cljs$core$async28398 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28398(f__$1,ch__$1,meta28399){
return (new cljs.core.async.t_cljs$core$async28398(f__$1,ch__$1,meta28399));
});

}

return (new cljs.core.async.t_cljs$core$async28398(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28404 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28404 = (function (f,ch,meta28405){
this.f = f;
this.ch = ch;
this.meta28405 = meta28405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28406,meta28405__$1){
var self__ = this;
var _28406__$1 = this;
return (new cljs.core.async.t_cljs$core$async28404(self__.f,self__.ch,meta28405__$1));
}));

(cljs.core.async.t_cljs$core$async28404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28406){
var self__ = this;
var _28406__$1 = this;
return self__.meta28405;
}));

(cljs.core.async.t_cljs$core$async28404.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28404.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28404.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28404.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28404.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28404.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async28404.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28405","meta28405",-1831923587,null)], null);
}));

(cljs.core.async.t_cljs$core$async28404.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28404.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28404");

(cljs.core.async.t_cljs$core$async28404.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28404");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28404.
 */
cljs.core.async.__GT_t_cljs$core$async28404 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28404(f__$1,ch__$1,meta28405){
return (new cljs.core.async.t_cljs$core$async28404(f__$1,ch__$1,meta28405));
});

}

return (new cljs.core.async.t_cljs$core$async28404(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28407 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28407 = (function (p,ch,meta28408){
this.p = p;
this.ch = ch;
this.meta28408 = meta28408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28409,meta28408__$1){
var self__ = this;
var _28409__$1 = this;
return (new cljs.core.async.t_cljs$core$async28407(self__.p,self__.ch,meta28408__$1));
}));

(cljs.core.async.t_cljs$core$async28407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28409){
var self__ = this;
var _28409__$1 = this;
return self__.meta28408;
}));

(cljs.core.async.t_cljs$core$async28407.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28407.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28407.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28407.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28407.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28407.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28407.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async28407.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28408","meta28408",1732673954,null)], null);
}));

(cljs.core.async.t_cljs$core$async28407.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28407.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28407");

(cljs.core.async.t_cljs$core$async28407.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28407");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28407.
 */
cljs.core.async.__GT_t_cljs$core$async28407 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28407(p__$1,ch__$1,meta28408){
return (new cljs.core.async.t_cljs$core$async28407(p__$1,ch__$1,meta28408));
});

}

return (new cljs.core.async.t_cljs$core$async28407(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__28411 = arguments.length;
switch (G__28411) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25024__auto___28451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25025__auto__ = (function (){var switch__24857__auto__ = (function (state_28432){
var state_val_28433 = (state_28432[(1)]);
if((state_val_28433 === (7))){
var inst_28428 = (state_28432[(2)]);
var state_28432__$1 = state_28432;
var statearr_28434_28452 = state_28432__$1;
(statearr_28434_28452[(2)] = inst_28428);

(statearr_28434_28452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28433 === (1))){
var state_28432__$1 = state_28432;
var statearr_28435_28453 = state_28432__$1;
(statearr_28435_28453[(2)] = null);

(statearr_28435_28453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28433 === (4))){
var inst_28414 = (state_28432[(7)]);
var inst_28414__$1 = (state_28432[(2)]);
var inst_28415 = (inst_28414__$1 == null);
var state_28432__$1 = (function (){var statearr_28436 = state_28432;
(statearr_28436[(7)] = inst_28414__$1);

return statearr_28436;
})();
if(cljs.core.truth_(inst_28415)){
var statearr_28437_28454 = state_28432__$1;
(statearr_28437_28454[(1)] = (5));

} else {
var statearr_28438_28455 = state_28432__$1;
(statearr_28438_28455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28433 === (6))){
var inst_28414 = (state_28432[(7)]);
var inst_28419 = p.call(null,inst_28414);
var state_28432__$1 = state_28432;
if(cljs.core.truth_(inst_28419)){
var statearr_28439_28456 = state_28432__$1;
(statearr_28439_28456[(1)] = (8));

} else {
var statearr_28440_28457 = state_28432__$1;
(statearr_28440_28457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28433 === (3))){
var inst_28430 = (state_28432[(2)]);
var state_28432__$1 = state_28432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28432__$1,inst_28430);
} else {
if((state_val_28433 === (2))){
var state_28432__$1 = state_28432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28432__$1,(4),ch);
} else {
if((state_val_28433 === (11))){
var inst_28422 = (state_28432[(2)]);
var state_28432__$1 = state_28432;
var statearr_28441_28458 = state_28432__$1;
(statearr_28441_28458[(2)] = inst_28422);

(statearr_28441_28458[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28433 === (9))){
var state_28432__$1 = state_28432;
var statearr_28442_28459 = state_28432__$1;
(statearr_28442_28459[(2)] = null);

(statearr_28442_28459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28433 === (5))){
var inst_28417 = cljs.core.async.close_BANG_.call(null,out);
var state_28432__$1 = state_28432;
var statearr_28443_28460 = state_28432__$1;
(statearr_28443_28460[(2)] = inst_28417);

(statearr_28443_28460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28433 === (10))){
var inst_28425 = (state_28432[(2)]);
var state_28432__$1 = (function (){var statearr_28444 = state_28432;
(statearr_28444[(8)] = inst_28425);

return statearr_28444;
})();
var statearr_28445_28461 = state_28432__$1;
(statearr_28445_28461[(2)] = null);

(statearr_28445_28461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28433 === (8))){
var inst_28414 = (state_28432[(7)]);
var state_28432__$1 = state_28432;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28432__$1,(11),out,inst_28414);
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
var cljs$core$async$state_machine__24858__auto__ = null;
var cljs$core$async$state_machine__24858__auto____0 = (function (){
var statearr_28446 = [null,null,null,null,null,null,null,null,null];
(statearr_28446[(0)] = cljs$core$async$state_machine__24858__auto__);

(statearr_28446[(1)] = (1));

return statearr_28446;
});
var cljs$core$async$state_machine__24858__auto____1 = (function (state_28432){
while(true){
var ret_value__24859__auto__ = (function (){try{while(true){
var result__24860__auto__ = switch__24857__auto__.call(null,state_28432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24860__auto__;
}
break;
}
}catch (e28447){if((e28447 instanceof Object)){
var ex__24861__auto__ = e28447;
var statearr_28448_28462 = state_28432;
(statearr_28448_28462[(5)] = ex__24861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28463 = state_28432;
state_28432 = G__28463;
continue;
} else {
return ret_value__24859__auto__;
}
break;
}
});
cljs$core$async$state_machine__24858__auto__ = function(state_28432){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24858__auto____1.call(this,state_28432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24858__auto____0;
cljs$core$async$state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24858__auto____1;
return cljs$core$async$state_machine__24858__auto__;
})()
})();
var state__25026__auto__ = (function (){var statearr_28449 = f__25025__auto__.call(null);
(statearr_28449[(6)] = c__25024__auto___28451);

return statearr_28449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25026__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28465 = arguments.length;
switch (G__28465) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__25024__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25025__auto__ = (function (){var switch__24857__auto__ = (function (state_28528){
var state_val_28529 = (state_28528[(1)]);
if((state_val_28529 === (7))){
var inst_28524 = (state_28528[(2)]);
var state_28528__$1 = state_28528;
var statearr_28530_28568 = state_28528__$1;
(statearr_28530_28568[(2)] = inst_28524);

(statearr_28530_28568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (20))){
var inst_28494 = (state_28528[(7)]);
var inst_28505 = (state_28528[(2)]);
var inst_28506 = cljs.core.next.call(null,inst_28494);
var inst_28480 = inst_28506;
var inst_28481 = null;
var inst_28482 = (0);
var inst_28483 = (0);
var state_28528__$1 = (function (){var statearr_28531 = state_28528;
(statearr_28531[(8)] = inst_28505);

(statearr_28531[(9)] = inst_28480);

(statearr_28531[(10)] = inst_28483);

(statearr_28531[(11)] = inst_28482);

(statearr_28531[(12)] = inst_28481);

return statearr_28531;
})();
var statearr_28532_28569 = state_28528__$1;
(statearr_28532_28569[(2)] = null);

(statearr_28532_28569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (1))){
var state_28528__$1 = state_28528;
var statearr_28533_28570 = state_28528__$1;
(statearr_28533_28570[(2)] = null);

(statearr_28533_28570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (4))){
var inst_28469 = (state_28528[(13)]);
var inst_28469__$1 = (state_28528[(2)]);
var inst_28470 = (inst_28469__$1 == null);
var state_28528__$1 = (function (){var statearr_28534 = state_28528;
(statearr_28534[(13)] = inst_28469__$1);

return statearr_28534;
})();
if(cljs.core.truth_(inst_28470)){
var statearr_28535_28571 = state_28528__$1;
(statearr_28535_28571[(1)] = (5));

} else {
var statearr_28536_28572 = state_28528__$1;
(statearr_28536_28572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (15))){
var state_28528__$1 = state_28528;
var statearr_28540_28573 = state_28528__$1;
(statearr_28540_28573[(2)] = null);

(statearr_28540_28573[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (21))){
var state_28528__$1 = state_28528;
var statearr_28541_28574 = state_28528__$1;
(statearr_28541_28574[(2)] = null);

(statearr_28541_28574[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (13))){
var inst_28480 = (state_28528[(9)]);
var inst_28483 = (state_28528[(10)]);
var inst_28482 = (state_28528[(11)]);
var inst_28481 = (state_28528[(12)]);
var inst_28490 = (state_28528[(2)]);
var inst_28491 = (inst_28483 + (1));
var tmp28537 = inst_28480;
var tmp28538 = inst_28482;
var tmp28539 = inst_28481;
var inst_28480__$1 = tmp28537;
var inst_28481__$1 = tmp28539;
var inst_28482__$1 = tmp28538;
var inst_28483__$1 = inst_28491;
var state_28528__$1 = (function (){var statearr_28542 = state_28528;
(statearr_28542[(9)] = inst_28480__$1);

(statearr_28542[(14)] = inst_28490);

(statearr_28542[(10)] = inst_28483__$1);

(statearr_28542[(11)] = inst_28482__$1);

(statearr_28542[(12)] = inst_28481__$1);

return statearr_28542;
})();
var statearr_28543_28575 = state_28528__$1;
(statearr_28543_28575[(2)] = null);

(statearr_28543_28575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (22))){
var state_28528__$1 = state_28528;
var statearr_28544_28576 = state_28528__$1;
(statearr_28544_28576[(2)] = null);

(statearr_28544_28576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (6))){
var inst_28469 = (state_28528[(13)]);
var inst_28478 = f.call(null,inst_28469);
var inst_28479 = cljs.core.seq.call(null,inst_28478);
var inst_28480 = inst_28479;
var inst_28481 = null;
var inst_28482 = (0);
var inst_28483 = (0);
var state_28528__$1 = (function (){var statearr_28545 = state_28528;
(statearr_28545[(9)] = inst_28480);

(statearr_28545[(10)] = inst_28483);

(statearr_28545[(11)] = inst_28482);

(statearr_28545[(12)] = inst_28481);

return statearr_28545;
})();
var statearr_28546_28577 = state_28528__$1;
(statearr_28546_28577[(2)] = null);

(statearr_28546_28577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (17))){
var inst_28494 = (state_28528[(7)]);
var inst_28498 = cljs.core.chunk_first.call(null,inst_28494);
var inst_28499 = cljs.core.chunk_rest.call(null,inst_28494);
var inst_28500 = cljs.core.count.call(null,inst_28498);
var inst_28480 = inst_28499;
var inst_28481 = inst_28498;
var inst_28482 = inst_28500;
var inst_28483 = (0);
var state_28528__$1 = (function (){var statearr_28547 = state_28528;
(statearr_28547[(9)] = inst_28480);

(statearr_28547[(10)] = inst_28483);

(statearr_28547[(11)] = inst_28482);

(statearr_28547[(12)] = inst_28481);

return statearr_28547;
})();
var statearr_28548_28578 = state_28528__$1;
(statearr_28548_28578[(2)] = null);

(statearr_28548_28578[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (3))){
var inst_28526 = (state_28528[(2)]);
var state_28528__$1 = state_28528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28528__$1,inst_28526);
} else {
if((state_val_28529 === (12))){
var inst_28514 = (state_28528[(2)]);
var state_28528__$1 = state_28528;
var statearr_28549_28579 = state_28528__$1;
(statearr_28549_28579[(2)] = inst_28514);

(statearr_28549_28579[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (2))){
var state_28528__$1 = state_28528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28528__$1,(4),in$);
} else {
if((state_val_28529 === (23))){
var inst_28522 = (state_28528[(2)]);
var state_28528__$1 = state_28528;
var statearr_28550_28580 = state_28528__$1;
(statearr_28550_28580[(2)] = inst_28522);

(statearr_28550_28580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (19))){
var inst_28509 = (state_28528[(2)]);
var state_28528__$1 = state_28528;
var statearr_28551_28581 = state_28528__$1;
(statearr_28551_28581[(2)] = inst_28509);

(statearr_28551_28581[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (11))){
var inst_28494 = (state_28528[(7)]);
var inst_28480 = (state_28528[(9)]);
var inst_28494__$1 = cljs.core.seq.call(null,inst_28480);
var state_28528__$1 = (function (){var statearr_28552 = state_28528;
(statearr_28552[(7)] = inst_28494__$1);

return statearr_28552;
})();
if(inst_28494__$1){
var statearr_28553_28582 = state_28528__$1;
(statearr_28553_28582[(1)] = (14));

} else {
var statearr_28554_28583 = state_28528__$1;
(statearr_28554_28583[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (9))){
var inst_28516 = (state_28528[(2)]);
var inst_28517 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28528__$1 = (function (){var statearr_28555 = state_28528;
(statearr_28555[(15)] = inst_28516);

return statearr_28555;
})();
if(cljs.core.truth_(inst_28517)){
var statearr_28556_28584 = state_28528__$1;
(statearr_28556_28584[(1)] = (21));

} else {
var statearr_28557_28585 = state_28528__$1;
(statearr_28557_28585[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (5))){
var inst_28472 = cljs.core.async.close_BANG_.call(null,out);
var state_28528__$1 = state_28528;
var statearr_28558_28586 = state_28528__$1;
(statearr_28558_28586[(2)] = inst_28472);

(statearr_28558_28586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (14))){
var inst_28494 = (state_28528[(7)]);
var inst_28496 = cljs.core.chunked_seq_QMARK_.call(null,inst_28494);
var state_28528__$1 = state_28528;
if(inst_28496){
var statearr_28559_28587 = state_28528__$1;
(statearr_28559_28587[(1)] = (17));

} else {
var statearr_28560_28588 = state_28528__$1;
(statearr_28560_28588[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (16))){
var inst_28512 = (state_28528[(2)]);
var state_28528__$1 = state_28528;
var statearr_28561_28589 = state_28528__$1;
(statearr_28561_28589[(2)] = inst_28512);

(statearr_28561_28589[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (10))){
var inst_28483 = (state_28528[(10)]);
var inst_28481 = (state_28528[(12)]);
var inst_28488 = cljs.core._nth.call(null,inst_28481,inst_28483);
var state_28528__$1 = state_28528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28528__$1,(13),out,inst_28488);
} else {
if((state_val_28529 === (18))){
var inst_28494 = (state_28528[(7)]);
var inst_28503 = cljs.core.first.call(null,inst_28494);
var state_28528__$1 = state_28528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28528__$1,(20),out,inst_28503);
} else {
if((state_val_28529 === (8))){
var inst_28483 = (state_28528[(10)]);
var inst_28482 = (state_28528[(11)]);
var inst_28485 = (inst_28483 < inst_28482);
var inst_28486 = inst_28485;
var state_28528__$1 = state_28528;
if(cljs.core.truth_(inst_28486)){
var statearr_28562_28590 = state_28528__$1;
(statearr_28562_28590[(1)] = (10));

} else {
var statearr_28563_28591 = state_28528__$1;
(statearr_28563_28591[(1)] = (11));

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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24858__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24858__auto____0 = (function (){
var statearr_28564 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28564[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24858__auto__);

(statearr_28564[(1)] = (1));

return statearr_28564;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24858__auto____1 = (function (state_28528){
while(true){
var ret_value__24859__auto__ = (function (){try{while(true){
var result__24860__auto__ = switch__24857__auto__.call(null,state_28528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24860__auto__;
}
break;
}
}catch (e28565){if((e28565 instanceof Object)){
var ex__24861__auto__ = e28565;
var statearr_28566_28592 = state_28528;
(statearr_28566_28592[(5)] = ex__24861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28593 = state_28528;
state_28528 = G__28593;
continue;
} else {
return ret_value__24859__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24858__auto__ = function(state_28528){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24858__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24858__auto____1.call(this,state_28528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24858__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24858__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24858__auto__;
})()
})();
var state__25026__auto__ = (function (){var statearr_28567 = f__25025__auto__.call(null);
(statearr_28567[(6)] = c__25024__auto__);

return statearr_28567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25026__auto__);
}));

return c__25024__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28595 = arguments.length;
switch (G__28595) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__28598 = arguments.length;
switch (G__28598) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__28601 = arguments.length;
switch (G__28601) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25024__auto___28648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25025__auto__ = (function (){var switch__24857__auto__ = (function (state_28625){
var state_val_28626 = (state_28625[(1)]);
if((state_val_28626 === (7))){
var inst_28620 = (state_28625[(2)]);
var state_28625__$1 = state_28625;
var statearr_28627_28649 = state_28625__$1;
(statearr_28627_28649[(2)] = inst_28620);

(statearr_28627_28649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (1))){
var inst_28602 = null;
var state_28625__$1 = (function (){var statearr_28628 = state_28625;
(statearr_28628[(7)] = inst_28602);

return statearr_28628;
})();
var statearr_28629_28650 = state_28625__$1;
(statearr_28629_28650[(2)] = null);

(statearr_28629_28650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (4))){
var inst_28605 = (state_28625[(8)]);
var inst_28605__$1 = (state_28625[(2)]);
var inst_28606 = (inst_28605__$1 == null);
var inst_28607 = cljs.core.not.call(null,inst_28606);
var state_28625__$1 = (function (){var statearr_28630 = state_28625;
(statearr_28630[(8)] = inst_28605__$1);

return statearr_28630;
})();
if(inst_28607){
var statearr_28631_28651 = state_28625__$1;
(statearr_28631_28651[(1)] = (5));

} else {
var statearr_28632_28652 = state_28625__$1;
(statearr_28632_28652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (6))){
var state_28625__$1 = state_28625;
var statearr_28633_28653 = state_28625__$1;
(statearr_28633_28653[(2)] = null);

(statearr_28633_28653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (3))){
var inst_28622 = (state_28625[(2)]);
var inst_28623 = cljs.core.async.close_BANG_.call(null,out);
var state_28625__$1 = (function (){var statearr_28634 = state_28625;
(statearr_28634[(9)] = inst_28622);

return statearr_28634;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28625__$1,inst_28623);
} else {
if((state_val_28626 === (2))){
var state_28625__$1 = state_28625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28625__$1,(4),ch);
} else {
if((state_val_28626 === (11))){
var inst_28605 = (state_28625[(8)]);
var inst_28614 = (state_28625[(2)]);
var inst_28602 = inst_28605;
var state_28625__$1 = (function (){var statearr_28635 = state_28625;
(statearr_28635[(10)] = inst_28614);

(statearr_28635[(7)] = inst_28602);

return statearr_28635;
})();
var statearr_28636_28654 = state_28625__$1;
(statearr_28636_28654[(2)] = null);

(statearr_28636_28654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (9))){
var inst_28605 = (state_28625[(8)]);
var state_28625__$1 = state_28625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28625__$1,(11),out,inst_28605);
} else {
if((state_val_28626 === (5))){
var inst_28605 = (state_28625[(8)]);
var inst_28602 = (state_28625[(7)]);
var inst_28609 = cljs.core._EQ_.call(null,inst_28605,inst_28602);
var state_28625__$1 = state_28625;
if(inst_28609){
var statearr_28638_28655 = state_28625__$1;
(statearr_28638_28655[(1)] = (8));

} else {
var statearr_28639_28656 = state_28625__$1;
(statearr_28639_28656[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (10))){
var inst_28617 = (state_28625[(2)]);
var state_28625__$1 = state_28625;
var statearr_28640_28657 = state_28625__$1;
(statearr_28640_28657[(2)] = inst_28617);

(statearr_28640_28657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (8))){
var inst_28602 = (state_28625[(7)]);
var tmp28637 = inst_28602;
var inst_28602__$1 = tmp28637;
var state_28625__$1 = (function (){var statearr_28641 = state_28625;
(statearr_28641[(7)] = inst_28602__$1);

return statearr_28641;
})();
var statearr_28642_28658 = state_28625__$1;
(statearr_28642_28658[(2)] = null);

(statearr_28642_28658[(1)] = (2));


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
var cljs$core$async$state_machine__24858__auto__ = null;
var cljs$core$async$state_machine__24858__auto____0 = (function (){
var statearr_28643 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28643[(0)] = cljs$core$async$state_machine__24858__auto__);

(statearr_28643[(1)] = (1));

return statearr_28643;
});
var cljs$core$async$state_machine__24858__auto____1 = (function (state_28625){
while(true){
var ret_value__24859__auto__ = (function (){try{while(true){
var result__24860__auto__ = switch__24857__auto__.call(null,state_28625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24860__auto__;
}
break;
}
}catch (e28644){if((e28644 instanceof Object)){
var ex__24861__auto__ = e28644;
var statearr_28645_28659 = state_28625;
(statearr_28645_28659[(5)] = ex__24861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28660 = state_28625;
state_28625 = G__28660;
continue;
} else {
return ret_value__24859__auto__;
}
break;
}
});
cljs$core$async$state_machine__24858__auto__ = function(state_28625){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24858__auto____1.call(this,state_28625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24858__auto____0;
cljs$core$async$state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24858__auto____1;
return cljs$core$async$state_machine__24858__auto__;
})()
})();
var state__25026__auto__ = (function (){var statearr_28646 = f__25025__auto__.call(null);
(statearr_28646[(6)] = c__25024__auto___28648);

return statearr_28646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25026__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28662 = arguments.length;
switch (G__28662) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25024__auto___28728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25025__auto__ = (function (){var switch__24857__auto__ = (function (state_28700){
var state_val_28701 = (state_28700[(1)]);
if((state_val_28701 === (7))){
var inst_28696 = (state_28700[(2)]);
var state_28700__$1 = state_28700;
var statearr_28702_28729 = state_28700__$1;
(statearr_28702_28729[(2)] = inst_28696);

(statearr_28702_28729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28701 === (1))){
var inst_28663 = (new Array(n));
var inst_28664 = inst_28663;
var inst_28665 = (0);
var state_28700__$1 = (function (){var statearr_28703 = state_28700;
(statearr_28703[(7)] = inst_28665);

(statearr_28703[(8)] = inst_28664);

return statearr_28703;
})();
var statearr_28704_28730 = state_28700__$1;
(statearr_28704_28730[(2)] = null);

(statearr_28704_28730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28701 === (4))){
var inst_28668 = (state_28700[(9)]);
var inst_28668__$1 = (state_28700[(2)]);
var inst_28669 = (inst_28668__$1 == null);
var inst_28670 = cljs.core.not.call(null,inst_28669);
var state_28700__$1 = (function (){var statearr_28705 = state_28700;
(statearr_28705[(9)] = inst_28668__$1);

return statearr_28705;
})();
if(inst_28670){
var statearr_28706_28731 = state_28700__$1;
(statearr_28706_28731[(1)] = (5));

} else {
var statearr_28707_28732 = state_28700__$1;
(statearr_28707_28732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28701 === (15))){
var inst_28690 = (state_28700[(2)]);
var state_28700__$1 = state_28700;
var statearr_28708_28733 = state_28700__$1;
(statearr_28708_28733[(2)] = inst_28690);

(statearr_28708_28733[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28701 === (13))){
var state_28700__$1 = state_28700;
var statearr_28709_28734 = state_28700__$1;
(statearr_28709_28734[(2)] = null);

(statearr_28709_28734[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28701 === (6))){
var inst_28665 = (state_28700[(7)]);
var inst_28686 = (inst_28665 > (0));
var state_28700__$1 = state_28700;
if(cljs.core.truth_(inst_28686)){
var statearr_28710_28735 = state_28700__$1;
(statearr_28710_28735[(1)] = (12));

} else {
var statearr_28711_28736 = state_28700__$1;
(statearr_28711_28736[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28701 === (3))){
var inst_28698 = (state_28700[(2)]);
var state_28700__$1 = state_28700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28700__$1,inst_28698);
} else {
if((state_val_28701 === (12))){
var inst_28664 = (state_28700[(8)]);
var inst_28688 = cljs.core.vec.call(null,inst_28664);
var state_28700__$1 = state_28700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28700__$1,(15),out,inst_28688);
} else {
if((state_val_28701 === (2))){
var state_28700__$1 = state_28700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28700__$1,(4),ch);
} else {
if((state_val_28701 === (11))){
var inst_28680 = (state_28700[(2)]);
var inst_28681 = (new Array(n));
var inst_28664 = inst_28681;
var inst_28665 = (0);
var state_28700__$1 = (function (){var statearr_28712 = state_28700;
(statearr_28712[(7)] = inst_28665);

(statearr_28712[(10)] = inst_28680);

(statearr_28712[(8)] = inst_28664);

return statearr_28712;
})();
var statearr_28713_28737 = state_28700__$1;
(statearr_28713_28737[(2)] = null);

(statearr_28713_28737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28701 === (9))){
var inst_28664 = (state_28700[(8)]);
var inst_28678 = cljs.core.vec.call(null,inst_28664);
var state_28700__$1 = state_28700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28700__$1,(11),out,inst_28678);
} else {
if((state_val_28701 === (5))){
var inst_28665 = (state_28700[(7)]);
var inst_28673 = (state_28700[(11)]);
var inst_28664 = (state_28700[(8)]);
var inst_28668 = (state_28700[(9)]);
var inst_28672 = (inst_28664[inst_28665] = inst_28668);
var inst_28673__$1 = (inst_28665 + (1));
var inst_28674 = (inst_28673__$1 < n);
var state_28700__$1 = (function (){var statearr_28714 = state_28700;
(statearr_28714[(11)] = inst_28673__$1);

(statearr_28714[(12)] = inst_28672);

return statearr_28714;
})();
if(cljs.core.truth_(inst_28674)){
var statearr_28715_28738 = state_28700__$1;
(statearr_28715_28738[(1)] = (8));

} else {
var statearr_28716_28739 = state_28700__$1;
(statearr_28716_28739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28701 === (14))){
var inst_28693 = (state_28700[(2)]);
var inst_28694 = cljs.core.async.close_BANG_.call(null,out);
var state_28700__$1 = (function (){var statearr_28718 = state_28700;
(statearr_28718[(13)] = inst_28693);

return statearr_28718;
})();
var statearr_28719_28740 = state_28700__$1;
(statearr_28719_28740[(2)] = inst_28694);

(statearr_28719_28740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28701 === (10))){
var inst_28684 = (state_28700[(2)]);
var state_28700__$1 = state_28700;
var statearr_28720_28741 = state_28700__$1;
(statearr_28720_28741[(2)] = inst_28684);

(statearr_28720_28741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28701 === (8))){
var inst_28673 = (state_28700[(11)]);
var inst_28664 = (state_28700[(8)]);
var tmp28717 = inst_28664;
var inst_28664__$1 = tmp28717;
var inst_28665 = inst_28673;
var state_28700__$1 = (function (){var statearr_28721 = state_28700;
(statearr_28721[(7)] = inst_28665);

(statearr_28721[(8)] = inst_28664__$1);

return statearr_28721;
})();
var statearr_28722_28742 = state_28700__$1;
(statearr_28722_28742[(2)] = null);

(statearr_28722_28742[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__24858__auto__ = null;
var cljs$core$async$state_machine__24858__auto____0 = (function (){
var statearr_28723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28723[(0)] = cljs$core$async$state_machine__24858__auto__);

(statearr_28723[(1)] = (1));

return statearr_28723;
});
var cljs$core$async$state_machine__24858__auto____1 = (function (state_28700){
while(true){
var ret_value__24859__auto__ = (function (){try{while(true){
var result__24860__auto__ = switch__24857__auto__.call(null,state_28700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24860__auto__;
}
break;
}
}catch (e28724){if((e28724 instanceof Object)){
var ex__24861__auto__ = e28724;
var statearr_28725_28743 = state_28700;
(statearr_28725_28743[(5)] = ex__24861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28744 = state_28700;
state_28700 = G__28744;
continue;
} else {
return ret_value__24859__auto__;
}
break;
}
});
cljs$core$async$state_machine__24858__auto__ = function(state_28700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24858__auto____1.call(this,state_28700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24858__auto____0;
cljs$core$async$state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24858__auto____1;
return cljs$core$async$state_machine__24858__auto__;
})()
})();
var state__25026__auto__ = (function (){var statearr_28726 = f__25025__auto__.call(null);
(statearr_28726[(6)] = c__25024__auto___28728);

return statearr_28726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25026__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28746 = arguments.length;
switch (G__28746) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25024__auto___28816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25025__auto__ = (function (){var switch__24857__auto__ = (function (state_28788){
var state_val_28789 = (state_28788[(1)]);
if((state_val_28789 === (7))){
var inst_28784 = (state_28788[(2)]);
var state_28788__$1 = state_28788;
var statearr_28790_28817 = state_28788__$1;
(statearr_28790_28817[(2)] = inst_28784);

(statearr_28790_28817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28789 === (1))){
var inst_28747 = [];
var inst_28748 = inst_28747;
var inst_28749 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28788__$1 = (function (){var statearr_28791 = state_28788;
(statearr_28791[(7)] = inst_28748);

(statearr_28791[(8)] = inst_28749);

return statearr_28791;
})();
var statearr_28792_28818 = state_28788__$1;
(statearr_28792_28818[(2)] = null);

(statearr_28792_28818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28789 === (4))){
var inst_28752 = (state_28788[(9)]);
var inst_28752__$1 = (state_28788[(2)]);
var inst_28753 = (inst_28752__$1 == null);
var inst_28754 = cljs.core.not.call(null,inst_28753);
var state_28788__$1 = (function (){var statearr_28793 = state_28788;
(statearr_28793[(9)] = inst_28752__$1);

return statearr_28793;
})();
if(inst_28754){
var statearr_28794_28819 = state_28788__$1;
(statearr_28794_28819[(1)] = (5));

} else {
var statearr_28795_28820 = state_28788__$1;
(statearr_28795_28820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28789 === (15))){
var inst_28778 = (state_28788[(2)]);
var state_28788__$1 = state_28788;
var statearr_28796_28821 = state_28788__$1;
(statearr_28796_28821[(2)] = inst_28778);

(statearr_28796_28821[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28789 === (13))){
var state_28788__$1 = state_28788;
var statearr_28797_28822 = state_28788__$1;
(statearr_28797_28822[(2)] = null);

(statearr_28797_28822[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28789 === (6))){
var inst_28748 = (state_28788[(7)]);
var inst_28773 = inst_28748.length;
var inst_28774 = (inst_28773 > (0));
var state_28788__$1 = state_28788;
if(cljs.core.truth_(inst_28774)){
var statearr_28798_28823 = state_28788__$1;
(statearr_28798_28823[(1)] = (12));

} else {
var statearr_28799_28824 = state_28788__$1;
(statearr_28799_28824[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28789 === (3))){
var inst_28786 = (state_28788[(2)]);
var state_28788__$1 = state_28788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28788__$1,inst_28786);
} else {
if((state_val_28789 === (12))){
var inst_28748 = (state_28788[(7)]);
var inst_28776 = cljs.core.vec.call(null,inst_28748);
var state_28788__$1 = state_28788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28788__$1,(15),out,inst_28776);
} else {
if((state_val_28789 === (2))){
var state_28788__$1 = state_28788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28788__$1,(4),ch);
} else {
if((state_val_28789 === (11))){
var inst_28756 = (state_28788[(10)]);
var inst_28752 = (state_28788[(9)]);
var inst_28766 = (state_28788[(2)]);
var inst_28767 = [];
var inst_28768 = inst_28767.push(inst_28752);
var inst_28748 = inst_28767;
var inst_28749 = inst_28756;
var state_28788__$1 = (function (){var statearr_28800 = state_28788;
(statearr_28800[(11)] = inst_28768);

(statearr_28800[(7)] = inst_28748);

(statearr_28800[(8)] = inst_28749);

(statearr_28800[(12)] = inst_28766);

return statearr_28800;
})();
var statearr_28801_28825 = state_28788__$1;
(statearr_28801_28825[(2)] = null);

(statearr_28801_28825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28789 === (9))){
var inst_28748 = (state_28788[(7)]);
var inst_28764 = cljs.core.vec.call(null,inst_28748);
var state_28788__$1 = state_28788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28788__$1,(11),out,inst_28764);
} else {
if((state_val_28789 === (5))){
var inst_28749 = (state_28788[(8)]);
var inst_28756 = (state_28788[(10)]);
var inst_28752 = (state_28788[(9)]);
var inst_28756__$1 = f.call(null,inst_28752);
var inst_28757 = cljs.core._EQ_.call(null,inst_28756__$1,inst_28749);
var inst_28758 = cljs.core.keyword_identical_QMARK_.call(null,inst_28749,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28759 = ((inst_28757) || (inst_28758));
var state_28788__$1 = (function (){var statearr_28802 = state_28788;
(statearr_28802[(10)] = inst_28756__$1);

return statearr_28802;
})();
if(cljs.core.truth_(inst_28759)){
var statearr_28803_28826 = state_28788__$1;
(statearr_28803_28826[(1)] = (8));

} else {
var statearr_28804_28827 = state_28788__$1;
(statearr_28804_28827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28789 === (14))){
var inst_28781 = (state_28788[(2)]);
var inst_28782 = cljs.core.async.close_BANG_.call(null,out);
var state_28788__$1 = (function (){var statearr_28806 = state_28788;
(statearr_28806[(13)] = inst_28781);

return statearr_28806;
})();
var statearr_28807_28828 = state_28788__$1;
(statearr_28807_28828[(2)] = inst_28782);

(statearr_28807_28828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28789 === (10))){
var inst_28771 = (state_28788[(2)]);
var state_28788__$1 = state_28788;
var statearr_28808_28829 = state_28788__$1;
(statearr_28808_28829[(2)] = inst_28771);

(statearr_28808_28829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28789 === (8))){
var inst_28748 = (state_28788[(7)]);
var inst_28756 = (state_28788[(10)]);
var inst_28752 = (state_28788[(9)]);
var inst_28761 = inst_28748.push(inst_28752);
var tmp28805 = inst_28748;
var inst_28748__$1 = tmp28805;
var inst_28749 = inst_28756;
var state_28788__$1 = (function (){var statearr_28809 = state_28788;
(statearr_28809[(7)] = inst_28748__$1);

(statearr_28809[(8)] = inst_28749);

(statearr_28809[(14)] = inst_28761);

return statearr_28809;
})();
var statearr_28810_28830 = state_28788__$1;
(statearr_28810_28830[(2)] = null);

(statearr_28810_28830[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__24858__auto__ = null;
var cljs$core$async$state_machine__24858__auto____0 = (function (){
var statearr_28811 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28811[(0)] = cljs$core$async$state_machine__24858__auto__);

(statearr_28811[(1)] = (1));

return statearr_28811;
});
var cljs$core$async$state_machine__24858__auto____1 = (function (state_28788){
while(true){
var ret_value__24859__auto__ = (function (){try{while(true){
var result__24860__auto__ = switch__24857__auto__.call(null,state_28788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24860__auto__;
}
break;
}
}catch (e28812){if((e28812 instanceof Object)){
var ex__24861__auto__ = e28812;
var statearr_28813_28831 = state_28788;
(statearr_28813_28831[(5)] = ex__24861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28832 = state_28788;
state_28788 = G__28832;
continue;
} else {
return ret_value__24859__auto__;
}
break;
}
});
cljs$core$async$state_machine__24858__auto__ = function(state_28788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24858__auto____1.call(this,state_28788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24858__auto____0;
cljs$core$async$state_machine__24858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24858__auto____1;
return cljs$core$async$state_machine__24858__auto__;
})()
})();
var state__25026__auto__ = (function (){var statearr_28814 = f__25025__auto__.call(null);
(statearr_28814[(6)] = c__25024__auto___28816);

return statearr_28814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25026__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1748881104615
