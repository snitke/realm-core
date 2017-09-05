'use strict';

const loopback = require('loopback');
const app = module.exports = loopback();
const boot = require('loopback-boot');
const fs = require("fs");
const path = require("path");

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// const io = require("socket.io")(app.start());

// io.on("connection", function(socket) {
//   console.log("Working")
// });

// Set up static file proxy for the /client folder mapped to /static
app.use("/static", loopback.static(path.join(__dirname, '/../client')));
app.use("/static", function(req, res, next) {
  // res.sendStatus(404);
});

// let index = fs.readFileSync(path.join(__dirname, '/../client', 'index.html'));

// // Handles the html5 client redirect stuff
// app.get("*", function(req, res, next) {
//   res.sendFile(index);
// });

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
