define(
    [
        'abstraction/KEntity',
        'control/CInputPort',
        'control/COutputPort',
        'util/Pooffs'
    ],

    function(KEntity, CInputPort, COutputPort, Pooffs) {

        KComponent.ENTITY_TYPE = 'ComponentType';

        Pooffs.extends(KComponent, KEntity);

        function KComponent(editor, type, inputs, outputs) {
            KEntity.prototype.constructor.call(this, editor, type);

            this._parent = null;
            this._inputs = new Array(/* KPort */);
            this._outputs = new Array(/* KPort */);
        }

        KComponent.prototype.getEntityType = function () {
            return KComponent.ENTITY_TYPE;
        }

        KComponent.prototype.getParent = function () {
            return this._parent;
        }

        KComponent.prototype.setParent = function (node) {
            this._parent = node;
        }

        KComponent.prototype.disconnectPort = function (/* KPort */ port) {
            var index = this._inputs.indexOf(port);
            if (index == -1) {
                index = this._outputs.indexOf(port);
                if (index != -1) {
                    this._outputs.slice(index, 1);
                }
            } else {
                this._inputs.slice(index, 1);
            }
        }

        KComponent.prototype.hasChildren = function () {
            return false;
        }

        KComponent.prototype.getChildren = function () {
            return [];
        }

        KComponent.prototype.getInputs = function () {
            return this._inputs;
        }

        KComponent.prototype.getOutputs = function () {
            return this._outputs;
        }

        KComponent.prototype.addInput = function (input) {
            var index = this._inputs.indexOf(input);
            if (index == -1) { // do not duplicate inputs in components
                this._inputs.push(input);
            }
        }

        KComponent.prototype.addOutput = function (output) {
            var index = this._inputs.indexOf(output);
            if (index == -1) { // do not duplicate outputs in components
                this._inputs.push(output);
            }
        }

        return KComponent;
    }
);