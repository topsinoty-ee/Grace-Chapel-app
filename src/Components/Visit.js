import React from "react";
import textImg from '../Assets/Visit--text.svg'
import baptismImg from '../Assets/baptisms.jpeg'

const Visit=()=>{
    return(
        <div id='planAVisit'>
            <h3>
                <span>At Grace Chapel {'> > >'} </span>
            </h3>
            <section id="Visit--main">
                <div>
                    <img src={textImg} alt='NO ONE WALKS ALONE'/>
                </div>
                <div>
                    <img src={baptismImg} alt='/'/>
                </div>
            </section>
        </div>
    )
}