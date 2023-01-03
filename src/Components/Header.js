import pic from '../Assets/Logos/s-Logo.svg';
import Navbar from './Navbar';
import React from "react";
import { Nav } from './Data';


const Logo =
    <div className=''>
        <a href='/'>
            <img src={pic} alt="/" className='object-cover w-64 h-16 max-h-10vh'/>
        </a>
    </div>;
const Header = () => {
    return (
        <header className='m-0 bg-purple'>
            <div className='-mx-0 px-2 flex place-content-between max-h-10vh'>
                {Logo}
                <Navbar items={Nav}/>
            </div>
        </header>

    )
};
export default Header;