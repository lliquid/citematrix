EventDispatcher = function(ctx) {
    this.listeners = {};
    this.context = ctx;
};

var eproto = EventDispatcher.prototype;

eproto.on = function(event, f) {
    var ls = this.listeners;
    if (!ls.hasOwnProperty(event))
        ls[event] = [];
    ls[event].push(f);
    return this;
}

eproto.off = function(event, f) {
    //TODO: -low turn off listeners
    return this;
}

//pass object as args
eproto.fire = function(event, args) {
    var ls = this.listeners;
    if (!ls.hasOwnProperty(event))
        return;
    var fs = ls[event];
    for (var i= 0, ii=fs.length;i<ii;i+=1) {
        fs[i].call(this.context, args);
    }
}


eproto.setEventDispatchContext = function(ctx) {
    this.context = ctx;
}

