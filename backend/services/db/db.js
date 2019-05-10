const Bcrypt = require('bcrypt');

const { Pool } = require('pg');
const pool = new Pool();
const db = module.exports = {};

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
});
const init = async () => {
  require('./modules/courses');
  require('./modules/users');
  require('./modules/groups');
}

db.terminate = async () => {
  await pool.end();
};

init();
