define(
    ["app/entities/KEntity"],

    function(KEntity) {
        // GLOBAL CONSTANTS
        var STROKE = 3;

        KNode.prototype = new KEntity();
        KNode.prototype.constructor = KNode;

        function KNode(type, handler) {
            KEntity.prototype.constructor.call(this, handler);

            var headerName = new Kinetic.Text({
                text: type,
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
                if (that._wires.length > 0) {
                    // there is plugged wires
                    // go update wiretable
                    for (var i=0; i<that._wires.length; i++) {
                        that._wires[i].setTarget(that._computePlugPosition());
                    }
                }
            });

            this.setPopup('<p>'+type+' TODO</p>');
        }

        KNode.prototype.setWireListener = function(handler) {
            KEntity.prototype.setWireListener.call(this, handler); // super.setWireListener(handler);

            var that = this;

            this._shape.on('mouseup', function() {
                console.log("mouse up sur le node");
                handler.onWireCreationEnd(that._computePlugPosition());
            });
        }

        KNode.prototype._computePlugPosition = function() {
            return {
                x: this._shape.getAbsolutePosition().x + this._rect.getWidth()/2,
                y: this._shape.getAbsolutePosition().y + this._rect.getHeight()/4
            };
        }

        return KNode;
    }
);