var startConnect = require('sauce-connect-launcher');

var startupCfg  = {
	/*jshint camelcase:false */
	logger: function () {
		console.log.apply(console, arguments);
	},
	username: process.env['SAUCE_USERNAME'],
	accessKey: process.env['SAUCE_ACCESS_KEY'],
	port: 4444,
	no_progress: !process.stdout.isTTY
};

process.on('uncaughtException', function(err) {
  console.error('ue' + err.stack);
});

process.on('error', function(err) {
  console.error('err' + err.stack);
});

startConnect(startupCfg, function(err){
   if (err) {  
     console.log('fail ' + err);
   }
});


