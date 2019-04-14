const { Pool } = require('pg');
const pool = new Pool();
const db = module.exports = {};

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
});


db.createCourse = async (data) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const { rows } = await client.query("INSERT INTO courses (course_name) values ($1) returning id", [data.course_name]);
    const id = rows[0].id;
    const holes = data.holes;
    const queryArray = [];
    console.log(id, holes);
    for (let i = 0; i < holes.length; i += 1) {
      queryArray.push(id);
      queryArray.push(i+1);
      queryArray.push(holes[i]);
    }
    const queryString = "INSERT INTO holes (course, hole_number, par) values" 
    + holes.map((object, key)=> `($${key*3+1}, $${key*3+2}, $${key*3+3})`).join(', ');
    console.log(queryArray, queryString);
    await client.query(queryString, queryArray);
    await client.query('COMMIT');
    return true;
  } catch(e) {
    await client.query('ROLLBACK');
    throw e;
  } finally {
    client.release();
  }
};

db.getCourses = async () => {
  const courseQuery = pool.query('SELECT * from courses');
  const holesQuery = pool.query('SELECT * from holes order by hole_number ASC');
  const courses = await courseQuery;
  const holes = await holesQuery;
  const res = courses.rows.map((course) => {
    const result = {};
    result.name = course.course_name;
    result.holes = holes.rows.filter(hole => hole.course == course.id).map(hole => hole.par);
    return result;
  });
  return res;
}

db.terminate = async () => {
  await pool.end();
};
