define(["abstraction/KEntity","util/Pooffs","kotlin/kotlin-maps"],function(e,t,n){function i(t,n){e.prototype.constructor.call(this,t,n),this._name="chan"+r++}var r=0;return i.ENTITY_TYPE="ChannelType",t.extends(i,e),i.prototype.getEntityType=function(){return i.ENTITY_TYPE},i.prototype.accept=function(e){e.visitChannel(this)},i.prototype.addWire=function(e){if(this._wires.indexOf(e)==-1){this._wires.push(e),this.getEditor().addWire(e);var t=this._dictionary,n=t.getAttributes(),r=require("factory/CFactory").getInstance();for(var i=0;i<n.length;i++)if(n[i].getFragmentDependant()){var s=r.newValue(n[i],e.getOrigin().getComponent().getParent());t.addValue(s)}}},i.prototype.getConnectedFragments=function(){var e=new n.ArrayList,t={},r=this.getEditor().getModel(),i=this.getWires();for(var s=0;s<i.length;s++){var o=i[s].getOrigin().getComponent().getParent().getName();if(!t[o]){var u=r.findNodesByID(o);u!=null&&(e.add(u),t[o]=o)}}return e},i});