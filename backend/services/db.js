const Bcrypt = require('bcrypt');

const { Pool } = require('pg');
const pool = new Pool();
const db = module.exports = {};

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
});


db.createCourse = async (data) => {
  const { rows } = await pool.query("INSERT INTO courses (course_name, holes) values ($1, $2) returning id", [data.course_name, data.holes]);
  return rows[0].id;
};

db.getCourses = async (id) => {
  let result;
  if(id) result = await pool.query('SELECT * from courses WHERE id=$1', [id]);
  else result = await pool.query('SELECT * from courses');
  return result.rows;
};

db.deleteCourse = async (id) => {
  const result = await pool.query('DELETE FROM courses where id=$1', [id]);
  return result.rowCount;
};

db.updateCourse = async (id, data) => {
  await pool.query('UPDATE courses SET (course_name, holes) = ($2, $3) WHERE id=$1', [id, data.course_name, data.holes]);
};

db.createUser = async (user) => {
  const hash = await Bcrypt.hash(user.password,10);
  return await pool.query('INSERT INTO users (email, username, firstname, lastname, password) values ($1, $2, $3, $4, $5)',
    [user.email, user.username, user.firstname, user.lastname, hash]);
}

db.terminate = async () => {
  await pool.end();
};