import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'
import { TOKEN_KEY } from './../config/token_key';

// Cria interface para o Express para utilizar com Typescript
declare module 'express-serve-static-core' {
    interface Response {
        error: (code: number, message: string) => Response;
        success: (code: number, message: string, result: any) => Response
    }
}

const routeHandler = (req: Request, res: Response, next: NextFunction) => {

    // URL = login - Continua execução
    if (req.url === '/login') {
        return next();
    } else {
        // Outras URL's, verifica o token

        //
        let token = '';

        // Pega o Token do header (Bearer)
        const header = req.headers['authorization'];
        if (typeof header !== 'undefined') {
            const bearer = header.split(' ');
            token = bearer[1];
        }

        // Se não encontrou o Token na requisição
        if (!token) {
            return res.status(401).send({ auth: false, message: 'No token provided.' });
        }

        // Se existe o token, valida ele 
        jwt.verify(token, TOKEN_KEY, function (err, decoded) {

            // Se teve erros ao autenticar o token retorna o erro
            if (err) {
                return res.status(401).send({
                    auth: false,
                    message: 'Failed to authenticate token',
                    code: err.name
                });
            }

            // Se não ouver erros - Continua execução
            next();
        });
    }

};

export default routeHandler;