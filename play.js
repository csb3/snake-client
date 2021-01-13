/*PORT: `50542`
HOST: `135.23.222.131`
*/

const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });

  conn.setEncoding('utf8');
  
  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

console.log('Connecting ...');
connect();