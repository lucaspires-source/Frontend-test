import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/logo.svg'
const NavBar = () => {
    return (
        <NavWrapper className="navbar navbar-expand-sm">
            <Link to="/" className="nav-link">
                <img src={logo} alt="logo" className="nav-logo navbar-brand"></img>
            </Link>
            <ul className="navbar-nav"> 
                <li className="nav-item ml-5">
                    <Link to="/form" className="nav-link">
                        cadastro
                    </Link>
                </li>
                <li className="nav-item ml-5">
                    <Link to="/list" className="nav-link">
                        Listagem
                    </Link>
                </li>
            </ul>
            <Link to="/" className="nav-link ml-auto">
                        Signin
            </Link>
        </NavWrapper>
    )
}


const NavWrapper = styled.nav `
background:var(--navbar-color);
.nav-link{
    color:var( --background-color) !important;
    font-size:1.3rem;
    text-transform:capitalize;
}
.nav-logo{
    height:50px;
    width:50px;
}
`

export default NavBar
