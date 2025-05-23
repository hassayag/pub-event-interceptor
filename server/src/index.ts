import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
import { postEvent } from './controllers/eventController'
import { errorMiddleware, loggerMiddleware } from './middlewares'

const app = express()
app.use(cors())
app.use(bodyParser.text())
app.use(loggerMiddleware)

app.post('/api/event', postEvent)
app.use(errorMiddleware)

app.listen(5009, () => {
    console.log('Listening on port 5009')
})
