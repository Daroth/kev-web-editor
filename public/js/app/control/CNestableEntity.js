define(
    [
        'control/CEntity',
        'util/Pooffs'
    ],

    function (CEntity, Pooffs) {
        Pooffs.extends(CNestableEntity, CEntity);

        function CNestableEntity() {
            CEntity.prototype.constructor.call(this);
        }

        CNestableEntity.prototype.p2cMouseOver = function () {}
        CNestableEntity.prototype.p2cMouseOut = function () {}

        CNestableEntity.prototype.p2cDragMove = function () {
            // change wires state in order for them to update their display
            var wires = this.getWires();
            if (wires.length > 0) {
                // there is plugged wires
                for (var i=0; i<wires.length; i++) {
                    wires[i].setTarget(this);
                }
            }
        }

        CNestableEntity.prototype.p2cDragStart = function () {
            if (this.getParent()) {
                this.getParent().removeChild(this);
            }
            this._isDragged = true;
            this.getEditor().setDraggedEntity(this);
        }

        CNestableEntity.prototype.p2cDragEnd = function () {
            this.getEditor().consumeDraggedEntity();
            this._isDragged = false;
        }

        return CNestableEntity;
    }
);