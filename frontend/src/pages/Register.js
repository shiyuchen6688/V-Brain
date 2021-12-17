import React, { useState } from "react"

export default function Register() {
    return (
        <div>
            <h1>Registration</h1>
            <RegisterForm />
        </div>
    );
}

function RegisterForm() {
    const [inputs, setInputs] = useState({});
    return (
        <div className="ui container">
            <h2>User Registration:</h2>
            <form className="ui form inverted">
                <div className="field">
                    <label>Last Name</label>
                    <input type="text" name="lastname" value={inputs.lastname || ""} />
                </div>

                <div className="field">
                    <label>First Name</label>
                    <input type="text" name="firstname" value={inputs.firstname || ""} />
                </div>

                <div className="field">
                    <label>Institution</label>
                    <input type="text" name="institution" value={inputs.institution || ""} />
                </div>

                <div className="field">
                    <label>Username (email address)</label>
                    <input type="text" name="username" value={inputs.username || ""} />
                </div>

                <div className="field">
                    <label>Password</label>
                    <input type="text" name="password" value={inputs.password || ""} />
                </div>

                <input type="submit" className="field button ui" />
            </form>
        </div>
    )
}