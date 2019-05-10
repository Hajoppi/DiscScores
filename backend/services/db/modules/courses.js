
module.exports = async (db, pool) => {
  db.createCourse = async (data) => {
    const { rows } = await pool.query("INSERT INTO courses (course_name, holes) values ($1, $2) returning id, course_name, holes", [data.course_name, data.holes]);
    return rows[0];
  };
  
  db.getCourses = async (id) => {
    let result;
    if(id) result = await pool.query('SELECT * from courses WHERE id=$1', [id]);
    else result = await pool.query('SELECT * from courses');
    return result.rows;
  };
  
  db.deleteCourse = async (id) => {
    const result = await pool.query('DELETE FROM courses where id=$1 returning id', [id]);
    return result.rows[0].id;
  };
  
  db.updateCourse = async (id, data) => {
    await pool.query('UPDATE courses SET (course_name, holes) = ($2, $3) WHERE id=$1', [id, data.course_name, data.holes]);
  };  
}