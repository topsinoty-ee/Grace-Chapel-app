import React from "react";
import textImg from '../Assets/Visit--text.svg'
import baptismImg from '../Assets/baptisms.jpeg'
import { Button } from './Data'

const Visit = () => {
    return (
        <div id='planAVisit'>
            <div>
                <h3>
                    <span>At Grace Chapel {'> > >'} </span>
                </h3>
            </div>
            <section id="Visit--main">
                <div>
                    <img src={textImg} alt='NO ONE WALKS ALONE' />
                </div>
                <div>
                    <img src={baptismImg} alt='/' />
                </div>
            </section>
            <div>
                <Button
                    text='Plan a Visit'
                />
            </div>
        </div>
    )
}
export default Visit