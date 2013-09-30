define(["abstraction/KPort","control/AController","presentation/UIPort","util/Pooffs","kotlin/kotlin-lib-ecma3","kevoree"],function(e,t,n,r,i,s){function o(t){e.prototype.constructor.call(this,t)}function u(e,t,n){var r=require("factory/CFactory").getInstance().newChannel(e,t);e.addEntity(r),r.getUI().getShape().setPosition(100,100),r.p2cMouseUp(),n.p2cMouseDown(),r.p2cMouseUp()}return r.extends(o,e),r.extends(o,t),o.prototype.p2cMouseDown=function(){var e=this.createWire();this.getComponent().getEditor().startWireCreationTask(e),this._ui.c2pWireCreationStarted(e.getUI())},o.prototype.p2cMouseUp=function(){var e=this.getComponent().getEditor().getCurrentWire();if(e)if(this.isConnectable(e)){var t=this.getComponent().getEditor().getModel().getTypeDefinitions(),n=[];for(var r=0;r<t.size();r++)i.isType(t.get(r),s.org.kevoree.impl.ChannelTypeImpl)&&n.push(t.get(r).getName());n.length==0?this._ui.c2pWireCreationImpossibleNoChannel():n.length==1?u(this.getComponent().getEditor(),n[0],this):this._ui.c2pWireCreationPossible(e.getOrigin(),n)}else this.getComponent().getEditor().endWireCreationTask()},o.prototype.p2cChannelSelectedForWireCreation=function(e,t){e.p2cMouseDown(),u(this.getComponent().getEditor(),t,this)},o.prototype.isConnectable=function(e){return!1},o});