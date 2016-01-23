module.exports = function(grunt) {

    // grunt.loadNpmTasks('grunt-contrib-uglify');
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    './dist/css/styles.css': './src/scss/styles.scss'
                }
            }
        }
    });



    // Default task(s).
    grunt.registerTask('default', ['sass']);

};
