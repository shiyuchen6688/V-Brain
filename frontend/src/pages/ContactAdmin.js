import React from "react";
import { Link } from "react-router-dom";

export default function ContactAdmin() {
    return (
        <div>
            <h1>Contact Admin</h1>
            <ContactAdminForm />
        </div>

    )
}

function ContactAdminForm() {
    return (
        <form class="ui form">
            <h4 class="ui dividing header">Contact Admin Form</h4>

            <div class="field">
                <label>Name</label>
                <div class="two fields">
                    <div class="field">
                        <input type="text" name="firstname" placeholder="First Name" />
                    </div>
                    <div class="field">
                        <input type="text" name="lastname" placeholder="Last Name" />
                    </div>
                </div>
            </div>

            <div class="field">
                <label>Email</label>
                <input type="text" name="shipping[address]" placeholder="Email" />
            </div>

            <div class="field">
                <label>Company</label>
                <input type="text" name="shipping[address]" placeholder="Company" />
            </div>

            <div class="field">
                <label>Message</label>
                <textarea></textarea>
            </div>

            <div class="field">
                <div class="ui checkbox">
                    <input type="checkbox" name="privacy-aggrement" />
                    <label>I agree to the  <Link to='/privacy'>privacy policy</Link></label>

                </div>
            </div>

            <button class="ui button" type="submit">Submit</button>



        </form>
    )
}

