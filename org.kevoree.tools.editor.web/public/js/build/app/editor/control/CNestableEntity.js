define(["control/CEntity","util/Pooffs"],function(e,t){function n(t,n){e.prototype.constructor.call(this,t,n)}return t.extends(n,e),n.prototype.p2cMouseOver=function(){},n.prototype.p2cMouseOut=function(){},n.prototype.p2cDragStart=function(){var e=this.getParent();e&&(e.removeChild(this),e.getUI().c2pChildDragStarted(this.getUI())),this._isDragged=!0,this.getEditor().setDraggedEntity(this)},n.prototype.p2cDragEnd=function(){this.getEditor().getDraggedEntity()&&(this.getEditor().consumeDraggedEntity(),this.getParent()||this.getEditor().hasEntity(this)||(this._ui.c2pRemoveDraggedEntity(),this.getEditor().addEntity(this))),this._isDragged=!1,e.prototype.p2cDragEnd.call(this)},n});