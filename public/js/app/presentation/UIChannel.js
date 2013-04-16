define(
    ["presentation/UIEntity"],

    function(UIEntity) {
        // GLOBAL CONSTANTS
        var STROKE = 3,
            RADIUS = 45,
            DEFAULT_STROKE_COLOR = 'white',
            KO_STROKE_COLOR = 'red',
            OK_STROKE_COLOR = 'green';

        // inherit from UIEntity
        UIChannel.prototype = new UIEntity();

        function UIChannel(ctrl) {
            UIEntity.prototype.constructor.call(this, ctrl);

            this._circle = new Kinetic.Circle({
                radius: RADIUS,
                fill: '#de7c37',
                stroke: DEFAULT_STROKE_COLOR,
                strokeWidth: STROKE,
                shadowColor: 'black',
                shadowBlur: 10,
                shadowOffset: [5, 5],
                shadowOpacity: 0.2,
                opacity: 0.6
            });

            var text = new Kinetic.Text({
                text: ctrl.getType(),
                fontSize: 12,
                fontFamily: 'Helvetica',
                fontWeight: 'bold',
                fill: '#FFF',
                align: 'center',
                width: this._circle.getWidth()
            });

            text.move(-text.getWidth()/2, -text.getHeight()/2);

            this._shape = new Kinetic.Group({
                x: 100,
                y: 100,
                draggable: true
            });

            this._shape.add(this._circle);
            this._shape.add(text);

            //===========================
            // Event handling
            //===========================
            var that = this;
            this._shape.on('mouseover', function() {
                that._ctrl.p2cMouseOver();
            });

            this._shape.on('mouseout', function() {
                document.body.style.cursor = 'default';
                that._circle.setStrokeWidth(STROKE);
                that._circle.setStroke(DEFAULT_STROKE_COLOR);
                that._circle.getLayer().draw();
            });

            this.setPopup('<p>'+ctrl.getName()+" : "+ctrl.getType()+'</p>');
        }

        UIChannel.prototype.c2pDropPossible = function () {
            document.body.style.cursor = 'pointer';
            this._circle.setStrokeWidth(STROKE+1);
            this._circle.setStroke(OK_STROKE_COLOR);
            this._circle.getLayer().draw();
        }

        UIChannel.prototype.c2pDropImpossible = function () {
            document.body.style.cursor = 'pointer';
            this._circle.setStrokeWidth(STROKE+1);
            this._circle.setStroke(KO_STROKE_COLOR);
            this._circle.getLayer().draw();
        }

        UIChannel.prototype.c2pPointerOverShape = function () {
            document.body.style.cursor = 'pointer';
            this._circle.setStrokeWidth(STROKE+1);
            this._circle.getLayer().draw();
        }

        return UIChannel;
    }
);