//import { Field, Contact } from "./Data";
import React from "react";
import { Socials } from "./Data";

const ContactDetails = () => {
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



const ContactSection = () => {
    return (
        <div id="Contact">
            <ContactDetails />
            <Socials />
        </div>
    )
}
export default ContactSection