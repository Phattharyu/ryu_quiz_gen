import {APIPORT,USERDB,DBNAME,DBPASS,DBPORT} from "./config/config.js";
import express from 'express'
import router from './routes/router.js'
 
const app = express()
const port = APIPORT

app.use(express.json())
app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
