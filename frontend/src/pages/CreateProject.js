import React from 'react'
import { useParams } from "react-router-dom"

export default function CreateProject() {
    const { email } = useParams()
    console.log(`register project ${email}`)
    return (
        <div>
            <h2>Create Project Here:</h2>
        </div>
    )
}