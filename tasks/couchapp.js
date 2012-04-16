
module.exports = function(grunt) {
  var couchapp, path;
  couchapp = require('couchapp');
  path = require('path');
  return grunt.registerTask("couchapp", "Compile and upload CouchApp.", function() {
    var done, options;
    options = grunt.config(['couchapp']);
    done = grunt.task.current.async();
    return couchapp.createApp(require(options.app), options.database, function(app) {
      return app.push(function() {
        return done(true);
      });
    });
  });
};
