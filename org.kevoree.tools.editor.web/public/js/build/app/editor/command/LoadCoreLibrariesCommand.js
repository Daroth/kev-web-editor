define(["jquery","templates/corelib-items"],function(e,t){function n(){}function r(n,r){e.ajax({url:"load",data:{platform:n},dataType:"json",success:function(i){switch(i.result){case 1:r.addLibraries(n,i.libraries),e("#corelib-"+n).html(t({platform:n,items:i.libraries})),e(".corelib-item").off("click"),e(".corelib-item").on("click",function(){e(this).prop("checked")==1?e("#load-corelib").removeClass("disabled"):e(".corelib-item:checked").size()==0&&e("#load-corelib").addClass("disabled")}),e("#corelib-selectall-"+n).off("click"),e("#corelib-selectall-"+n).on("click",function(){e(this).prop("checked")?(e(".corelib-item[data-library-platform="+n+"]").prop("checked",!0),e("#load-corelib").removeClass("disabled")):(e(".corelib-item[data-library-platform="+n+"]").prop("checked",!1),e(".corelib-item:checked").size()==0&&e("#load-corelib").addClass("disabled"))});break;default:console.log(n+" libraries load error",i.message),e("#corelib-"+n).html('<div class="well"><p>Something went wrong while loading libraries :-(<br/><strong>Error:</strong> '+i.message+"</p></div>")}},error:function(t){console.log(n+" libraries load error",t),e("#corelib-"+n).html("<p>Something went wrong while loading libraries :-(</p>")}})}return n.prototype.execute=function(t){function n(e){return'<div class="well"><p><img src="img/ajax-loader-small.gif" alt="Loading"/> Please wait while '+e+" libraries are loading...</p></div>"}e("#corelib-javase").html(n("JavaSE")),e("#corelib-android").html(n("Android")),e("#corelib-javascript").html(n("Javascript")),e("#corelib-sky").html(n("SKY")),r("javase",t),r("android",t),r("javascript",t),r("sky",t)},n});