module.exports = async (db) => {
  db.getGroups = async (id) => {
    let result;
    if (id) result = await pool.query('SELECT * from groups WHERE id=$1',{id});
    else result = await pool.query('SELECT * from groups');
    return result.rows;
  };
  
  db.addGroup = async () => {
    const result = await pool.query('INSERT INTO groups (name) values ($1) returning group_name');
    return result.rows[0];
  };
  
  db.deleteGroup = async () => {
    const result = await pool.query('DELETE FROM groups WHERE id=$1 returning id', [$1]);
    return result.rows[0];
  };
  
  db.getUsersInGroup = async (id) => {
    const result = await pool.query('SELECT users.id, users.username FROM groups, users, users_in_group WHERE users_id=users.id and groups_id=group.id and groups_id=$1', [id]);
    return result.rows;
  }
  
  db.addUserToGroup = async (user, group) => {
    const result = await pool.query('INSERT INTO users_in_group (users_id, groups_id) values ($1, $2)', [user, group]);
    return result.rowCount;
  }
  
  db.deleteUserFromGroup = async (user, group) => {
    const result = await pool.query('DELETE FROM  users_in_group  WHERE users_id=$1 and groups_id=$2 ', [user, group]);
    return result.rowCount;
  }
}