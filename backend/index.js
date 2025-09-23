import dotenv from 'dotenv'
import express from 'express'
import router from './routes/router.js'

dotenv.config() // Save a secret in .env file
const app = express()
const port = process.env.APIPORT || 3000

app.use(express.json())
app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
