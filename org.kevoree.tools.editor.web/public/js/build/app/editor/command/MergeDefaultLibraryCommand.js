define(["jquery","util/ModelHelper","util/AlertPopupHelper","kevoree"],function(e,t,n,r){function s(){}var i=".merge-default-library-command";return s.prototype.execute=function(t){e("body").off(i),e("body").on("hidden"+i,"#load-corelib-popup",function(){e("#loading-corelib").hide(),e("#load-corelib").show(),e("#load-corelib-popup-error-content").html(""),e("#load-corelib-popup-error").addClass("hide")});if(e(".corelib-item:checked").size()>0){e("#load-corelib").hide(),e("#loading-corelib").show();var n={};e(".corelib-item:checked").each(function(){var r=e(this),i=r.attr("data-library-platform"),s=t.getLibraries(i)[r.attr("data-library-id")];n[i]=n[i]||[],n[i].push({artifactID:s.artifactID,groupID:s.groupID,version:s.version})}),e.ajax({url:"merge",data:{libz:n},dataType:"json",success:function(n){switch(n.result){case 1:try{var i=new r.org.kevoree.loader.JSONModelLoader,s=i.loadModelFromString(JSON.stringify(n.model)).get(0);t.mergeModel(s),e("#loading-corelib").hide(),e("#load-corelib").show(),e("#load-corelib-popup").modal("hide")}catch(o){console.log("MergeDefaultLib cmd caught error: ",o),e("#loading-corelib").hide(),e("#load-corelib").show(),e("#load-corelib-popup-error-content").html("Unable to load received model."),e("#load-corelib-popup-error").removeClass("hide")}break;default:e("#loading-corelib").hide(),e("#load-corelib").show(),e("#load-corelib-popup-error-content").html(n.message),e("#load-corelib-popup-error").removeClass("hide")}},error:function(t){console.error(t),e("#loading-corelib").hide(),e("#load-corelib").show(),e("#load-corelib-popup-error-content").html(t.message),e("#load-corelib-popup-error").removeClass("hide")}})}},s});