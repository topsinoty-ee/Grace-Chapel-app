import { FamilyBranches } from "../Data";
import './GetInvolved.css'
import React from "react";

export default function GetInvolved() {
    return (
        <div id="getInvolved">
            <header >
                <h3>Get Involved</h3>
                <p>There are many ways you can get involved with the Grace Chapel Family</p>
            </header>
            <section>
                <div>
                    <figure>
                        <img alt={FamilyBranches.churchName1} />
                        <figcaption>
                            {FamilyBranches.churchName1}
                        </figcaption>
                    </figure>
                </div>
                <div>
                    <figure>
                        <img alt={FamilyBranches.churchName2} />
                        <figcaption>
                            {FamilyBranches.churchName2}
                        </figcaption>
                    </figure>
                </div>
                <div>
                    <figure>
                        <img alt={FamilyBranches.churchName3} />
                        <figcaption>
                            {FamilyBranches.churchName3}
                        </figcaption>
                    </figure>
                </div>
            </section>
        </div>
    );
};