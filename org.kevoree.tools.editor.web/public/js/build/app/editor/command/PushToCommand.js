define(["kevoree"],function(e){function n(){this._id=null}var t=1e4;return n.prototype.execute=function(n,r,i,s){var o=this;clearTimeout(this._id),this._id=setTimeout(function(){s.error&&typeof s.error=="function"&&s.error.call(this,"Timeout: "+t+"ms")},t);try{var u=new e.org.kevoree.serializer.JSONModelSerializer,a=JSON.parse(u.serialize(i));$.ajax({url:"push",type:"POST",timeout:1e4,data:{destNodeName:n.getName(),grpName:r.getName(),model:a},dataType:"json",success:function(e){switch(e.result){case 1:s.success&&typeof s.success=="function"&&s.success.call(this),clearTimeout(o._id);break;case-1:default:s.error&&typeof s.error=="function"&&s.error.call(this,"Something went wrong while pushing model to "+n.getName()+" via "+r.getName()),clearTimeout(o._id)}},error:function(){s.error&&typeof s.error=="function"&&s.error.call(this,"Internal Server Error"),clearTimeout(o._id)}})}catch(f){s.error&&typeof s.error=="function"&&s.error.call(this,f.message),clearTimeout(o._id)}},n});