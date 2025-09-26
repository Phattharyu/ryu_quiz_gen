import dotenv from 'dotenv'
dotenv.config() // Save a secret in .env file

export const APIPORT = process.env.APIPORT
export const USERDB = process.env.USERDB
export const DBNAME = process.env.DBNAME
export const DBPASS = process.env.DBPASS
export const DBPORT = process.env.DBPORT
  