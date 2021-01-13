/*PORT: `50542`
HOST: `135.23.222.131`
*/
const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
const conn = connect();

setupInput(conn);