define(
    [
        'abstraction/KEntity',
        'util/Pooffs',
        'util/Util',
        'kevoree'
    ],

    function(KEntity, Pooffs, Util, Kevoree) {
        Pooffs.extends(CEntity, KEntity);

        function CEntity(editor, type) {}

        CEntity.prototype.p2cRemoveEntity = function () {
            this.remove();
        }

        CEntity.prototype.p2cMouseDown = function (position) {}

        CEntity.prototype.p2cMouseUp = function (position) {}

        CEntity.prototype.p2cMouseMove = function (position) {}

        CEntity.prototype.p2cDragMove = function () {
            // refresh wires layer if any
            if (this.hasWires()) {
                this._ui.c2pRefreshWires(this.getEditor().getUI());
            }
        }

        // Override KEntity.remove()
        CEntity.prototype.remove = function () {
            KEntity.prototype.remove.call(this);
            this._ui.c2pRemoveEntity();
        }

        CEntity.prototype.p2cSaveProperties = function (props) {
            this.setName(props['name']);

            var model = this._editor.getModel(),
                tDef = model.findTypeDefinitionsByID(this._type),
                dicType = tDef.getDictionaryType(),
                instDic = this._instance.getDictionary(),
                factory = new Kevoree.org.kevoree.impl.DefaultKevoreeFactory(),
                nodes = this.getConnectedFragments();

            console.log("instDic", instDic);

            if (dicType) {
                var attrs = dicType.getAttributes(),
                    instDic = (instDic) ? instDic : factory.createDictionary();

                // clear old dictionary values
                instDic.removeAllValues();

                for (var i=0; i < attrs.size(); i++) {
                    var attr = attrs.get(i);
                    if (Util.parseBoolean(attr.getFragmentDependant())) {
                        for (var j=0; j < nodes.size(); j++) {
                            var node = nodes.get(j);
                            if (props.fragDepAttrs[node.getName()][attr.getName()]) {
                                var dicVal = factory.createDictionaryValue();
                                dicVal.setAttribute(attr);
                                dicVal.setValue(props.fragDepAttrs[node.getName()][attr.getName()]);
                                dicVal.setTargetNode(model.findNodesByID(node.getName()));
                                instDic.addValues(dicVal);
                            }
                        }

                    } else {
                        if (props[attr.getName()]) {
                            var dicVal = factory.createDictionaryValue();
                            dicVal.setAttribute(attr);
                            dicVal.setValue(props[attr.getName()]);
                            instDic.addValues(dicVal);
                        }
                    }
                }
            }

            this._instance.setDictionary(instDic);
            this._ui.c2pPropertiesUpdated();
        }

        CEntity.prototype.p2cDragEnd = function () {
            this.getEditor().updateModel(this);
        }

        return CEntity;
    }
);