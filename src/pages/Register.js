import React from 'react'
import {Button} from '../components/Button/Button'
import {Link} from 'react-router-dom'
const Register = () => {

        const submitHandler = (e) =>{
            e.preventDefault();
        }
    return (
<div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Crie Sua Conta</h1>
                </div>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Insira seu Nome"
                        required
                    >
                    </input>
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
                    <label htmlFor="password">Confirmar Senha</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Confirme sua senha"
                        required
                    >
                    </input>
                </div>
                <div>
                    <label/>
                    <Button type="submit">Cadastrar</Button>
                </div>
                <div>
                    <label/>
                    <div>
                       Já tem uma conta? <Link to="/"> Log-in</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register
