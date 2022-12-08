import { Field } from "../../Data";
import { Contact } from "../../Data";
import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube } from 'react-icons/ai';
import "./Contact.css"

function ContactDetails() {
    return (
        <div id="Contact-details">
            <h3>Contact Us</h3>
            {/* I'm trying to objectify but sont working yet */}
            {/*
             <div>
                // Add detail
                <Field name="Tel">
                <Field name ="Mail" />
            </div> 
            */}
            {/* Hard coded....Change to code */}
            <div>
                {/* tel */}

                <h4>
                    <a href="tel:+372 1234 5678">
                        (+372) 1234 5678
                    </a>
                </h4>
                {/* Email */}
                <h4>
                    <a href="mailto:example@somewhere.com">example@somewhere.com</a>
                </h4>
            </div>
        </div>)
}

function SocialIcons() {
    return (
        <div id="Contact-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><AiFillFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><AiFillInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><AiFillTwitterSquare /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><AiFillYoutube /></a>
        </div>
    )
}

export default function ContactSection() {
    return (
        <div id="Contact">
            <ContactDetails />
            <SocialIcons />
        </div>
    )
}