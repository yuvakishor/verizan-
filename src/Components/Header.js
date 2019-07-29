import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-white navbar-light shadow-sm">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink activeClassName="active" exact className="nav-link" to="/">Profile</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/Orders">Orders</NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}
