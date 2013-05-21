define(
    [
        'presentation/UIEntity',
        'util/Pooffs'
    ],

    function(UIEntity, Pooffs) {
        Pooffs.extends(UIWire, UIEntity);

        // GLOBAL CONSTANTS
        var DEFAULT_COLOR = '#5aa564';

        function UIWire(ctrl, layer) {
            // UIEntity.super(ctrl)
            UIEntity.prototype.constructor.call(this, ctrl);

            this._origin = ctrl.getOrigin().getUI();
            this._target = null;

            var that = this;
            this._shape = new Kinetic.Shape({
                stroke: DEFAULT_COLOR,
                strokeWidth: 5,
                lineCap: 'round',
                lineJoin: 'round',
                opacity: 0.6,
                drawFunc: function(canvas) {
                    var pts = getPoints(that);
                    var context = canvas.getContext();
                    context.beginPath();
                    context.moveTo(pts.origin.x, pts.origin.y);
                    context.quadraticCurveTo(pts.middle.x, pts.middle.y, pts.target.x, pts.target.y);
                    canvas.fillStroke(this);
                    canvas.fill(this);
                    canvas.stroke(this);
                    context.closePath();
                },
                drawHitFunc: function(canvas) {
                    if (that._handlersEnabled) {
                        var pts = getPoints(that);
                        var context = canvas.getContext();
                        context.beginPath();
                        context.moveTo(pts.origin.x, pts.origin.y);
                        context.quadraticCurveTo(pts.middle.x, pts.middle.y, pts.target.x, pts.target.y);
                        canvas.fillStroke(this);
                        canvas.stroke(this);
                        context.closePath();
                    }
                }
            });

            layer.add(this._shape);

            // ================
            // Event handlers
            // ================
            this._shape.on('mouseenter', function (e) {
                this.setStrokeWidth(8);
                this.getLayer().draw();
            });

            this._shape.on('mouseout', function (e) {
                this.setStrokeWidth(5);
                this.getLayer().draw();
            });

            // ================
            // Properties popup
            // ================
            this.setPopup();
        }

        UIWire.prototype.setOrigin = function(entityUI) {
            this._origin = entityUI;
        }

        UIWire.prototype.setTarget = function(entityUI) {
            this._target = entityUI;
            this._handlersEnabled = true;
        }

        UIWire.prototype.draw = function() {
            this._shape.draw();
        }

        UIWire.prototype._computeMiddlePoint = function(origin, target) {
            var middleX, middleY;

            if (origin.x > target.x) middleX = target.x + (origin.x - target.x)/2;
            else middleX = origin.x + (target.x - origin.x)/2;

            middleY = ((origin.y >= target.y) ? origin.y : target.y) + 30;

            return { x: middleX, y: middleY };
        }

        UIWire.prototype.remove = function () {
            if (this._shape) {
                var layer = this._shape.getLayer();
                this._shape.destroy();
                layer.draw();
            }
        }

        UIWire.prototype.setTargetPoint = function (point) {
            this._target = {
                getPosition: function () {
                    return point;
                }
            };
        }

        UIWire.prototype.setColor = function (color) {
            this._shape.setStroke(color);
        }

        function getPoints(wire) {
            var origin = (wire._origin) ? wire._origin.getPosition() : {x: 0, y: 0},
                target = (wire._target) ? wire._target.getPosition(origin) : {x: 0, y: 0};

            return {
                origin: origin,
                target: target,
                middle: wire._computeMiddlePoint(origin, target)
            };
        }

        return UIWire;
    }
);