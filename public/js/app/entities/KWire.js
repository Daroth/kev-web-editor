define(
    function() {

        function KWire(layer) {
            this.layer = layer;
        }

        KWire.prototype.setOrigin = function(node) {
            this.origin = node;
//            console.log(this.origin);
//            this.origin.setWire(this);
        }

        KWire.prototype.setTarget = function(node) {
            this.target = node;
//            this.target.setWire(this);
        }

        KWire.prototype.draw = function() {
            var canvas = this.layer.getCanvas();
            var context = canvas.getContext();

            canvas.clear();

            // process positions
            var origin = this.origin.getAbsolutePosition(),
                target = this.target.getAbsolutePosition();


            // TODO ça ne permet de dessiner qu'un seul fil à la fois ça
            // TODO si tu bouges les éléments après, ça bouge pas le fil il reste au même endroit
            // TODO y'a pas de "coube" il faut utiliser le coup du quadratic

            // draw curve
            context.beginPath();
            context.moveTo(origin.x, origin.y);
            context.lineTo(target.x, target.y);
//            context.quadraticCurveTo(middle.x, middle.y, target.x, target.y);
            context.strokeStyle = '#5aa564';
            context.lineWidth = 4;
            context.stroke();
        }

        KWire.prototype.clear = function() {
            this.layer.getCanvas().clear();
        }

        return KWire;
    }
);