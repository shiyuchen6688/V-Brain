import React from "react"
import { useParams, Link, Routes, Route } from "react-router-dom"
import StudyHome from "./StudyHome"

export default function UserStudies() {
    // temporary for testing usage
    const studies = [{
        name: "aasdfasfsadf"
    }, {
        name: "b"
    }]
    return (
        <div>

            <Routes>
                <Route path="/" element={<StudyList studies={studies} />} />
                <Route path="/:id" element={<StudyHome />} />
            </Routes>
        </div>
    )
}

function StudyList(props) {
    const { studies } = props

    return (
        <div>
            <h2>My Studies:</h2>
            <div class="ui vertical buttons">

                {
                    studies.map((study) => {
                        return (
                            <Link to=":studyid" className="medium ui button" style={{ marginTop: "0.3em" }}>{study.name}</Link>
                        )
                    })
                }
            </div>
        </div>
    )


}