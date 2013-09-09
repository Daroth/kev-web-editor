define(["abstraction/KNode","abstraction/KGroup","presentation/UINode","presentation/property/UINodeProps","control/AController","control/CNestableEntity","visitor/UpdateModelVisitor","kevoree","util/Pooffs"],function(e,t,n,r,i,s,o,u,a){function f(t,r){s.prototype.constructor.call(this,t,r),e.prototype.constructor.call(this,t,r),this._ui=new n(this),this._isDragged=!1}return a.extends(f,i),a.extends(f,s),a.extends(f,e),f.prototype.p2cMouseUp=function(e){var n=this.getEditor().getCurrentWire();if(n){var r=n.getOrigin();if(r.getEntityType()==t.ENTITY_TYPE){var i=!1;for(var s=0;s<r.getWires().length;s++){var n=r.getWires()[s];n.getTarget()&&n.getTarget()==this&&(i=!0)}i?(this.getEditor().abortWireCreationTask(),this._ui.c2pMouseOut()):(n.setTarget(this),this.addWire(n),this.getEditor().endWireCreationTask(),this._ui.c2pWireCreated(n.getUI()),this._ui.c2pMouseOut())}}else if(!this._isDragged){var o=this.getEditor().getDraggedEntity();o?this.isValidChildEntity(o)&&(this.getEditor().consumeDraggedEntity(),this.getEditor().hasEntity(o)&&this.getEditor().removeEntity(o),this.addChild(o)):this._ui.c2pMouseOver()}},f.prototype.remove=function(){e.prototype.remove.call(this),s.prototype.remove.call(this),this._ui.redrawParent()},f.prototype.p2cMouseOut=function(){this._ui.c2pMouseOut()},f.prototype.removeChild=function(t){e.prototype.removeChild.call(this,t),this._ui.c2pChildRemoved(t.getUI())},f.prototype.p2cMouseOver=function(){var e=this.getEditor().getCurrentWire();if(e){var n=e.getOrigin();if(typeof n.getEntityType=="function"&&n.getEntityType()==t.ENTITY_TYPE){var r=!1;for(var i=0;i<n.getWires().length;i++){var e=n.getWires()[i];e.getTarget()&&e.getTarget()==this&&(r=!0)}r?this._ui.c2pDropImpossible(!0):this._ui.c2pDropPossible(!0)}else this._ui.c2pDropImpossible(!0)}else if(!this._isDragged){var s=this.getEditor().getDraggedEntity();s?this.isValidChildEntity(s)?this._ui.c2pDropPossible(!0):this._ui.c2pDropImpossible(!0):this._ui.c2pMouseOver(!0)}},f.prototype.p2cBeforeDraw=function(){var e=this.getEditor().getDraggedEntity(),t=this.getEditor().getCurrentWire();e&&this.isValidChildEntity(e)?this._ui.c2pDropPossible(!1):t&&(t.canConnect(this)?this._ui.c2pDropPossible(!1):this._ui.c2pDropImpossible(!1))},f.prototype.addChild=function(t){var n=e.prototype.addChild.call(this,t);n&&this._ui.c2pAddChild(t.getUI())},f.prototype.p2cSaveProperties=function(e){s.prototype.p2cSaveProperties.call(this,e)},f});