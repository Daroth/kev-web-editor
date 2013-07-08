define(['jadeRuntime'], function(jade) {
return function anonymous(locals) {
var buf = [];
with (locals || {}) {
var attrID = name;
if (node) attrID = node+'-'+name;
buf.push("<div class=\"row-fluid\"><div class=\"span4\">" + (jade.escape((jade.interp = name) == null ? '' : jade.interp)) + "");
if (!optional)
{
buf.push("&nbsp<i title=\"Mandatory attribute\" class=\"icon-exclamation-sign mandatory-attribute\"></i>");
}
buf.push("</div>");
if ( type == 'enum')
{
buf.push("<select" + (jade.attrs({ 'id':('instance-attr-'+attrID), "class": ('span8') }, {"id":true})) + ">");
// iterate possibleValues
;(function(){
  var $$obj = possibleValues;
  if ('number' == typeof $$obj.length) {

    for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
      var item = $$obj[i];

buf.push("<option" + (jade.attrs({ 'value':(item), 'selected':((i == selected)?'selected':null) }, {"value":true,"selected":true})) + ">" + (jade.escape((jade.interp = item) == null ? '' : jade.interp)) + "</option>");
    }

  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;      if ($$obj.hasOwnProperty(i)){      var item = $$obj[i];

buf.push("<option" + (jade.attrs({ 'value':(item), 'selected':((i == selected)?'selected':null) }, {"value":true,"selected":true})) + ">" + (jade.escape((jade.interp = item) == null ? '' : jade.interp)) + "</option>");
      }

    }

  }
}).call(this);

buf.push("</select>");
}
else
{
buf.push("<input" + (jade.attrs({ 'id':('instance-attr-'+attrID), 'type':('text'), 'value':(value), "class": ('span8') }, {"id":true,"type":true,"value":true})) + "/>");
}
buf.push("</div>");
}
return buf.join("");
};
});