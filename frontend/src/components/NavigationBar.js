import React from "react"
import { Navbar, Nav, Container } from 'react-bootstrap'
import {Button, Row, Col} from 'react-bootstrap'

import logoVbrain from "../assets/logo_vbrain.png";

export default class NavigationBar extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
    return (
        <nav className="ui four item menu" style={{ width: "100%" }}>
            <NavItem link="/" name="Home" />
            <NavItem link="/tutorial" name="Tutorial" />
            <NavItem link="/vbrain-sequences" name="V-Brain Sequences" />
            <NavItem link="/links" name="Useful Links" />
        </nav>
    );
    }
}

function NavItem(props) {
    return <a href={props.link} className="item">{props.name}</a>
}
