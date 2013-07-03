define(
    [
        'abstraction/dictionary/KDictionary',
        'control/AController',
        'presentation/dictionary/UIDictionary',
        'util/Pooffs'
    ],
    function (KDictionary, AController, UIDictionary, Pooffs) {

        Pooffs.extends(CDictionary, AController);
        Pooffs.extends(CDictionary, KDictionary);

        function CDictionary(entity) {
            KDictionary.prototype.constructor.call(this, entity);

            this._ui = new UIDictionary(this);
        }

        CDictionary.prototype.p2cSaveDictionary = function () {

        }

        return CDictionary;
    }
);