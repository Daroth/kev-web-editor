define(['jadeRuntime'], function(jade) {
return function anonymous(locals) {
var buf = [];
with (locals || {}) {
if ( nodes.length > 0)
{
buf.push("<div class=\"row-fluid\"><div class=\"well\"><ul class=\"nav nav-tabs\">");
// iterate nodes
;(function(){
  var $$obj = nodes;
  if ('number' == typeof $$obj.length) {

    for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
      var node = $$obj[i];

buf.push("<li" + (jade.attrs({ "class": ((i==0)?'active':null) }, {"class":true})) + "><a" + (jade.attrs({ 'href':('#node-props-'+node.name), 'data-toggle':('tab') }, {"href":true,"data-toggle":true})) + ">" + (jade.escape((jade.interp = node.name) == null ? '' : jade.interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;      if ($$obj.hasOwnProperty(i)){      var node = $$obj[i];

buf.push("<li" + (jade.attrs({ "class": ((i==0)?'active':null) }, {"class":true})) + "><a" + (jade.attrs({ 'href':('#node-props-'+node.name), 'data-toggle':('tab') }, {"href":true,"data-toggle":true})) + ">" + (jade.escape((jade.interp = node.name) == null ? '' : jade.interp)) + "</a></li>");
      }

    }

  }
}).call(this);

buf.push("</ul><div class=\"tab-content\">");
// iterate nodes
;(function(){
  var $$obj = nodes;
  if ('number' == typeof $$obj.length) {

    for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
      var node = $$obj[i];

buf.push("<div" + (jade.attrs({ 'id':('node-props-'+node.name), "class": ('tab-pane') + ' ' + ((i==0)?'active':null) }, {"class":true,"id":true})) + ">");
// iterate node.attrs
;(function(){
  var $$obj = node.attrs;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var att = $$obj[$index];

buf.push("<div class=\"row-fluid\"><div class=\"span4\">" + (jade.escape((jade.interp = att.name) == null ? '' : jade.interp)) + "</div>");
if ( att.type == 'enum')
{
buf.push("<select" + (jade.attrs({ 'id':('fragment-dependant-prop-'+node.name+'-'+att.name), "class": ('span8') }, {"id":true})) + ">");
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
buf.push("<input" + (jade.attrs({ 'id':('fragment-dependant-prop-'+node.name+'-'+att.name), 'type':('text'), 'value':(att.value), "class": ('span8') }, {"id":true,"type":true,"value":true})) + "/>");
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
buf.push("<select" + (jade.attrs({ 'id':('fragment-dependant-prop-'+node.name+'-'+att.name), "class": ('span8') }, {"id":true})) + ">");
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
buf.push("<input" + (jade.attrs({ 'id':('fragment-dependant-prop-'+node.name+'-'+att.name), 'type':('text'), 'value':(att.value), "class": ('span8') }, {"id":true,"type":true,"value":true})) + "/>");
}
buf.push("</div>");
      }

    }

  }
}).call(this);

buf.push("</div>");
    }

  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;      if ($$obj.hasOwnProperty(i)){      var node = $$obj[i];

buf.push("<div" + (jade.attrs({ 'id':('node-props-'+node.name), "class": ('tab-pane') + ' ' + ((i==0)?'active':null) }, {"class":true,"id":true})) + ">");
// iterate node.attrs
;(function(){
  var $$obj = node.attrs;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var att = $$obj[$index];

buf.push("<div class=\"row-fluid\"><div class=\"span4\">" + (jade.escape((jade.interp = att.name) == null ? '' : jade.interp)) + "</div>");
if ( att.type == 'enum')
{
buf.push("<select" + (jade.attrs({ 'id':('fragment-dependant-prop-'+node.name+'-'+att.name), "class": ('span8') }, {"id":true})) + ">");
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
buf.push("<input" + (jade.attrs({ 'id':('fragment-dependant-prop-'+node.name+'-'+att.name), 'type':('text'), 'value':(att.value), "class": ('span8') }, {"id":true,"type":true,"value":true})) + "/>");
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
buf.push("<select" + (jade.attrs({ 'id':('fragment-dependant-prop-'+node.name+'-'+att.name), "class": ('span8') }, {"id":true})) + ">");
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
buf.push("<input" + (jade.attrs({ 'id':('fragment-dependant-prop-'+node.name+'-'+att.name), 'type':('text'), 'value':(att.value), "class": ('span8') }, {"id":true,"type":true,"value":true})) + "/>");
}
buf.push("</div>");
      }

    }

  }
}).call(this);

buf.push("</div>");
      }

    }

  }
}).call(this);

buf.push("</div></div></div>");
}
}
return buf.join("");
};
});
