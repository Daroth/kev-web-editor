define(["jadeRuntime"],function(e){return function(n){var r=[],i=n||{},s=i.id,o=i.isActive,u=i.type,a=i.minRate,f=i.maxRate,l=i.rate,c=i.props;return r.push("<div"+e.attrs({id:"node-link-"+s,"data-node-link-id":s,"class":["tab-pane",o?"active":null]},{"class":!0,id:!0,"data-node-link-id":!0})+'><div class="row-fluid"><div class="input-prepend span4"><span class="add-on add-on-gray">Type</span><input'+e.attrs({id:"node-link-type-"+s,type:"text",placeholder:"LAN, Wifi...",value:u,"class":["input-medium"]},{id:!0,type:!0,placeholder:!0,value:!0})+'/></div><div class="input-prepend offset4 span3"><span class="add-on add-on-gray">Rate</span><input'+e.attrs({id:"node-link-rate-"+s,type:"number",min:a,max:f,placeholder:"Trust 0~100",value:l,"class":["input-small"]},{id:!0,type:!0,min:!0,max:!0,placeholder:!0,value:!0})+'/></div></div><div class="row-fluid"><div id="network-properties-container" class="well"><h5><span class="span4">Network properties</span><div class="btn-group span2 offset6"><button'+e.attrs({id:"network-property-delete-"+s,"class":["btn","btn-danger","btn-mini","disabled"]},{id:!0})+'><i class="icon-trash icon-white"></i></button><button'+e.attrs({id:"network-property-add-"+s,"class":["btn","btn-info","btn-mini"]},{id:!0})+'><i class="icon-plus icon-white"></i></button></div></h5><div'+e.attrs({id:"network-property-list-"+s,"class":["row-fluid"]},{id:!0})+">"),function(){var t=c;if("number"==typeof t.length)for(var n=0,i=t.length;n<i;n++){var s=t[n];r.push(null==(e.interp=s.HTML)?"":e.interp)}else{var i=0;for(var n in t){i++;var s=t[n];r.push(null==(e.interp=s.HTML)?"":e.interp)}}}.call(this),r.push("</div></div></div></div>"),r.join("")}});