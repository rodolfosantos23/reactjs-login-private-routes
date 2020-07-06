import express from 'express'

const routes = express.Router()

routes.get('/', (req, res) => {
    res.json({ 'status': 'ok' })
})


export default routes

