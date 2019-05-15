const { Pool } = require('pg');
const pool = new Pool();
const db = module.exports = {};

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
});
const init = () => {
  require('./modules/courses')(db, pool);
  require('./modules/users')(db, pool);
  require('./modules/groups')(db, pool);
  require('./modules/game')(db, pool);
}

db.terminate = async () => {
  await pool.end();
};

init();
