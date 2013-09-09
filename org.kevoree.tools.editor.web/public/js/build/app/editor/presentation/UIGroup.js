define(["util/Pooffs","presentation/UIEntity","presentation/property/UIGroupProps"],function(e,t,n){function s(e){this._ctrl=e,t.prototype.constructor.call(this,e);var s=new Kinetic.Circle({radius:55,fill:"green",stroke:"black",strokeWidth:r,shadowColor:"black",shadowBlur:10,shadowOffset:[5],shadowOpacity:.2,opacity:.6});this._plug=new Kinetic.Circle({y:s.getRadius()/2+i,radius:i,fill:"#f1c30f"});var o=new Kinetic.Text({text:e.getName()+"\n"+e.getType(),fontSize:13,fontFamily:"Helvetica",fill:"#FFF",align:"center",width:s.getWidth()-10,drawFunc:function(t){this.drawFunc(t),o.setText(e.getName()+"\n"+e.getType())}});o.move(-o.getWidth()/2,-o.getHeight()/2),this._shape=new Kinetic.Group({x:100,y:100,draggable:!0}),this._shape.add(s),this._shape.add(this._plug),this._shape.add(o);var u=this;this._shape.on("mouseover touchstart",function(){document.body.style.cursor="pointer",s.setStrokeWidth(r+1),s.getLayer().draw()}),this._shape.on("mouseout touchend",function(){document.body.style.cursor="default",s.setStrokeWidth(r),s.getLayer().draw()}),this._shape.on("dragmove",function(){u._ctrl.p2cDragMove()}),this._plug.on("mouseover touchmove touchstart",function(){u._plug.setRadius(i+1),u._plug.getLayer().draw()}),this._plug.on("mouseout touchend",function(){u._plug.setRadius(i),u._plug.getLayer().draw()}),this._shape.on("dragend",function(){u._ctrl.p2cDragEnd()});var a=new n(e);this._shape.on("dblclick dbltap",function(e){e.cancelBubble=!0,a.show()})}var r=4,i=12;return e.extends(s,t),s.prototype.c2pWireCreationStarted=function(e){var t=this._ctrl.getEditor().getUI().getWiresLayer();e.setTargetPoint(this.getPosition()),t.draw()},s.prototype.ready=function(){if(!this._isReady){var e=this,t=e._shape.getStage();this._plug.on("mousedown touchstart",function(){e._shape.setDraggable(!1),e._ctrl.p2cMouseDown(t.getTouchPosition()||t.getPointerPosition())}),e._shape.getStage().on("mouseup touchend",function(){e._ctrl.p2cMouseMove(t.getTouchPosition()||t.getPointerPosition())}),this._isReady=!0}},s.prototype.getPosition=function(){var e=this._plug.getAbsolutePosition(),t=this._plug.getStage().getScale(),n=this._plug.getStage().getPosition();return{x:(e.x-n.x)/t.x,y:(e.y-n.y)/t.y}},s});