module.exports = (grunt) ->
  couchapp = require 'couchapp'
  path = require 'path'

  grunt.registerTask "couchapp", "Compile and upload CouchApp.", ->
    options = grunt.config ['couchapp']
    done = grunt.task.current.async()
    couchapp.createApp require(options.app), options.database, (app) ->
      app.push -> done true
