import React from "react"
import { useParams } from "react-router-dom"

export default function StudyHome() {
    const { email, studyid } = useParams()

    return (
        <h1>Hello</h1>
    )
}