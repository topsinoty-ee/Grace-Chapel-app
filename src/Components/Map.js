import { AiFillEnvironment } from 'react-icons/ai'
import React from "react";

const Location = () => {
    return (
        <div id='location-text'>
            <div id='FindUs'>
                <AiFillEnvironment id='location-icon' />
                <h4>Find us</h4></div>
            <p>
                <a title="Open Google maps" href='https://goo.gl/maps/WjQhkKgBqMJWJ55C9'>Ravala 8</a>
            </p>
        </div>
    )
}
const MapImage = () => {
    return (
        <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2028.941194716545!2d24.752800615653978!3d59.43405530966379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692936000ef7fb3%3A0x73e9406c32a38e38!2zUsOkdmFsYSA4!5e0!3m2!1sen!2see!4v1669968646436!5m2!1sen!2see"
            width="500"
            height="300"
            style={{ border: 0 }}
            allowFullScreen={{}}
            loading="lazy"
            id='MapImg'
        ></iframe>)
}

export default function Map() {
    return (
        <div id='Map'>
            <Location />
            <MapImage />
        </div>
    )
}