const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "0529",
  database: "plan_de_viajes",
  allowExitOnIdle: true,
});

module.exports= { pool }