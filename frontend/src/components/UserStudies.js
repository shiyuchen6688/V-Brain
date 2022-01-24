import React from "react"
import { useParams, Link, Routes, Route } from "react-router-dom"
import StudyHome from "../pages/StudyHome"

export default function UserStudies() {
    // temporary for testing usage
    const studies = [{
        name: "study 1"
    }, {
        name: "study 2"
    }, {
        name: "study 3"
    }
        , {
        name: "study 4"
    }
        , {
        name: "study 5"
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
            <div className="ui vertical buttons">

                {
                    studies.map((study) => {
                        return (
                            <Link to=":studyid" className="ui massive button primary" style={{ marginTop: "0.3em" }}>{study.name}</Link>
                        )
                    })
                }
            </div>
        </div>
    )


}