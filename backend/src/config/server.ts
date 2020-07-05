import express from 'express'
import * as bodyParser from 'body-parser'

// Import das rotas
import home from '../routes/home'
import login from '../routes/login'

// Inicializa o express
const app = express()

// Body Parser Json
app.use(bodyParser.json())


// Usa as rotas
app.use(home)
app.use(login)


export default app