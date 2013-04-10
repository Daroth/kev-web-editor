define(
    function() {
        function Observable() {
            this._observers = new Array();
        }

        Observable.prototype.addObserver = function(obs) {
            if (this._observers.indexOf(obs) == -1) {
                this._observers.push(obs);
            }
        }

        Observable.prototype._notifyObserver = function() {
            if (this._observers && this._observers.length > 0) {
                for (var i=0; i<this._observers.length; i++) {
                    if (this._observers[i].update) {
                        this._observers[i].update(this);
                    }
                }
            }
        }

        return Observable;
    }
);