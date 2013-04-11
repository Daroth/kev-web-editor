define(
    ["app/presentation/UIEntity"],

    function(UIEntity) {
        // GLOBAL CONSTANTS
        var STROKE = 3;

        UINode.prototype = new UIEntity();

        function UINode(ctrl) {
            UIEntity.prototype.constructor.call(this, ctrl);

            var headerName = new Kinetic.Text({
                text: ctrl.getType(),
                fontSize: 15,
                fontFamily: 'Helvetica',
                fill: '#FFF',
                padding: 15,
                align: 'center'
            });

            this._rect = new Kinetic.Rect({
                stroke: '#FFF',
                strokeWidth: STROKE,
                width: headerName.getWidth(),
                height: headerName.getHeight(),
                shadowColor: 'black',
                shadowBlur: 10,
                shadowOffset: [5, 5],
                shadowOpacity: 0.2,
                cornerRadius: 10
            });

            this._shape = new Kinetic.Group({
                x: 100,
                y: 100,
                draggable: true
            });

            this._shape.add(this._rect);
            this._shape.add(headerName);

            //==========================
            // Event handling
            //==========================
            var that = this;

            this._shape.on('mouseover', function() {
                document.body.style.cursor = 'pointer';
                that._rect.setStrokeWidth(STROKE+1);
                that._rect.getLayer().draw();
            });

            this._shape.on('mouseout', function() {
                document.body.style.cursor = 'default';
                that._rect.setStrokeWidth(STROKE);
                that._rect.getLayer().draw();
            });

            this._shape.on('dragmove', function() {
                that._ctrl.p2cDragMove();
            });

            this.setPopup('<p>'+ctrl.getType()+' TODO</p>');
        }

        UINode.prototype.ready = function() {
            var that = this;

            this._shape.on('mouseup', function() {
                that._ctrl.p2cMouseUp(this.getStage().getPointerPosition());
            });
        }

        UINode.prototype.getPosition = function () {
            return {
                x: this._shape.getAbsolutePosition().x + this._rect.getWidth()/2,
                y: this._shape.getAbsolutePosition().y + this._rect.getHeight()/4
            };
        }


        return UINode;
    }
);