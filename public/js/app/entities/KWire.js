define(
    function() {
        function KWire(layer) {
            this._layer = layer;
            this._origin = {x: 0, y: 0};
            this._target = {x: 0, y: 0};
        }

        KWire.prototype.setOrigin = function(position) {
            this._origin = position;
            this._notifyObserver();
        }

        KWire.prototype.setTarget = function(position) {
            this._target = position;
            this._notifyObserver();
        }

        KWire.prototype.draw = function() {
            var canvas = this._layer.getCanvas();
            var context = canvas.getContext();

            // draw curve
            context.beginPath();
            context.moveTo(this._origin.x, this._origin.y);
            var middle = this._computeMiddlePoint();
            context.quadraticCurveTo(middle.x, middle.y, this._target.x, this._target.y);
            context.strokeStyle = '#5aa564';
            context.lineWidth = 5;
            context.stroke();
        }

        KWire.prototype._notifyObserver = function() {
            if (this._observer) {
                this._observer.update(this);
            }
        }

        KWire.prototype.addObserver = function(observer) {
            this._observer = observer;
        }

        KWire.prototype._computeMiddlePoint = function() {
            var ox = this._origin.x,
                oy = this._origin.y,
                tx = this._target.x,
                ty = this._target.y;

            var middleX, middleY;

            if (ox > tx) middleX = tx + (ox - tx)/2;
            else         middleX = ox + (tx - ox)/2;

            middleY = ((oy >= ty) ? oy : ty) + 30;

            return {
                x: middleX,
                y: middleY
            }
        }

        return KWire;
    }
);