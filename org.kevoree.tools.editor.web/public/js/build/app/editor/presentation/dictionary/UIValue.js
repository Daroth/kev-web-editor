define(["templates/attribute"],function(e){function t(e){this._ctrl=e}return t.prototype.getHTML=function(){var t=this._ctrl.getTargetNode()?this._ctrl.getTargetNode().getName():null;return e({node:t,name:this._ctrl.getAttribute().getName(),value:this._ctrl.getValue(),type:this._ctrl.getAttribute().getEnum().length>0?"enum":"raw",possibleValues:this._ctrl.getAttribute().getEnum(),selected:this._ctrl.getAttribute().getEnum().indexOf(this._ctrl.getValue()),optional:this._ctrl.getAttribute().getOptional()})},t.prototype.onHTMLAppended=function(){},t});