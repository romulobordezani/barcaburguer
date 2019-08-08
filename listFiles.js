var fs = require('fs');
var path = require('path');
var util = require('util');
var walk = function(dir, done) {
  var results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    var i = 0;
    (function next() {
      var file = list[i++];
      if (!file) return done(null, results);
      //file = dir + '/' + file;
      file = path.resolve(dir, file);
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function(err, res) {
            results = results.concat(res);
            next();
          });
        }
        else {
          file = file.replace('/home/ubuntu/workspace/public', '');
          results.push(file);
          next();
        }
      });
    })();
  });
};
var mydir = path.resolve(__dirname);
walk(mydir, function(err, results) {
  if (err) throw err;
  console.log(util.inspect(results, { maxArrayLength: null }));
});
