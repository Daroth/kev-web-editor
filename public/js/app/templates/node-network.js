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

buf.push("<li" + (jade.attrs({ 'id':('node-link-root-'+link.id), 'data-node-link-id':(link.id), "class": ((link.isActive)?'active':null) }, {"id":true,"class":true,"data-node-link-id":true})) + "><a" + (jade.attrs({ 'id':('node-link-tab-val-'+link.id), 'href':('#node-link-'+link.id), 'data-toggle':('tab') }, {"id":true,"href":true,"data-toggle":true})) + ">" + (jade.escape((jade.interp = link.type) == null ? '' : jade.interp)) + "</a></li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      if ($$obj.hasOwnProperty($index)){      var link = $$obj[$index];

buf.push("<li" + (jade.attrs({ 'id':('node-link-root-'+link.id), 'data-node-link-id':(link.id), "class": ((link.isActive)?'active':null) }, {"id":true,"class":true,"data-node-link-id":true})) + "><a" + (jade.attrs({ 'id':('node-link-tab-val-'+link.id), 'href':('#node-link-'+link.id), 'data-toggle':('tab') }, {"id":true,"href":true,"data-toggle":true})) + ">" + (jade.escape((jade.interp = link.type) == null ? '' : jade.interp)) + "</a></li>");
      }

    }

  }
}).call(this);

buf.push("</ul><div id=\"node-links-content\" class=\"tab-content\">");
// iterate nodeLinks
;(function(){
  var $$obj = nodeLinks;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var link = $$obj[$index];

buf.push("<div" + (jade.attrs({ 'id':('node-link-'+link.id), 'data-node-link-id':(link.id), "class": ('tab-pane') + ' ' + ((link.isActive)?'active':null) }, {"class":true,"id":true,"data-node-link-id":true})) + "><div class=\"row-fluid\"><div class=\"input-prepend span4\"><span class=\"add-on add-on-gray\">Type</span><input" + (jade.attrs({ 'id':('node-link-type-'+link.id), 'type':('text'), 'placeholder':('LAN, Wifi...'), 'value':(link.type), "class": ('input-medium') }, {"id":true,"type":true,"placeholder":true,"value":true})) + "/></div><div class=\"input-prepend offset4 span3\"><span class=\"add-on add-on-gray\">Rate</span><input" + (jade.attrs({ 'id':('node-link-rate-'+link.id), 'type':('number'), 'min':(link.minRate), 'max':(link.maxRate), 'placeholder':('Trust 0~100'), 'value':(link.rate), "class": ('input-small') }, {"id":true,"type":true,"min":true,"max":true,"placeholder":true,"value":true})) + "/></div></div><div class=\"row-fluid\"><div id=\"network-properties-container\" class=\"well\"><h5><span class=\"span4\">Network properties</span><div class=\"btn-group span2 offset6\"><button" + (jade.attrs({ 'id':('network-property-delete-'+link.id), "class": ('btn') + ' ' + ('btn-danger') + ' ' + ('btn-mini') + ' ' + ('disabled') }, {"id":true})) + "><i class=\"icon-trash icon-white\"></i></button><button" + (jade.attrs({ 'id':('network-property-add-'+link.id), "class": ('btn') + ' ' + ('btn-info') + ' ' + ('btn-mini') }, {"id":true})) + "><i class=\"icon-plus icon-white\"></i></button></div></h5>");
// iterate link.props
;(function(){
  var $$obj = link.props;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var prop = $$obj[$index];

buf.push("<div" + (jade.attrs({ 'id':('network-property-list-'+link.id), "class": ('row-fluid') }, {"id":true})) + "><div class=\"row-fluid network-property-row\"><div class=\"row-fluid\"><div class=\"control-group span3\"><input" + (jade.attrs({ 'id':('network-property-key-'+link.id+'-'+prop.id), 'type':('text'), 'placeholder':('IP'), 'value':(prop.key) }, {"id":true,"type":true,"placeholder":true,"value":true})) + "/></div><div class=\"control-group span7 offset2\"><input" + (jade.attrs({ 'id':('network-property-val-'+link.id+'-'+prop.id), 'type':('text'), 'placeholder':('192.168.0.1'), 'value':(prop.value) }, {"id":true,"type":true,"placeholder":true,"value":true})) + "/></div></div><div" + (jade.attrs({ 'id':('network-property-err-'+link.id+'-'+prop.id), "class": ('row-fluid') + ' ' + ('hide') }, {"id":true})) + "><small class=\"text-error\"></small></div></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      if ($$obj.hasOwnProperty($index)){      var prop = $$obj[$index];

buf.push("<div" + (jade.attrs({ 'id':('network-property-list-'+link.id), "class": ('row-fluid') }, {"id":true})) + "><div class=\"row-fluid network-property-row\"><div class=\"row-fluid\"><div class=\"control-group span3\"><input" + (jade.attrs({ 'id':('network-property-key-'+link.id+'-'+prop.id), 'type':('text'), 'placeholder':('IP'), 'value':(prop.key) }, {"id":true,"type":true,"placeholder":true,"value":true})) + "/></div><div class=\"control-group span7 offset2\"><input" + (jade.attrs({ 'id':('network-property-val-'+link.id+'-'+prop.id), 'type':('text'), 'placeholder':('192.168.0.1'), 'value':(prop.value) }, {"id":true,"type":true,"placeholder":true,"value":true})) + "/></div></div><div" + (jade.attrs({ 'id':('network-property-err-'+link.id+'-'+prop.id), "class": ('row-fluid') + ' ' + ('hide') }, {"id":true})) + "><small class=\"text-error\"></small></div></div></div>");
      }

    }

  }
}).call(this);

buf.push("</div></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      if ($$obj.hasOwnProperty($index)){      var link = $$obj[$index];

buf.push("<div" + (jade.attrs({ 'id':('node-link-'+link.id), 'data-node-link-id':(link.id), "class": ('tab-pane') + ' ' + ((link.isActive)?'active':null) }, {"class":true,"id":true,"data-node-link-id":true})) + "><div class=\"row-fluid\"><div class=\"input-prepend span4\"><span class=\"add-on add-on-gray\">Type</span><input" + (jade.attrs({ 'id':('node-link-type-'+link.id), 'type':('text'), 'placeholder':('LAN, Wifi...'), 'value':(link.type), "class": ('input-medium') }, {"id":true,"type":true,"placeholder":true,"value":true})) + "/></div><div class=\"input-prepend offset4 span3\"><span class=\"add-on add-on-gray\">Rate</span><input" + (jade.attrs({ 'id':('node-link-rate-'+link.id), 'type':('number'), 'min':(link.minRate), 'max':(link.maxRate), 'placeholder':('Trust 0~100'), 'value':(link.rate), "class": ('input-small') }, {"id":true,"type":true,"min":true,"max":true,"placeholder":true,"value":true})) + "/></div></div><div class=\"row-fluid\"><div id=\"network-properties-container\" class=\"well\"><h5><span class=\"span4\">Network properties</span><div class=\"btn-group span2 offset6\"><button" + (jade.attrs({ 'id':('network-property-delete-'+link.id), "class": ('btn') + ' ' + ('btn-danger') + ' ' + ('btn-mini') + ' ' + ('disabled') }, {"id":true})) + "><i class=\"icon-trash icon-white\"></i></button><button" + (jade.attrs({ 'id':('network-property-add-'+link.id), "class": ('btn') + ' ' + ('btn-info') + ' ' + ('btn-mini') }, {"id":true})) + "><i class=\"icon-plus icon-white\"></i></button></div></h5>");
// iterate link.props
;(function(){
  var $$obj = link.props;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var prop = $$obj[$index];

buf.push("<div" + (jade.attrs({ 'id':('network-property-list-'+link.id), "class": ('row-fluid') }, {"id":true})) + "><div class=\"row-fluid network-property-row\"><div class=\"row-fluid\"><div class=\"control-group span3\"><input" + (jade.attrs({ 'id':('network-property-key-'+link.id+'-'+prop.id), 'type':('text'), 'placeholder':('IP'), 'value':(prop.key) }, {"id":true,"type":true,"placeholder":true,"value":true})) + "/></div><div class=\"control-group span7 offset2\"><input" + (jade.attrs({ 'id':('network-property-val-'+link.id+'-'+prop.id), 'type':('text'), 'placeholder':('192.168.0.1'), 'value':(prop.value) }, {"id":true,"type":true,"placeholder":true,"value":true})) + "/></div></div><div" + (jade.attrs({ 'id':('network-property-err-'+link.id+'-'+prop.id), "class": ('row-fluid') + ' ' + ('hide') }, {"id":true})) + "><small class=\"text-error\"></small></div></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      if ($$obj.hasOwnProperty($index)){      var prop = $$obj[$index];

buf.push("<div" + (jade.attrs({ 'id':('network-property-list-'+link.id), "class": ('row-fluid') }, {"id":true})) + "><div class=\"row-fluid network-property-row\"><div class=\"row-fluid\"><div class=\"control-group span3\"><input" + (jade.attrs({ 'id':('network-property-key-'+link.id+'-'+prop.id), 'type':('text'), 'placeholder':('IP'), 'value':(prop.key) }, {"id":true,"type":true,"placeholder":true,"value":true})) + "/></div><div class=\"control-group span7 offset2\"><input" + (jade.attrs({ 'id':('network-property-val-'+link.id+'-'+prop.id), 'type':('text'), 'placeholder':('192.168.0.1'), 'value':(prop.value) }, {"id":true,"type":true,"placeholder":true,"value":true})) + "/></div></div><div" + (jade.attrs({ 'id':('network-property-err-'+link.id+'-'+prop.id), "class": ('row-fluid') + ' ' + ('hide') }, {"id":true})) + "><small class=\"text-error\"></small></div></div></div>");
      }

    }

  }
}).call(this);

buf.push("</div></div></div>");
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
