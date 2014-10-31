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

/**
 * Created by user on 9/8/14.
 */

var d3behaviour = {

    highlight: function () {
        d3.select(this)
            .on('mouseover.highlightAndSelection', function () {
                d3.select(this).classed('highlight', true);
            })
            .on('mouseout.highlightAndSelection', function () {
                d3.select(this).classed('highlight', false);
            });
    },


    highlightAndSelection: function () {
        d3.select(this)
            .on('mouseover.highlightAndSelection', function () {
                d3.select(this).classed('highlight', true);
            })
            .on('mouseout.highlightAndSelection', function () {
                d3.select(this).classed('highlight', false);
            })
            .on('click.highlightAndSelection', function () {
                if (d3.select(this).classed('selected')) {
                    d3.select(this).classed('selected', false);
                }
                else {
                    d3.select(this).classed('selected', true);
                }
            });
    }

}
var Legend = function(title, canvas, config) {


    this.id = 'legend_' + Date.now();

    this.canvas = canvas.append('g')
        .attr('class', 'legend')
        .attr('id', this.id);
    this.config = config;
    this.title = title;

    this.draw();
}

_.extend(Legend.prototype, {

    _pair: function(array) {
        return array.slice(1)
            .map(function(b, i) {
                return [array[i], b];
            });
    },

    domain: function(domain) {
        this.config.domain = domain;
        return this;
    },

    position: function(coord) {
        this.config.x = coord.x;
        this.config.y = coord.y;
        return this;
    },

    title: function(str) {
        this.title = str;
        return this;
    },

    colorScale: function(colorScale) {
        this.config.colorScale = colorScale;
        return this;
    },

    draw: function() {

        var cfg = this.config,
            dmn = cfg.domain;

        var step = (dmn.max - dmn.min) / cfg.nsteps;

        this.canvas.attr('transform', geom.transform.begin()
            .translate(cfg.x, cfg.y)
            .end());

        var x = d3.scale.linear()
            .domain([dmn.min, dmn.max])
            .range([0, cfg.width]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom")
            .tickSize(cfg.tickFontSize)
            .tickFormat(d3.format('d'));

        var colorMap = d3.scale.linear()
            .domain(d3.range(dmn.min, dmn.max + step, step))
            .range(cfg.colorScale)
            .interpolate(d3.interpolateHsl);

        this.canvas.selectAll('rect')
            .data(this._pair(x.ticks(this.nsteps)))
            .enter()
            .append("rect")
            .attr('class', 'step')
            .attr("x", function(d) {
                return x(d[0]);
            })
            .attr("y", 0)
            .attr("width", function(d) {
                return x(d[1]) - x(d[0]);
            })
            .attr("height", cfg.height)
            .attr("fill", function(d) {
                return colorMap(d[0]);
            });

        this.canvas.call(xAxis)
            .append('text')
            .text(this.title)
            .attr('y', -3);

    },

    clear: function() {
        this.canvas.selectAll('*')
            .remove();
        return this;
    },

    update: function() {
        this.clear()
            .draw();
    }

});


var CategoricalLegend = function(title, canvas, config) {


    //     _.extend(cfg, app.config.legendBox);
    // _.extend(cfg, app.config.legendCoords[i]);
    // _.extend(cfg, {
    //     colorScale: app.config.scalarColorMap,
    //     domain: {
    //         min: 0,
    //         max: app.config.maxIntersectionCnt[i]
    //     },
    //     nsteps: app.config.legendSteps,
    //     tickFontSize: app.config.legendTickFontSize
    // });


    this.id = 'categoricallegend_' + Date.now();

    this.canvas = canvas.append('g')
        .attr('class', 'legend')
        .attr('id', this.id);

    this.config = config;
    this.title = title;

    this.draw();
}

_.extend(CategoricalLegend.prototype, {

    draw: function() {

        var cfg = this.config,
            colorMaper = cfg.colorMaper;

        var values = cfg.colorMaper.domain();

        this.canvas.selectAll('rect')
            .data(values)
            .enter()
            .append("rect")
            .attr('class', 'step')
            .attr("x", cfg.x)
            .attr("y", function(val, i) {
                return cfg.height * i;
            })
            .attr("width", 8)
            .attr("height", cfg.height - 3)
            .attr("fill", function(val) {
                return colorMaper(val);
            });

        this.canvas.selectAll('text')
            .data(values)
            .enter()
            .append('text')
            .attr('x', cfg.x + 18)
            .attr("y", function(val, i) {
                return cfg.height * i + 16;
            })
            .text(function(val){return val;});


        this.canvas
            .append('text')
            .text(this.title)
            .attr('y', -3);

    },

    clear: function() {
        this.canvas.selectAll('*')
            .remove();
        return this;
    },

    update: function() {
        this.clear()
            .draw();
    }

});


/*
 created by panpan xpp2007@gmail.com
 */

Graph = function() {

    var self = this;

    this.empty = function() {

        this.nodes = [];
        this.links = [];
        this.adjlinks = [];

        this.nodeIdx = {};
        this.linkIdx = {};

        this.invalidNodeIndices = [];
        this.nextNodeIdx = 0;
        this.invalidEdgeIndices = [];
        this.nextEdgeIdx = 0;

        return this;
    };

    this.empty();

};

_.extend(Graph.prototype, {

    addNode: function(nid, params) {

        if (this.node(nid) != null) { //check if nid is already in
            console.info('node ' + nid + 'already in');
            return;
        }

        var n = {
            id: nid + '',
            name: '',
            attrs: {}
        };

        var nidx = -1;

        if (this.invalidNodeIndices.length == 0) {
            this.nodes.push(undefined);
            this.adjlinks.push(undefined);
            nidx = this.nextNodeIdx;
            this.nextNodeIdx ++;
        } else {
            nidx = this.invalidNodeIndices.pop();
        }
        this.nodes[nidx] = n;
        this.adjlinks[nidx] = [];
        this.nodeIdx[nid] = nidx;
        this.updateNodeAttrs(params, nid);
        return this;
    },


    addLink: function(eid, source, target, params) {

        if (this.link(eid) != null) {
            console.info('link ' + eid + 'already in');
            return;
        }

        var e = {
            id: eid + '',
            source: source + '',
            target: target + '',
            attrs: {}
        };

        if (this.node(source) == undefined) {
            this.addNode(source);
        }
        if (this.node(target) == undefined) {
            this.addNode(target);
        }

        var eidx = -1;

        if (this.invalidEdgeIndices.length == 0) {
            this.links.push(null);
            eidx = this.nextEdgeIdx;
            this.nextEdgeIdx ++;
        } else {
            eidx = this.invalidEdgeIndices.pop();
        }

        var sidx = this.nodeIdx[source],
            tidx = this.nodeIdx[target];

        this.links[eidx] = e;
        this.linkIdx[eid] = eidx;

        this.adjlinks[sidx].push(eid);
        this.adjlinks[tidx].push(eid);

        this.updateLinkAttrs(params, eid);
        return this;
    },

    removeNode:  function(nid) {

        if (!this.hasNode(nid)) {
            console.info("node " + nid + " not exist");
            return;
        }

        //remove links first
        var adjs=this.adjacents(nid).slice(0);
        for (var i= 0; i< adjs.length; i++) {
            this.removeLink(adjs[i]);
        }

        var nidx = this.nodeIdx[nid];
        this.invalidNodeIndices.push(nidx);
        this.nodes[nidx] = undefined;
        this.nodeIdx[nid] = undefined;
        this.adjlinks[nidx] = undefined;

        return this;
    },

    removeLink: function(arg0, arg1) {

        var e = undefined,
            eidx = -1,
            src = undefined,
            tgt = undefined,
            eid = undefined;

        if (arguments.length == 1) {
            e = this.link(arg0);
            eidx = this.linkIdx[arg0];
        }
        else if (arguments.length >= 2) {
            e = this.link(arg0, arg1);
            eidx = this.linkIdx[e.id];
        }

        src = e.source;
        tgt = e.target;

        this.invalidEdgeIndices.push(eidx);
        this.linkIdx[eid] = undefined;
        this.links[eidx] = undefined;
        //remove from adjacency list
        var s = this.adjlinks[this.nodeIdx[e.source]],
            t = this.adjlinks[this.nodeIdx[e.target]];

        s.splice(s.indexOf(e.id), 1);
        t.splice(t.indexOf(e.id), 1);

        return this;
    },

    node: function(nid) {
            
        return (this.nodeIdx[nid] == undefined || this.nodes[this.nodeIdx[nid]] ==  undefined) ? null: this.nodes[this.nodeIdx[nid]];
    },

    hasNode: function(nid) {
        return this.node(nid) !== null;
    },

    //overloaded function link
    link: function(arg0, arg1) {
        if (arguments.length == 1) {
            return (this.linkIdx[arg0] == undefined || this.links[this.linkIdx[arg0]] == undefined) ? null: this.links[this.linkIdx[arg0]];
        }
        else if (arguments.length == 2) { //nid0, nid1
            var nlinks = this.adjacents(arg0),
                rs = [];
            for (var i= 0, ii = nlinks.length; i < ii; i ++) {
                if (this.link(nlinks[i]) && (this.link(nlinks[i]).source == arg0 && this.link(nlinks[i]).target == arg1
                    || this.link(nlinks[i]).source == arg1 && this.link(nlinks[i]).target == arg0)) {
                    if(rs.indexOf(nlinks[i]) == -1)
                        rs.push(nlinks[i]);
                }
            }
            if (rs.length == 1) {
                return rs[0];
            }
            else if (rs.length == 0) {
                return null;
            }
            else {
                return rs;
            }
        }
        else
            return undefined;
    },

    hasLink: function(arg0, arg1) {
        var link = this.link(arg0, arg1);
        return link !== null && link !== undefined;
    },

    neighbor: function(nid, eid) {
        if (nid == this.link(eid).source)
            return this.link(eid).target;
        else
            return this.link(eid).source;
    },

    adjacents: function(nid) {
        return this.adjlinks[this.nodeIdx[nid]];
    },

    neighbors: function(nid) {

        var eids = this.adjacents(nid),
            nbrs = [];

        for (var i= 0, ii=eids.length; i < ii; i ++) {
            var nbr = this.neighbor(nid, eids[i]);
            if (nbrs.indexOf(nbr) == -1)
                nbrs.push(nbr);
        }

        return nbrs;
    },

    degree: function(nid, weight) {
        if (arguments.length == 1) {
            return this.adjacents(nid).length;
        }
        else {
            var adjlinks = this.adjacents(nid),
                wsum = 0;
            for (var i = 0, ii = adjlinks.length; i < ii; i++) {
                wsum += this.getLinkAttr('w', adjlinks[i]);
            }
            return wsum;
        }
    },

    precedessors: function(nid) { },
    successors: function (nid) { },

    indegree: function(nid) { },
    outdegree: function(nid) { },


    getNodes: function() {
        var nids = [],
            invalids = _.sortBy(this.invalidNodeIndices);
        for (var i = 0, ii = this.nodes.length, j = 0; i < ii; i ++) {
            if (j < invalids.length && i < invalids[j] || j >= invalids.length) {
                nids.push(this.nodes[i].id);
            }
            else {
                j ++;
            }
        }
        return nids;
    },

    getLinks: function() {
        var eids = [],
            invalids = _.sortBy(this.invalidEdgeIndices);
        for (var i = 0, ii = this.links.length, j = 0; i < ii; i ++) {
            if (j < invalids.length && i < invalids[j] || j >= invalids.length) {
                eids.push(this.links[i].id);
            }
            else {
                j ++;
            }
        }
        return eids;
    },

    getNodeAttr: function(attr, nid) {
        return this.node(nid).attrs[attr];
    },

    getNodeAttrs: function(attrs, nid) {
        var rs = {};
        for (var i= 0, ii=attrs.length; i < ii; i ++) {
            rs[attrs[i]] = this.getNodeAttr(attrs[i], nid);
        }
        return rs;
    },

    getLinkAttr: function(attr, eid) {
        return this.link(eid).attrs[attr];
    },

    hasNodeAttr: function(attr) {
        var nids = this.getNodes();
        if (nids.length == 0) {
            return false;
        }
        else {
            for (var i = 0; i < nids.length; i ++) {
                if (this.getNodeAttr(attr, nids[i]) != undefined) {
                    return true;
                }

            }
            return false;
        }
    },

    bfs: function(nid, dlimit) {

        var visited = d3.set([nid]),
            distances = d3.map(),
            queue = [nid];

        distances.set(nid, 0);

        while (queue.length > 0) {
            var n0 = queue.shift(),
                d = distances.get(n0);
            if (d >= dlimit)
                continue;
            var nbrs = this.neighbors(n0);
            for (var i=0, ii=nbrs.length; i<ii; i++) {
                if (!visited.has(nbrs[i])) {
                    queue.push(nbrs[i]);
                    visited.add(nbrs[i]);
                    distances.set(nbrs[i], d + 1);
                }
            }
        }

        return distances;
    },

    updateNodeAttrs: function(params, nid) {

        var n = this.node(nid);
        params = params || {};
        for (var k in params) {
            if (params.hasOwnProperty(k)) {
                switch (k) {
                    case 'id': break;
                    case 'name': n.name = params[k]; break;
                    default :n.attrs[k] = params[k]; break;
                }
            }
        }
    },

    updateLinkAttrs: function(params, eid) {

        var e = this.link(eid);
        params = params || {};
        for (var k in params) {
            if (params.hasOwnProperty(k)) {
                switch (k) {
                    case 'id': break;
                    case 'source': break;
                    case 'target': break;
                    default :e.attrs[k] = params[k]; break;
                }
            }
        }
    },

    info: function() {
        return '#nodes = ' + this.nodes.length + '; ' + '#links = ' + this.links.length;
    }

});



//load json graph data exported by networkx
_.extend(Graph.prototype, {

    loadJSON: function(data) {

        for (var i = 0, ii = data.nodes.length; i < ii; i++) {
            this.addNode(data.nodes[i].id, data.nodes[i]);
        }

        for (var i = 0, ii = data.links.length; i < ii; i++) {
            this.addLink(i,
                data.nodes[data.links[i].source].id,
                data.nodes[data.links[i].target].id
            );
        }

    }

});



_.extend(Graph.prototype, {

    test : function() {

        g_test = new Graph();
        g_test.addNode('a');
        g_test.addNode('b');
        g_test.addNode('c');
        g_test.addNode('d');
        g_test.addNode('e');

        g_test.addLink('ab', 'a', 'b');
        g_test.addLink('ac', 'a', 'c');
        g_test.addLink('ad', 'a', 'd');
        g_test.addLink('de', 'd', 'e');
        g_test.addLink('cb', 'c' ,'b');
        g_test.addLink('cc', 'c', 'c');

    }
});


/**
 * Created by user on 9/5/14.
 */


var config = {

    x0: 300,
    y0: 160,

    width: 1000,
    height: 800,

    matrixCellSize: 12,
    
    matrixCellPadding: 0.5,
    matrixPadding: 3,

    forceSimulationTicks: 200,
    medianIterationRounds: 50,

    labelFontSize: 8,
    labelFontFamily: '"Century Gothic", CenturyGothic, AppleGothic, sans-serif',
    labelFontAscend: 0.75,
    labelFontDescend: -0.17,

    label0Shift: -100,
    label1Shift: -20



}

/**
 * Created by panpan on 9/5/14.
 */


CiteVis = function(graph, canvas, config) {


    this.dispatcher = new EventDispatcher(this);
    this.graph = graph;
    this.canvas = canvas.append('g')
        .attr('class', 'matrix')
        .attr('transform', geom.transform.begin()
            .translate(config.x0, config.y0)
            .end());
    this.config = config;

    this.confs = [];
    this.years = [];

    this.confs_coords = {};
    this.years_coords = {};

    this.counts = undefined;
    this.groups = undefined;

    this.infopanel = undefined;

};

_.extend(CiteVis.prototype, {

    init: function() {

        var self = this;

        this.confs = ['infovis', 'vast', 'vis'];
        // this.years = {
        //     'infovis': d3.range(1998, 2014),
        //     'vast': d3.range(2006, 2014),
        //     'vis': d3.range(1998, 2014)
        // };

        //years in inverse order
        this.years = {
            'infovis': d3.range(2013, 1994, -1),
            'vast': d3.range(2013, 2005, -1),
            'vis': d3.range(2013, 1989, -1)
        };        


        var eids = this.graph.getLinks(function(eid) {
            var sid = self.graph.link(eid)
                .source,
                tid = self.graph.link(eid)
                    .target;
            return self.graph.getNodeAttr('partition', sid) == 'paper' && self.graph.getNodeAttr('partition', tid) == 'paper';
        });

        var linkSignature = function(eid) {
            var sid = self.graph.link(eid)
                .source,
                tid = self.graph.link(eid)
                    .target;
            return self.graph.getNodeAttr('conf', tid) + '_' + self.graph.getNodeAttr('conf', sid) + '_' + self.graph.getNodeAttr('year', tid) + '_' + self.graph.getNodeAttr('year', sid);
        };

        this.counts = _.countBy(eids, linkSignature);
        this.groups = _.groupBy(eids, linkSignature);

        return this;
    },

    setInfoPanel: function(infopanel) {
        this.infopanel = infopanel;
        return this;
    },

    drawDetails: function(paperCnts) {
        
        var self = this;
        self.infopanel.selectAll('*').remove();

        var papers = _.keys(paperCnts).sort();

        var pdivs = self.infopanel.selectAll('.paper')
            .data(papers)
            .enter()
            .append('div')
            .attr('class', 'paper');
            
        pdivs.append('p')
            .text(function(p) {return paperCnts[p] + '--' + p});

    },

    highlightLabels: function(cc, c, yy, y) {

        var self = this;

        self.canvas.selectAll('.year_row_label')
            .classed('highlight', false)
            .filter(function(_y) {
                return _y == yy && d3.select(this.parentNode.parentNode).datum() == cc;
            })
            .classed('highlight', true);

        self.canvas.selectAll('.year_col_label')
            .classed('highlight', false)
            .filter(function(_y) {
                return _y == y && d3.select(this.parentNode.parentNode).datum() == c;
            })
            .classed('highlight', true);

        self.canvas.selectAll('.conf_row_label')
            .classed('highlight', false)
            .filter(function(_c) {return _c == cc;})
            .classed('highlight', true);

        self.canvas.selectAll('.conf_col_label')
            .classed('highlight', false)
            .filter(function(_c) {return _c == c;})
            .classed('highlight', true);
    },

    // cleanDetails: function() {

    //     this.infopanel.selectAll('*').remove();

    //     return this;
    // },

    layout: function() {
        //STUB
        return this;
    },

    draw: function() {

        var self = this;

        var matrixCellSize = self.config.matrixCellSize;

        var confs_coords = {},
            y = 0;

        for (var i = 0; i < self.confs.length; i ++) {
            confs_coords[self.confs[i]] = {'x': 0, 'y': y};
            y += matrixCellSize * self.years[self.confs[i]].length;
        }


        //draw citing papers and cited papers
        self.canvas.selectAll('.label0')
            .data(['cited', 'citing'])
            .enter()
            .append('text')
            .attr('class', 'label')
            .text(_.identity)
            .attr('text-anchor', 'end')
            .attr('x', function(l) {
                if (l == 'cited')  return self.config.label0Shift - 80;
                else return y / 2;
            })
            .attr('y', function(l) {
                if (l == 'cited')  return y / 2;
                else return -140;
            });


        var conf_rows = self.canvas.selectAll('.conf_row')
            .data(self.confs)
            .enter()
            .append('g')
            .attr('class', 'conf_row')
            .attr('transform', function(cc, ii) {
                return geom.transform.begin()
                    .translate(0, confs_coords[cc].y)
                    .end();
            });

        conf_rows
            .append('text')
            .attr('class', 'conf_row_label')
            .attr('x', self.config.label0Shift)
            .attr('y', function(cc) {
                return matrixCellSize * self.years[cc].length / 2;
            })
            .text(function(cc) {
                if (cc == 'vis') return 'scivis';
                else return cc;
            })
            .attr('text-anchor', 'end');



        conf_rows
            .each(function(cc, i) {

                var year_row = d3.select(this)
                    .selectAll('.year_row')
                    .data(self.years[cc])
                    .enter()
                    .append('g')
                    .attr('class', 'year_row')
                    .attr('transform', function(yy, j) {
                        return geom.transform.begin()
                            .translate(0, j * matrixCellSize)
                            .end();
                    });

                year_row
                    .append('text')
                    .attr('class', 'year_row_label')
                    .attr('x', self.config.label1Shift)
                    .attr('y', matrixCellSize)
                    .text(_.identity)
                    .attr('text-anchor', 'end');

            });


        //draw matrix cells
        d3.selectAll('.conf_row')
            .each(function(cc, ii) {

                d3.select(this)
                    .selectAll('.year_row')
                    .each(function(yy, jj) {

                        d3.select(this)
                            .selectAll('.conf_col')
                            .data(self.confs)
                            .enter()
                            .append('g')
                            .attr('class', 'conf_col')
                            .attr('transform', function(c, i) {
                                return geom.transform.begin()
                                    .translate(confs_coords[c].y, 0)
                                    .end();
                            })
                            .each(function(c, i) {

                                var cells = d3.select(this)
                                    .selectAll('.year_col')
                                    .data(self.years[c])
                                    .enter()
                                    .append('g')
                                    .attr('class', 'year_col')
                                    .attr('transform', function(y, j) {

                                        return geom.transform.begin()
                                            .translate(j * matrixCellSize, 0)
                                            .end();

                                    })
                                    .each(d3behaviour.highlight)
                                    // .on('mouseover', function(y, j) {
                                    // })
                                    .on('mouseover', function(y, j) {

                                        var key = cc + '_' + c + '_' + yy + '_' + y;
                                        
                                        self.highlightLabels(cc, c, yy, y);

                                        if (self.groups[key] == undefined) {
                                            return;
                                        } else {

                                            var eids = self.groups[key];
                                            var titles = _.map(eids, function(eid) {
                                                var tid = self.graph.link(eid)
                                                    .target;
                                                return self.graph.getNodeAttr('title', tid);
                                            }, null);

                                            self.drawDetails(_.countBy(titles, _.identity));

                                        }

                                    });


                                cells.append('rect')
                                    .attr('x', 0)
                                    .attr('y', 0)
                                    .attr('width', matrixCellSize)
                                    .attr('height', matrixCellSize);

                                cells.append('circle')
                                    .attr('cx', matrixCellSize / 2)
                                    .attr('cy', matrixCellSize / 2)
                                    .attr('r', function(y, j) {
                                        var key = cc + '_' + c + '_' + yy + '_' + y;
                                        if (self.counts[key] == undefined) {
                                            return 0;
                                        } else {
                                            return Math.log(self.counts[key]) / Math.log(2);
                                        }
                                    });

                            });
                    });
            });

        //draw column labels
        d3.select('.conf_row')
            .select('.year_row')
            .selectAll('.conf_col')
            .append('text')
            .attr('class', 'conf_col_label')
            .text(function(cc) {
                if (cc == 'vis') return 'scivis';
                else return cc;
            })
            .attr('text-anchor', 'middle')
            .attr('x', function(c, i) {return self.years[c].length * matrixCellSize / 2;})
            .attr('y', self.config.label0Shift)
            .each(function(c, i) {

                var years = d3.select(this.parentNode)
                    .selectAll('.year_col');

                years.append('text')
                    .attr('class', 'year_col_label')
                    .text(_.identity)
                    .attr('text-anchor', 'start')
                    .attr('y', self.config.label1Shift)
                    .attr('x', matrixCellSize)
                    .attr('transform', geom.transform.begin().rotate(-90.0, matrixCellSize, self.config.label1Shift).end());
            });


    }
});


var app = {};

app.path = 'data/vis_dataset_tripartite.json';

app.graph = new Graph();

app.config = config;



$(function() {

    app.canvas = d3.select('#demo')
    .append('svg')
    .attr('width', config.width)
    .attr('height', config.height);

    d3.json(app.path, function(data) {

        //load graph
        app.graph.loadJSON(data);

        app.vis = new CiteVis(app.graph, app.canvas, app.config);

        app.vis.init()
            .setInfoPanel(d3.select('#aux'))
            .layout()
            .draw();        

        //add brush by author
        var authors = app.graph.getNodes().filter(function(nid){
            return app.graph.getNodeAttr('partition', nid) == "author";
        });

        $('#name').typeahead({source: authors});
        $('#name').change(function(){
            var author = $('#name').val();
            if (app.graph.hasNode(author){
                app.vis.highlight
            })
        });

    })

})

