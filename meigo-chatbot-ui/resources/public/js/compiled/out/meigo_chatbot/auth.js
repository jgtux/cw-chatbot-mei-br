// Compiled by ClojureScript 1.10.773 {}
goog.provide('meigo_chatbot.auth');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('meigo_chatbot.config');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
meigo_chatbot.auth.green_primary = "#2a9d8f";
meigo_chatbot.auth.green_light = "#a8dadc";
meigo_chatbot.auth.green_muted = "#e0f2f1";
meigo_chatbot.auth.gray_light = "#f5f5f5";
meigo_chatbot.auth.gray_dark = "#264653";
meigo_chatbot.auth.border_light = "#d0d0d0";
meigo_chatbot.auth.text_dark = "#1b4332";
meigo_chatbot.auth.user_bubble_color = "#dcf8c6";
meigo_chatbot.auth.bot_bubble_color = "#ffffff";
if((typeof meigo_chatbot !== 'undefined') && (typeof meigo_chatbot.auth !== 'undefined') && (typeof meigo_chatbot.auth.register_mode_QMARK_ !== 'undefined')){
} else {
meigo_chatbot.auth.register_mode_QMARK_ = reagent.core.atom.call(null,false);
}
if((typeof meigo_chatbot !== 'undefined') && (typeof meigo_chatbot.auth !== 'undefined') && (typeof meigo_chatbot.auth.username !== 'undefined')){
} else {
meigo_chatbot.auth.username = reagent.core.atom.call(null,"");
}
if((typeof meigo_chatbot !== 'undefined') && (typeof meigo_chatbot.auth !== 'undefined') && (typeof meigo_chatbot.auth.password !== 'undefined')){
} else {
meigo_chatbot.auth.password = reagent.core.atom.call(null,"");
}
meigo_chatbot.auth.email = reagent.core.atom.call(null,"");
meigo_chatbot.auth.phone = reagent.core.atom.call(null,"");
meigo_chatbot.auth.birthday = reagent.core.atom.call(null,"");
meigo_chatbot.auth.confirm_password = reagent.core.atom.call(null,"");
if((typeof meigo_chatbot !== 'undefined') && (typeof meigo_chatbot.auth !== 'undefined') && (typeof meigo_chatbot.auth.error_message !== 'undefined')){
} else {
meigo_chatbot.auth.error_message = reagent.core.atom.call(null,"");
}
meigo_chatbot.auth.handle_error = (function meigo_chatbot$auth$handle_error(response){
var status = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response);
if(cljs.core._EQ_.call(null,status,(401))){
return cljs.core.reset_BANG_.call(null,meigo_chatbot.auth.error_message,"Usu\u00E1rio ou senha incorretos.");
} else {
if(cljs.core._EQ_.call(null,status,(403))){
return cljs.core.reset_BANG_.call(null,meigo_chatbot.auth.error_message,"Acesso negado.");
} else {
if(cljs.core._EQ_.call(null,status,(500))){
return cljs.core.reset_BANG_.call(null,meigo_chatbot.auth.error_message,"Erro no servidor. Tente novamente.");
} else {
return cljs.core.reset_BANG_.call(null,meigo_chatbot.auth.error_message,["Erro inesperado: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)].join(''));

}
}
}
});
meigo_chatbot.auth.check_auth_status = (function meigo_chatbot$auth$check_auth_status(){
cljs.core.reset_BANG_.call(null,meigo_chatbot.auth.error_message,"");

var c__24963__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24964__auto__ = (function (){var switch__24940__auto__ = (function (state_42694){
var state_val_42695 = (state_42694[(1)]);
if((state_val_42695 === (1))){
var inst_42677 = [meigo_chatbot.config.api_url,"/auth/status"].join('');
var inst_42678 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_42679 = [true];
var inst_42680 = cljs.core.PersistentHashMap.fromArrays(inst_42678,inst_42679);
var inst_42681 = cljs_http.client.get.call(null,inst_42677,inst_42680);
var state_42694__$1 = state_42694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42694__$1,(2),inst_42681);
} else {
if((state_val_42695 === (2))){
var inst_42683 = (state_42694[(2)]);
var inst_42684 = cljs.core.reset_BANG_.call(null,meigo_chatbot.config.checking_auth_QMARK_,false);
var inst_42685 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_42683);
var inst_42686 = cljs.core._EQ_.call(null,(200),inst_42685);
var state_42694__$1 = (function (){var statearr_42696 = state_42694;
(statearr_42696[(7)] = inst_42684);

return statearr_42696;
})();
if(inst_42686){
var statearr_42697_42705 = state_42694__$1;
(statearr_42697_42705[(1)] = (3));

} else {
var statearr_42698_42706 = state_42694__$1;
(statearr_42698_42706[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42695 === (3))){
var inst_42688 = cljs.core.reset_BANG_.call(null,meigo_chatbot.config.authenticated_QMARK_,true);
var state_42694__$1 = state_42694;
var statearr_42699_42707 = state_42694__$1;
(statearr_42699_42707[(2)] = inst_42688);

(statearr_42699_42707[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42695 === (4))){
var inst_42690 = cljs.core.reset_BANG_.call(null,meigo_chatbot.config.authenticated_QMARK_,false);
var state_42694__$1 = state_42694;
var statearr_42700_42708 = state_42694__$1;
(statearr_42700_42708[(2)] = inst_42690);

(statearr_42700_42708[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42695 === (5))){
var inst_42692 = (state_42694[(2)]);
var state_42694__$1 = state_42694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42694__$1,inst_42692);
} else {
return null;
}
}
}
}
}
});
return (function() {
var meigo_chatbot$auth$check_auth_status_$_state_machine__24941__auto__ = null;
var meigo_chatbot$auth$check_auth_status_$_state_machine__24941__auto____0 = (function (){
var statearr_42701 = [null,null,null,null,null,null,null,null];
(statearr_42701[(0)] = meigo_chatbot$auth$check_auth_status_$_state_machine__24941__auto__);

(statearr_42701[(1)] = (1));

return statearr_42701;
});
var meigo_chatbot$auth$check_auth_status_$_state_machine__24941__auto____1 = (function (state_42694){
while(true){
var ret_value__24942__auto__ = (function (){try{while(true){
var result__24943__auto__ = switch__24940__auto__.call(null,state_42694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24943__auto__;
}
break;
}
}catch (e42702){if((e42702 instanceof Object)){
var ex__24944__auto__ = e42702;
var statearr_42703_42709 = state_42694;
(statearr_42703_42709[(5)] = ex__24944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42710 = state_42694;
state_42694 = G__42710;
continue;
} else {
return ret_value__24942__auto__;
}
break;
}
});
meigo_chatbot$auth$check_auth_status_$_state_machine__24941__auto__ = function(state_42694){
switch(arguments.length){
case 0:
return meigo_chatbot$auth$check_auth_status_$_state_machine__24941__auto____0.call(this);
case 1:
return meigo_chatbot$auth$check_auth_status_$_state_machine__24941__auto____1.call(this,state_42694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
meigo_chatbot$auth$check_auth_status_$_state_machine__24941__auto__.cljs$core$IFn$_invoke$arity$0 = meigo_chatbot$auth$check_auth_status_$_state_machine__24941__auto____0;
meigo_chatbot$auth$check_auth_status_$_state_machine__24941__auto__.cljs$core$IFn$_invoke$arity$1 = meigo_chatbot$auth$check_auth_status_$_state_machine__24941__auto____1;
return meigo_chatbot$auth$check_auth_status_$_state_machine__24941__auto__;
})()
})();
var state__24965__auto__ = (function (){var statearr_42704 = f__24964__auto__.call(null);
(statearr_42704[(6)] = c__24963__auto__);

return statearr_42704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24965__auto__);
}));

return c__24963__auto__;
});
meigo_chatbot.auth.log_in = (function meigo_chatbot$auth$log_in(){
cljs.core.reset_BANG_.call(null,meigo_chatbot.config.loading_QMARK_,true);

cljs.core.reset_BANG_.call(null,meigo_chatbot.auth.error_message,"");

var c__24963__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24964__auto__ = (function (){var switch__24940__auto__ = (function (state_42735){
var state_val_42736 = (state_42735[(1)]);
if((state_val_42736 === (1))){
var inst_42711 = [meigo_chatbot.config.api_url,"/auth/login"].join('');
var inst_42712 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_42713 = JSON.stringify(({"nome": cljs.core.deref.call(null,meigo_chatbot.auth.username), "senha": cljs.core.deref.call(null,meigo_chatbot.auth.password)}));
var inst_42714 = ["Content-Type"];
var inst_42715 = ["application/json"];
var inst_42716 = cljs.core.PersistentHashMap.fromArrays(inst_42714,inst_42715);
var inst_42717 = [inst_42713,inst_42716,true];
var inst_42718 = cljs.core.PersistentHashMap.fromArrays(inst_42712,inst_42717);
var inst_42719 = cljs_http.client.post.call(null,inst_42711,inst_42718);
var state_42735__$1 = state_42735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42735__$1,(2),inst_42719);
} else {
if((state_val_42736 === (2))){
var inst_42721 = (state_42735[(7)]);
var inst_42721__$1 = (state_42735[(2)]);
var inst_42722 = cljs.core.reset_BANG_.call(null,meigo_chatbot.config.loading_QMARK_,false);
var inst_42723 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_42721__$1);
var inst_42724 = cljs.core._EQ_.call(null,(200),inst_42723);
var state_42735__$1 = (function (){var statearr_42737 = state_42735;
(statearr_42737[(8)] = inst_42722);

(statearr_42737[(7)] = inst_42721__$1);

return statearr_42737;
})();
if(inst_42724){
var statearr_42738_42747 = state_42735__$1;
(statearr_42738_42747[(1)] = (3));

} else {
var statearr_42739_42748 = state_42735__$1;
(statearr_42739_42748[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42736 === (3))){
var inst_42726 = cljs.core.reset_BANG_.call(null,meigo_chatbot.auth.username,"");
var inst_42727 = cljs.core.reset_BANG_.call(null,meigo_chatbot.auth.password,"");
var inst_42728 = cljs.core.reset_BANG_.call(null,meigo_chatbot.config.authenticated_QMARK_,true);
var inst_42729 = window.location.reload();
var state_42735__$1 = (function (){var statearr_42740 = state_42735;
(statearr_42740[(9)] = inst_42726);

(statearr_42740[(10)] = inst_42728);

(statearr_42740[(11)] = inst_42727);

return statearr_42740;
})();
var statearr_42741_42749 = state_42735__$1;
(statearr_42741_42749[(2)] = inst_42729);

(statearr_42741_42749[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42736 === (4))){
var inst_42721 = (state_42735[(7)]);
var inst_42731 = meigo_chatbot.auth.handle_error.call(null,inst_42721);
var state_42735__$1 = state_42735;
var statearr_42742_42750 = state_42735__$1;
(statearr_42742_42750[(2)] = inst_42731);

(statearr_42742_42750[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42736 === (5))){
var inst_42733 = (state_42735[(2)]);
var state_42735__$1 = state_42735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42735__$1,inst_42733);
} else {
return null;
}
}
}
}
}
});
return (function() {
var meigo_chatbot$auth$log_in_$_state_machine__24941__auto__ = null;
var meigo_chatbot$auth$log_in_$_state_machine__24941__auto____0 = (function (){
var statearr_42743 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42743[(0)] = meigo_chatbot$auth$log_in_$_state_machine__24941__auto__);

(statearr_42743[(1)] = (1));

return statearr_42743;
});
var meigo_chatbot$auth$log_in_$_state_machine__24941__auto____1 = (function (state_42735){
while(true){
var ret_value__24942__auto__ = (function (){try{while(true){
var result__24943__auto__ = switch__24940__auto__.call(null,state_42735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24943__auto__;
}
break;
}
}catch (e42744){if((e42744 instanceof Object)){
var ex__24944__auto__ = e42744;
var statearr_42745_42751 = state_42735;
(statearr_42745_42751[(5)] = ex__24944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42752 = state_42735;
state_42735 = G__42752;
continue;
} else {
return ret_value__24942__auto__;
}
break;
}
});
meigo_chatbot$auth$log_in_$_state_machine__24941__auto__ = function(state_42735){
switch(arguments.length){
case 0:
return meigo_chatbot$auth$log_in_$_state_machine__24941__auto____0.call(this);
case 1:
return meigo_chatbot$auth$log_in_$_state_machine__24941__auto____1.call(this,state_42735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
meigo_chatbot$auth$log_in_$_state_machine__24941__auto__.cljs$core$IFn$_invoke$arity$0 = meigo_chatbot$auth$log_in_$_state_machine__24941__auto____0;
meigo_chatbot$auth$log_in_$_state_machine__24941__auto__.cljs$core$IFn$_invoke$arity$1 = meigo_chatbot$auth$log_in_$_state_machine__24941__auto____1;
return meigo_chatbot$auth$log_in_$_state_machine__24941__auto__;
})()
})();
var state__24965__auto__ = (function (){var statearr_42746 = f__24964__auto__.call(null);
(statearr_42746[(6)] = c__24963__auto__);

return statearr_42746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24965__auto__);
}));

return c__24963__auto__;
});
meigo_chatbot.auth.register = (function meigo_chatbot$auth$register(){
cljs.core.reset_BANG_.call(null,meigo_chatbot.auth.error_message,"");

if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,meigo_chatbot.auth.password),cljs.core.deref.call(null,meigo_chatbot.auth.confirm_password))){
return cljs.core.reset_BANG_.call(null,meigo_chatbot.auth.error_message,"Passwords do not match");
} else {
cljs.core.reset_BANG_.call(null,meigo_chatbot.config.loading_QMARK_,true);

var payload = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"nome","nome",1100401122),cljs.core.deref.call(null,meigo_chatbot.auth.username),new cljs.core.Keyword(null,"senha","senha",1788313207),cljs.core.deref.call(null,meigo_chatbot.auth.password),new cljs.core.Keyword(null,"email","email",1415816706),cljs.core.deref.call(null,meigo_chatbot.auth.email),new cljs.core.Keyword(null,"data_nasc","data_nasc",7788492),cljs.core.deref.call(null,meigo_chatbot.auth.birthday),new cljs.core.Keyword(null,"telefone","telefone",-1656219951),cljs.core.deref.call(null,meigo_chatbot.auth.phone)], null);
var c__24963__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24964__auto__ = (function (){var switch__24940__auto__ = (function (state_42781){
var state_val_42782 = (state_42781[(1)]);
if((state_val_42782 === (1))){
var inst_42753 = [meigo_chatbot.config.api_url,"/auth/cadastrar"].join('');
var inst_42754 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_42755 = cljs.core.clj__GT_js.call(null,payload);
var inst_42756 = JSON.stringify(inst_42755);
var inst_42757 = ["Content-Type"];
var inst_42758 = ["application/json"];
var inst_42759 = cljs.core.PersistentHashMap.fromArrays(inst_42757,inst_42758);
var inst_42760 = [inst_42756,inst_42759,true];
var inst_42761 = cljs.core.PersistentHashMap.fromArrays(inst_42754,inst_42760);
var inst_42762 = cljs_http.client.post.call(null,inst_42753,inst_42761);
var state_42781__$1 = state_42781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42781__$1,(2),inst_42762);
} else {
if((state_val_42782 === (2))){
var inst_42764 = (state_42781[(7)]);
var inst_42764__$1 = (state_42781[(2)]);
var inst_42765 = cljs.core.reset_BANG_.call(null,meigo_chatbot.config.loading_QMARK_,false);
var inst_42766 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_42764__$1);
var inst_42767 = cljs.core._EQ_.call(null,(201),inst_42766);
var state_42781__$1 = (function (){var statearr_42783 = state_42781;
(statearr_42783[(7)] = inst_42764__$1);

(statearr_42783[(8)] = inst_42765);

return statearr_42783;
})();
if(inst_42767){
var statearr_42784_42793 = state_42781__$1;
(statearr_42784_42793[(1)] = (3));

} else {
var statearr_42785_42794 = state_42781__$1;
(statearr_42785_42794[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42782 === (3))){
var inst_42769 = cljs.core.reset_BANG_.call(null,meigo_chatbot.auth.username,"");
var inst_42770 = cljs.core.reset_BANG_.call(null,meigo_chatbot.auth.password,"");
var inst_42771 = cljs.core.reset_BANG_.call(null,meigo_chatbot.auth.confirm_password,"");
var inst_42772 = cljs.core.reset_BANG_.call(null,meigo_chatbot.auth.email,"");
var inst_42773 = cljs.core.reset_BANG_.call(null,meigo_chatbot.auth.phone,"");
var inst_42774 = cljs.core.reset_BANG_.call(null,meigo_chatbot.config.authenticated_QMARK_,true);
var inst_42775 = window.location.reload();
var state_42781__$1 = (function (){var statearr_42786 = state_42781;
(statearr_42786[(9)] = inst_42773);

(statearr_42786[(10)] = inst_42772);

(statearr_42786[(11)] = inst_42770);

(statearr_42786[(12)] = inst_42769);

(statearr_42786[(13)] = inst_42771);

(statearr_42786[(14)] = inst_42774);

return statearr_42786;
})();
var statearr_42787_42795 = state_42781__$1;
(statearr_42787_42795[(2)] = inst_42775);

(statearr_42787_42795[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42782 === (4))){
var inst_42764 = (state_42781[(7)]);
var inst_42777 = meigo_chatbot.auth.handle_error.call(null,inst_42764);
var state_42781__$1 = state_42781;
var statearr_42788_42796 = state_42781__$1;
(statearr_42788_42796[(2)] = inst_42777);

(statearr_42788_42796[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42782 === (5))){
var inst_42779 = (state_42781[(2)]);
var state_42781__$1 = state_42781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42781__$1,inst_42779);
} else {
return null;
}
}
}
}
}
});
return (function() {
var meigo_chatbot$auth$register_$_state_machine__24941__auto__ = null;
var meigo_chatbot$auth$register_$_state_machine__24941__auto____0 = (function (){
var statearr_42789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42789[(0)] = meigo_chatbot$auth$register_$_state_machine__24941__auto__);

(statearr_42789[(1)] = (1));

return statearr_42789;
});
var meigo_chatbot$auth$register_$_state_machine__24941__auto____1 = (function (state_42781){
while(true){
var ret_value__24942__auto__ = (function (){try{while(true){
var result__24943__auto__ = switch__24940__auto__.call(null,state_42781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24943__auto__;
}
break;
}
}catch (e42790){if((e42790 instanceof Object)){
var ex__24944__auto__ = e42790;
var statearr_42791_42797 = state_42781;
(statearr_42791_42797[(5)] = ex__24944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42798 = state_42781;
state_42781 = G__42798;
continue;
} else {
return ret_value__24942__auto__;
}
break;
}
});
meigo_chatbot$auth$register_$_state_machine__24941__auto__ = function(state_42781){
switch(arguments.length){
case 0:
return meigo_chatbot$auth$register_$_state_machine__24941__auto____0.call(this);
case 1:
return meigo_chatbot$auth$register_$_state_machine__24941__auto____1.call(this,state_42781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
meigo_chatbot$auth$register_$_state_machine__24941__auto__.cljs$core$IFn$_invoke$arity$0 = meigo_chatbot$auth$register_$_state_machine__24941__auto____0;
meigo_chatbot$auth$register_$_state_machine__24941__auto__.cljs$core$IFn$_invoke$arity$1 = meigo_chatbot$auth$register_$_state_machine__24941__auto____1;
return meigo_chatbot$auth$register_$_state_machine__24941__auto__;
})()
})();
var state__24965__auto__ = (function (){var statearr_42792 = f__24964__auto__.call(null);
(statearr_42792[(6)] = c__24963__auto__);

return statearr_42792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24965__auto__);
}));

return c__24963__auto__;
}
});
meigo_chatbot.auth.log_out = (function meigo_chatbot$auth$log_out(){
cljs.core.reset_BANG_.call(null,meigo_chatbot.config.loading_QMARK_,true);

var c__24963__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24964__auto__ = (function (){var switch__24940__auto__ = (function (state_42809){
var state_val_42810 = (state_42809[(1)]);
if((state_val_42810 === (1))){
var inst_42799 = [meigo_chatbot.config.api_url,"/auth/signout"].join('');
var inst_42800 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_42801 = [true];
var inst_42802 = cljs.core.PersistentHashMap.fromArrays(inst_42800,inst_42801);
var inst_42803 = cljs_http.client.post.call(null,inst_42799,inst_42802);
var state_42809__$1 = state_42809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42809__$1,(2),inst_42803);
} else {
if((state_val_42810 === (2))){
var inst_42805 = (state_42809[(2)]);
var inst_42806 = cljs.core.reset_BANG_.call(null,meigo_chatbot.config.loading_QMARK_,false);
var inst_42807 = window.location.reload();
var state_42809__$1 = (function (){var statearr_42811 = state_42809;
(statearr_42811[(7)] = inst_42805);

(statearr_42811[(8)] = inst_42806);

return statearr_42811;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42809__$1,inst_42807);
} else {
return null;
}
}
});
return (function() {
var meigo_chatbot$auth$log_out_$_state_machine__24941__auto__ = null;
var meigo_chatbot$auth$log_out_$_state_machine__24941__auto____0 = (function (){
var statearr_42812 = [null,null,null,null,null,null,null,null,null];
(statearr_42812[(0)] = meigo_chatbot$auth$log_out_$_state_machine__24941__auto__);

(statearr_42812[(1)] = (1));

return statearr_42812;
});
var meigo_chatbot$auth$log_out_$_state_machine__24941__auto____1 = (function (state_42809){
while(true){
var ret_value__24942__auto__ = (function (){try{while(true){
var result__24943__auto__ = switch__24940__auto__.call(null,state_42809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24943__auto__;
}
break;
}
}catch (e42813){if((e42813 instanceof Object)){
var ex__24944__auto__ = e42813;
var statearr_42814_42816 = state_42809;
(statearr_42814_42816[(5)] = ex__24944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42817 = state_42809;
state_42809 = G__42817;
continue;
} else {
return ret_value__24942__auto__;
}
break;
}
});
meigo_chatbot$auth$log_out_$_state_machine__24941__auto__ = function(state_42809){
switch(arguments.length){
case 0:
return meigo_chatbot$auth$log_out_$_state_machine__24941__auto____0.call(this);
case 1:
return meigo_chatbot$auth$log_out_$_state_machine__24941__auto____1.call(this,state_42809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
meigo_chatbot$auth$log_out_$_state_machine__24941__auto__.cljs$core$IFn$_invoke$arity$0 = meigo_chatbot$auth$log_out_$_state_machine__24941__auto____0;
meigo_chatbot$auth$log_out_$_state_machine__24941__auto__.cljs$core$IFn$_invoke$arity$1 = meigo_chatbot$auth$log_out_$_state_machine__24941__auto____1;
return meigo_chatbot$auth$log_out_$_state_machine__24941__auto__;
})()
})();
var state__24965__auto__ = (function (){var statearr_42815 = f__24964__auto__.call(null);
(statearr_42815[(6)] = c__24963__auto__);

return statearr_42815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24965__auto__);
}));

return c__24963__auto__;
});
meigo_chatbot.auth.authed_request = (function meigo_chatbot$auth$authed_request(method,url,p__42818){
var map__42819 = p__42818;
var map__42819__$1 = (((((!((map__42819 == null))))?(((((map__42819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42819):map__42819);
var params = cljs.core.get.call(null,map__42819__$1,new cljs.core.Keyword(null,"params","params",710516235));
var json_body = cljs.core.get.call(null,map__42819__$1,new cljs.core.Keyword(null,"json-body","json-body",1827874300));
var c__24963__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__24964__auto__ = (function (){var switch__24940__auto__ = (function (state_42854){
var state_val_42855 = (state_42854[(1)]);
if((state_val_42855 === (7))){
var inst_42839 = (state_42854[(2)]);
var inst_42840 = cljs.core.assoc.call(null,inst_42839,new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"url","url",276297046),url);
var inst_42841 = cljs_http.client.request.call(null,inst_42840);
var state_42854__$1 = state_42854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42854__$1,(8),inst_42841);
} else {
if((state_val_42855 === (1))){
var inst_42822 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_42823 = ["Content-Type"];
var inst_42824 = ["application/json"];
var inst_42825 = cljs.core.PersistentHashMap.fromArrays(inst_42823,inst_42824);
var inst_42826 = [true,inst_42825];
var inst_42827 = cljs.core.PersistentHashMap.fromArrays(inst_42822,inst_42826);
var state_42854__$1 = (function (){var statearr_42856 = state_42854;
(statearr_42856[(7)] = inst_42827);

return statearr_42856;
})();
if(cljs.core.truth_(params)){
var statearr_42857_42876 = state_42854__$1;
(statearr_42857_42876[(1)] = (2));

} else {
var statearr_42858_42877 = state_42854__$1;
(statearr_42858_42877[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42855 === (4))){
var inst_42832 = (state_42854[(2)]);
var state_42854__$1 = (function (){var statearr_42859 = state_42854;
(statearr_42859[(8)] = inst_42832);

return statearr_42859;
})();
if(cljs.core.truth_(json_body)){
var statearr_42860_42878 = state_42854__$1;
(statearr_42860_42878[(1)] = (5));

} else {
var statearr_42861_42879 = state_42854__$1;
(statearr_42861_42879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42855 === (6))){
var inst_42832 = (state_42854[(8)]);
var state_42854__$1 = state_42854;
var statearr_42862_42880 = state_42854__$1;
(statearr_42862_42880[(2)] = inst_42832);

(statearr_42862_42880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42855 === (3))){
var inst_42827 = (state_42854[(7)]);
var state_42854__$1 = state_42854;
var statearr_42863_42881 = state_42854__$1;
(statearr_42863_42881[(2)] = inst_42827);

(statearr_42863_42881[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42855 === (2))){
var inst_42827 = (state_42854[(7)]);
var inst_42829 = cljs.core.assoc.call(null,inst_42827,new cljs.core.Keyword(null,"query-params","query-params",900640534),params);
var state_42854__$1 = state_42854;
var statearr_42864_42882 = state_42854__$1;
(statearr_42864_42882[(2)] = inst_42829);

(statearr_42864_42882[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42855 === (11))){
var inst_42852 = (state_42854[(2)]);
var state_42854__$1 = state_42854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42854__$1,inst_42852);
} else {
if((state_val_42855 === (9))){
var inst_42843 = (state_42854[(9)]);
var inst_42847 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_42843);
var state_42854__$1 = state_42854;
var statearr_42865_42883 = state_42854__$1;
(statearr_42865_42883[(2)] = inst_42847);

(statearr_42865_42883[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42855 === (5))){
var inst_42832 = (state_42854[(8)]);
var inst_42834 = cljs.core.clj__GT_js.call(null,json_body);
var inst_42835 = JSON.stringify(inst_42834);
var inst_42836 = cljs.core.assoc.call(null,inst_42832,new cljs.core.Keyword(null,"body","body",-2049205669),inst_42835);
var state_42854__$1 = state_42854;
var statearr_42866_42884 = state_42854__$1;
(statearr_42866_42884[(2)] = inst_42836);

(statearr_42866_42884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42855 === (10))){
var inst_42843 = (state_42854[(9)]);
var inst_42849 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_42843);
var inst_42850 = cljs.core.println.call(null,"Request failed with status",inst_42849);
var state_42854__$1 = (function (){var statearr_42867 = state_42854;
(statearr_42867[(10)] = inst_42850);

return statearr_42867;
})();
var statearr_42868_42885 = state_42854__$1;
(statearr_42868_42885[(2)] = null);

(statearr_42868_42885[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42855 === (8))){
var inst_42843 = (state_42854[(9)]);
var inst_42843__$1 = (state_42854[(2)]);
var inst_42844 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_42843__$1);
var inst_42845 = cljs.core._EQ_.call(null,(200),inst_42844);
var state_42854__$1 = (function (){var statearr_42869 = state_42854;
(statearr_42869[(9)] = inst_42843__$1);

return statearr_42869;
})();
if(inst_42845){
var statearr_42870_42886 = state_42854__$1;
(statearr_42870_42886[(1)] = (9));

} else {
var statearr_42871_42887 = state_42854__$1;
(statearr_42871_42887[(1)] = (10));

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
var meigo_chatbot$auth$authed_request_$_state_machine__24941__auto__ = null;
var meigo_chatbot$auth$authed_request_$_state_machine__24941__auto____0 = (function (){
var statearr_42872 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42872[(0)] = meigo_chatbot$auth$authed_request_$_state_machine__24941__auto__);

(statearr_42872[(1)] = (1));

return statearr_42872;
});
var meigo_chatbot$auth$authed_request_$_state_machine__24941__auto____1 = (function (state_42854){
while(true){
var ret_value__24942__auto__ = (function (){try{while(true){
var result__24943__auto__ = switch__24940__auto__.call(null,state_42854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24943__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24943__auto__;
}
break;
}
}catch (e42873){if((e42873 instanceof Object)){
var ex__24944__auto__ = e42873;
var statearr_42874_42888 = state_42854;
(statearr_42874_42888[(5)] = ex__24944__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24942__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42889 = state_42854;
state_42854 = G__42889;
continue;
} else {
return ret_value__24942__auto__;
}
break;
}
});
meigo_chatbot$auth$authed_request_$_state_machine__24941__auto__ = function(state_42854){
switch(arguments.length){
case 0:
return meigo_chatbot$auth$authed_request_$_state_machine__24941__auto____0.call(this);
case 1:
return meigo_chatbot$auth$authed_request_$_state_machine__24941__auto____1.call(this,state_42854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
meigo_chatbot$auth$authed_request_$_state_machine__24941__auto__.cljs$core$IFn$_invoke$arity$0 = meigo_chatbot$auth$authed_request_$_state_machine__24941__auto____0;
meigo_chatbot$auth$authed_request_$_state_machine__24941__auto__.cljs$core$IFn$_invoke$arity$1 = meigo_chatbot$auth$authed_request_$_state_machine__24941__auto____1;
return meigo_chatbot$auth$authed_request_$_state_machine__24941__auto__;
})()
})();
var state__24965__auto__ = (function (){var statearr_42875 = f__24964__auto__.call(null);
(statearr_42875[(6)] = c__24963__auto__);

return statearr_42875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24965__auto__);
}));

return c__24963__auto__;
});
meigo_chatbot.auth.auth_form = (function meigo_chatbot$auth$auth_form(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"min-height","min-height",398480837),"100vh",new cljs.core.Keyword(null,"background-color","background-color",570434026),meigo_chatbot.auth.gray_light,new cljs.core.Keyword(null,"padding","padding",1660304693),"20px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/full-logo.png",new cljs.core.Keyword(null,"alt","alt",-3214426),"logo",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"300px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"20px"], null)], null)], null),(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,meigo_chatbot.auth.error_message)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#d32f2f",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.deref.call(null,meigo_chatbot.auth.error_message)], null)], null):null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

if(cljs.core.truth_(cljs.core.deref.call(null,meigo_chatbot.config.loading_QMARK_))){
return null;
} else {
if(cljs.core.truth_(cljs.core.deref.call(null,meigo_chatbot.auth.register_mode_QMARK_))){
return meigo_chatbot.auth.register.call(null);
} else {
return meigo_chatbot.auth.log_in.call(null);
}
}
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"gap","gap",80255254),"12px",new cljs.core.Keyword(null,"width","width",-384071477),"320px",new cljs.core.Keyword(null,"background-color","background-color",570434026),meigo_chatbot.auth.bot_bubble_color,new cljs.core.Keyword(null,"padding","padding",1660304693),"24px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"12px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),["0 8px 24px ",meigo_chatbot.auth.border_light].join('')], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"gap","gap",80255254),"12px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword(null,"color","color",1011675173),meigo_chatbot.auth.text_dark,new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"4px"], null)], null),"Usu\u00E1rio"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Username",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,meigo_chatbot.auth.username),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref.call(null,meigo_chatbot.config.loading_QMARK_),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__42890_SHARP_){
return cljs.core.reset_BANG_.call(null,meigo_chatbot.auth.username,p1__42890_SHARP_.target.value.trim());
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"padding","padding",1660304693),"12px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem",new cljs.core.Keyword(null,"border","border",1444987323),["1px solid ",meigo_chatbot.auth.border_light].join(''),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px",new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"transition","transition",765692007),"border-color 0.2s ease, box-shadow 0.2s ease",new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(cljs.core.deref.call(null,meigo_chatbot.config.loading_QMARK_))?meigo_chatbot.auth.gray_light:meigo_chatbot.auth.bot_bubble_color)], null),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (p1__42891_SHARP_){
return (p1__42891_SHARP_.target.style.borderColor = meigo_chatbot.auth.green_primary);
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (p1__42892_SHARP_){
return (p1__42892_SHARP_.target.style.borderColor = meigo_chatbot.auth.border_light);
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword(null,"color","color",1011675173),meigo_chatbot.auth.text_dark,new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"4px"], null)], null),"Senha"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Password",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,meigo_chatbot.auth.password),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref.call(null,meigo_chatbot.config.loading_QMARK_),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__42893_SHARP_){
return cljs.core.reset_BANG_.call(null,meigo_chatbot.auth.password,p1__42893_SHARP_.target.value);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"padding","padding",1660304693),"12px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem",new cljs.core.Keyword(null,"border","border",1444987323),["1px solid ",meigo_chatbot.auth.border_light].join(''),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px",new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"transition","transition",765692007),"border-color 0.2s ease, box-shadow 0.2s ease",new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(cljs.core.deref.call(null,meigo_chatbot.config.loading_QMARK_))?meigo_chatbot.auth.gray_light:meigo_chatbot.auth.bot_bubble_color)], null),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (p1__42894_SHARP_){
return (p1__42894_SHARP_.target.style.borderColor = meigo_chatbot.auth.green_primary);
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (p1__42895_SHARP_){
return (p1__42895_SHARP_.target.style.borderColor = meigo_chatbot.auth.border_light);
})], null)], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,meigo_chatbot.auth.register_mode_QMARK_))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword(null,"color","color",1011675173),meigo_chatbot.auth.text_dark,new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"4px"], null)], null),"Confirmar Senha"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Confirm Password",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,meigo_chatbot.auth.confirm_password),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref.call(null,meigo_chatbot.config.loading_QMARK_),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__42896_SHARP_){
return cljs.core.reset_BANG_.call(null,meigo_chatbot.auth.confirm_password,p1__42896_SHARP_.target.value);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"padding","padding",1660304693),"12px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem",new cljs.core.Keyword(null,"border","border",1444987323),["1px solid ",meigo_chatbot.auth.border_light].join(''),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px",new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"transition","transition",765692007),"border-color 0.2s ease, box-shadow 0.2s ease",new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(cljs.core.deref.call(null,meigo_chatbot.config.loading_QMARK_))?meigo_chatbot.auth.gray_light:meigo_chatbot.auth.bot_bubble_color)], null),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (p1__42897_SHARP_){
return (p1__42897_SHARP_.target.style.borderColor = meigo_chatbot.auth.green_primary);
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (p1__42898_SHARP_){
return (p1__42898_SHARP_.target.style.borderColor = meigo_chatbot.auth.border_light);
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword(null,"color","color",1011675173),meigo_chatbot.auth.text_dark,new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"4px"], null)], null),"Email"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),"email",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Email",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,meigo_chatbot.auth.email),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref.call(null,meigo_chatbot.config.loading_QMARK_),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__42899_SHARP_){
return cljs.core.reset_BANG_.call(null,meigo_chatbot.auth.email,p1__42899_SHARP_.target.value);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"padding","padding",1660304693),"12px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem",new cljs.core.Keyword(null,"border","border",1444987323),["1px solid ",meigo_chatbot.auth.border_light].join(''),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px",new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"transition","transition",765692007),"border-color 0.2s ease, box-shadow 0.2s ease",new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(cljs.core.deref.call(null,meigo_chatbot.config.loading_QMARK_))?meigo_chatbot.auth.gray_light:meigo_chatbot.auth.bot_bubble_color)], null),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (p1__42900_SHARP_){
return (p1__42900_SHARP_.target.style.borderColor = meigo_chatbot.auth.green_primary);
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (p1__42901_SHARP_){
return (p1__42901_SHARP_.target.style.borderColor = meigo_chatbot.auth.border_light);
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword(null,"color","color",1011675173),meigo_chatbot.auth.text_dark,new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"4px"], null)], null),"Data de Nascimento"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,meigo_chatbot.auth.birthday),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref.call(null,meigo_chatbot.config.loading_QMARK_),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__42902_SHARP_){
return cljs.core.reset_BANG_.call(null,meigo_chatbot.auth.birthday,p1__42902_SHARP_.target.value);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"padding","padding",1660304693),"12px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem",new cljs.core.Keyword(null,"color","color",1011675173),meigo_chatbot.auth.gray_dark,new cljs.core.Keyword(null,"border","border",1444987323),["1px solid ",meigo_chatbot.auth.border_light].join(''),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px",new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"transition","transition",765692007),"border-color 0.2s ease, box-shadow 0.2s ease",new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(cljs.core.deref.call(null,meigo_chatbot.config.loading_QMARK_))?meigo_chatbot.auth.gray_light:meigo_chatbot.auth.bot_bubble_color)], null),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (p1__42903_SHARP_){
return (p1__42903_SHARP_.target.style.borderColor = meigo_chatbot.auth.green_primary);
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (p1__42904_SHARP_){
return (p1__42904_SHARP_.target.style.borderColor = meigo_chatbot.auth.border_light);
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.9rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword(null,"color","color",1011675173),meigo_chatbot.auth.text_dark,new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"4px"], null)], null),"Telefone"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),"tel",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Phone",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,meigo_chatbot.auth.phone),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref.call(null,meigo_chatbot.config.loading_QMARK_),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__42905_SHARP_){
return cljs.core.reset_BANG_.call(null,meigo_chatbot.auth.phone,p1__42905_SHARP_.target.value);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"padding","padding",1660304693),"12px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem",new cljs.core.Keyword(null,"border","border",1444987323),["1px solid ",meigo_chatbot.auth.border_light].join(''),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px",new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"transition","transition",765692007),"border-color 0.2s ease, box-shadow 0.2s ease",new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(cljs.core.deref.call(null,meigo_chatbot.config.loading_QMARK_))?meigo_chatbot.auth.gray_light:meigo_chatbot.auth.bot_bubble_color)], null),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (p1__42906_SHARP_){
return (p1__42906_SHARP_.target.style.borderColor = meigo_chatbot.auth.green_primary);
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (p1__42907_SHARP_){
return (p1__42907_SHARP_.target.style.borderColor = meigo_chatbot.auth.border_light);
})], null)], null)], null)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"16px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref.call(null,meigo_chatbot.config.loading_QMARK_),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],["0 2px 8px rgba(42, 157, 143, 0.3)",meigo_chatbot.auth.bot_bubble_color,"1rem","all 0.3s ease","500",(cljs.core.truth_(cljs.core.deref.call(null,meigo_chatbot.config.loading_QMARK_))?meigo_chatbot.auth.border_light:(cljs.core.truth_(cljs.core.deref.call(null,meigo_chatbot.auth.register_mode_QMARK_))?meigo_chatbot.auth.green_primary:meigo_chatbot.auth.green_primary
)),"100%",(cljs.core.truth_(cljs.core.deref.call(null,meigo_chatbot.config.loading_QMARK_))?"not-allowed":"pointer"),"12px 24px","none","24px"]),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (p1__42908_SHARP_){
if(cljs.core.truth_(cljs.core.deref.call(null,meigo_chatbot.config.loading_QMARK_))){
return null;
} else {
(p1__42908_SHARP_.target.style.backgroundColor = "#228b78");

(p1__42908_SHARP_.target.style.transform = "translateY(-1px)");

return (p1__42908_SHARP_.target.style.boxShadow = "0 4px 12px rgba(42, 157, 143, 0.4)");
}
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (p1__42909_SHARP_){
if(cljs.core.truth_(cljs.core.deref.call(null,meigo_chatbot.config.loading_QMARK_))){
return null;
} else {
(p1__42909_SHARP_.target.style.backgroundColor = meigo_chatbot.auth.green_primary);

(p1__42909_SHARP_.target.style.transform = "translateY(0)");

return (p1__42909_SHARP_.target.style.boxShadow = "0 2px 8px rgba(42, 157, 143, 0.3)");
}
})], null),(cljs.core.truth_(cljs.core.deref.call(null,meigo_chatbot.config.loading_QMARK_))?(cljs.core.truth_(cljs.core.deref.call(null,meigo_chatbot.auth.register_mode_QMARK_))?"Registrando...":"Entrando..."):(cljs.core.truth_(cljs.core.deref.call(null,meigo_chatbot.auth.register_mode_QMARK_))?"Confirmar Registro":"Entrar"))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"12px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref.call(null,meigo_chatbot.config.loading_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,meigo_chatbot.auth.register_mode_QMARK_,cljs.core.not.call(null,cljs.core.deref.call(null,meigo_chatbot.auth.register_mode_QMARK_)));
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],[meigo_chatbot.auth.green_primary,"0.9rem","all 0.2s ease","transparent",(cljs.core.truth_(cljs.core.deref.call(null,meigo_chatbot.config.loading_QMARK_))?"not-allowed":"pointer"),"8px 16px","underline","none","4px"]),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (p1__42910_SHARP_){
if(cljs.core.truth_(cljs.core.deref.call(null,meigo_chatbot.config.loading_QMARK_))){
return null;
} else {
(p1__42910_SHARP_.target.style.backgroundColor = meigo_chatbot.auth.green_muted);

return (p1__42910_SHARP_.target.style.color = "#228b78");
}
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (p1__42911_SHARP_){
if(cljs.core.truth_(cljs.core.deref.call(null,meigo_chatbot.config.loading_QMARK_))){
return null;
} else {
(p1__42911_SHARP_.target.style.backgroundColor = "transparent");

return (p1__42911_SHARP_.target.style.color = meigo_chatbot.auth.green_primary);
}
})], null),(cljs.core.truth_(cljs.core.deref.call(null,meigo_chatbot.auth.register_mode_QMARK_))?"Voltar ao Login":"Registrar")], null)], null)], null)], null);
});

//# sourceMappingURL=auth.js.map?rel=1748983155490
