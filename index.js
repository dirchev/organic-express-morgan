var morgan = require('morgan');
var fs = require('fs');
var path = require('path');

module.exports = function(plasma, dna) {
  plasma.on(dna.reactOn || 'ExpressServer', function(c){
    var app = c.data;
	if(dna.logFile){
		// create a write stream (in append mode)
		var accessLogStream = fs.createWriteStream(path.join(__dirname, dna.logFile), {flags: 'a'})
	}
	app.use(morgan(dna.options, {stream: accessLogStream}));
  });
  plasma.emit('ExpressMorgan');
};