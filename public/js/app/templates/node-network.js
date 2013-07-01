define(['jadeRuntime'], function(jade) {
return function anonymous(locals) {
var buf = [];
with (locals || {}) {
buf.push("<div class=\"row-fluid\"><div class=\"span4\">Reachable from</div><select id=\"initby-nodes\" multiple=\"multiple\">");
// iterate initBy
;(function(){
  var $$obj = initBy;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var node = $$obj[$index];

buf.push("<option" + (jade.attrs({ 'value':(node.name), 'selected':((node.selected)?'selected':null), "class": ('initby-node') }, {"value":true,"selected":true})) + ">" + (jade.escape((jade.interp = node.name) == null ? '' : jade.interp)) + "</option>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      if ($$obj.hasOwnProperty($index)){      var node = $$obj[$index];

buf.push("<option" + (jade.attrs({ 'value':(node.name), 'selected':((node.selected)?'selected':null), "class": ('initby-node') }, {"value":true,"selected":true})) + ">" + (jade.escape((jade.interp = node.name) == null ? '' : jade.interp)) + "</option>");
      }

    }

  }
}).call(this);

buf.push("</select><div id=\"node-links-container\" class=\"well\"><ul id=\"node-links-tabs\" class=\"nav nav-tabs\"><li class=\"pull-right\"><div class=\"btn-group\"><button id=\"node-link-delete\" class=\"btn btn-danger disabled\"><i class=\"icon-trash icon-white\"></i></button><button id=\"node-link-add\" class=\"btn btn-info\"><i class=\"icon-plus icon-white\"></i></button></div></li>");
// iterate nodeLinks
;(function(){
  var $$obj = nodeLinks;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var link = $$obj[$index];

buf.push(null == (jade.interp = link.tabHTML) ? "" : jade.interp);
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      if ($$obj.hasOwnProperty($index)){      var link = $$obj[$index];

buf.push(null == (jade.interp = link.tabHTML) ? "" : jade.interp);
      }

    }

  }
}).call(this);

buf.push("</ul><div id=\"node-links-contents\" class=\"tab-content\">");
// iterate nodeLinks
;(function(){
  var $$obj = nodeLinks;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var link = $$obj[$index];

buf.push(null == (jade.interp = link.contentHTML) ? "" : jade.interp);
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      if ($$obj.hasOwnProperty($index)){      var link = $$obj[$index];

buf.push(null == (jade.interp = link.contentHTML) ? "" : jade.interp);
      }

    }

  }
}).call(this);

buf.push("</div></div><div class=\"row-fluid\"><button id=\"node-push-action\" type=\"button\" class=\"btn btn-inverse span4\">Push</button><div class=\"span4\"><select id=\"node-group-action\" class=\"row-fluid\">");
// iterate groups
;(function(){
  var $$obj = groups;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var group = $$obj[$index];

buf.push("<option" + (jade.attrs({ 'value':(group) }, {"value":true})) + ">" + (jade.escape((jade.interp = group) == null ? '' : jade.interp)) + "</option>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      if ($$obj.hasOwnProperty($index)){      var group = $$obj[$index];

buf.push("<option" + (jade.attrs({ 'value':(group) }, {"value":true})) + ">" + (jade.escape((jade.interp = group) == null ? '' : jade.interp)) + "</option>");
      }

    }

  }
}).call(this);

buf.push("</select></div><button id=\"node-pull-action\" type=\"button\" class=\"btn btn-inverse span4\">Pull</button></div><div id=\"node-progress-bar\" class=\"progress progress-info progress-stripped active row-fluid hide\"><div class=\"bar\"></div></div></div>");
}
return buf.join("");
};
});
