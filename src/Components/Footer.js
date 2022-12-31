import { ContactSection} from "./Contact";
import Form from './Form'
import Map from "./Map";
import QuickAccess from "./QuickAccess";
import React from "react";
export default function Footer() {
    return (
        <footer id="footer">
            <Form/>
            <div id="main-footer">
                <ContactSection />
                <Map />
            </div>
            <div>
                <QuickAccess />
            </div>
        </footer>
    )
}