define(
    ["app/entities/KEntity"],

    function(KEntity) {
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
                strokeWidth: 3,
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

            this._shape.on('dragmove', function() {
                if (that._wires.length > 0) {
                    // there is plugged wires
                    // go update wiretable
                    for (var i=0; i<that._wires.length; i++) {
                        that._wires[i].setTarget({
                            x: that._shape.getAbsolutePosition().x + that._rect.getWidth()/2,
                            y: that._shape.getAbsolutePosition().y + that._rect.getHeight()/4
                        });
                    }
                }
            });

            this.setPopup('<p>'+type+' TODO</p>');
        }

        KNode.prototype.setWireListener = function(handler) {
            KEntity.prototype.setWireListener.call(this, handler); // super.setWireListener(handler);

            var that = this;

            this._shape.on('mouseup', function() {
                handler.onWireCreationEnd({
                    x: that._shape.getAbsolutePosition().x + that._rect.getWidth()/2,
                    y: that._shape.getAbsolutePosition().y + that._rect.getHeight()/4
                });
            });
        }

        return KNode;
    }
);