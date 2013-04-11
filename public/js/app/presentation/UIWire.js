define(
    [
        'app/util/Observable'
    ],

    function(Observable) {
        UIWire.prototype = new Observable();

        // GLOBAL CONSTANTS
        var HEX_COLOR = '5aa564';

        function UIWire(ctrl) {
            this._ctrl = ctrl;
            this._origin = null;
            this._target = null;
            this._removable = false;
        }

        UIWire.prototype.setOrigin = function(entityUI) {
            this._origin = entityUI;
            this.notifyObservers();
        }

        UIWire.prototype.setTarget = function(entityUI) {
            this._target = entityUI;
            this.notifyObservers();
        }

        UIWire.prototype.draw = function(layer) {
            var origin = (this._origin) ? this._origin.getPosition() : {x: 0, y: 0};
            var target = (this._target) ? this._target.getPosition() : {x: 0, y: 0};

            var canvas = layer.getCanvas();
            var context = canvas.getContext();
            context.beginPath();
            context.moveTo(origin.x, origin.y);
            var middle = this._computeMiddlePoint();
            context.quadraticCurveTo(middle.x, middle.y, target.x, target.y);
            context.strokeStyle = '#'+HEX_COLOR;
            context.lineWidth = 5;
            context.stroke();
            context.closePath();
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

        UIWire.prototype.remove = function () {
            console.log("remove in UIWire");
            this._removable = true;
            this.notifyObservers();
        }

        UIWire.prototype.isRemovable = function () {
            return this._removable;
        }

        UIWire.prototype.setTargetPoint = function (point) {
            this._target = {
                getPosition: function () {
                    return point;
                }
            };
            this.notifyObservers();
        }

        return UIWire;
    }
);