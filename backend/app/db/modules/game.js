module.exports = async (db, pool) => {
  db.saveGame = async (data) => {
    const users = data.users;
    const course = data.course;
    console.log(course);
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      const pastGame = await client.query('INSERT INTO past_games (courses_id) values ($1) returning id', [course]); 
      const id = pastGame.rows[0].id;
      const queryList = [];
      for (let i = 0; i < users.length; i += 1) {
        const user = users[i];
        console.log(user);
        const query = client.query('INSERT INTO users_in_past_games (past_game_id, user_id, record) values ($1, $2, $3)', [id, user.id, user.scores]);
        queryList.push(query);
      }
      await Promise.all(queryList);
      await client.query('COMMIT');
      return {success: true};
    } catch(error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  };

  db.getPastGames = async (user) => {
    const result = await pool.query("SELECT past_game_id, p.courses_id as selectedCourse, p.played, json_agg(json_build_object('username', username, 'scores', record))::jsonb as playerScores FROM users_in_past_games, past_games as p, users WHERE p.id=past_game_id and users.id=user_id group by past_game_id, p.courses_id, p.played ORDER BY p.played DESC");
    return result.rows;
  }
};