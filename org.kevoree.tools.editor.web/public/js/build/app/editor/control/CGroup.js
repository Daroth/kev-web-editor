define(["abstraction/KGroup","presentation/UIGroup","control/AController","control/CEntity","kevoree","util/Pooffs"],function(e,t,n,r,i,s){function o(n,i){e.prototype.constructor.call(this,n,i),r.prototype.constructor.call(this,n,i),this._ui=new t(this)}return s.extends(o,n),s.extends(o,e),s.extends(o,r),o.prototype.p2cMouseDown=function(e){var t=this.createWire();this.getEditor().startWireCreationTask(t),this._ui.c2pWireCreationStarted(t.getUI())},o});