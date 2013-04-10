define(
    function() {
        function CEntity() {}

        CEntity.prototype.p2cRemoveEntity = function () {
            this.removeMe();
            this._ui.c2pRemoveEntity();
        }

        return CEntity;
    }
);