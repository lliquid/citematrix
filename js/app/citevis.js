/**
 * Created by panpan on 9/5/14.
 */


CiteVis = function(graph, canvas, config) {


    this.dispatcher = new EventDispatcher(this);
    this.graph = graph;
    this.canvas = canvas.append('g').attr('class', 'matrix').attr('transform', geom.transform.begin().translate(config.x0, config.y0).end());
    this.config = config;

    this.years = [];
    this.confs = [];

    this.counts = undefined;


};

_.extend(CiteVis.prototype, {


    //TODO: hard coded
    init: function() {

        var self = this;

        this.years = d3.range(1998, 2014);
        this.confs = ['infovis', 'vast', 'vis'];

        var eids = this.graph.getLinks(function(eid) {
            var sid = self.graph.link(eid)
                .source,
                tid = self.graph.link(eid)
                    .target;
            return self.graph.getNodeAttr('partition', sid) == 'paper' && self.graph.getNodeAttr('partition', tid) == 'paper';
        });

        this.counts = _.countBy(eids, function(eid) {
            var sid = self.graph.link(eid)
                .source,
                tid = self.graph.link(eid)
                    .target;
            return self.graph.getNodeAttr('conf', tid) + '_' + self.graph.getNodeAttr('conf', sid) + '_' + self.graph.getNodeAttr('year', tid) + '_' + self.graph.getNodeAttr('year', sid);
        });

        return this;
    },

    draw: function() {

        var self = this;

        var matrixCellSize = self.config.matrixCellSize;

        var conf_rows = self.canvas.selectAll('.conf_row')
            .data(self.confs)
            .enter()
            .append('g')
            .attr('class', 'conf_row')
            .attr('transform', function(c, i) {
                return geom.transform.begin()
                    .translate(0, i * (matrixCellSize * self.years.length))
                    .end();
            });

        conf_rows
            .append('rect')
            .attr('width', matrixCellSize * self.years.length * self.confs.length)
            .attr('height', matrixCellSize * self.years.length);

        conf_rows
            .append('text')
            .attr('x', -100)
            .attr('y',  matrixCellSize * self.years.length / 2)
            .text(function(cc, i) {return cc})
            .attr('text-anchor', 'end');


        conf_rows
            .each(function(c, i) {

                var year_row = d3.select(this)
                    .selectAll('.year_row')
                    .data(self.years)
                    .enter()
                    .append('g')
                    .attr('class', 'year_row')
                    .attr('transform', function(y, j) {
                        return geom.transform.begin()
                            .translate(0, j * matrixCellSize)
                            .end();
                    });

                year_row
                    .append('text')
                    .attr('x', -20)
                    .attr('y', matrixCellSize)
                    .text(function(y, j) {if (j % 2 == 0) {return y;} else {return '';} })
                    .attr('text-anchor', 'end');

            });

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
                                    .translate(i * (matrixCellSize * self.years.length), 0)
                                    .end();
                            })
                            .each(function(c, i) {

                                d3.select(this)
                                    .selectAll('.year_col')
                                    .data(self.years)
                                    .enter()
                                    .append('g')
                                    .attr('class', 'year_col')
                                    .attr('transform', function(y, j) {

                                        return geom.transform.begin()
                                            .translate(j * matrixCellSize, 0)
                                            .end();

                                    })
                                    .append('circle')
                                    .attr('cx', matrixCellSize / 2)
                                    .attr('cy', matrixCellSize / 2)
                                .attr('r', function(y, j) {
                                    var key = cc + '_' + c + '_' + yy + '_' + y;
                                    if (self.counts[key] == undefined) {
                                        return 0;
                                    } else {
                                        return Math.log(self.counts[key]) / Math.log(2) * 2;
                                    }
                                })
                                    .attr('fill', '#C0C0C0')
                                    .attr('stroke', '#000000')
                                    .each(d3behaviour.highlightAndSelection);

                            });
                    });
            });

    }

});