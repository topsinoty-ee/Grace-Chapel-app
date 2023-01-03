//import { Field, Contact } from "./Data";
import React from "react";
import { Socials, Field, link, Mail, num } from "./Data";

const ContactDetails = () => {
    return (
        <div id="Contact-details">
            <h3>Contact Us</h3>
            <div>
                <Field text="Mail" link={link.Mail} content={Mail} />
                <Field text="Tel" link={link.tel} content={num} />
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
export { ContactSection}