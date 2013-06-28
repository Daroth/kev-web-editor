define(['jadeRuntime'], function(jade) {
return function anonymous(locals) {
var buf = [];
with (locals || {}) {
buf.push("<li" + (jade.attrs({ 'id':('node-link-root-'+id), 'data-node-link-id':(id), "class": ((isActive)?'active':null) }, {"id":true,"class":true,"data-node-link-id":true})) + "><a" + (jade.attrs({ 'id':('node-link-tab-val-'+id), 'href':('#node-link-'+id), 'data-toggle':('tab') }, {"id":true,"href":true,"data-toggle":true})) + ">" + (jade.escape((jade.interp = type) == null ? '' : jade.interp)) + "</a></li>");
}
return buf.join("");
};
});
