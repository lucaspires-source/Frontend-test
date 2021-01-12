import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.module.css'
const NavBar = () => {
    return (
            <div className="navbar-container">
                        <div>
                            <Link to="/" className=" brand">
                            Academia
                            </Link>
                        </div>
                        <div>
                            <Link to="/">Sign In</Link>
                            <Link to="/list">Listagem</Link>
                            <Link to="/form">Cadastro</Link>
                        </div>
            </div>

    )
}

export default NavBar
