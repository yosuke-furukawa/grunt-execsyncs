var assert = require("assert");
var fs = require("fs");
var path = require("path");

describe("execsyncs", function() {
  it('calls ls', function(){
    var ls = "" + fs.readFileSync(path.join(__dirname, "ls.txt"));
    console.log(ls);
    assert(ls.indexOf("Gruntfile.js") >= 0);
  });
  it('calls ls2', function(){
    var ll = "" + fs.readFileSync(path.join(__dirname, "ll.txt"));
    console.log(ll);
    assert(ll.indexOf("Gruntfile.js") >= 0);
  });
  it('calls npm', function(){
    var npm = "" + fs.readFileSync(path.join(__dirname, "npm.txt"));
    console.log(npm);
    assert(npm.indexOf("execsync") >= 0);
  });
});
