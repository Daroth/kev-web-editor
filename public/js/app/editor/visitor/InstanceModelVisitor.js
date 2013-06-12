define(
    function () {

        function InstanceModelVisitor() {}

        InstanceModelVisitor.prototype.visitEditor = function (editor) {
            this._editor = editor;
        }

        InstanceModelVisitor.prototype.visitChannel = function (chan) {

        }

        InstanceModelVisitor.prototype.visitNode = function (node) {

        }

        InstanceModelVisitor.prototype.visitGroup = function (grp) {

        }

        InstanceModelVisitor.prototype.visitComponent = function (comp) {

        }

        InstanceModelVisitor.prototype.visitOutputPort = function (port) {
            // TODO ?
        }

        InstanceModelVisitor.prototype.visitInputPort = function (port) {
            // TODO ?
        }

        InstanceModelVisitor.prototype.visitWire = function (wire) {
            // TODO
        }

        InstanceModelVisitor.prototype.visit
    }
);