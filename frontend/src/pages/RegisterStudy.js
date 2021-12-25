import React from "react"
import { useParams } from "react-router-dom"


export default function RegisterStudy() {
    // const fakeStudies = 
    const { email } = useParams()
    console.log(`register Study ${email}`)
    return (
        <div>
            <h2>Register Study Here:</h2>
        </div>
    )
}