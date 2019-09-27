import React from "react";

function SignUpForm(props) {
    return (
        <div>
            <label>Sign Up</label>
            <br />
            <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={props.handleChange}
                value={props.data.firstName}
            />

            <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={props.handleChange}
                value={props.data.lastName}
            />
        </div>
    )
}

export default SignUpForm;