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

