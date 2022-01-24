import React from "react"
import Option from "./Option"
import { v4 as uuid } from "uuid"
import NewStudyRegistrationLogo from "../assets/New-Study-Registration.jpg";
import ResourcesLogo from "../assets/Resources.jpg";
import SearchDataCatalogueLogo from "../assets/Search-Data-Catalogue.jpg";
import SearchVBrainDatabase from "../assets/Search-V-Brain-Databases.jpg";
import TutorialLogo from "../assets/Tutorial.jpg";
import VBrainAcquisitionSequence from "../assets/VBrain-Acquisition-Sequences.jpg";

function OptionList() {
    const optionList = [
        {
            "image": SearchVBrainDatabase,
            "name": "Browse V-Brain Databases",
            "id": uuid()
        },
        {
            "image": SearchDataCatalogueLogo,
            "name": "Browse V-Brain Data Catalogue",
            "id": uuid()
        },
        {
            "image": VBrainAcquisitionSequence,
            "name": "V-Brain Neuroimaging Acquisition Sequences",
            "id": uuid()
        },
        {
            "image": NewStudyRegistrationLogo,
            "name": "New Study Registration and Set-up",
            "id": uuid()
        },
        {
            "image": TutorialLogo,
            "name": "Tutorial",
            "id": uuid()
        },
        {
            "image": ResourcesLogo,
            "name": "Resources",
            "id": uuid()
        },
        {
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Noto_Emoji_KitKat_263a.svg/1024px-Noto_Emoji_KitKat_263a.svg.png",
            "name": "Login/Register",
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
