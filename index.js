var morgan = require('morgan');
var fs = require('fs');

module.exports = function(plasma, dna) {
  plasma.on(dna.reactOn || 'ExpressServer', function(c){
    var app = c.data;
	if(dna.logFile){
		var accessLogStream = fs.createWriteStream(dna.logFile, {flags: 'a'})
	}
	app.use(morgan(dna.options, {stream: accessLogStream}));
  });
  plasma.emit('ExpressMorgan');
};