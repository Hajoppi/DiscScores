module.exports = async (db, pool) => {
  db.getGroups = async (id) => {
    let result;
    if (id) result = await pool.query('SELECT * from groups WHERE id=$1',{id});
    else result = await pool.query('SELECT * from groups');
    return result.rows;
  };
  
  db.addGroup = async (group) => {
    const result = await pool.query('INSERT INTO groups (group_name) values ($1) returning id,group_name', [group]);
    return result.rows[0];
  };
  
  db.deleteGroup = async (id) => {
    const result = await pool.query('DELETE FROM groups WHERE id=$1 returning id', [id]);
    return result.rows[0];
  };
  
  db.getUsersInGroup = async (id) => {
    console.log(id);
    const result = await pool.query('SELECT users.id, users.username FROM groups, users, users_in_groups WHERE users_id=users.id and groups_id=groups.id and groups_id=$1', [id]);
    return result.rows;
  }
  
  db.addUserToGroup = async (user, group) => {
    const result = await pool.query('INSERT INTO users_in_groups (users_id, groups_id) values ($1, $2) returning users_id, groups_id', [user, group]);
    return result.rows[0];
  }
  
  db.deleteUserFromGroup = async (user, group) => {
    const result = await pool.query('DELETE FROM  users_in_groups  WHERE users_id=$1 and groups_id=$2 ', [user, group]);
    return result.rowCount;
  }
}