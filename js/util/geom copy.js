/**
 * Created by panpan on 4/16/14.
 */
geom = function () {
    var g = {version: "0.0"};

    //please be careful of the applying orders
    g.transform = {
        value: '',
        begin: function() {
            this.value = '';
            return this;
        },
        end: function() {
            return this.value;
        },
        translate: function(dx, dy) {
            this.value += 'translate(' + dx + ',' + dy + ')';
            return this;
        },
        rotate: function(theta, x0, y0) {
            this.value += 'rotate(' + theta + ',' + x0 + ',' + y0 + ')';
            return this;
        },
        scale: function(fx, fy) {
            this.value += 'scale(' + fx + ',' + fy + ')';
            return this;
        }
    };

    /*
     get a path string by chaining functions
     example:
     g.path.begin() [.move_to(args), ...] .end()
    */
    g.path = {
        value:'',
        x:0,
        y:0,
        s: 0.5, //for curve easing
        
        begin: function(){
            this.value = '';
            return this;
        },
        
        move_to: function(arg0, arg1) {

            if (arguments.length == 1) {
                this.value += ' M ' + arg0.x + ' ' + arg0.y;
                this.x = arg0.x;
                this.y = arg0.y;
            }
            else {
                this.value += ' M ' + arg0 + ' ' + arg1;
                this.x = arg0;
                this.y = arg1;
            }

            return this;
        
        },
        
        line_to: function(arg0, arg1) {

            if (arguments.length == 1) {
                this.value += ' L ' + arg0.x + ' ' + arg0.y;
                this.x = arg0.x;
                this.y = arg0.y;
            }
            else {
                this.value += ' L ' + arg0 + ' ' + arg1;
                this.x = arg0;
                this.y = arg1;
            }

            return this;
        },

        curve_with_width: function(p0, p1, c0, c1, w0, w1) {

            //TODO: bezier curve with varying width


            return this;
        },

        eased_line_to: function(x, y) {
            var c0x = this.x,
                c0y = this.y,
                c1x = x,
                c1y = y;
            if ((x-this.x) * (y-this.y) > 0) {
                c0y = this.y * (1 - this.s) + y * this.s;
                c1x = this.x * this.s + x * (1 - this.s);
            }
            else {
                c0x = this.x * (1 - this.s) + x * this.s;
                c1y = this.y * this.s + y * (1 - this.s);
            }
            this.bezier_to(c0x, c0y, c1x, c1y, x, y);
            return this;
        },
        h_eased_line_to: function(x, y) {
            this.bezier_to(this.x * (1-this.s) + x * this.s, this.y, this.x * this.s + x * (1-this.s) , y, x, y);
            return this;
        },

        v_eased_line_to: function(x, y) {
            this.bezier_to(this.x, this.y * (1-this.s) + y * this.s, x, this.y * this.s + y * (1-this.s), x, y);
            return this;
        },

        horizontal_to: function (x) {
            this.x = x;
            return this.line_to(x, this.y);
        },
        vertical_to: function(y) {
            this.y = y;
            return this.line_to(this.x, y);
        },
        horizontal_to_relative: function(x) {
            this.value += ' h ' + x;
            this.x = this.x + x;
            return this;
        },
        vertical_to_relative: function(y) {
            this.value += ' v ' + y;
            this.y = this.y + y;
            return this;
        },
        bezier_to: function(cx0, cy0, cx1, cy1, x1, y1) {
            this.x = x1;
            this.y = y1;
            this.value += ' C ' + cx0  + ',' + cy0 + ' ' + cx1 + ', ' + cy1 + ' ' + x1 + ', ' + y1;
            return this;
        },
        close_path: function() {
            this.value += ' Z ';
            return this;
        },
        end: function() {
            return this.value;
        }
    }

    return g;
}();
