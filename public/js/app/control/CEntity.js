define(
    [
        'abstraction/KEntity',
        'util/Pooffs'
    ],

    function(KEntity, Pooffs) {
        Pooffs.extends(CEntity, KEntity);

        function CEntity(editor, lib, type) {}

        CEntity.prototype.p2cRemoveEntity = function () {
            this.remove();
        }

        CEntity.prototype.p2cMouseDown = function (position) {}

        CEntity.prototype.p2cMouseUp = function (position) {}

        CEntity.prototype.p2cMouseMove = function (position) {}

        CEntity.prototype.p2cDragMove = function () {
            this.getEditor().getUI().getWiresLayer().draw();
        }

        // Override KEntity.remove()
        CEntity.prototype.remove = function () {
            KEntity.prototype.remove.call(this);
            this._ui.c2pRemoveEntity();
        }

        CEntity.prototype.p2cSaveProperties = function (name) {
            this.setName(name);
        }

        return CEntity;
    }
);