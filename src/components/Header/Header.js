import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import img from '../../images/Image/logo/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className='header-top-area'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-1">
                        <div className="logo">
                            <img src={img} alt=""/>
                        </div>
                    </div>
                    <div className="col-md-4 offset-md-3 text-right">
                        <div className="menu">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><FontAwesomeIcon icon={faShoppingCart}/></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Sign Up</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;