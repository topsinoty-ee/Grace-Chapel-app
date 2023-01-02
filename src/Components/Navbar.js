import React from "react";

const NavBar = (props) => {
    const items = props.items;
    const Navitems = items.map((item) =>
        <li className='capitalize hover:bg-gray-light p-2 rounded' key={item.id}>
            <a
                href={item.link}
                title={item.description}
            >
                {item.text}
            </a>
        </li>
    )
    return (
        <nav className='flex'>
            <ul className='flex flex-row space-x-1 items-center'>
                {Navitems}
            </ul>
        </nav>
    );
}
export default NavBar;