import {APIPORT,USERDB,DBNAME,DBPASS,DBPORT} from "./config/config.js";
import express from 'express'
import router from './routes/router.js'

// const bodyParser = require('body-parser');

const app = express()
const port = APIPORT

app.use(express.json())
app.use(router)
// app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
