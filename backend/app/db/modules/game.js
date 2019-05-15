module.exports = async (db, pool) => {
  db.saveGame = async (data) => {
    const users = data.users;
    const course = data.course;
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      const pastGame = await client.query('INSERT INTO past_games (course_id) values ($1) returning id', [course.id]); 
      const id = pastGame.rows[0].id;
      const queryList = [];
      for (let i = 0; i < users.length; i += 1) {
        const user = users[i];
        const query = client.query('INSERT INTO users_in_past_games (past_game_id, user_id, record) values ($1, $2, $3)', [id, user.id, user.holes]);
        queryList.push(query);
      }
      await Promise.all(queryList);
      await client.query('COMMIT');
    } catch(error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  };

  db.getPastGames = async (user) => {
    const result = pool.query('SELECT user_id, record, course_id, played FROM past_games, users_in_past_games WHERE users_in_past_games.past_game_id = past_games.id');
    return result.rows;
  }
};