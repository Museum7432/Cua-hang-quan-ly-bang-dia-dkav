const sql = require("mssql");

const { sqlConfig } = require("../configs/configs.js");

const poolPromise = new sql.ConnectionPool(sqlConfig)
  .connect()
  .then((pool) => {
    console.log("connected to db");
    return pool;
  })
  .catch((err) => {
    console.log(err);
    throw Error("cannot connect to db");
  });

module.exports = {
  sql,
  poolPromise,
};
