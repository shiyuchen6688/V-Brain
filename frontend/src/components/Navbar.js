import React from "react"
import vbrainLogoTiny from "../assets/logo_vbrain_tiny.png"

function Navbar() {
    return (
        <div class="ui eight item menu" style={{ width: "100%", backgroundColor: "lightgray" }}>
            <img src={vbrainLogoTiny} />
            <NavItem className="item" link="/" name="Home" />
            <NavItem className="item" link="/about" name="About Vbrain" />
            <NavItem className="item" link="/vbrain-datasets" name="V-brain Datasets" />
            <NavItem className="item" link="/vbrain-data-catalogue" name="V-brain Data Catalogue" />
            <NavItem className="item" link="/resources" name="Resources" />
            <NavItem className="item" link="/tutorial" name="Tutorial" />
            <NavItem className="item" link="/contact-admin" name="Contact Admin" />
        </div>
    )
}


function NavItem(props) {
    return <a href={props.link} className="item">{props.name}</a>
}

export default Navbar