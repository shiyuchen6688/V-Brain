import React from 'react'


function Option(props) {
    const { image, name } = props
    return (
        <div>
            <button class="ui button">
                <img src={image} alt={name} className="ui small image"></img>
                {name}
            </button>
        </div>
    )
}

export default Option