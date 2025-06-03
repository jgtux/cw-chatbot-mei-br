// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38585){
var map__38586 = p__38585;
var map__38586__$1 = (((((!((map__38586 == null))))?(((((map__38586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38586):map__38586);
var m = map__38586__$1;
var n = cljs.core.get.call(null,map__38586__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38586__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38588_38620 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38589_38621 = null;
var count__38590_38622 = (0);
var i__38591_38623 = (0);
while(true){
if((i__38591_38623 < count__38590_38622)){
var f_38624 = cljs.core._nth.call(null,chunk__38589_38621,i__38591_38623);
cljs.core.println.call(null,"  ",f_38624);


var G__38625 = seq__38588_38620;
var G__38626 = chunk__38589_38621;
var G__38627 = count__38590_38622;
var G__38628 = (i__38591_38623 + (1));
seq__38588_38620 = G__38625;
chunk__38589_38621 = G__38626;
count__38590_38622 = G__38627;
i__38591_38623 = G__38628;
continue;
} else {
var temp__5720__auto___38629 = cljs.core.seq.call(null,seq__38588_38620);
if(temp__5720__auto___38629){
var seq__38588_38630__$1 = temp__5720__auto___38629;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38588_38630__$1)){
var c__4556__auto___38631 = cljs.core.chunk_first.call(null,seq__38588_38630__$1);
var G__38632 = cljs.core.chunk_rest.call(null,seq__38588_38630__$1);
var G__38633 = c__4556__auto___38631;
var G__38634 = cljs.core.count.call(null,c__4556__auto___38631);
var G__38635 = (0);
seq__38588_38620 = G__38632;
chunk__38589_38621 = G__38633;
count__38590_38622 = G__38634;
i__38591_38623 = G__38635;
continue;
} else {
var f_38636 = cljs.core.first.call(null,seq__38588_38630__$1);
cljs.core.println.call(null,"  ",f_38636);


var G__38637 = cljs.core.next.call(null,seq__38588_38630__$1);
var G__38638 = null;
var G__38639 = (0);
var G__38640 = (0);
seq__38588_38620 = G__38637;
chunk__38589_38621 = G__38638;
count__38590_38622 = G__38639;
i__38591_38623 = G__38640;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38641 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38641);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38641)))?cljs.core.second.call(null,arglists_38641):arglists_38641));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38592_38642 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38593_38643 = null;
var count__38594_38644 = (0);
var i__38595_38645 = (0);
while(true){
if((i__38595_38645 < count__38594_38644)){
var vec__38606_38646 = cljs.core._nth.call(null,chunk__38593_38643,i__38595_38645);
var name_38647 = cljs.core.nth.call(null,vec__38606_38646,(0),null);
var map__38609_38648 = cljs.core.nth.call(null,vec__38606_38646,(1),null);
var map__38609_38649__$1 = (((((!((map__38609_38648 == null))))?(((((map__38609_38648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38609_38648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38609_38648):map__38609_38648);
var doc_38650 = cljs.core.get.call(null,map__38609_38649__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38651 = cljs.core.get.call(null,map__38609_38649__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38647);

cljs.core.println.call(null," ",arglists_38651);

if(cljs.core.truth_(doc_38650)){
cljs.core.println.call(null," ",doc_38650);
} else {
}


var G__38652 = seq__38592_38642;
var G__38653 = chunk__38593_38643;
var G__38654 = count__38594_38644;
var G__38655 = (i__38595_38645 + (1));
seq__38592_38642 = G__38652;
chunk__38593_38643 = G__38653;
count__38594_38644 = G__38654;
i__38595_38645 = G__38655;
continue;
} else {
var temp__5720__auto___38656 = cljs.core.seq.call(null,seq__38592_38642);
if(temp__5720__auto___38656){
var seq__38592_38657__$1 = temp__5720__auto___38656;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38592_38657__$1)){
var c__4556__auto___38658 = cljs.core.chunk_first.call(null,seq__38592_38657__$1);
var G__38659 = cljs.core.chunk_rest.call(null,seq__38592_38657__$1);
var G__38660 = c__4556__auto___38658;
var G__38661 = cljs.core.count.call(null,c__4556__auto___38658);
var G__38662 = (0);
seq__38592_38642 = G__38659;
chunk__38593_38643 = G__38660;
count__38594_38644 = G__38661;
i__38595_38645 = G__38662;
continue;
} else {
var vec__38611_38663 = cljs.core.first.call(null,seq__38592_38657__$1);
var name_38664 = cljs.core.nth.call(null,vec__38611_38663,(0),null);
var map__38614_38665 = cljs.core.nth.call(null,vec__38611_38663,(1),null);
var map__38614_38666__$1 = (((((!((map__38614_38665 == null))))?(((((map__38614_38665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38614_38665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38614_38665):map__38614_38665);
var doc_38667 = cljs.core.get.call(null,map__38614_38666__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38668 = cljs.core.get.call(null,map__38614_38666__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38664);

cljs.core.println.call(null," ",arglists_38668);

if(cljs.core.truth_(doc_38667)){
cljs.core.println.call(null," ",doc_38667);
} else {
}


var G__38669 = cljs.core.next.call(null,seq__38592_38657__$1);
var G__38670 = null;
var G__38671 = (0);
var G__38672 = (0);
seq__38592_38642 = G__38669;
chunk__38593_38643 = G__38670;
count__38594_38644 = G__38671;
i__38595_38645 = G__38672;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__38616 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38617 = null;
var count__38618 = (0);
var i__38619 = (0);
while(true){
if((i__38619 < count__38618)){
var role = cljs.core._nth.call(null,chunk__38617,i__38619);
var temp__5720__auto___38673__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___38673__$1)){
var spec_38674 = temp__5720__auto___38673__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38674));
} else {
}


var G__38675 = seq__38616;
var G__38676 = chunk__38617;
var G__38677 = count__38618;
var G__38678 = (i__38619 + (1));
seq__38616 = G__38675;
chunk__38617 = G__38676;
count__38618 = G__38677;
i__38619 = G__38678;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__38616);
if(temp__5720__auto____$1){
var seq__38616__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38616__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__38616__$1);
var G__38679 = cljs.core.chunk_rest.call(null,seq__38616__$1);
var G__38680 = c__4556__auto__;
var G__38681 = cljs.core.count.call(null,c__4556__auto__);
var G__38682 = (0);
seq__38616 = G__38679;
chunk__38617 = G__38680;
count__38618 = G__38681;
i__38619 = G__38682;
continue;
} else {
var role = cljs.core.first.call(null,seq__38616__$1);
var temp__5720__auto___38683__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___38683__$2)){
var spec_38684 = temp__5720__auto___38683__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38684));
} else {
}


var G__38685 = cljs.core.next.call(null,seq__38616__$1);
var G__38686 = null;
var G__38687 = (0);
var G__38688 = (0);
seq__38616 = G__38685;
chunk__38617 = G__38686;
count__38618 = G__38687;
i__38619 = G__38688;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__38689 = cljs.core.conj.call(null,via,t);
var G__38690 = cljs.core.ex_cause.call(null,t);
via = G__38689;
t = G__38690;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__38693 = datafied_throwable;
var map__38693__$1 = (((((!((map__38693 == null))))?(((((map__38693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38693):map__38693);
var via = cljs.core.get.call(null,map__38693__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__38693__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__38693__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__38694 = cljs.core.last.call(null,via);
var map__38694__$1 = (((((!((map__38694 == null))))?(((((map__38694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38694):map__38694);
var type = cljs.core.get.call(null,map__38694__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__38694__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__38694__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__38695 = data;
var map__38695__$1 = (((((!((map__38695 == null))))?(((((map__38695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38695):map__38695);
var problems = cljs.core.get.call(null,map__38695__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__38695__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__38695__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__38696 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__38696__$1 = (((((!((map__38696 == null))))?(((((map__38696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38696):map__38696);
var top_data = map__38696__$1;
var source = cljs.core.get.call(null,map__38696__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__38701 = phase;
var G__38701__$1 = (((G__38701 instanceof cljs.core.Keyword))?G__38701.fqn:null);
switch (G__38701__$1) {
case "read-source":
var map__38702 = data;
var map__38702__$1 = (((((!((map__38702 == null))))?(((((map__38702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38702):map__38702);
var line = cljs.core.get.call(null,map__38702__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__38702__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__38704 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__38704__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__38704,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38704);
var G__38704__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__38704__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38704__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__38704__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38704__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__38705 = top_data;
var G__38705__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__38705,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38705);
var G__38705__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__38705__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38705__$1);
var G__38705__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__38705__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38705__$2);
var G__38705__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__38705__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38705__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__38705__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38705__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__38706 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__38706,(0),null);
var method = cljs.core.nth.call(null,vec__38706,(1),null);
var file = cljs.core.nth.call(null,vec__38706,(2),null);
var line = cljs.core.nth.call(null,vec__38706,(3),null);
var G__38709 = top_data;
var G__38709__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__38709,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__38709);
var G__38709__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__38709__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__38709__$1);
var G__38709__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__38709__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__38709__$2);
var G__38709__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__38709__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38709__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__38709__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38709__$4;
}

break;
case "execution":
var vec__38710 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__38710,(0),null);
var method = cljs.core.nth.call(null,vec__38710,(1),null);
var file = cljs.core.nth.call(null,vec__38710,(2),null);
var line = cljs.core.nth.call(null,vec__38710,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__38692_SHARP_){
var or__4126__auto__ = (p1__38692_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__38692_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__38713 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__38713__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__38713,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__38713);
var G__38713__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__38713__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38713__$1);
var G__38713__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__38713__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__38713__$2);
var G__38713__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__38713__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__38713__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__38713__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38713__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38701__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__38717){
var map__38718 = p__38717;
var map__38718__$1 = (((((!((map__38718 == null))))?(((((map__38718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38718):map__38718);
var triage_data = map__38718__$1;
var phase = cljs.core.get.call(null,map__38718__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__38718__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__38718__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__38718__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__38718__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__38718__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__38718__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__38718__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__38720 = phase;
var G__38720__$1 = (((G__38720 instanceof cljs.core.Keyword))?G__38720.fqn:null);
switch (G__38720__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38721_38730 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38722_38731 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38723_38732 = true;
var _STAR_print_fn_STAR__temp_val__38724_38733 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38723_38732);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38724_38733);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__38715_SHARP_){
return cljs.core.dissoc.call(null,p1__38715_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38722_38731);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38721_38730);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38725_38734 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38726_38735 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38727_38736 = true;
var _STAR_print_fn_STAR__temp_val__38728_38737 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38727_38736);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38728_38737);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__38716_SHARP_){
return cljs.core.dissoc.call(null,p1__38716_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38726_38735);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38725_38734);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38720__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1748881113875
