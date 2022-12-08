import { Nav } from "../Data"
import React from "react";


const NavItem = (props) => {
    return (
        <li>
            <a href={props.link} title={props.description}>{props.text}</a>
        </li>)
}

export default function Navbar() {
    return (
        <ul>
            {/*About us*/}
            <NavItem link={Nav[0].link} title={Nav[0].description} text={Nav[0].text} />
            {/*Sermons*/}
            <NavItem link={Nav[1].link} title={Nav[1].description} text={Nav[1].text} />
            {/*Calender*/}
            <NavItem link={Nav[2].link} title={Nav[2].description} text={Nav[2].text} />
            {/*Give*/}
            <NavItem link={Nav[3].link} title={Nav[3].description} text={Nav[3].text} />
        </ul>
    );
}