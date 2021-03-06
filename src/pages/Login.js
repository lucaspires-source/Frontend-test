import React from 'react'
import {Button} from '../components/Button/Button'
import {Link} from 'react-router-dom'
const Login = () => {

    const submitHandler = (e) =>{
        e.preventDefault();
    }
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Sign in</h1>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Escreva seu Email"
                        required
                    >
                    </input>
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Insira sua Senha"
                        required
                    >
                    </input>
                </div>
                <div>
                    <label/>
                    <Button type="submit">Sign In</Button>
                </div>
                <div>
                    <label/>
                    <div>
                        Novo Usuário? <Link to="/register"> Crie a sua Conta</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login
