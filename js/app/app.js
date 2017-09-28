

var app = {};

app.path = 'data/IEEE VIS papers 1990-2016 - Main dataset.json';

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
            .draw();        

        //add brush by author
        var authors = app.graph.getNodes().filter(function(nid){
            return app.graph.getNodeAttr('partition', nid) == "author";
        });

        $('#name').typeahead({source: authors});
        $('#name').change(function(){
            var author = $('#name').val();
            if (app.graph.hasNode(author)){
                app.vis.highlightAuthor(author);
            }
        });

        $('#unselect').click(function() {
            app.vis.clearAll();
            d3.select('#aux').selectAll('.paper').classed('highlight', false)
            d3.select('#aux').selectAll('.paper').classed('highlight2', false)
            // $('#unselect').button('reset');
        });

    })

})

