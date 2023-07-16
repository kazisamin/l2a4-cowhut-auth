import express, { Application, Response, Request } from 'express'
const app: Application = express()
import cors from 'cors'
import UserRoutes from './modules/user/user.route'

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//application route
app.use('/api/v1/users', UserRoutes)
//testing
app.get('/', async (req: Request, res: Response) => {
  res.send('working')
})

export default app
