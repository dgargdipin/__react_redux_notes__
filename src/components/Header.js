import React from "react"
import {NavLink} from 'react-router-dom'
const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" exact={true} activeClassName='is-active'>Go Home</NavLink>
        <NavLink to="/create" activeClassName='is-active'>Add expense</NavLink>
        <NavLink to="/help" activeClassName='is-active'>Help page</NavLink>
    </header>
)
export default Header;