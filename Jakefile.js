var fs = require("fs");
var async = require("async");

desc('This is the default task.');
task('default', function () {
 async.map(["leaflet.css.bundle.js","leaflet-providers.js","leaflet-hash.js"],function(d,cb){
     fs.readFile("./src/"+d,"utf8",cb);
 },function(err,result){
     fs.writeFile("./dist/leaflet-full.js",result.join("\n"),"utf8");
 });
});