import { AiFillEnvironment } from 'react-icons/ai'
import React from "react";
import { link } from './Data';

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
        <iframe title="Map" src={link.mapLocation}
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