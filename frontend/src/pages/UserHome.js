import React, { useState, useEffect } from 'react';
import { useParams, Link, Routes, Route } from "react-router-dom"
import UserStudies from "../components/UserStudies"
import CreateStudy from "./CreateStudy"
import CreateProject from "./CreateStudy"
import StudyRegisterationForm from "./StudyRegisterationForm"
import axios from "axios"

const apiURL = "http://localhost:8080/api/v1/users";

export default function UserHome() {
    let { email } = useParams()



    return (
        <div className="ui container">
            <FullName email={email} />

            <Routes>
                <Route path="/" element={<UserProfile />} />
                <Route path="/create-study" element={<StudyRegisterationForm />} />
                <Route path="/create-project" element={<CreateProject />} />
            </Routes>


        </div>
    )
}

function FullName(props) {
    const { email } = props
    const [userFullName, setUserFullName] = useState("")


    useEffect(async () => {
        console.log(`${apiURL}/${email}`)
        const result = await axios.get(`${apiURL}/${email}`)
        const user = result.data.user
        console.log(user)
        setUserFullName(`${user.firstname} ${user.lastname}`)
    }, [])
    return (
        <h1 className="ui dividing header">{userFullName}</h1>
    )
}

// home page of user home
function UserProfile() {
    return (
        <div>
            <UserStudies />
            <div className="ui divider"></div>
            <div className="ui buttons">
                <Link to="create-study" className="ui button">Create Study</Link>
                <div className="or"></div>
                <Link to="create-project" className="ui button">Create Project</Link>
            </div>

        </div>
    )
}
