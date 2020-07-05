import express from 'express'
import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import { TOKEN_KEY } from './../config/token_key';


const routes = express.Router()

routes.post('/login', (req, res) => {

    // Se não for enviado o header basic auth
    if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
        return res.status(401).json({ message: 'Missing Authorization Header' })
    }

    // Separa o username e Password
    const base64Credentials = req.headers.authorization.split(' ')[1]
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii')
    let [username, password] = credentials.split(':')

    // Password em Hash sha256
    password = crypto.createHash('sha256').update(password).digest('hex')

    // Username: usuario
    // Password: senhasecreta
    //
    // Por enquanto verificando usuário e senha hardcoded
    // Pode ser feita a verificação no banco de dados
    if (username === 'usuario' && password === '7ee58a50b160bad849625a3772a135618783d1070142bab8bb6ec4eab37bd135') {

        // ID do usuário hardcoded, deve ser o ID do usuário no Banco de Dados
        const id = 'user_id_hardcoded'

        const token = jwt.sign({ id }, TOKEN_KEY, {
            expiresIn: (req.body.remember) ? '7d' : '24h'
        })

        res.status(200).send({ auth: true, token: token })

        return
    }

    res.status(401).json({ 'error': 'Incorrect username or password' })

})

export default routes