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

    this.author = undefined;


};

_.extend(CiteVis.prototype, {

    init: function() {

        var self = this;

        this.confs = ['InfoVis', 'VAST', 'SciVis'];

        //years in inverse order
        this.years = {
            'InfoVis': d3.range(2013, 1994, -1),
            'VAST': d3.range(2013, 2005, -1),
            'SciVis': d3.range(2013, 1989, -1)
        };


        var eids = this.graph.getLinks().filter(function(eid) {
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

        var papers = _.keys(paperCnts).sort(),
            papers2 = [];

        papers = _.sortBy(papers, function(pid) {return -paperCnts[pid];});

        if (self.author) {
            papers2 = self.graph.neighbors(self.author);
        }

        var pdivs = self.infopanel.selectAll('.paper')
            .data(papers)
            .enter()
            .append('div')
            .attr('class', 'paper');
            
        pdivs.append('p')
            .text(function(pid) {return paperCnts[pid] + '--' + self.graph.getNodeAttr('title', pid)});

        pdivs.filter(function(pid) {
                return papers2.indexOf(pid) > -1;
            })
            .classed('highlight2', true);

    },

    clearDetails: function() {
        this.infopanel.selectAll('*').remove();
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

    draw: function() {

        var self = this;

        var matrixCellSize = self.config.matrixCellSize,
            padding = self.config.padding;

        var confs_coords = {},
            y = 0;

        for (var i = 0; i < self.confs.length; i ++) {
            y += padding;
            confs_coords[self.confs[i]] = {'x': 0, 'y': y};
            y += matrixCellSize * self.years[self.confs[i]].length;
        }


        //draw rectangles
        self.canvas.selectAll('.marker')
            .data([0, 1])
            .enter()
            .append('rect')
            .attr('class', 'marker')
            .attr('x', 0).attr('y', 0).attr('width', 0).attr('height', 0);        


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
                else return -120;
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
            .text(_.identity)
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

                                var years = self.years[c].slice().reverse();

                                var cells = d3.select(this)
                                    .selectAll('.year_col')
                                    // .data(self.years[c])
                                    .data(years)
                                    .enter()
                                    .append('g')
                                    .attr('class', 'year_col')
                                    .attr('transform', function(y, j) {

                                        return geom.transform.begin()
                                            .translate(j * matrixCellSize, 0)
                                            .end();

                                    })
                                    .each(d3behaviour.highlight)
                                    .filter(function(y , j) {
                                        return y >= yy;
                                    });

                                cells.on('mouseover.detail', function(y, j) {

                                        if (self.fixed)  {return}

                                        var key = cc + '_' + c + '_' + yy + '_' + y;
                                        
                                        self.highlightLabels(cc, c, yy, y);

                                        if (self.groups[key] == undefined) {
                                            self.clearDetails();
                                        } else {

                                            var eids = self.groups[key];
                                            var pids = _.map(eids, function(eid) {
                                                return self.graph.link(eid)
                                                    .target;
                                            }, null);

                                            self.drawDetails(_.countBy(pids, _.identity));

                                        }
                                    });

                                cells.on('click.detail', function(y, j) {
                                    if (d3.select(this).classed('selected')) {
                                        d3.select(this).classed('selected', false);
                                        self.fixed = false;
                                    }
                                    else {
                                        d3.selectAll('.year_col').classed('selected', false);
                                        d3.select(this).classed('selected', true);
                                        self.fixed = true;

                                        var key = cc + '_' + c + '_' + yy + '_' + y;
                                        
                                        self.highlightLabels(cc, c, yy, y);

                                        if (self.groups[key] == undefined) {
                                            self.clearDetails();
                                        } else {

                                            var eids = self.groups[key];
                                            var pids = _.map(eids, function(eid) {
                                                return self.graph.link(eid)
                                                    .target;
                                            }, null);

                                            self.drawDetails(_.countBy(pids, _.identity));

                                        }                                        
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
                                            return Math.log(self.counts[key] + 1) / Math.log(2) * 0.85;
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
            .text(_.identity)
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




        //redraw rectangles based on selection
        self.canvas.selectAll('.conf_row')
            .each(function(cc) {

                d3.select(this).selectAll('.year_row')
                    .each(function(yy, i) {

                        d3.select(this).selectAll('.conf_col')
                            .each(function(c) {

                                var update_marker = function(cc, c, i, j) {
                                    d3.selectAll('.marker')
                                        .each(function(d) {

                                            if (d == 0) {
                                                d3.select(this)
                                                .attr('width', matrixCellSize)
                                                .attr('y', 0)
                                                .attr('x', confs_coords[c].y + matrixCellSize * j)
                                                .attr('height', confs_coords[cc].y + matrixCellSize * i);
                                            }
                                            else {
                                                d3.select(this)
                                                .attr('height', matrixCellSize)
                                                .attr('x', 0)
                                                .attr('width', confs_coords[c].y + matrixCellSize * j)
                                                .attr('y', confs_coords[cc].y + matrixCellSize * i);
                                            }

                                        });
                                }

                                d3.select(this).selectAll('.year_col')
                                    .on('mouseover.marker', function(y, j) {
                                        if (self.fixed) {return}
                                        else {update_marker(cc, c, i , j)}
                                    })
                                    .on('click.marker',  function(y, j) {
                                        update_marker(cc, c , i , j);
                                    });

                            })
                    })
            });            

    }
});



_.extend(CiteVis.prototype, {


    clearAll: function() {

        this.author = undefined;

        this.canvas.selectAll('.year_row')
            .selectAll('.year_col')
            .classed('highlight2', false);

        this.canvas.selectAll('.conf_row')
            .each(function(cc) {
                d3.select(this).selectAll('.year_row')
                    .each(function(yy) {
                        d3.select(this).select('.year_row_label')
                            .classed('highlight2', false);
                    })
            });


        this.canvas.selectAll('.year_col').classed('selected', false);
        
        this.fixed = false;

    },

    highlightAuthor: function(name) {

        var self = this,
            g = self.graph;

        self.author = name;

        self.canvas.selectAll('.year_row')
            .selectAll('.year_col')
            .classed('highlight2', false);

        var pids = g.neighbors(name),
            confs = null,
            confs2 = null,
            years = null,
            years2 = null,
            i = -1,
            ii = -1,
            j = -1,
            k = -1,
            citing = null;

        var cited = _.groupBy(pids, function(pid) {return g.getNodeAttr('conf', pid);});

        i = -1,
        confs = _.keys(cited);

        while( ++i < confs.length) {

            cited[confs[i]] = _.groupBy(cited[confs[i]], function(pid) {return g.getNodeAttr('year', pid);});

            years = _.keys(cited[confs[i]]);

            j = -1;

            while(++j < years.length) {

                pids = cited[confs[i]][years[j]];
                k = -1;
                citing = [];

                while( ++k < pids.length) {
                    citing = citing.concat(g.successors(pids[k]).filter(function(pid){return g.getNodeAttr('partition', pid) == 'paper';}));
                }

                citing = _.groupBy(citing, function(pid) {return g.getNodeAttr('conf', pid);});

                conf2 = _.keys(citing);

                ii = -1;
                while( ++ ii < conf2.length) {
                    citing[conf2[ii]] = _.groupBy(citing[conf2[ii]], function(pid){return g.getNodeAttr('year', pid);});
                }

                cited[confs[i]][years[j]] = citing;
            }
        }

        //highlight matrix entries
        self.canvas.selectAll('.conf_row')
            .filter(function(cc) {return cc in cited;})
            .each(function(cc) {
                d3.select(this).selectAll('.year_row')
                    .filter(function(yy) {return yy in cited[cc];})
                    .each(function(yy) {
                        d3.select(this).selectAll('.conf_col')
                            .filter(function(c) {return c in cited[cc][yy];})
                            .each(function(c) {
                                d3.select(this).selectAll('.year_col')
                                    .filter(function(y) {return y in cited[cc][yy][c] > 0;})
                                    .classed('highlight2', true);
                            })
                    })
            });

        //highlight label
        self.canvas.selectAll('.conf_row')
            .filter(function(cc) {return cc in cited;})
            .each(function(cc) {
                d3.select(this).selectAll('.year_row')
                    .filter(function(yy) {return yy in cited[cc];})
                    .each(function(yy) {
                        d3.select(this).select('.year_row_label')
                            .classed('highlight2', true);
                    })
            });

    }

});


