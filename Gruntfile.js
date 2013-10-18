module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify:{
      compress: {
        files: {
          'dist/jquery.pnotify.min.js': ['jquery.pnotify.js']
        }
      }
    },

    clean: {
      build: ['dist/*']
    },

    cssmin: {
      dist: {
        files:[
          {src: ['jquery.pnotify.default.css'], dest: 'dist/jquery.pnotify.default.min.css'},
          {src: ['jquery.pnotify.default.icons.css'], dest: 'dist/jquery.pnotify.default.icons.min.css'}
        ]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('build', ['clean:build', 'cssmin:dist', 'uglify'])
}