/**
 * Created by panpan on 5/24/14.
 */

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        dirs: {
            src: 'js',
            dest: 'build'
        },
        concat: {
            options: {
                seperator: ';'
            },

            application: {
                src: [
                    'js/util/eventdispatcher.js',
                    'js/util/geom.js',
                    'js/util/d3behaviour.js',
                    'js/util/d3legend.js',
                    'js/data/graph.js',
                    'js/app/config.js',
                    'js/app/citevis.js',
                    'js/app/app.js'
                ],
                dest: 'build/application.build.js'
            }
        },

        jshint: {
            files: ['Gruntfile.js'],
            options: { }
        },

        watch :{
            scripts: {
                files: ['js/*.js', 'js/*/*.js', 'js/*/*/*.js'],
                tasks: ['concat']
            }
        }

    });

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-bower-install");
    grunt.loadNpmTasks("grunt-contrib-jshint");

    grunt.registerTask('develop', ['concat', 'jshint', 'watch']);
};