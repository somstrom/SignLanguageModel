import React from 'react';
import { Button } from './Button'
import './Navbar.css'

const onClickHandler = () => {
    alert('ok');
}

export function Header(){
    return (
        <nav className="navbar">
            <div className="container header">
                    <div className="logo">
                        SignIt
                    </div>
                    <ul className="nav-links">
                        <div className="menu">
                            <li><a href="https://github.com/somstrom/SignLanguageModel">GitHub</a></li>
                            {/* <li><a onClick={onClickHandler} className="button-like">TryIt!</a></li> */}
                            <li><Button name={'Try it!'} className="button-like" onClick={onClickHandler} /></li>
                        </div>
                    </ul>
            </div>
        </nav>
    )
}