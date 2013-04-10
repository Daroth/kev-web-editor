define(
    function() {
        function UIWire(ctrl, layer) {
            this._ctrl = ctrl;
            this._layer = layer;
            this._origin = null;
            this._target = null;
            this._doRemove = false;
        }

        UIWire.prototype.setOrigin = function(entityUI) {
            this._origin = entityUI;
            this._ctrl._notifyObserver();
        }

        UIWire.prototype.setTarget = function(entityUI) {
            this._target = entityUI;
            this._ctrl._notifyObserver();
        }

        UIWire.prototype.draw = function() {
            var origin = (this._origin) ? this._origin.getPosition() : {x: 0, y: 0};
            var target = (this._target) ? this._target.getPosition() : {x: 0, y: 0};

            var canvas = this._layer.getCanvas();
            var context = canvas.getContext();

            // draw curve
            context.beginPath();
            context.moveTo(origin.x, origin.y);
            var middle = this._computeMiddlePoint();
            context.quadraticCurveTo(middle.x, middle.y, target.x, target.y);
            context.strokeStyle = '#5aa564';
            context.lineWidth = 5;
            context.stroke();
            console.log("draw end");
        }

        UIWire.prototype.remove = function() {
            this._doRemove = true;
        }

        UIWire.prototype.isToRemove = function() {
            return this._doRemove;
        }

        UIWire.prototype._computeMiddlePoint = function() {
            var origin = (this._origin) ? this._origin.getPosition() : {x: 0, y: 0};
            var target = (this._target) ? this._target.getPosition() : {x: 0, y: 0};

            var ox = origin.x,
                oy = origin.y,
                tx = target.x,
                ty = target.y;

            var middleX, middleY;

            if (ox > tx) middleX = tx + (ox - tx)/2;
            else         middleX = ox + (tx - ox)/2;

            middleY = ((oy >= ty) ? oy : ty) + 30;

            return {
                x: middleX,
                y: middleY
            }
        }

        UIWire.prototype.setTargetPoint = function (point) {
            this._target = {
                getPosition: function () {
                    return point;
                }
            };
        }

        return UIWire;
    }
);