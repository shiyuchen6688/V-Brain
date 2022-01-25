import React from 'react'
import { Link } from 'react-router-dom'


function Option(props) {
    const { image, name, route } = props
    return (
        <div>
            <Link to={"/" + route} className="ui button" style={{ height: "100%" }}>
                <img className="ui medium image" src={image} alt={name} className="ui small image"></img>
                <Description name={name} />
            </Link>
        </div>
    )
}

function Description(props) {
    const { name } = props
    if (name.length <= 18) {
        return <div><p>{name}</p></div>
    } else if (name == "Browse V-Brain Databases") {
        return (
            <div>
                Browse V-Brain <br /> Databases
            </div>
        )
    } else if (name == "Browse V-Brain Data Catalogue") {
        return (
            <div>
                Browse V-Brain <br /> Data Catalogue
            </div>
        )
    } else if (name == "V-Brain Neuroimaging Acquisition Sequences") {
        return (
            <div>
                V-Brain Neuroimaging <br /> Acquisition Sequences
            </div>
        )
    } else if (name == "New Study Registration and Set-up") {
        return (
            <div>
                New Study Registration <br /> and Set-up
            </div>
        )
    } else {
        return (
            <div>

            </div>
        )
    }

}


export default Option