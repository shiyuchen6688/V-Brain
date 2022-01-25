import React from "react"
import Option from "./Option"
import { v4 as uuid } from "uuid"
import NewStudyRegistrationLogo from "../assets/New-Study-Registration.jpg";
import ResourcesLogo from "../assets/Resources.jpg";
import SearchDataCatalogueLogo from "../assets/Search-Data-Catalogue.jpg";
import SearchVBrainDatabase from "../assets/Search-V-Brain-Databases.jpg";
import TutorialLogo from "../assets/Tutorial.jpg";
import VBrainAcquisitionSequence from "../assets/VBrain-Acquisition-Sequences.jpg";
import LoginRegisterLogo from "../assets/login-register-icon.png";

function OptionList() {
    const optionList = [
        {
            "image": SearchVBrainDatabase,
            "name": "Browse V-Brain Databases",
            "route": "browse",
            "id": uuid()
        },
        {
            "image": SearchDataCatalogueLogo,
            "name": "Browse V-Brain Data Catalogue",
            "route": "browse-data",
            "id": uuid()
        },
        {
            "image": VBrainAcquisitionSequence,
            "name": "V-Brain Neuroimaging Acquisition Sequences",
            "route": "accuistition",
            "id": uuid()
        },
        {
            "image": NewStudyRegistrationLogo,
            "name": "New Study Registration and Set-up",
            "route": "login", // TODO: 1, if user login, direct to register. 2, if no login, goto login
            "id": uuid()
        },
        {
            "image": TutorialLogo,
            "name": "Tutorial",
            "route": "tutorial",
            "id": uuid()
        },
        {
            "image": ResourcesLogo,
            "name": "Resources",
            "route": "resources",
            "id": uuid()
        },
        {
            "image": LoginRegisterLogo,
            "name": "Login/Register",
            "route": "login",
            "id": uuid()
        }
    ]
    const optionComponentList = optionList.map((option) => <Option key={option.id} {...option} />)
    return (
        <div className="ui three grid centered" style={{ minHeight: 350, padding: '1em 1em' }}>
            <div className="row">
                {
                    optionComponentList.slice(0, 3)
                }
            </div>
            <div className="row">
                {
                    optionComponentList.slice(3, 6)
                }
            </div>
            <div className="row">
                {
                    optionComponentList.slice(6, 7)
                }
            </div>
        </div>
    )


}

export default OptionList
