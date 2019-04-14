const { Pool } = require('pg');
const pool = new Pool();
const db = module.exports = {};

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
});


db.createCourse = async (data) => {
  const { rows } = await pool.query("INSERT INTO courses (course_name) values ($1) returning id", [data.course_name]);
  const id = rows[0].id;
  const holes = data.holes;
  const queryArray = []
  holes.forEach((hole) => {
    queryArray.push(id);
    queryArray.push(hole.hole_number);
    queryArray.push(hole.par);
  });
  const queryString = "INSERT INTO holes (course, hole_number, par) values" 
    + holes.map((object, key)=> `($${key*3+1}, $${key*3+2}, $${key*3+3})`).join(', ');
  return await pool.query(queryString, queryArray);
};

db.getCourses = async () => {
  const courses = await pool.query('SELECT * from courses');
  const holes = await pool.query('SELECT * from holes order by hole_number ASC');
  console.log(holes.rows);
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
