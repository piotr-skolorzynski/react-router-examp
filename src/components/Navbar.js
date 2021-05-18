import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = props => {
    setTimeout(() => {
        props.history.push('/about')
    }, 20000)
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">LaisureTimes</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

// NavLink adds class="active" what gives opportunity to change link's style

export default withRouter(Navbar);