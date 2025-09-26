import pkg from 'pg';
import {USERDB,DBNAME,DBPASS,DBPORT} from "../config/config.js"

const { Pool } = pkg;

console.log("DB_USER:", DBNAME);
console.log("DB_PASS:", typeof DBPASS, DBPASS);


const pool = new Pool({
  user: USERDB,
  host: 'localhost',
  database: DBNAME,
  password: DBPASS,
  port: DBPORT,
});

export default pool;

