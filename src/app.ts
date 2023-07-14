import express, { Application } from 'express'
const app: Application = express()
import cors from 'cors'

const port = 3000

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('hello world')
})

//testing
app.get('/', async () => {
  console.log('working')
  Promise.reject(new Error('Unhandled Promise Rejection'))
})

app.listen(port)

export default app
