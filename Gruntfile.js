module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    execsyncs: {
      ls: {
        cmd: "ls > ./test/ls.txt",
      },
      ls2: {
        cmds: [
          "ls -al > ./test/ll.txt",
          "npm list > ./test/npm.txt",
        ],
      },
      rm: {
        cmds: [
          "rm ./test/ls.txt",
          "rm ./test/ll.txt",
          "rm ./test/npm.txt",
        ],
      }
    },
    mochaTest: {
        test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    }
  });
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.registerTask('test', [
    'execsyncs:ls', 
    'execsyncs:ls2', 
    'mochaTest', 
    'execsyncs:rm'
  ]);
};
