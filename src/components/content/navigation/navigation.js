import React, { memo } from 'react';
import "./navigation.scss";
import logo from '../../../images/Webimpact_logo_200x200.png';

const Navigation = () => (
    <div className="menu-wrapper">
        <div className="container">
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <span className="logo">
                            <img src={logo} alt="Webimpact" />
                        </span>
                    </a>
                    <a className="navbar-burger burger"></a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-end">
                    <a className="navbar-item">
                        Home
                    </a>
                    <a className="navbar-item">
                        Skills
                    </a>
                    <a className="navbar-item">
                        Portfolio
                    </a>
                    <a className="navbar-item">
                        Contact Me
                    </a>

                    
                    </div>
                </div>
            </nav>
        </div>    
    </div>
    
);


export default memo(Navigation);