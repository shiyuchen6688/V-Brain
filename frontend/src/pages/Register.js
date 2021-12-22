import React, { useState } from "react"
import { useHistory } from "react-router-dom";


export default function Register() {
    return (
        <div>
            <h1>Registration</h1>
            <RegisterForm />
        </div>
    );
}

const apiRegisterURL = "http://localhost:8080/auth/register";

function RegisterForm() {
    const [inputs, setInputs] = useState({});

    // handle change of input in registration form
    const handleChange = (e) => {
        const fieldName = e.target.name
        const newValue = e.target.value
        setInputs(orgValues => ({
            ...orgValues,
            [fieldName]: newValue
        }))
    }

    // TODO: add other properties into the post data
    // handle submit of registration form
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(apiURL, inputs)
            .then((response) => {
                console.log(response)
                if (response.success === "true") {
                    // redirect to login page
                    let history = useHistory();
                    history.push("/login")

                } else {
                    // ask user to try again
                    alart(response.message)
                }

            })
            .catch((error) => {
                alert(error)
            })
    }


    return (
        <div className="ui container">
            <h2>User Registration:</h2>
            <form className="ui form inverted" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Last Name</label>
                    <input type="text" name="lastname" value={inputs.lastname || ""} onChange={handleChange} />
                </div>

                <div className="field">
                    <label>First Name</label>
                    <input type="text" name="firstname" value={inputs.firstname || ""} onChange={handleChange} />
                </div>

                <div className="field">
                    <label>Institution</label>
                    <input type="text" name="institution" value={inputs.institution || ""} onChange={handleChange} />
                </div>

                <div className="field">
                    <label>Username (email address)</label>
                    <input type="text" name="username" value={inputs.username || ""} onChange={handleChange} />
                </div>

                <div className="field">
                    <label>Password</label>
                    <input type="text" name="password" value={inputs.password || ""} onChange={handleChange} />
                </div>

                <input type="submit" className="field button ui" />
            </form>
        </div>
    )
}