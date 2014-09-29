

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
            // .layout()
            .draw();
            // .registerCallBack();
    })

})

