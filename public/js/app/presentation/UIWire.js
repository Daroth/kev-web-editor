define(
    [
        'util/Observable'
    ],

    function(Observable) {
        UIWire.prototype = new Observable();

        // GLOBAL CONSTANTS
        var DEFAULT_COLOR = '#5aa564';

        function UIWire(ctrl, layer) {
            this._ctrl = ctrl;
            this._color = DEFAULT_COLOR;

            this._origin = ctrl.getOrigin().getUI();
            this._target = null;
            this._removable = false;

            var that = this;
            this._wire = new Kinetic.Shape({
                stroke: this._color,
                strokeWidth: 5,
                lineCap: 'round',
                lineJoin: 'round',
                opacity: 0.6,
                drawFunc: function(canvas) {
                    var origin = (that._origin) ? that._origin.getPosition() : {x: 0, y: 0};
                    var middle = that._computeMiddlePoint();
                    var target = (that._target) ? that._target.getPosition(origin) : {x: 0, y: 0};

                    var context = canvas.getContext();
                    context.beginPath();
                    context.moveTo(origin.x, origin.y);
                    context.quadraticCurveTo(middle.x, middle.y, target.x, target.y);
                    canvas.fillStroke(this);
                    canvas.fill(this);
                    canvas.stroke(this);
                    context.closePath();
                },
                drawHitFunc: function(canvas) {
                    if (that._handlersEnabled) {
                        var origin = (that._origin) ? that._origin.getPosition() : {x: 0, y: 0};
                        var middle = that._computeMiddlePoint();
                        var target = (that._target) ? that._target.getPosition(origin) : {x: 0, y: 0};

                        var context = canvas.getContext();
                        context.beginPath();
                        context.moveTo(origin.x, origin.y);
                        context.quadraticCurveTo(middle.x, middle.y, target.x, target.y);
                        canvas.fillStroke(this);
                        canvas.fill(this);
                        canvas.stroke(this);
                        context.closePath();
                    }
                }
            });

            layer.add(this._wire);

            this._wire.on('dblclick dbltap', function (e) {
                console.log("double tap wire from "+that._origin.getCtrl().getName()+" to "+that._target.getCtrl().getName());
            });

            this._wire.on('mouseenter', function (e) {
                this.setStrokeWidth(8);
                this.getLayer().draw();
            });

            this._wire.on('mouseout', function (e) {
                this.setStrokeWidth(5);
                this.getLayer().draw();
            });
        }

        UIWire.prototype.setOrigin = function(entityUI) {
            this._origin = entityUI;
            this.notifyObservers();
        }

        UIWire.prototype.setTarget = function(entityUI) {
            this._target = entityUI;
            this.notifyObservers();
            this._handlersEnabled = true;
        }

        UIWire.prototype.draw = function() {
            this._wire.draw();
        }

        UIWire.prototype._computeMiddlePoint = function() {
            var origin = (this._origin) ? this._origin.getPosition() : {x: 0, y: 0};
            var target = (this._target) ? this._target.getPosition(origin) : {x: 0, y: 0};

            var middleX, middleY;

            if (origin.x > target.x) middleX = target.x + (origin.x - target.x)/2;
            else middleX = origin.x + (target.x - origin.x)/2;

            middleY = ((origin.y >= target.y) ? origin.y : target.y) + 30;

            return { x: middleX, y: middleY };
        }

        UIWire.prototype.remove = function () {
            this._removable = true;
            if (this._wire) this._wire.destroy();
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

        UIWire.prototype.getCtrl = function () {
            return this._ctrl;
        }

        UIWire.prototype.setColor = function (color) {
            this._color = color;
        }

        return UIWire;
    }
);