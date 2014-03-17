module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },

    uglify: {
      vendors: {
        options: {
          sourceMap: true,
          sourceMapName: 'js/vendors.min.js.map',
          report: 'gzip'
        },
        files: {
          'js/vendors.min.js': [
            'bower_components/angular/angular.js',
            'bower_components/angular-resource/angular-resource.js'
          ]
        }
      },
      app: {
        options: {
          sourceMap: true,
          sourceMapName: 'js/app.min.js.map',
          report: 'gzip'
        },
        files: {
          'js/app.min.js': [
            'js/app.js',
            'js/services/mandrill.js',
            'js/controllers/contact.js'
          ]
        }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['compass']
      }
    }
  });

  grunt.registerTask('compass', ['compass']);
  grunt.registerTask('build', ['compass', 'uglify']);
  grunt.registerTask('default', ['build','watch']);

  require('load-grunt-tasks')(grunt);
}