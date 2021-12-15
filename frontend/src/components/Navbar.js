import React from "react"

function Navbar() {
    return (
        <nav className="ui four item menu" style={{ width: "100%" }}>
            <NavItem link="/" name="Home" />
            <NavItem link="/tutorial" name="Tutorial" />
            <NavItem link="/vbrain-sequences" name="Vbrain Sequences" />
            <NavItem link="/useful-links" name="Useful Links" />
        </nav>
    )
}


function NavItem(props) {
    return <a href={props.link} className="item">{props.name}</a>
}

export default Navbar