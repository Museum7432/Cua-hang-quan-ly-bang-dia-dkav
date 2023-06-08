// create configs.js with this template

const sqlConfig = {
  user: "user",
  password: "pass",
  database: "db name",
  server: "localhost",
  port: 1433,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

const PORT = 3000;

module.exports = { sqlConfig, PORT };
