define(['jadeRuntime'], function(jade) {
return function anonymous(locals) {
var buf = [];
with (locals || {}) {
// iterate attrs
;(function(){
  var $$obj = attrs;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var att = $$obj[$index];

buf.push("<div class=\"row-fluid\"><div class=\"span4\">" + (jade.escape((jade.interp = att.name) == null ? '' : jade.interp)) + "</div><div style=\"margin-left: 0\" class=\"input-prepend span4\"><span class=\"add-on add-on-gray\">IP</span><input" + (jade.attrs({ 'id':('group-prop-ip-'+att.name), 'type':('text'), 'placeholder':('0.0.0.0'), 'value':(att.ip), "class": ('input-small') }, {"id":true,"type":true,"placeholder":true,"value":true})) + "/></div><div class=\"input-prepend span3 offset1\"><span class=\"add-on add-on-gray\">Port</span><input" + (jade.attrs({ 'id':('group-prop-port-'+att.name), 'type':("number"), 'value':(att.port), "class": ('input-mini') }, {"id":true,"type":true,"value":true})) + "/></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      if ($$obj.hasOwnProperty($index)){      var att = $$obj[$index];

buf.push("<div class=\"row-fluid\"><div class=\"span4\">" + (jade.escape((jade.interp = att.name) == null ? '' : jade.interp)) + "</div><div style=\"margin-left: 0\" class=\"input-prepend span4\"><span class=\"add-on add-on-gray\">IP</span><input" + (jade.attrs({ 'id':('group-prop-ip-'+att.name), 'type':('text'), 'placeholder':('0.0.0.0'), 'value':(att.ip), "class": ('input-small') }, {"id":true,"type":true,"placeholder":true,"value":true})) + "/></div><div class=\"input-prepend span3 offset1\"><span class=\"add-on add-on-gray\">Port</span><input" + (jade.attrs({ 'id':('group-prop-port-'+att.name), 'type':("number"), 'value':(att.port), "class": ('input-mini') }, {"id":true,"type":true,"value":true})) + "/></div></div>");
      }

    }

  }
}).call(this);

}
return buf.join("");
};
});
