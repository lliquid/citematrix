/**
 * Created by panpan on 4/16/14.
 */
functools = function () {
    var f = {
        version: '0.0',
        identity: function(x) {return x;},
        //addMethod (for javascript function overload)  - By John Resig (MIT Licensed)
        addMethod: function (object, name, fn) {
            var old = object[ name ];
            object[ name ] = function () {
                if (fn.length == arguments.length)
                    return fn.apply(this, arguments);
                else if (typeof old == 'function')
                    return old.apply(this, arguments);
            };
        }
    };
    return f;
}();

algo = function () {

    var al ={
        version: "0.0"
    };

    //list generator from another list
    al.listgen = function(array, accessor, context) {

        context = context || null;

        var rs = [];
        for (var i= 0, len=array.length; i < len; i+=1) {
            rs.push(accessor.call(context, array[i]));
        }
        return rs;
    };

    //accessor
    al.permutation = function(array, accessor, context, ascending) {
        var order = al.order(array, accessor, context, ascending);
        var permute = Array(array.length);
        order.forEach(function(d, i) {permute[d] = i});
        return permute;
    };

    al.order = function(array, accessor, context, ascending) {

        accessor = accessor || functools.identity;
        context = context || null;
//        ascending = ascending || true;

        var order = [];
        for (var i= 0, ii = array.length; i < ii; i++) {
            order.push(i);
        }

        order.sort(function(i, j) {
            return accessor.call(context, array[i]) - accessor.call(context, array[j]);
        });
        if (ascending == false)
            order.reverse();
        return order;
    };

    al.sort = function(array, accessor, context, ascending) {

        accessor = accessor || functools.identity;
        context = context || null;
        ascending = ascending || true;

        array.sort(function(a, b) {
            return accessor.call(context, a) - accessor.call(context, b);
        });
        if (ascending == false)
            array.reverse();
    };

    al.find_interval = function(val, array, accessor, context) {

        var n = array.length;

        if (n==0) { return -1;}
        if (val > accessor.call(context, array[n-1])) { return n; }
        if (val < accessor.call(context, array[0])) { return -1; }

        var p = 0,
            q = n-1;

        while(p <= q) {
            var m = Math.floor((p + q) / 2);
            var x = accessor.call(context, array[m]);
            if (val > x)
                p = m+1;
            else if (val < x)
                q = m-1;
            else
                return m;
        }
        return q;
    };

    al.interpolate_step = function(val, array, accessor, mapper, context) {

        context = context || null;

        var idx = algo.find_interval(val, array, accessor, context);

        if (idx == -1 || idx == array.length) {
            return null;
        }
        else {
            return mapper.call(context, array[idx]);
        }
    }

    al.find = function(val, array, accessor, context) {
        var idx = al.find_interval(val, array, accessor, context);
        if (idx == -1 || idx == array.length)
            return -1;
        else if (accessor.call(context, array[idx]) == val)
            return idx;
        else
            return -1;
    };

    al.find_element = function(val, array, accessor, context) {
        var idx = al.find(val, array, accessor, context);
        if (idx == -1)
            return null;
        else
            return array[idx];
    };

    al.argmin = function(array, accessor, context) {
        if (array.length == 0)
            return undefined;

        accessor = accessor || functools.identity;
        context = context || null;

        var min = accessor.call(context, array[0]),
            arg = array[0];

        for (var i=1, len=array.length; i < len; i++) {
            var val = accessor.call(context, array[i]);
            if (val < min) {
                min = val;
                arg = array[i];
            }
        }
        return arg;
    };

    al.argmax = function(array, accessor, context) {

         if (array.length == 0)
            return undefined;

        accessor = accessor || functools.identity;
        context = context || null;

        var max = accessor.call(context, array[0]),
            arg = array[0];

        for (var i= 1, len=array.length; i < len; i++) {
            var val = accessor.call(context, array[i]);
            if (val > max) {
                max = val;
                arg = array[i];
            }
        }
        return arg;
    };

    al.min = function(array, accessor, context) {

        context = context || null;
        accessor = accessor || functools.identity;

        var arg = al.argmin(array, accessor, context);
        if (arg == undefined)
            return arg;
        else
            return accessor.call(context, arg);
    };

    al.max = function(array, accessor, context) {

        context = context || null;
        accessor = accessor || functools.identity;

        var arg = al.argmax(array, accessor, context);
        if (arg == undefined)
            return arg;
        else
            return accessor.call(context, arg);
    };

    return al;

}();

