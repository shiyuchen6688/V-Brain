import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

function Login() {
    return (
        <div>
            <h1 className="ui inverted header">Login or Register here:</h1>
            <LoginForm />
        </div>
    )

}

const apiLoginURL = "http://localhost:8080/auth/login";

function LoginForm() {
    const [inputs, setInputs] = useState({})

    // handle change of input in registration form
    const handleChange = (e) => {
        const fieldName = e.target.name
        const newValue = e.target.value
        setInputs(orgValues => ({
            ...orgValues,
            [fieldName]: newValue
        }))
    }

    let navigate = useNavigate();

    // TODO: add other properties into the post data
    // handle submit of registration form
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(apiLoginURL, inputs, { withCredentials: true })
            .then((response) => {
                // alert(JSON.stringify(response))
                console.log(response.headers)
                console.log(response.headers['set-cookie'])
                if (response.data.success === "true") {
                    // redirect to login page
                    const loggedInEmail = response.data.userEmail
                    // TODO: navigate to user's profile page, contain their own studies
                    navigate(`/user-profile/${loggedInEmail}`);
                    // TODO: validate cookie is recieved

                } else {
                    // ask user to try again
                    alert(response.data.message)
                }

            })
            .catch((error) => {
                alert(error)
            })
    }

    return (
        <div>
            <div>
                <form className="ui inverted massive form" onSubmit={handleSubmit}>
                    <div className="field">
                        <label>Username: </label>
                        <input type="text" name="email" value={inputs.email || ""} onChange={handleChange} />
                    </div>

                    <div className="field">
                        <label>Password: </label>
                        <input type="text" name="password" value={inputs.password || ""} onChange={handleChange} />
                    </div>

                    <input type="submit" className="ui button" />
					<Link to="/user-page"><button className="ui button">My Profile</button></Link>
                </form>
            </div>

            <div class="ui divider"></div>

            <div>
                <label>Forget your password?</label>
                <Link to="/reset-password" className="ui button" style={{ marginTop: "1em", marginLeft: "1em" }}>Reset Password</Link>
            </div>

            <div class="ui divider"></div>

            <div>
                <label>Have not registered yet?</label>
                <Link to="/register" className="ui button" style={{ marginTop: "1em", marginLeft: "1em" }}>Register for an account</Link>
            </div>
        </div>
    )
}

export default Login