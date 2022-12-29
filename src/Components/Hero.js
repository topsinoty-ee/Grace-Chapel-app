import React from 'react'
import { Socials, link } from './Data'

const Hero = () => {
    return (
        <div>
            <div id='hero--announcement'></div>
            <div id='hero--main'>
                <h1>Christ the way, the truth and the life.</h1>
            </div>
            <div id='hero-sub'>
                <div id='hero--subtext'>
                    <h3>Join us on Sundays at 12:00 PM 
                        <a href={link.youtube}> online</a> or 
                        <a href={link.location}> in person</a>
                    </h3>
                </div>
                <div id='hero--socials'>
                    <Socials />
                </div>
            </div>

        </div>
    )
}
export default Hero