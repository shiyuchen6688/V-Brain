import React from 'react'
import { Link } from 'react-router-dom'


function Option(props) {
    const { image, name } = props
    return (
        <div>
            <Link to={"/" + name} class="ui button" >
                <img src={image} alt={name} className="ui small image"></img>
                {name}
            </Link>
        </div>
    )
}

export default Option