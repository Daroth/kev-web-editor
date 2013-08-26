define(['jadeRuntime'], function(jade) {
return function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),items = locals_.items,platform = locals_.platform;buf.push("<label class=\"checkbox\"><input id=\"corelib-selectall\" type=\"checkbox\"/><strong>Select all</strong></label>");
// iterate items
;(function(){
  var $$obj = items;
  if ('number' == typeof $$obj.length) {

    for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
      var item = $$obj[i];

buf.push("<label class=\"corelib-item-label checkbox\"><input" + (jade.attrs({ 'type':('checkbox'), 'data-library-platform':(platform), 'data-library-id':(i), "class": [('corelib-item')] }, {"type":true,"data-library-platform":true,"data-library-id":true})) + "/>" + (jade.escape((jade.interp = item.simpleName+'-'+item.version) == null ? '' : jade.interp)) + "</label>");
    }

  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;      var item = $$obj[i];

buf.push("<label class=\"corelib-item-label checkbox\"><input" + (jade.attrs({ 'type':('checkbox'), 'data-library-platform':(platform), 'data-library-id':(i), "class": [('corelib-item')] }, {"type":true,"data-library-platform":true,"data-library-id":true})) + "/>" + (jade.escape((jade.interp = item.simpleName+'-'+item.version) == null ? '' : jade.interp)) + "</label>");
    }

  }
}).call(this);
;return buf.join("");
};
});
