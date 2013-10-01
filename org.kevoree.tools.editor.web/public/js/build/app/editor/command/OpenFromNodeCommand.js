define(["util/AlertPopupHelper","util/Config","kevoree"],function(e,t,n){function i(){this._timeoutID=null}function s(t){clearTimeout(t),$("#open-node-popup").modal("hide"),$("#open-from-node").removeClass("disabled"),e.setText("Model loaded successfully"),e.setType(e.SUCCESS),e.show(5e3)}function o(t,n,r){clearTimeout(r);var i="Unable to get model from <strong>"+n+"</strong><br/><small>Are you sure that your model is valid ? Is remote target reachable ?</small>";t?(e.hide(),$("#open-from-node").removeClass("disabled"),$("#open-node-alert").removeClass("alert-success"),$("#open-node-alert").addClass("alert-error"),$("#open-node-alert-content").html(i),$("#open-node-alert").show(),$("#open-node-alert").addClass("in")):(e.setHTML(i),e.setType(e.ERROR),e.show(5e3))}function u(t,n){var r="Unable to get model from <strong>"+n+"</strong><br/><small>Request timed out (10 seconds).</small>";t?($("#open-from-node").removeClass("disabled"),$("#open-node-alert").removeClass("alert-success"),$("#open-node-alert").addClass("alert-error"),$("#open-node-alert-content").html(r),$("#open-node-alert").show(),$("#open-node-alert").addClass("in")):(e.setHTML(r),e.setType(e.ERROR),e.show(5e3))}var r=".open-node-popup";return i.prototype.execute=function(i,a,f,l){clearTimeout(this._timeoutID),$("body").off(r),$("body").on("hidden"+r,"#open-node-popup",function(){$("#open-node-alert").removeClass("in"),$("#open-node-alert").hide(),$("#open-from-node").removeClass("disabled"),l=!1});if(!$("#open-from-node").hasClass("disabled"))if(a&&a.length!=0){var c="<img src='img/ajax-loader-small.gif'/> Loading in progress, please wait...";l?($("#open-node-alert").removeClass("alert-error"),$("#open-node-alert").addClass("alert-success"),$("#open-node-alert-content").html(c),$("#open-node-alert").show(),$("#open-node-alert").addClass("in"),$("#open-from-node").addClass("disabled")):(e.setHTML(c),e.setType(e.SUCCESS),e.show());var h=this._timeoutID=setTimeout(function(){u(l,a)},1e4);switch(i){case t.TCP:$.ajax({url:"open",type:"POST",timeout:1e4,data:{uri:a},dataType:"json",success:function(e){switch(e.result){case-1:default:console.warn("Unable to open from node ("+a+"): "+e.message),o(l,a,h);break;case 1:try{var t=new n.org.kevoree.loader.JSONModelLoader,r=t.loadModelFromString(e.model).get(0);f.setModel(r),s(h)}catch(i){o(l,a,h)}}},error:function(){o(l,a,h)}});break;case t.HTTP:a=i+a,$.ajax({url:a,timeout:1e4,dataType:"json",success:function(e){try{var t=new n.org.kevoree.loader.JSONModelLoader,r=t.loadModelFromString(JSON.stringify(e)).get(0);f.setModel(r),s(h)}catch(i){o(l,a,h)}},error:function(){o(l,a,h)}});break;case t.WS:a=i+a;var p=new WebSocket(a);p.binaryType="arraybuffer",p.onmessage=function(e){try{var t=new n.org.kevoree.loader.JSONModelLoader,r=String.fromCharCode.apply(null,new Uint8Array(e.data)),i=t.loadModelFromString(r).get(0);f.setModel(i),s(h)}catch(u){o(l,a,h)}finally{p.close()}},p.onopen=function(){var e=new Uint8Array(1);e[0]=42,p.send(e.buffer)},p.onerror=function(){o(l,a,h)};break;default:}}else $("#open-node-alert-content").text("Malformed URI"),$("#open-node-alert").addClass("in")},i});