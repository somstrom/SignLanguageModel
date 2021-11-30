import React from 'react';
import './Header.css'

const onClickHandler = () => {
    alert('ok');
}

export function Header(){
    return (
        <nav className="navbar">
            <div className="container">
                    <div className="logo">
                        SignIt
                    </div>
                    <ul className="nav-links">
                        <div className="menu">
                            <li><a href="#">GitHub</a></li>
                            <li><a className="button-like" href="#">TryIt!</a></li>
                        </div>
                    </ul>
            </div>
        </nav>
    )
}