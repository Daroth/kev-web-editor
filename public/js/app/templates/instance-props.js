define(['jadeRuntime'], function(jade) {
return function anonymous(locals) {
var buf = [];
with (locals || {}) {
buf.push("<div class=\"row-fluid\"><div class=\"row-fluid\"><div class=\"span4\">Instance name</div><input" + (jade.attrs({ 'id':('instance-prop-name'), 'type':('text'), 'placeholder':('Name'), 'value':(name), "class": ('span8') }, {"type":true,"placeholder":true,"value":true})) + "/></div>");
// iterate attrs
;(function(){
  var $$obj = attrs;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var att = $$obj[$index];

buf.push("<div class=\"row-fluid\"><div class=\"span4\">" + (jade.escape((jade.interp = att.name) == null ? '' : jade.interp)) + "</div>");
if ( att.type == 'enum')
{
buf.push("<select" + (jade.attrs({ 'id':('instance-prop-'+att.name), "class": ('span8') }, {"id":true})) + ">");
// iterate att.value
;(function(){
  var $$obj = att.value;
  if ('number' == typeof $$obj.length) {

    for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
      var item = $$obj[i];

buf.push("<option" + (jade.attrs({ 'value':(item), 'selected':((i == att.selected)?'selected':null) }, {"value":true,"selected":true})) + ">" + (jade.escape((jade.interp = item) == null ? '' : jade.interp)) + "</option>");
    }

  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;      if ($$obj.hasOwnProperty(i)){      var item = $$obj[i];

buf.push("<option" + (jade.attrs({ 'value':(item), 'selected':((i == att.selected)?'selected':null) }, {"value":true,"selected":true})) + ">" + (jade.escape((jade.interp = item) == null ? '' : jade.interp)) + "</option>");
      }

    }

  }
}).call(this);

buf.push("</select>");
}
else
{
buf.push("<input" + (jade.attrs({ 'id':('instance-prop-'+att.name), 'type':('text'), 'value':(att.value), "class": ('span8') }, {"id":true,"type":true,"value":true})) + "/>");
}
buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      if ($$obj.hasOwnProperty($index)){      var att = $$obj[$index];

buf.push("<div class=\"row-fluid\"><div class=\"span4\">" + (jade.escape((jade.interp = att.name) == null ? '' : jade.interp)) + "</div>");
if ( att.type == 'enum')
{
buf.push("<select" + (jade.attrs({ 'id':('instance-prop-'+att.name), "class": ('span8') }, {"id":true})) + ">");
// iterate att.value
;(function(){
  var $$obj = att.value;
  if ('number' == typeof $$obj.length) {

    for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
      var item = $$obj[i];

buf.push("<option" + (jade.attrs({ 'value':(item), 'selected':((i == att.selected)?'selected':null) }, {"value":true,"selected":true})) + ">" + (jade.escape((jade.interp = item) == null ? '' : jade.interp)) + "</option>");
    }

  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;      if ($$obj.hasOwnProperty(i)){      var item = $$obj[i];

buf.push("<option" + (jade.attrs({ 'value':(item), 'selected':((i == att.selected)?'selected':null) }, {"value":true,"selected":true})) + ">" + (jade.escape((jade.interp = item) == null ? '' : jade.interp)) + "</option>");
      }

    }

  }
}).call(this);

buf.push("</select>");
}
else
{
buf.push("<input" + (jade.attrs({ 'id':('instance-prop-'+att.name), 'type':('text'), 'value':(att.value), "class": ('span8') }, {"id":true,"type":true,"value":true})) + "/>");
}
buf.push("</div>");
      }

    }

  }
}).call(this);

buf.push("</div>");
}
return buf.join("");
};
});
