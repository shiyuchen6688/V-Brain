import React, {Component} from "react"
import { Link } from 'react-router-dom'

class UserPage extends Component{
    
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>User Page</h1>
                <Link to="/study-registeration-form">
                    <button className="ui button">
                        Register a new study
                    </button>
                </Link>
            </div>
        );
    }
}

export default UserPage;
