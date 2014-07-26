module.exports = function(grunt) {
  var execsyncs = require("execsyncs");
  grunt.registerMultiTask('execsyncs', 'Execute shell commands synchroniously.', function(){
    var data = this.data;
    var commands = data.commands || data.cmds || [];
    var command = data.command || data.cmd || (typeof data === 'string' && data);
    if (!Array.isArray(commands)) {
      grunt.log.error("commands should be array");
      throw new Error("commands should be array");
    }
    if (command) {
      commands.push(command);
    }
    commands.forEach(function(command) {
      var result = execsyncs(command);
      grunt.verbose.ok(result);
    });
  });
};
