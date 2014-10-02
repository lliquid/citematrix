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