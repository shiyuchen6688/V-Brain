import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"


export default function UserPage() {
    return (
        <div>
            <h1>User Page</h1>
            <Link to="/study-registeration-form"><button className="ui button">Register a new study</button></Link>
        </div>
    );
}
