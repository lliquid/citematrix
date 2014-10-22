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
            'infovis': d3.range(2013, 1997, -1),
            'vast': d3.range(2013, 2005, -1),
            'vis': d3.range(2013, 1997, -1)
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
                                            return Math.log(self.counts[key]) / Math.log(2) * 1.2;
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