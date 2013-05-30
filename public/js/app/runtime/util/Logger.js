define(
    ['jquery'],
    function () {
        function Logger() {
            this._dom = $('#home-logger');
            console.log('logger logger');
        }

        Logger.prototype.log = function (message) {
            this._dom.append('<li>'+message+'</li>');
        }

        Logger.prototype.err = function (message) {
            this._dom.append("<li class='err'>"+message+"</li>");
        }

        Logger.prototype.debug = function (message) {
            this._dom.append("<li class='debug'>"+message+"</li>");
        }

        Logger.prototype.warn = function (message) {
            this._dom.append("<li class='warn'>"+message+"</li>");
        }

        // return an instance of Logger
        return new Logger();
    }
);