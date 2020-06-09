const EventEmitter = require('events');
var url = 'http://www.logging.io/mylog';

class Logger extends EventEmitter {
  log(message) {
    //send an http request
    console.log(message);
    // Raised an event
    this.emit('message logged', { id: 1, url: url });
  }
}
//console.log(module);
module.exports = Logger;
//console.log(module);
