// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4126__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (cljs.core._EQ_.call(null,"cljs.core",ns)) || (cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__25795 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__25795 == null)){
return null;
} else {
return goog.object.get(G__25795,"requires");
}
}):(function (path){
var G__25796 = goog.object.get(goog.dependencies_.requires,path);
if((G__25796 == null)){
return null;
} else {
return goog.object.getKeys(G__25796);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25797_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25797_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__25798 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__25798__$1 = (((G__25798 == null))?null:goog.object.get(G__25798,"provides"));
if((G__25798__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__25798__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return goog.object.forEach(goog.object.filter(goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,goog.object.get(dep,"provides")));
})),(function (dep,path,_){
var provides = goog.object.get(dep,"provides");
var requires = goog.object.get(dep,"requires");
var seq__25799 = cljs.core.seq.call(null,provides);
var chunk__25800 = null;
var count__25801 = (0);
var i__25802 = (0);
while(true){
if((i__25802 < count__25801)){
var prov = cljs.core._nth.call(null,chunk__25800,i__25802);
var seq__25811_25823 = cljs.core.seq.call(null,requires);
var chunk__25812_25824 = null;
var count__25813_25825 = (0);
var i__25814_25826 = (0);
while(true){
if((i__25814_25826 < count__25813_25825)){
var req_25827 = cljs.core._nth.call(null,chunk__25812_25824,i__25814_25826);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25827,prov);


var G__25828 = seq__25811_25823;
var G__25829 = chunk__25812_25824;
var G__25830 = count__25813_25825;
var G__25831 = (i__25814_25826 + (1));
seq__25811_25823 = G__25828;
chunk__25812_25824 = G__25829;
count__25813_25825 = G__25830;
i__25814_25826 = G__25831;
continue;
} else {
var temp__5720__auto___25832 = cljs.core.seq.call(null,seq__25811_25823);
if(temp__5720__auto___25832){
var seq__25811_25833__$1 = temp__5720__auto___25832;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25811_25833__$1)){
var c__4556__auto___25834 = cljs.core.chunk_first.call(null,seq__25811_25833__$1);
var G__25835 = cljs.core.chunk_rest.call(null,seq__25811_25833__$1);
var G__25836 = c__4556__auto___25834;
var G__25837 = cljs.core.count.call(null,c__4556__auto___25834);
var G__25838 = (0);
seq__25811_25823 = G__25835;
chunk__25812_25824 = G__25836;
count__25813_25825 = G__25837;
i__25814_25826 = G__25838;
continue;
} else {
var req_25839 = cljs.core.first.call(null,seq__25811_25833__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25839,prov);


var G__25840 = cljs.core.next.call(null,seq__25811_25833__$1);
var G__25841 = null;
var G__25842 = (0);
var G__25843 = (0);
seq__25811_25823 = G__25840;
chunk__25812_25824 = G__25841;
count__25813_25825 = G__25842;
i__25814_25826 = G__25843;
continue;
}
} else {
}
}
break;
}


var G__25844 = seq__25799;
var G__25845 = chunk__25800;
var G__25846 = count__25801;
var G__25847 = (i__25802 + (1));
seq__25799 = G__25844;
chunk__25800 = G__25845;
count__25801 = G__25846;
i__25802 = G__25847;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__25799);
if(temp__5720__auto__){
var seq__25799__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25799__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__25799__$1);
var G__25848 = cljs.core.chunk_rest.call(null,seq__25799__$1);
var G__25849 = c__4556__auto__;
var G__25850 = cljs.core.count.call(null,c__4556__auto__);
var G__25851 = (0);
seq__25799 = G__25848;
chunk__25800 = G__25849;
count__25801 = G__25850;
i__25802 = G__25851;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25799__$1);
var seq__25815_25852 = cljs.core.seq.call(null,requires);
var chunk__25816_25853 = null;
var count__25817_25854 = (0);
var i__25818_25855 = (0);
while(true){
if((i__25818_25855 < count__25817_25854)){
var req_25856 = cljs.core._nth.call(null,chunk__25816_25853,i__25818_25855);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25856,prov);


var G__25857 = seq__25815_25852;
var G__25858 = chunk__25816_25853;
var G__25859 = count__25817_25854;
var G__25860 = (i__25818_25855 + (1));
seq__25815_25852 = G__25857;
chunk__25816_25853 = G__25858;
count__25817_25854 = G__25859;
i__25818_25855 = G__25860;
continue;
} else {
var temp__5720__auto___25861__$1 = cljs.core.seq.call(null,seq__25815_25852);
if(temp__5720__auto___25861__$1){
var seq__25815_25862__$1 = temp__5720__auto___25861__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25815_25862__$1)){
var c__4556__auto___25863 = cljs.core.chunk_first.call(null,seq__25815_25862__$1);
var G__25864 = cljs.core.chunk_rest.call(null,seq__25815_25862__$1);
var G__25865 = c__4556__auto___25863;
var G__25866 = cljs.core.count.call(null,c__4556__auto___25863);
var G__25867 = (0);
seq__25815_25852 = G__25864;
chunk__25816_25853 = G__25865;
count__25817_25854 = G__25866;
i__25818_25855 = G__25867;
continue;
} else {
var req_25868 = cljs.core.first.call(null,seq__25815_25862__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25868,prov);


var G__25869 = cljs.core.next.call(null,seq__25815_25862__$1);
var G__25870 = null;
var G__25871 = (0);
var G__25872 = (0);
seq__25815_25852 = G__25869;
chunk__25816_25853 = G__25870;
count__25817_25854 = G__25871;
i__25818_25855 = G__25872;
continue;
}
} else {
}
}
break;
}


var G__25873 = cljs.core.next.call(null,seq__25799__$1);
var G__25874 = null;
var G__25875 = (0);
var G__25876 = (0);
seq__25799 = G__25873;
chunk__25800 = G__25874;
count__25801 = G__25875;
i__25802 = G__25876;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (deps,path,_){
var seq__25819 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__25820 = null;
var count__25821 = (0);
var i__25822 = (0);
while(true){
if((i__25822 < count__25821)){
var prov = cljs.core._nth.call(null,chunk__25820,i__25822);
goog.object.forEach(deps,((function (seq__25819,chunk__25820,count__25821,i__25822,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__25819,chunk__25820,count__25821,i__25822,prov,requires))
);


var G__25877 = seq__25819;
var G__25878 = chunk__25820;
var G__25879 = count__25821;
var G__25880 = (i__25822 + (1));
seq__25819 = G__25877;
chunk__25820 = G__25878;
count__25821 = G__25879;
i__25822 = G__25880;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__25819);
if(temp__5720__auto__){
var seq__25819__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25819__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__25819__$1);
var G__25881 = cljs.core.chunk_rest.call(null,seq__25819__$1);
var G__25882 = c__4556__auto__;
var G__25883 = cljs.core.count.call(null,c__4556__auto__);
var G__25884 = (0);
seq__25819 = G__25881;
chunk__25820 = G__25882;
count__25821 = G__25883;
i__25822 = G__25884;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25819__$1);
goog.object.forEach(deps,((function (seq__25819,chunk__25820,count__25821,i__25822,prov,seq__25819__$1,temp__5720__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__25819,chunk__25820,count__25821,i__25822,prov,seq__25819__$1,temp__5720__auto__,requires))
);


var G__25885 = cljs.core.next.call(null,seq__25819__$1);
var G__25886 = null;
var G__25887 = (0);
var G__25888 = (0);
seq__25819 = G__25885;
chunk__25820 = G__25886;
count__25821 = G__25887;
i__25822 = G__25888;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__25889){
var vec__25890 = p__25889;
var _ = cljs.core.nth.call(null,vec__25890,(0),null);
var v = cljs.core.nth.call(null,vec__25890,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__25893){
var vec__25894 = p__25893;
var k = cljs.core.nth.call(null,vec__25894,(0),null);
var v = cljs.core.nth.call(null,vec__25894,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__25906_25914 = cljs.core.seq.call(null,deps);
var chunk__25907_25915 = null;
var count__25908_25916 = (0);
var i__25909_25917 = (0);
while(true){
if((i__25909_25917 < count__25908_25916)){
var dep_25918 = cljs.core._nth.call(null,chunk__25907_25915,i__25909_25917);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_25918;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_25918));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_25918,(depth + (1)),state);
} else {
}


var G__25919 = seq__25906_25914;
var G__25920 = chunk__25907_25915;
var G__25921 = count__25908_25916;
var G__25922 = (i__25909_25917 + (1));
seq__25906_25914 = G__25919;
chunk__25907_25915 = G__25920;
count__25908_25916 = G__25921;
i__25909_25917 = G__25922;
continue;
} else {
var temp__5720__auto___25923 = cljs.core.seq.call(null,seq__25906_25914);
if(temp__5720__auto___25923){
var seq__25906_25924__$1 = temp__5720__auto___25923;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25906_25924__$1)){
var c__4556__auto___25925 = cljs.core.chunk_first.call(null,seq__25906_25924__$1);
var G__25926 = cljs.core.chunk_rest.call(null,seq__25906_25924__$1);
var G__25927 = c__4556__auto___25925;
var G__25928 = cljs.core.count.call(null,c__4556__auto___25925);
var G__25929 = (0);
seq__25906_25914 = G__25926;
chunk__25907_25915 = G__25927;
count__25908_25916 = G__25928;
i__25909_25917 = G__25929;
continue;
} else {
var dep_25930 = cljs.core.first.call(null,seq__25906_25924__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_25930;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_25930));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_25930,(depth + (1)),state);
} else {
}


var G__25931 = cljs.core.next.call(null,seq__25906_25924__$1);
var G__25932 = null;
var G__25933 = (0);
var G__25934 = (0);
seq__25906_25914 = G__25931;
chunk__25907_25915 = G__25932;
count__25908_25916 = G__25933;
i__25909_25917 = G__25934;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25910){
var vec__25911 = p__25910;
var seq__25912 = cljs.core.seq.call(null,vec__25911);
var first__25913 = cljs.core.first.call(null,seq__25912);
var seq__25912__$1 = cljs.core.next.call(null,seq__25912);
var x = first__25913;
var xs = seq__25912__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__25897_SHARP_){
return clojure.set.difference.call(null,p1__25897_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.debugLoader_.written_,path);

return goog.object.remove(goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__25935_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__25935_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__25936 = cljs.core.seq.call(null,provides);
var chunk__25937 = null;
var count__25938 = (0);
var i__25939 = (0);
while(true){
if((i__25939 < count__25938)){
var prov = cljs.core._nth.call(null,chunk__25937,i__25939);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25948_25956 = cljs.core.seq.call(null,requires);
var chunk__25949_25957 = null;
var count__25950_25958 = (0);
var i__25951_25959 = (0);
while(true){
if((i__25951_25959 < count__25950_25958)){
var req_25960 = cljs.core._nth.call(null,chunk__25949_25957,i__25951_25959);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25960,prov);


var G__25961 = seq__25948_25956;
var G__25962 = chunk__25949_25957;
var G__25963 = count__25950_25958;
var G__25964 = (i__25951_25959 + (1));
seq__25948_25956 = G__25961;
chunk__25949_25957 = G__25962;
count__25950_25958 = G__25963;
i__25951_25959 = G__25964;
continue;
} else {
var temp__5720__auto___25965 = cljs.core.seq.call(null,seq__25948_25956);
if(temp__5720__auto___25965){
var seq__25948_25966__$1 = temp__5720__auto___25965;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25948_25966__$1)){
var c__4556__auto___25967 = cljs.core.chunk_first.call(null,seq__25948_25966__$1);
var G__25968 = cljs.core.chunk_rest.call(null,seq__25948_25966__$1);
var G__25969 = c__4556__auto___25967;
var G__25970 = cljs.core.count.call(null,c__4556__auto___25967);
var G__25971 = (0);
seq__25948_25956 = G__25968;
chunk__25949_25957 = G__25969;
count__25950_25958 = G__25970;
i__25951_25959 = G__25971;
continue;
} else {
var req_25972 = cljs.core.first.call(null,seq__25948_25966__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25972,prov);


var G__25973 = cljs.core.next.call(null,seq__25948_25966__$1);
var G__25974 = null;
var G__25975 = (0);
var G__25976 = (0);
seq__25948_25956 = G__25973;
chunk__25949_25957 = G__25974;
count__25950_25958 = G__25975;
i__25951_25959 = G__25976;
continue;
}
} else {
}
}
break;
}


var G__25977 = seq__25936;
var G__25978 = chunk__25937;
var G__25979 = count__25938;
var G__25980 = (i__25939 + (1));
seq__25936 = G__25977;
chunk__25937 = G__25978;
count__25938 = G__25979;
i__25939 = G__25980;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__25936);
if(temp__5720__auto__){
var seq__25936__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25936__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__25936__$1);
var G__25981 = cljs.core.chunk_rest.call(null,seq__25936__$1);
var G__25982 = c__4556__auto__;
var G__25983 = cljs.core.count.call(null,c__4556__auto__);
var G__25984 = (0);
seq__25936 = G__25981;
chunk__25937 = G__25982;
count__25938 = G__25983;
i__25939 = G__25984;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25936__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25952_25985 = cljs.core.seq.call(null,requires);
var chunk__25953_25986 = null;
var count__25954_25987 = (0);
var i__25955_25988 = (0);
while(true){
if((i__25955_25988 < count__25954_25987)){
var req_25989 = cljs.core._nth.call(null,chunk__25953_25986,i__25955_25988);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25989,prov);


var G__25990 = seq__25952_25985;
var G__25991 = chunk__25953_25986;
var G__25992 = count__25954_25987;
var G__25993 = (i__25955_25988 + (1));
seq__25952_25985 = G__25990;
chunk__25953_25986 = G__25991;
count__25954_25987 = G__25992;
i__25955_25988 = G__25993;
continue;
} else {
var temp__5720__auto___25994__$1 = cljs.core.seq.call(null,seq__25952_25985);
if(temp__5720__auto___25994__$1){
var seq__25952_25995__$1 = temp__5720__auto___25994__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25952_25995__$1)){
var c__4556__auto___25996 = cljs.core.chunk_first.call(null,seq__25952_25995__$1);
var G__25997 = cljs.core.chunk_rest.call(null,seq__25952_25995__$1);
var G__25998 = c__4556__auto___25996;
var G__25999 = cljs.core.count.call(null,c__4556__auto___25996);
var G__26000 = (0);
seq__25952_25985 = G__25997;
chunk__25953_25986 = G__25998;
count__25954_25987 = G__25999;
i__25955_25988 = G__26000;
continue;
} else {
var req_26001 = cljs.core.first.call(null,seq__25952_25995__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26001,prov);


var G__26002 = cljs.core.next.call(null,seq__25952_25995__$1);
var G__26003 = null;
var G__26004 = (0);
var G__26005 = (0);
seq__25952_25985 = G__26002;
chunk__25953_25986 = G__26003;
count__25954_25987 = G__26004;
i__25955_25988 = G__26005;
continue;
}
} else {
}
}
break;
}


var G__26006 = cljs.core.next.call(null,seq__25936__$1);
var G__26007 = null;
var G__26008 = (0);
var G__26009 = (0);
seq__25936 = G__26006;
chunk__25937 = G__26007;
count__25938 = G__26008;
i__25939 = G__26009;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26010_26014 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26011_26015 = null;
var count__26012_26016 = (0);
var i__26013_26017 = (0);
while(true){
if((i__26013_26017 < count__26012_26016)){
var ns_26018 = cljs.core._nth.call(null,chunk__26011_26015,i__26013_26017);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26018);


var G__26019 = seq__26010_26014;
var G__26020 = chunk__26011_26015;
var G__26021 = count__26012_26016;
var G__26022 = (i__26013_26017 + (1));
seq__26010_26014 = G__26019;
chunk__26011_26015 = G__26020;
count__26012_26016 = G__26021;
i__26013_26017 = G__26022;
continue;
} else {
var temp__5720__auto___26023 = cljs.core.seq.call(null,seq__26010_26014);
if(temp__5720__auto___26023){
var seq__26010_26024__$1 = temp__5720__auto___26023;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26010_26024__$1)){
var c__4556__auto___26025 = cljs.core.chunk_first.call(null,seq__26010_26024__$1);
var G__26026 = cljs.core.chunk_rest.call(null,seq__26010_26024__$1);
var G__26027 = c__4556__auto___26025;
var G__26028 = cljs.core.count.call(null,c__4556__auto___26025);
var G__26029 = (0);
seq__26010_26014 = G__26026;
chunk__26011_26015 = G__26027;
count__26012_26016 = G__26028;
i__26013_26017 = G__26029;
continue;
} else {
var ns_26030 = cljs.core.first.call(null,seq__26010_26024__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26030);


var G__26031 = cljs.core.next.call(null,seq__26010_26024__$1);
var G__26032 = null;
var G__26033 = (0);
var G__26034 = (0);
seq__26010_26014 = G__26031;
chunk__26011_26015 = G__26032;
count__26012_26016 = G__26033;
i__26013_26017 = G__26034;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4126__auto__ = goog.require__;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__26035__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26035 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26036__i = 0, G__26036__a = new Array(arguments.length -  0);
while (G__26036__i < G__26036__a.length) {G__26036__a[G__26036__i] = arguments[G__26036__i + 0]; ++G__26036__i;}
  args = new cljs.core.IndexedSeq(G__26036__a,0,null);
} 
return G__26035__delegate.call(this,args);};
G__26035.cljs$lang$maxFixedArity = 0;
G__26035.cljs$lang$applyTo = (function (arglist__26037){
var args = cljs.core.seq(arglist__26037);
return G__26035__delegate(args);
});
G__26035.cljs$core$IFn$_invoke$arity$variadic = G__26035__delegate;
return G__26035;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__26038_SHARP_,p2__26039_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26038_SHARP_)),p2__26039_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__26040_SHARP_,p2__26041_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26040_SHARP_),p2__26041_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__26042 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__26042.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__26042.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__26042;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e26043){if((e26043 instanceof Error)){
var e = e26043;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26043;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26044){if((e26044 instanceof Error)){
var e = e26044;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26044;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26045 = cljs.core._EQ_;
var expr__26046 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26045.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26046))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__26045.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26046))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__26045.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__26046))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26048,callback){
var map__26049 = p__26048;
var map__26049__$1 = (((((!((map__26049 == null))))?(((((map__26049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26049):map__26049);
var file_msg = map__26049__$1;
var request_url = cljs.core.get.call(null,map__26049__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4126__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__24963__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24964__auto__ = (function (){var switch__24940__auto__ = (function (state_26087){
var state_val_26088 = (state_26087[(1)]);
if((state_val_26088 === (7))){
var inst_26083 = (state_26087[(2)]);
var state_26087__$1 = state_26087;
var statearr_26089_26115 = state_26087__$1;
(statearr_26089_26115[(2)] = inst_26083);

(statearr_26089_26115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (1))){
var state_26087__$1 = state_26087;
var statearr_26090_26116 = state_26087__$1;
(statearr_26090_26116[(2)] = null);

(statearr_26090_26116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (4))){
var inst_26053 = (state_26087[(7)]);
var inst_26053__$1 = (state_26087[(2)]);
var state_26087__$1 = (function (){var statearr_26091 = state_26087;
(statearr_26091[(7)] = inst_26053__$1);

return statearr_26091;
})();
if(cljs.core.truth_(inst_26053__$1)){
var statearr_26092_26117 = state_26087__$1;
(statearr_26092_26117[(1)] = (5));

} else {
var statearr_26093_26118 = state_26087__$1;
(statearr_26093_26118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (15))){
var inst_26066 = (state_26087[(8)]);
var inst_26068 = (state_26087[(9)]);
var inst_26070 = inst_26068.call(null,inst_26066);
var state_26087__$1 = state_26087;
var statearr_26094_26119 = state_26087__$1;
(statearr_26094_26119[(2)] = inst_26070);

(statearr_26094_26119[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (13))){
var inst_26077 = (state_26087[(2)]);
var state_26087__$1 = state_26087;
var statearr_26095_26120 = state_26087__$1;
(statearr_26095_26120[(2)] = inst_26077);

(statearr_26095_26120[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (6))){
var state_26087__$1 = state_26087;
var statearr_26096_26121 = state_26087__$1;
(statearr_26096_26121[(2)] = null);

(statearr_26096_26121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (17))){
var inst_26074 = (state_26087[(2)]);
var state_26087__$1 = state_26087;
var statearr_26097_26122 = state_26087__$1;
(statearr_26097_26122[(2)] = inst_26074);

(statearr_26097_26122[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (3))){
var inst_26085 = (state_26087[(2)]);
var state_26087__$1 = state_26087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26087__$1,inst_26085);
} else {
if((state_val_26088 === (12))){
var state_26087__$1 = state_26087;
var statearr_26098_26123 = state_26087__$1;
(statearr_26098_26123[(2)] = null);

(statearr_26098_26123[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (2))){
var state_26087__$1 = state_26087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26087__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26088 === (11))){
var inst_26058 = (state_26087[(10)]);
var inst_26064 = figwheel.client.file_reloading.blocking_load.call(null,inst_26058);
var state_26087__$1 = state_26087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26087__$1,(14),inst_26064);
} else {
if((state_val_26088 === (9))){
var inst_26058 = (state_26087[(10)]);
var state_26087__$1 = state_26087;
if(cljs.core.truth_(inst_26058)){
var statearr_26099_26124 = state_26087__$1;
(statearr_26099_26124[(1)] = (11));

} else {
var statearr_26100_26125 = state_26087__$1;
(statearr_26100_26125[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (5))){
var inst_26053 = (state_26087[(7)]);
var inst_26059 = (state_26087[(11)]);
var inst_26058 = cljs.core.nth.call(null,inst_26053,(0),null);
var inst_26059__$1 = cljs.core.nth.call(null,inst_26053,(1),null);
var state_26087__$1 = (function (){var statearr_26101 = state_26087;
(statearr_26101[(10)] = inst_26058);

(statearr_26101[(11)] = inst_26059__$1);

return statearr_26101;
})();
if(cljs.core.truth_(inst_26059__$1)){
var statearr_26102_26126 = state_26087__$1;
(statearr_26102_26126[(1)] = (8));

} else {
var statearr_26103_26127 = state_26087__$1;
(statearr_26103_26127[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (14))){
var inst_26058 = (state_26087[(10)]);
var inst_26068 = (state_26087[(9)]);
var inst_26066 = (state_26087[(2)]);
var inst_26067 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26068__$1 = cljs.core.get.call(null,inst_26067,inst_26058);
var state_26087__$1 = (function (){var statearr_26104 = state_26087;
(statearr_26104[(8)] = inst_26066);

(statearr_26104[(9)] = inst_26068__$1);

return statearr_26104;
})();
if(cljs.core.truth_(inst_26068__$1)){
var statearr_26105_26128 = state_26087__$1;
(statearr_26105_26128[(1)] = (15));

} else {
var statearr_26106_26129 = state_26087__$1;
(statearr_26106_26129[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (16))){
var inst_26066 = (state_26087[(8)]);
var inst_26072 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26066);
var state_26087__$1 = state_26087;
var statearr_26107_26130 = state_26087__$1;
(statearr_26107_26130[(2)] = inst_26072);

(statearr_26107_26130[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (10))){
var inst_26079 = (state_26087[(2)]);
var state_26087__$1 = (function (){var statearr_26108 = state_26087;
(statearr_26108[(12)] = inst_26079);

return statearr_26108;
})();
var statearr_26109_26131 = state_26087__$1;
(statearr_26109_26131[(2)] = null);

(statearr_26109_26131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (8))){
var inst_26059 = (state_26087[(11)]);
var inst_26061 = eval(inst_26059);
var state_26087__$1 = state_26087;
var statearr_26110_26132 = state_26087__$1;
(statearr_26110_26132[(2)] = inst_26061);

(statearr_26110_26132[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__24941__auto__ = null;
var figwheel$client$file_reloading$state_machine__24941__auto____0 = (function (){
var statearr_26111 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26111[(0)] = figwheel$client$file_reloading$state_machine__24941__auto__);

(statearr_26111[(1)] = (1));

return statearr_26111;
});
var figwheel$client$file_reloading$state_machine__24941__auto____1 = (function (state_26087){
while(true){
var ret_value__24942__auto__ = (function (){try{while(true){
var result__24943__auto__ = switch__24940__auto__.call(null,state_26087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24943__auto__;
}
break;
}
}catch (e26112){if((e26112 instanceof Object)){
var ex__24944__auto__ = e26112;
var statearr_26113_26133 = state_26087;
(statearr_26113_26133[(5)] = ex__24944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26134 = state_26087;
state_26087 = G__26134;
continue;
} else {
return ret_value__24942__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24941__auto__ = function(state_26087){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24941__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24941__auto____1.call(this,state_26087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24941__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24941__auto____0;
figwheel$client$file_reloading$state_machine__24941__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24941__auto____1;
return figwheel$client$file_reloading$state_machine__24941__auto__;
})()
})();
var state__24965__auto__ = (function (){var statearr_26114 = f__24964__auto__.call(null);
(statearr_26114[(6)] = c__24963__auto__);

return statearr_26114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24965__auto__);
}));

return c__24963__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__26136 = arguments.length;
switch (G__26136) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26138,callback){
var map__26139 = p__26138;
var map__26139__$1 = (((((!((map__26139 == null))))?(((((map__26139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26139):map__26139);
var file_msg = map__26139__$1;
var namespace = cljs.core.get.call(null,map__26139__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__26141){
var map__26142 = p__26141;
var map__26142__$1 = (((((!((map__26142 == null))))?(((((map__26142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26142):map__26142);
var file_msg = map__26142__$1;
var namespace = cljs.core.get.call(null,map__26142__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26144){
var map__26145 = p__26144;
var map__26145__$1 = (((((!((map__26145 == null))))?(((((map__26145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26145):map__26145);
var file_msg = map__26145__$1;
var namespace = cljs.core.get.call(null,map__26145__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4126__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26147,callback){
var map__26148 = p__26147;
var map__26148__$1 = (((((!((map__26148 == null))))?(((((map__26148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26148):map__26148);
var file_msg = map__26148__$1;
var request_url = cljs.core.get.call(null,map__26148__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26148__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24963__auto___26198 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24964__auto__ = (function (){var switch__24940__auto__ = (function (state_26183){
var state_val_26184 = (state_26183[(1)]);
if((state_val_26184 === (1))){
var inst_26157 = cljs.core.seq.call(null,files);
var inst_26158 = cljs.core.first.call(null,inst_26157);
var inst_26159 = cljs.core.next.call(null,inst_26157);
var inst_26160 = files;
var state_26183__$1 = (function (){var statearr_26185 = state_26183;
(statearr_26185[(7)] = inst_26160);

(statearr_26185[(8)] = inst_26158);

(statearr_26185[(9)] = inst_26159);

return statearr_26185;
})();
var statearr_26186_26199 = state_26183__$1;
(statearr_26186_26199[(2)] = null);

(statearr_26186_26199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26184 === (2))){
var inst_26166 = (state_26183[(10)]);
var inst_26160 = (state_26183[(7)]);
var inst_26165 = cljs.core.seq.call(null,inst_26160);
var inst_26166__$1 = cljs.core.first.call(null,inst_26165);
var inst_26167 = cljs.core.next.call(null,inst_26165);
var inst_26168 = (inst_26166__$1 == null);
var inst_26169 = cljs.core.not.call(null,inst_26168);
var state_26183__$1 = (function (){var statearr_26187 = state_26183;
(statearr_26187[(10)] = inst_26166__$1);

(statearr_26187[(11)] = inst_26167);

return statearr_26187;
})();
if(inst_26169){
var statearr_26188_26200 = state_26183__$1;
(statearr_26188_26200[(1)] = (4));

} else {
var statearr_26189_26201 = state_26183__$1;
(statearr_26189_26201[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26184 === (3))){
var inst_26181 = (state_26183[(2)]);
var state_26183__$1 = state_26183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26183__$1,inst_26181);
} else {
if((state_val_26184 === (4))){
var inst_26166 = (state_26183[(10)]);
var inst_26171 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26166);
var state_26183__$1 = state_26183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26183__$1,(7),inst_26171);
} else {
if((state_val_26184 === (5))){
var inst_26177 = cljs.core.async.close_BANG_.call(null,out);
var state_26183__$1 = state_26183;
var statearr_26190_26202 = state_26183__$1;
(statearr_26190_26202[(2)] = inst_26177);

(statearr_26190_26202[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26184 === (6))){
var inst_26179 = (state_26183[(2)]);
var state_26183__$1 = state_26183;
var statearr_26191_26203 = state_26183__$1;
(statearr_26191_26203[(2)] = inst_26179);

(statearr_26191_26203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26184 === (7))){
var inst_26167 = (state_26183[(11)]);
var inst_26173 = (state_26183[(2)]);
var inst_26174 = cljs.core.async.put_BANG_.call(null,out,inst_26173);
var inst_26160 = inst_26167;
var state_26183__$1 = (function (){var statearr_26192 = state_26183;
(statearr_26192[(7)] = inst_26160);

(statearr_26192[(12)] = inst_26174);

return statearr_26192;
})();
var statearr_26193_26204 = state_26183__$1;
(statearr_26193_26204[(2)] = null);

(statearr_26193_26204[(1)] = (2));


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
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24941__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24941__auto____0 = (function (){
var statearr_26194 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26194[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24941__auto__);

(statearr_26194[(1)] = (1));

return statearr_26194;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24941__auto____1 = (function (state_26183){
while(true){
var ret_value__24942__auto__ = (function (){try{while(true){
var result__24943__auto__ = switch__24940__auto__.call(null,state_26183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24943__auto__;
}
break;
}
}catch (e26195){if((e26195 instanceof Object)){
var ex__24944__auto__ = e26195;
var statearr_26196_26205 = state_26183;
(statearr_26196_26205[(5)] = ex__24944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26206 = state_26183;
state_26183 = G__26206;
continue;
} else {
return ret_value__24942__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24941__auto__ = function(state_26183){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24941__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24941__auto____1.call(this,state_26183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24941__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24941__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24941__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24941__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24941__auto__;
})()
})();
var state__24965__auto__ = (function (){var statearr_26197 = f__24964__auto__.call(null);
(statearr_26197[(6)] = c__24963__auto___26198);

return statearr_26197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24965__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26207,opts){
var map__26208 = p__26207;
var map__26208__$1 = (((((!((map__26208 == null))))?(((((map__26208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26208):map__26208);
var eval_body = cljs.core.get.call(null,map__26208__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26208__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4115__auto__ = eval_body;
if(cljs.core.truth_(and__4115__auto__)){
return typeof eval_body === 'string';
} else {
return and__4115__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26210){var e = e26210;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__26211_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26211_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__26212){
var vec__26213 = p__26212;
var k = cljs.core.nth.call(null,vec__26213,(0),null);
var v = cljs.core.nth.call(null,vec__26213,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26216){
var vec__26217 = p__26216;
var k = cljs.core.nth.call(null,vec__26217,(0),null);
var v = cljs.core.nth.call(null,vec__26217,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26223,p__26224){
var map__26225 = p__26223;
var map__26225__$1 = (((((!((map__26225 == null))))?(((((map__26225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26225):map__26225);
var opts = map__26225__$1;
var before_jsload = cljs.core.get.call(null,map__26225__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26225__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__26225__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__26226 = p__26224;
var map__26226__$1 = (((((!((map__26226 == null))))?(((((map__26226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26226):map__26226);
var msg = map__26226__$1;
var files = cljs.core.get.call(null,map__26226__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__26226__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__26226__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24963__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24964__auto__ = (function (){var switch__24940__auto__ = (function (state_26380){
var state_val_26381 = (state_26380[(1)]);
if((state_val_26381 === (7))){
var inst_26240 = (state_26380[(7)]);
var inst_26243 = (state_26380[(8)]);
var inst_26242 = (state_26380[(9)]);
var inst_26241 = (state_26380[(10)]);
var inst_26248 = cljs.core._nth.call(null,inst_26241,inst_26243);
var inst_26249 = figwheel.client.file_reloading.eval_body.call(null,inst_26248,opts);
var inst_26250 = (inst_26243 + (1));
var tmp26382 = inst_26240;
var tmp26383 = inst_26242;
var tmp26384 = inst_26241;
var inst_26240__$1 = tmp26382;
var inst_26241__$1 = tmp26384;
var inst_26242__$1 = tmp26383;
var inst_26243__$1 = inst_26250;
var state_26380__$1 = (function (){var statearr_26385 = state_26380;
(statearr_26385[(11)] = inst_26249);

(statearr_26385[(7)] = inst_26240__$1);

(statearr_26385[(8)] = inst_26243__$1);

(statearr_26385[(9)] = inst_26242__$1);

(statearr_26385[(10)] = inst_26241__$1);

return statearr_26385;
})();
var statearr_26386_26469 = state_26380__$1;
(statearr_26386_26469[(2)] = null);

(statearr_26386_26469[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (20))){
var inst_26283 = (state_26380[(12)]);
var inst_26291 = figwheel.client.file_reloading.sort_files.call(null,inst_26283);
var state_26380__$1 = state_26380;
var statearr_26387_26470 = state_26380__$1;
(statearr_26387_26470[(2)] = inst_26291);

(statearr_26387_26470[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (27))){
var state_26380__$1 = state_26380;
var statearr_26388_26471 = state_26380__$1;
(statearr_26388_26471[(2)] = null);

(statearr_26388_26471[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (1))){
var inst_26232 = (state_26380[(13)]);
var inst_26229 = before_jsload.call(null,files);
var inst_26230 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26231 = (function (){return (function (p1__26220_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26220_SHARP_);
});
})();
var inst_26232__$1 = cljs.core.filter.call(null,inst_26231,files);
var inst_26233 = cljs.core.not_empty.call(null,inst_26232__$1);
var state_26380__$1 = (function (){var statearr_26389 = state_26380;
(statearr_26389[(14)] = inst_26230);

(statearr_26389[(15)] = inst_26229);

(statearr_26389[(13)] = inst_26232__$1);

return statearr_26389;
})();
if(cljs.core.truth_(inst_26233)){
var statearr_26390_26472 = state_26380__$1;
(statearr_26390_26472[(1)] = (2));

} else {
var statearr_26391_26473 = state_26380__$1;
(statearr_26391_26473[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (24))){
var state_26380__$1 = state_26380;
var statearr_26392_26474 = state_26380__$1;
(statearr_26392_26474[(2)] = null);

(statearr_26392_26474[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (39))){
var inst_26333 = (state_26380[(16)]);
var state_26380__$1 = state_26380;
var statearr_26393_26475 = state_26380__$1;
(statearr_26393_26475[(2)] = inst_26333);

(statearr_26393_26475[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (46))){
var inst_26375 = (state_26380[(2)]);
var state_26380__$1 = state_26380;
var statearr_26394_26476 = state_26380__$1;
(statearr_26394_26476[(2)] = inst_26375);

(statearr_26394_26476[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (4))){
var inst_26277 = (state_26380[(2)]);
var inst_26278 = cljs.core.List.EMPTY;
var inst_26279 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_26278);
var inst_26280 = (function (){return (function (p1__26221_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26221_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26221_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__26221_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_26281 = cljs.core.filter.call(null,inst_26280,files);
var inst_26282 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_26283 = cljs.core.concat.call(null,inst_26281,inst_26282);
var state_26380__$1 = (function (){var statearr_26395 = state_26380;
(statearr_26395[(12)] = inst_26283);

(statearr_26395[(17)] = inst_26279);

(statearr_26395[(18)] = inst_26277);

return statearr_26395;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26396_26477 = state_26380__$1;
(statearr_26396_26477[(1)] = (16));

} else {
var statearr_26397_26478 = state_26380__$1;
(statearr_26397_26478[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (15))){
var inst_26267 = (state_26380[(2)]);
var state_26380__$1 = state_26380;
var statearr_26398_26479 = state_26380__$1;
(statearr_26398_26479[(2)] = inst_26267);

(statearr_26398_26479[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (21))){
var inst_26293 = (state_26380[(19)]);
var inst_26293__$1 = (state_26380[(2)]);
var inst_26294 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26293__$1);
var state_26380__$1 = (function (){var statearr_26399 = state_26380;
(statearr_26399[(19)] = inst_26293__$1);

return statearr_26399;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26380__$1,(22),inst_26294);
} else {
if((state_val_26381 === (31))){
var inst_26378 = (state_26380[(2)]);
var state_26380__$1 = state_26380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26380__$1,inst_26378);
} else {
if((state_val_26381 === (32))){
var inst_26333 = (state_26380[(16)]);
var inst_26338 = inst_26333.cljs$lang$protocol_mask$partition0$;
var inst_26339 = (inst_26338 & (64));
var inst_26340 = inst_26333.cljs$core$ISeq$;
var inst_26341 = (cljs.core.PROTOCOL_SENTINEL === inst_26340);
var inst_26342 = ((inst_26339) || (inst_26341));
var state_26380__$1 = state_26380;
if(cljs.core.truth_(inst_26342)){
var statearr_26400_26480 = state_26380__$1;
(statearr_26400_26480[(1)] = (35));

} else {
var statearr_26401_26481 = state_26380__$1;
(statearr_26401_26481[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (40))){
var inst_26355 = (state_26380[(20)]);
var inst_26354 = (state_26380[(2)]);
var inst_26355__$1 = cljs.core.get.call(null,inst_26354,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26356 = cljs.core.get.call(null,inst_26354,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26357 = cljs.core.not_empty.call(null,inst_26355__$1);
var state_26380__$1 = (function (){var statearr_26402 = state_26380;
(statearr_26402[(21)] = inst_26356);

(statearr_26402[(20)] = inst_26355__$1);

return statearr_26402;
})();
if(cljs.core.truth_(inst_26357)){
var statearr_26403_26482 = state_26380__$1;
(statearr_26403_26482[(1)] = (41));

} else {
var statearr_26404_26483 = state_26380__$1;
(statearr_26404_26483[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (33))){
var state_26380__$1 = state_26380;
var statearr_26405_26484 = state_26380__$1;
(statearr_26405_26484[(2)] = false);

(statearr_26405_26484[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (13))){
var inst_26253 = (state_26380[(22)]);
var inst_26257 = cljs.core.chunk_first.call(null,inst_26253);
var inst_26258 = cljs.core.chunk_rest.call(null,inst_26253);
var inst_26259 = cljs.core.count.call(null,inst_26257);
var inst_26240 = inst_26258;
var inst_26241 = inst_26257;
var inst_26242 = inst_26259;
var inst_26243 = (0);
var state_26380__$1 = (function (){var statearr_26406 = state_26380;
(statearr_26406[(7)] = inst_26240);

(statearr_26406[(8)] = inst_26243);

(statearr_26406[(9)] = inst_26242);

(statearr_26406[(10)] = inst_26241);

return statearr_26406;
})();
var statearr_26407_26485 = state_26380__$1;
(statearr_26407_26485[(2)] = null);

(statearr_26407_26485[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (22))){
var inst_26301 = (state_26380[(23)]);
var inst_26296 = (state_26380[(24)]);
var inst_26293 = (state_26380[(19)]);
var inst_26297 = (state_26380[(25)]);
var inst_26296__$1 = (state_26380[(2)]);
var inst_26297__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26296__$1);
var inst_26298 = (function (){var all_files = inst_26293;
var res_SINGLEQUOTE_ = inst_26296__$1;
var res = inst_26297__$1;
return (function (p1__26222_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26222_SHARP_));
});
})();
var inst_26299 = cljs.core.filter.call(null,inst_26298,inst_26296__$1);
var inst_26300 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_26301__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26300);
var inst_26302 = cljs.core.not_empty.call(null,inst_26301__$1);
var state_26380__$1 = (function (){var statearr_26408 = state_26380;
(statearr_26408[(23)] = inst_26301__$1);

(statearr_26408[(24)] = inst_26296__$1);

(statearr_26408[(26)] = inst_26299);

(statearr_26408[(25)] = inst_26297__$1);

return statearr_26408;
})();
if(cljs.core.truth_(inst_26302)){
var statearr_26409_26486 = state_26380__$1;
(statearr_26409_26486[(1)] = (23));

} else {
var statearr_26410_26487 = state_26380__$1;
(statearr_26410_26487[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (36))){
var state_26380__$1 = state_26380;
var statearr_26411_26488 = state_26380__$1;
(statearr_26411_26488[(2)] = false);

(statearr_26411_26488[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (41))){
var inst_26355 = (state_26380[(20)]);
var inst_26359 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26360 = cljs.core.map.call(null,inst_26359,inst_26355);
var inst_26361 = cljs.core.pr_str.call(null,inst_26360);
var inst_26362 = ["figwheel-no-load meta-data: ",inst_26361].join('');
var inst_26363 = figwheel.client.utils.log.call(null,inst_26362);
var state_26380__$1 = state_26380;
var statearr_26412_26489 = state_26380__$1;
(statearr_26412_26489[(2)] = inst_26363);

(statearr_26412_26489[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (43))){
var inst_26356 = (state_26380[(21)]);
var inst_26366 = (state_26380[(2)]);
var inst_26367 = cljs.core.not_empty.call(null,inst_26356);
var state_26380__$1 = (function (){var statearr_26413 = state_26380;
(statearr_26413[(27)] = inst_26366);

return statearr_26413;
})();
if(cljs.core.truth_(inst_26367)){
var statearr_26414_26490 = state_26380__$1;
(statearr_26414_26490[(1)] = (44));

} else {
var statearr_26415_26491 = state_26380__$1;
(statearr_26415_26491[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (29))){
var inst_26301 = (state_26380[(23)]);
var inst_26333 = (state_26380[(16)]);
var inst_26296 = (state_26380[(24)]);
var inst_26293 = (state_26380[(19)]);
var inst_26299 = (state_26380[(26)]);
var inst_26297 = (state_26380[(25)]);
var inst_26329 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26332 = (function (){var all_files = inst_26293;
var res_SINGLEQUOTE_ = inst_26296;
var res = inst_26297;
var files_not_loaded = inst_26299;
var dependencies_that_loaded = inst_26301;
return (function (p__26331){
var map__26416 = p__26331;
var map__26416__$1 = (((((!((map__26416 == null))))?(((((map__26416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26416):map__26416);
var namespace = cljs.core.get.call(null,map__26416__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_26333__$1 = cljs.core.group_by.call(null,inst_26332,inst_26299);
var inst_26335 = (inst_26333__$1 == null);
var inst_26336 = cljs.core.not.call(null,inst_26335);
var state_26380__$1 = (function (){var statearr_26418 = state_26380;
(statearr_26418[(16)] = inst_26333__$1);

(statearr_26418[(28)] = inst_26329);

return statearr_26418;
})();
if(inst_26336){
var statearr_26419_26492 = state_26380__$1;
(statearr_26419_26492[(1)] = (32));

} else {
var statearr_26420_26493 = state_26380__$1;
(statearr_26420_26493[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (44))){
var inst_26356 = (state_26380[(21)]);
var inst_26369 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26356);
var inst_26370 = cljs.core.pr_str.call(null,inst_26369);
var inst_26371 = ["not required: ",inst_26370].join('');
var inst_26372 = figwheel.client.utils.log.call(null,inst_26371);
var state_26380__$1 = state_26380;
var statearr_26421_26494 = state_26380__$1;
(statearr_26421_26494[(2)] = inst_26372);

(statearr_26421_26494[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (6))){
var inst_26274 = (state_26380[(2)]);
var state_26380__$1 = state_26380;
var statearr_26422_26495 = state_26380__$1;
(statearr_26422_26495[(2)] = inst_26274);

(statearr_26422_26495[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (28))){
var inst_26299 = (state_26380[(26)]);
var inst_26326 = (state_26380[(2)]);
var inst_26327 = cljs.core.not_empty.call(null,inst_26299);
var state_26380__$1 = (function (){var statearr_26423 = state_26380;
(statearr_26423[(29)] = inst_26326);

return statearr_26423;
})();
if(cljs.core.truth_(inst_26327)){
var statearr_26424_26496 = state_26380__$1;
(statearr_26424_26496[(1)] = (29));

} else {
var statearr_26425_26497 = state_26380__$1;
(statearr_26425_26497[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (25))){
var inst_26297 = (state_26380[(25)]);
var inst_26313 = (state_26380[(2)]);
var inst_26314 = cljs.core.not_empty.call(null,inst_26297);
var state_26380__$1 = (function (){var statearr_26426 = state_26380;
(statearr_26426[(30)] = inst_26313);

return statearr_26426;
})();
if(cljs.core.truth_(inst_26314)){
var statearr_26427_26498 = state_26380__$1;
(statearr_26427_26498[(1)] = (26));

} else {
var statearr_26428_26499 = state_26380__$1;
(statearr_26428_26499[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (34))){
var inst_26349 = (state_26380[(2)]);
var state_26380__$1 = state_26380;
if(cljs.core.truth_(inst_26349)){
var statearr_26429_26500 = state_26380__$1;
(statearr_26429_26500[(1)] = (38));

} else {
var statearr_26430_26501 = state_26380__$1;
(statearr_26430_26501[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (17))){
var state_26380__$1 = state_26380;
var statearr_26431_26502 = state_26380__$1;
(statearr_26431_26502[(2)] = recompile_dependents);

(statearr_26431_26502[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (3))){
var state_26380__$1 = state_26380;
var statearr_26432_26503 = state_26380__$1;
(statearr_26432_26503[(2)] = null);

(statearr_26432_26503[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (12))){
var inst_26270 = (state_26380[(2)]);
var state_26380__$1 = state_26380;
var statearr_26433_26504 = state_26380__$1;
(statearr_26433_26504[(2)] = inst_26270);

(statearr_26433_26504[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (2))){
var inst_26232 = (state_26380[(13)]);
var inst_26239 = cljs.core.seq.call(null,inst_26232);
var inst_26240 = inst_26239;
var inst_26241 = null;
var inst_26242 = (0);
var inst_26243 = (0);
var state_26380__$1 = (function (){var statearr_26434 = state_26380;
(statearr_26434[(7)] = inst_26240);

(statearr_26434[(8)] = inst_26243);

(statearr_26434[(9)] = inst_26242);

(statearr_26434[(10)] = inst_26241);

return statearr_26434;
})();
var statearr_26435_26505 = state_26380__$1;
(statearr_26435_26505[(2)] = null);

(statearr_26435_26505[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (23))){
var inst_26301 = (state_26380[(23)]);
var inst_26296 = (state_26380[(24)]);
var inst_26293 = (state_26380[(19)]);
var inst_26299 = (state_26380[(26)]);
var inst_26297 = (state_26380[(25)]);
var inst_26304 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_26306 = (function (){var all_files = inst_26293;
var res_SINGLEQUOTE_ = inst_26296;
var res = inst_26297;
var files_not_loaded = inst_26299;
var dependencies_that_loaded = inst_26301;
return (function (p__26305){
var map__26436 = p__26305;
var map__26436__$1 = (((((!((map__26436 == null))))?(((((map__26436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26436):map__26436);
var request_url = cljs.core.get.call(null,map__26436__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_26307 = cljs.core.reverse.call(null,inst_26301);
var inst_26308 = cljs.core.map.call(null,inst_26306,inst_26307);
var inst_26309 = cljs.core.pr_str.call(null,inst_26308);
var inst_26310 = figwheel.client.utils.log.call(null,inst_26309);
var state_26380__$1 = (function (){var statearr_26438 = state_26380;
(statearr_26438[(31)] = inst_26304);

return statearr_26438;
})();
var statearr_26439_26506 = state_26380__$1;
(statearr_26439_26506[(2)] = inst_26310);

(statearr_26439_26506[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (35))){
var state_26380__$1 = state_26380;
var statearr_26440_26507 = state_26380__$1;
(statearr_26440_26507[(2)] = true);

(statearr_26440_26507[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (19))){
var inst_26283 = (state_26380[(12)]);
var inst_26289 = figwheel.client.file_reloading.expand_files.call(null,inst_26283);
var state_26380__$1 = state_26380;
var statearr_26441_26508 = state_26380__$1;
(statearr_26441_26508[(2)] = inst_26289);

(statearr_26441_26508[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (11))){
var state_26380__$1 = state_26380;
var statearr_26442_26509 = state_26380__$1;
(statearr_26442_26509[(2)] = null);

(statearr_26442_26509[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (9))){
var inst_26272 = (state_26380[(2)]);
var state_26380__$1 = state_26380;
var statearr_26443_26510 = state_26380__$1;
(statearr_26443_26510[(2)] = inst_26272);

(statearr_26443_26510[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (5))){
var inst_26243 = (state_26380[(8)]);
var inst_26242 = (state_26380[(9)]);
var inst_26245 = (inst_26243 < inst_26242);
var inst_26246 = inst_26245;
var state_26380__$1 = state_26380;
if(cljs.core.truth_(inst_26246)){
var statearr_26444_26511 = state_26380__$1;
(statearr_26444_26511[(1)] = (7));

} else {
var statearr_26445_26512 = state_26380__$1;
(statearr_26445_26512[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (14))){
var inst_26253 = (state_26380[(22)]);
var inst_26262 = cljs.core.first.call(null,inst_26253);
var inst_26263 = figwheel.client.file_reloading.eval_body.call(null,inst_26262,opts);
var inst_26264 = cljs.core.next.call(null,inst_26253);
var inst_26240 = inst_26264;
var inst_26241 = null;
var inst_26242 = (0);
var inst_26243 = (0);
var state_26380__$1 = (function (){var statearr_26446 = state_26380;
(statearr_26446[(7)] = inst_26240);

(statearr_26446[(32)] = inst_26263);

(statearr_26446[(8)] = inst_26243);

(statearr_26446[(9)] = inst_26242);

(statearr_26446[(10)] = inst_26241);

return statearr_26446;
})();
var statearr_26447_26513 = state_26380__$1;
(statearr_26447_26513[(2)] = null);

(statearr_26447_26513[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (45))){
var state_26380__$1 = state_26380;
var statearr_26448_26514 = state_26380__$1;
(statearr_26448_26514[(2)] = null);

(statearr_26448_26514[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (26))){
var inst_26301 = (state_26380[(23)]);
var inst_26296 = (state_26380[(24)]);
var inst_26293 = (state_26380[(19)]);
var inst_26299 = (state_26380[(26)]);
var inst_26297 = (state_26380[(25)]);
var inst_26316 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26318 = (function (){var all_files = inst_26293;
var res_SINGLEQUOTE_ = inst_26296;
var res = inst_26297;
var files_not_loaded = inst_26299;
var dependencies_that_loaded = inst_26301;
return (function (p__26317){
var map__26449 = p__26317;
var map__26449__$1 = (((((!((map__26449 == null))))?(((((map__26449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26449):map__26449);
var namespace = cljs.core.get.call(null,map__26449__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26449__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_26319 = cljs.core.map.call(null,inst_26318,inst_26297);
var inst_26320 = cljs.core.pr_str.call(null,inst_26319);
var inst_26321 = figwheel.client.utils.log.call(null,inst_26320);
var inst_26322 = (function (){var all_files = inst_26293;
var res_SINGLEQUOTE_ = inst_26296;
var res = inst_26297;
var files_not_loaded = inst_26299;
var dependencies_that_loaded = inst_26301;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_26323 = setTimeout(inst_26322,(10));
var state_26380__$1 = (function (){var statearr_26451 = state_26380;
(statearr_26451[(33)] = inst_26316);

(statearr_26451[(34)] = inst_26321);

return statearr_26451;
})();
var statearr_26452_26515 = state_26380__$1;
(statearr_26452_26515[(2)] = inst_26323);

(statearr_26452_26515[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (16))){
var state_26380__$1 = state_26380;
var statearr_26453_26516 = state_26380__$1;
(statearr_26453_26516[(2)] = reload_dependents);

(statearr_26453_26516[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (38))){
var inst_26333 = (state_26380[(16)]);
var inst_26351 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26333);
var state_26380__$1 = state_26380;
var statearr_26454_26517 = state_26380__$1;
(statearr_26454_26517[(2)] = inst_26351);

(statearr_26454_26517[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (30))){
var state_26380__$1 = state_26380;
var statearr_26455_26518 = state_26380__$1;
(statearr_26455_26518[(2)] = null);

(statearr_26455_26518[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (10))){
var inst_26253 = (state_26380[(22)]);
var inst_26255 = cljs.core.chunked_seq_QMARK_.call(null,inst_26253);
var state_26380__$1 = state_26380;
if(inst_26255){
var statearr_26456_26519 = state_26380__$1;
(statearr_26456_26519[(1)] = (13));

} else {
var statearr_26457_26520 = state_26380__$1;
(statearr_26457_26520[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (18))){
var inst_26287 = (state_26380[(2)]);
var state_26380__$1 = state_26380;
if(cljs.core.truth_(inst_26287)){
var statearr_26458_26521 = state_26380__$1;
(statearr_26458_26521[(1)] = (19));

} else {
var statearr_26459_26522 = state_26380__$1;
(statearr_26459_26522[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (42))){
var state_26380__$1 = state_26380;
var statearr_26460_26523 = state_26380__$1;
(statearr_26460_26523[(2)] = null);

(statearr_26460_26523[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (37))){
var inst_26346 = (state_26380[(2)]);
var state_26380__$1 = state_26380;
var statearr_26461_26524 = state_26380__$1;
(statearr_26461_26524[(2)] = inst_26346);

(statearr_26461_26524[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26381 === (8))){
var inst_26240 = (state_26380[(7)]);
var inst_26253 = (state_26380[(22)]);
var inst_26253__$1 = cljs.core.seq.call(null,inst_26240);
var state_26380__$1 = (function (){var statearr_26462 = state_26380;
(statearr_26462[(22)] = inst_26253__$1);

return statearr_26462;
})();
if(inst_26253__$1){
var statearr_26463_26525 = state_26380__$1;
(statearr_26463_26525[(1)] = (10));

} else {
var statearr_26464_26526 = state_26380__$1;
(statearr_26464_26526[(1)] = (11));

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
}
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24941__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24941__auto____0 = (function (){
var statearr_26465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26465[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24941__auto__);

(statearr_26465[(1)] = (1));

return statearr_26465;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24941__auto____1 = (function (state_26380){
while(true){
var ret_value__24942__auto__ = (function (){try{while(true){
var result__24943__auto__ = switch__24940__auto__.call(null,state_26380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24943__auto__;
}
break;
}
}catch (e26466){if((e26466 instanceof Object)){
var ex__24944__auto__ = e26466;
var statearr_26467_26527 = state_26380;
(statearr_26467_26527[(5)] = ex__24944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26528 = state_26380;
state_26380 = G__26528;
continue;
} else {
return ret_value__24942__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24941__auto__ = function(state_26380){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24941__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24941__auto____1.call(this,state_26380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24941__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24941__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24941__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24941__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24941__auto__;
})()
})();
var state__24965__auto__ = (function (){var statearr_26468 = f__24964__auto__.call(null);
(statearr_26468[(6)] = c__24963__auto__);

return statearr_26468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24965__auto__);
}));

return c__24963__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26531,link){
var map__26532 = p__26531;
var map__26532__$1 = (((((!((map__26532 == null))))?(((((map__26532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26532):map__26532);
var file = cljs.core.get.call(null,map__26532__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__26529_SHARP_,p2__26530_SHARP_){
if(cljs.core._EQ_.call(null,p1__26529_SHARP_,p2__26530_SHARP_)){
return p1__26529_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26535){
var map__26536 = p__26535;
var map__26536__$1 = (((((!((map__26536 == null))))?(((((map__26536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26536):map__26536);
var match_length = cljs.core.get.call(null,map__26536__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26536__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26534_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26534_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26538_SHARP_,p2__26539_SHARP_){
return cljs.core.assoc.call(null,p1__26538_SHARP_,cljs.core.get.call(null,p2__26539_SHARP_,key),p2__26539_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_26540 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_26540);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_26540);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26541,p__26542){
var map__26543 = p__26541;
var map__26543__$1 = (((((!((map__26543 == null))))?(((((map__26543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26543):map__26543);
var on_cssload = cljs.core.get.call(null,map__26543__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__26544 = p__26542;
var map__26544__$1 = (((((!((map__26544 == null))))?(((((map__26544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26544):map__26544);
var files_msg = map__26544__$1;
var files = cljs.core.get.call(null,map__26544__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1748975098573
