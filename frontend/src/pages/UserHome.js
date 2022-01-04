import React, { useState, useEffect } from 'react';
import { useParams, Link, Routes, Route } from "react-router-dom"
import UserStudies from "./UserStudies"
import RegisterStudy from "./RegisterStudy"
import axios from "axios"

const apiURL = "http://localhost:8080/api/v1/users";

export default function UserHome() {
    let { email } = useParams()



    return (
        <div className="ui container">
            <FullName email={email} />


            <Routes>
                <Route path="/" element={<UserProfile />} />
                <Route path="register-study" element={<RegisterStudy />} />
                <Route path="studies/*" element={<UserStudies />} />
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
        <h1 className="ui dividing header inverted">{userFullName}</h1>
    )
}

function UserProfile() {
    let { email } = useParams()

    console.log(email)

    return (
        <div className="ui container">
            <div className="row">
                <Link to="register-study" className="ui button large">Register a new study</Link>
            </div>
            <div className="row" style={{ marginTop: "1em" }}>
                <Link to="studies" className="ui button large">My studies</Link>
            </div>
        </div>
    )

}