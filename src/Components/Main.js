import React from "react";
import Events from "./Events";
import GetInvolved from "./GetInvolved";
import Hero from "./Hero";
import Visit from "./Visit";

export default function Main() {
    return (
        <div>
            <Hero />
            <Visit />
            <GetInvolved />
            <Events />
        </div>)
}