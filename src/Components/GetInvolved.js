import { FamilyBranches } from "./Data";
import { ImageCard } from "./Data";
import React from "react";

export default function GetInvolved() {
    return (
        <div className="getInvolved--mainDiv">
            <header >
                <h3>Get Involved</h3>
                <p>There are many ways you can get involved with the Grace Chapel Family</p>
            </header>
            <section>
                <ImageCard alt={FamilyBranches[0].churchName} description={FamilyBranches[0].description} src={FamilyBranches[0].src} />
                <ImageCard alt={FamilyBranches[1].churchName} description={FamilyBranches[1].description} src={FamilyBranches[1].src} />
                <ImageCard alt={FamilyBranches[2].churchName} description={FamilyBranches[2].description} src={FamilyBranches[2].src} />
            </section>
        </div>
    );
};