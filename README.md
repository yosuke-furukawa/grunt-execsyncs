grunt-execsyncs
================

Grunt plugin for executing shell commands using execSync command.

[https://github.com/yosuke-furukawa/execsyncs](execsyncs) can execute shell commands synchronously.


How to use
--------------

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```sh
$ npm install grunt-execsyncs -D
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-execsyncs');
```

*This plugin was designed to work with Grunt 0.4.x. If you're still using grunt v0.3.x it's strongly recommended that [you upgrade](http://gruntjs.com/upgrading-from-0.3-to-0.4), but in case you can't please use [v0.3.2](https://github.com/gruntjs/grunt-contrib-coffee/tree/grunt-0.3-stable).*

## Configure

```js
'use strict';
  grunt.initConfig({
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
  });
  grunt.loadNpmTasks('grunt-execsyncs');
  grunt.registerTask('test', [
    'execsyncs:ls', 
    'execsyncs:ls2', 
    'execsyncs:rm'
  ]);

```
