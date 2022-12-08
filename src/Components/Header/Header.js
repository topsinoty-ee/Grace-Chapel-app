import Logo from '../../Logos/s-Logo.svg';
import Navbar from './Navbar';
import "./Header.css"
import React from "react";


export default function Header() {
    return (
        <header>
            <nav>
                <div>
                    <a href="/"><img src={Logo} alt="/" /></a>
                </div>
                <Navbar />
            </nav>
        </header>

    )
}