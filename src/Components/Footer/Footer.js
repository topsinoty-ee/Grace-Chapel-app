import ContactSection from "./Contact/Contact";
import Map from "./Map/Map";
import QuickAccess from "./QuickAccess/QuickAccess";
import "./Footer.css";
import React from "react";
export default function Footer() {
    return (
        <footer id="footer">
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