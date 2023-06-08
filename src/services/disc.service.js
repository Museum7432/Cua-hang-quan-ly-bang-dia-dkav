const { sql, poolPromise } = require("../db.js");

const get_all = async function () {
  const pool = await poolPromise;

  const result = await pool.request().query("select * from DISCs");

  return result.recordset;
};

const get_by_id = async function (id) {
  const pool = await poolPromise;

  const result = await pool
    .request()
    .input("discID", sql.Int, id)
    .query("select * from DISCs where ID=@discID");

  return result.recordset;
};

module.exports = {
  get_all,
  get_by_id,
};
