define(["jadeRuntime"],function(e){return function(n){var r=[],i=n||{},s=i.name,o=i.node,u=i.optional,a=i.type,f=i.possibleValues,l=i.selected,c=i.value,h=s;return o&&(h=o+"-"+s),r.push('<div class="row-fluid"><div class="span4">'),u||r.push('<i title="Mandatory attribute" class="icon-exclamation-sign mandatory-attribute"></i>&nbsp'),r.push(""+e.escape((e.interp=s)==null?"":e.interp)+"</div>"),a=="enum"?(r.push("<select"+e.attrs({id:"instance-attr-"+h,"class":["span8"]},{id:!0})+">"),function(){var t=f;if("number"==typeof t.length)for(var n=0,i=t.length;n<i;n++){var s=t[n];r.push("<option"+e.attrs({value:s,selected:n==l?"selected":null},{value:!0,selected:!0})+">"+e.escape((e.interp=s)==null?"":e.interp)+"</option>")}else{var i=0;for(var n in t){i++;var s=t[n];r.push("<option"+e.attrs({value:s,selected:n==l?"selected":null},{value:!0,selected:!0})+">"+e.escape((e.interp=s)==null?"":e.interp)+"</option>")}}}.call(this),r.push("</select>")):r.push("<input"+e.attrs({id:"instance-attr-"+h,type:"text",value:c,"class":["span8"]},{id:!0,type:!0,value:!0})+"/>"),r.push("</div>"),r.join("")}});