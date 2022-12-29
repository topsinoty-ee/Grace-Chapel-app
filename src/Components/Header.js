import Logo from '../Assets/Logos/s-Logo.svg';
import Navbar from './Navbar';
import React from "react";


export default function Header() {
    return (
        <header id='header'>
            <nav id='nav'>
                <div>
                    <a href="/"><img src={Logo} alt="/" /></a>
                </div>
                <Navbar />
            </nav>
        </header>

    )
}