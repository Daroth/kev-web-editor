define(["jquery","util/Config"],function(e,t){function n(){}function r(t,n,r){var i=n=="true",s=e(t);s.prop("checked",i),r&&typeof r=="function"&&r.call(s,i)}return n.prototype.execute=function(e){var n=window.localStorage;if(n){var i=n.getItem(t.LS_ASK_BEFORE_LEAVING)||"true",s=n.getItem(t.LS_COMPONENT_TOOLTIP)||"true",o=n.getItem(t.LS_DISPLAY_ALERT_POPUPS)||"true",u=n.getItem(t.LS_CONFIRM_ON_LOAD)||"true";r("#ask-before-leaving",i),r("#component-tooltip",s,function(t){e.getUI().enableTooltips(t)}),r("#display-alert-popups",o,function(t){e.getUI().enableAlertPopups(t)}),r("#confirm-on-load-setting",u)}else console.warn("Your browser is not compatible with HTML5 Local Storage. KevWebEditor won't be able to save/load your settings!")},n});