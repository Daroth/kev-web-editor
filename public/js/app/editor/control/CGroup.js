define(
    [
        'abstraction/KGroup',
        'presentation/UIGroup',
        'control/AController',
        'control/CEntity',
        'kevoree',
        'util/Pooffs'
    ],

    function(KGroup, UIGroup, AController, CEntity, Kevoree, Pooffs) {

        Pooffs.extends(CGroup, KGroup);
        Pooffs.extends(CGroup, CEntity);
        Pooffs.extends(CGroup, AController);

        function CGroup(editor, type) {
            // KGroup.super(type)
            KGroup.prototype.constructor.call(this, editor, type);

            // CEntity.super(editor, type)
            CEntity.prototype.constructor.call(this, editor, type);

            // instantiate UI
            this._ui = new UIGroup(this);
        }

        // Override CEntity.p2cMouseDown()
        CGroup.prototype.p2cMouseDown = function (position) {
            // user starts the creation of a wire
            var wire = this.createWire();

            // tell editor that we have started a new wire task
            this.getEditor().startWireCreationTask(wire);

            // give the ui the newly created wire's UI
            this._ui.c2pWireCreationStarted(wire.getUI());
        }

        CGroup.prototype.p2cSaveProperties = function (props) {
            CEntity.prototype.p2cSaveProperties.call(this, props);

            var model = this._editor.getModel(),
                tDef = model.findTypeDefinitionsByID(this._type),
                dicType = tDef.getDictionaryType(),
                instDic = this._instance.getDictionary(),
                factory = new Kevoree.org.kevoree.impl.DefaultKevoreeFactory();


            if (dicType) {
                var attrs = dicType.getAttributes(),
                    instDic = (instDic) ? instDic : factory.createDictionary();

                for (var i=0; i < attrs.size(); i++) {
                    var attr = attrs.get(i);
                    switch (attr.getName()) {
                        case 'ip':
                            for (var j=0; j < props['GROUP_NODE_ADDRESSES'].length; j++) {
                                var dicVal = factory.createDictionaryValue();
                                dicVal.setAttribute(attr);
                                dicVal.setValue(props['GROUP_NODE_ADDRESSES'][j].ip);
                                dicVal.setTargetNode(model.findNodesByID(props['GROUP_NODE_ADDRESSES'][j].nodeName));
                                instDic.addValues(dicVal);
                            }
                            break;

                        case 'port':
                            for (var j=0; j < props['GROUP_NODE_ADDRESSES'].length; j++) {
                                var dicVal = factory.createDictionaryValue();
                                dicVal.setAttribute(attr);
                                dicVal.setValue(props['GROUP_NODE_ADDRESSES'][j].port);
                                dicVal.setTargetNode(model.findNodesByID(props['GROUP_NODE_ADDRESSES'][j].nodeName));
                                instDic.addValues(dicVal);
                            }
                            break;
                    }
                }

                this._instance.setDictionary(instDic);
            }
        }

        return CGroup;
    }
);