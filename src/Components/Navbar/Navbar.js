import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import { Link } from 'react-router-dom';
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
             <div className="btn btn-outline-success">
                 <Link to={"/"} className="navbar-logo text-decoration-none"> COVIT-19 SURVEY FORM <i className="fab fa-react"></i></Link>
             </div>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (

                            <li key={index}>
                                <Link
                                    style={{
                                        textDecoration:"gold",

                                    }}
                                    className={item.cName} to={item.path}>
                                    {item.title}
                                </Link>
                            </li>

                        )
                    })}
                </ul>

            </nav>
        )
    }
}

export default Navbar