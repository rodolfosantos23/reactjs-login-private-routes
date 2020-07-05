import express from 'express'
import * as bodyParser from 'body-parser'
import cors from 'cors'

// Import das rotas
import home from '../routes/home'
import login from '../routes/login'

// Middleware verificação do Token
import routeHandler from './routeHandler'


// Inicializa o express
const app = express()

// Cors
app.use(cors())

// Body Parser Json
app.use(bodyParser.json())

// Middleware - Token
app.use(routeHandler)

// Usa as rotas
app.use(home)
app.use(login)


export default app