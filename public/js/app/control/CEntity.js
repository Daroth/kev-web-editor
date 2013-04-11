define(
    function() {
        function CEntity() {}

        CEntity.prototype.p2cRemoveEntity = function () {
            this.removeMe();
            this._ui.c2pRemoveEntity();
        }

        CEntity.prototype.p2cMouseDown = function (position) {}

        CEntity.prototype.p2cMouseUp = function (position) {}

        CEntity.prototype.p2cMouseMove = function (position) {}

        CEntity.prototype.p2cDragMove = function () {}

        return CEntity;
    }
);