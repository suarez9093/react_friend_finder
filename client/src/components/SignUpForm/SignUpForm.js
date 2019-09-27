import React from "react";

function SignUpForm(props) {
    return (
        <div>
            <label>Sign Up</label>
            <br />
            {/* Input for First Name */}
            <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={props.handleChange}
                value={props.data.firstName}
            />

            {/* Input for Last Name */}
            <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={props.handleChange}
                value={props.data.lastName}
            />

            {/* Input for Email */}
            <br />
            <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={props.handleChange}
                value={props.data.email}
            />

            {/* Radio button for Male or Female */}
            <br />
            <label>
            <input 
                type="radio"
                name="gender"
                value="male"
                onChange={props.handleChange}
                checked={props.data.gender === "male"}
            />
            </label> Male

            {/* Radio Button for Female */}

            <label>
            <input 
                type="radio"
                name="gender"
                value="female"
                onChange={props.handleChange}
                checked={props.data.gender === "female"}
            />
            </label> Female

            <p>{props.data.firstName} {props.data.lastName}</p>
            <p>{props.data.email} {props.data.gender}</p>

        </div>
    )
}

export default SignUpForm;