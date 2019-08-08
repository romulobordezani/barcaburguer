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
          var shouldAdd = true;
          file = file.replace('/Users/romulobordezani/Documents/workspace/barcaburguer/docs', '');

          var blackList = [
            '/.htaccess',
            '/404.html',
            '/CNAME',
            '/favicon.ico',
            '/index.html',
            '/sw_v2.js',
            '/index.tocompile.html',
            '/listFiles.js',
            '/manifest.json',
            '/robots.txt',
            '/views/includes/browse-happy.html',
            '/views/includes/facebook-sdk.html',
            '/views/includes/footer.html',
            '/views/includes/menu-top-desktop.html',
            '/views/includes/menu-top-mobile.html',
            '/views/includes/ng-view.html',
            '/views/includes/pre-loader.html',
          ];

          const isBlackListed = blackList.some(element => element === file);

          if (isBlackListed) {
            shouldAdd = false;
          }

          if (file.indexOf('.DS_Store') !== -1) {
            shouldAdd = false;
          }

          if (shouldAdd) {
            results.push(file);
          }


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
