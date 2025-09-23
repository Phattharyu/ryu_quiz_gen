import pkg from 'pg';
import dotenv from 'dotenv'

dotenv.config() // Save a secret in .env file
const { Pool } = pkg;

const pool = new Pool({
  user: process.env.USERDB,
  host: 'localhost',
  database: process.env.DBNAME,
  password: process.env.DBPASS,
  port: process.env.DBPORT,
});

