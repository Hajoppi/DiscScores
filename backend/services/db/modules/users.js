const Bcrypt = require('bcrypt');

module.exports = async (db, pool) => {
  db.createUser = async (user) => {
      const hash = await Bcrypt.hash(user.password,10);
      const result = await pool.query('INSERT INTO users (email, username, firstname, lastname, password) values ($1, $2, $3, $4, $5) returning id',
        [user.email, user.username, user.firstname, user.lastname, hash]);
      return result.rows[0];
    };
    
  db.getUser = async (email) => {
    const result = await pool.query('SELECT id, password FROM users WHERE email=$1', [email]);
    return result.rows[0];
  };
    
  db.getUserById = async (email) => {
    const result = await pool.query('SELECT username, email, firstname, lastname FROM users WHERE id=$1', [email]);
    return result.rows[0];
  };
}