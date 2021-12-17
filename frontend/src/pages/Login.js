import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div>
            <h1 className="ui inverted header">Login or Register here:</h1>
            <LoginForm />
        </div>
    )

}

function LoginForm() {
    const [inputs, setInputs] = useState({})

    return (
        <div>
            <div>
                <form className="ui inverted massive form">
                    <div className="field">
                        <label>Username: </label>
                        <input type="text" name="username" value={inputs.username || ""} />
                    </div>

                    <div className="field">
                        <label>Password: </label>
                        <input type="text" name="password" value={inputs.password || ""} />
                    </div>

                    <input type="submit" className="ui button" />
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