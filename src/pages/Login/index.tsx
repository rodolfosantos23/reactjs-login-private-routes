import React from 'react';
import { useState } from 'react'

import { login } from "../../services/auth";
import api from '../../services/api'


const Login: React.FC = () => {

    const usernameRef = React.createRef<HTMLInputElement>();
    const passwordRef = React.createRef<HTMLInputElement>();

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [remember, setRemember] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const handleClick = () => {
        if (!username || !password) {
            showError("Digite o usuário e senha")
            return
        }

        api.post('/login', {
            remember: remember
        }, {
            auth: {
                username: username,
                password: password
            }
        }).then((response) => {
            login(response.data.token)
            //return history.push("/home")
        }).catch((response) => {
            if (response.response.status === 401) {
                showError('Usuário ou senha inválidos')
            }
            return
        })
    }

    const showError = (message: string) => {
        usernameRef.current?.classList.add('input-error')
        passwordRef.current?.classList.add('input-error')
        setError(message)
    }

    return (
        <div className="login">
            <input
                type="text"
                className="text"
                placeholder="Usuário"
                onChange={(e) => setUsername(e.target.value)}
                ref={usernameRef}
            />
            <input
                type="password"
                className="text"
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
                ref={passwordRef}
            />


            <label className="checkbox">Lembrar
                <input type="checkbox" onChange={(e) => setRemember(e.target.checked)} />
                <span className="checkmark"></span>
            </label>


            <button onClick={handleClick}>Entrar</button>
            <p className="error">{error}</p>
        </div>
    )
}

export default Login;