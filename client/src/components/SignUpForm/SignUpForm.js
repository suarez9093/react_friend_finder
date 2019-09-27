import React from "react";

function SignUpForm(props) {
    return (
        <div>
            <form>
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
    
            <br />
                {/* Input for City */}
                <input
                    type="text"
                    placeholder="City"
                    name="city"
                    onChange={props.handleChange}
                    value={props.data.city}
                />
                <label>Country: </label>
                <select
                    name="country"
                    value={props.data.country}
                    onChange={props.handleChange}
                >
                    <option value="">-- Please select a Country --</option>
                    <option value="usa">USA</option>
                    <option value="canada">Canada</option>
                    <option value="mexico">Mexico</option>
                    <option value="spain">Spain</option>
                    <option value="thailand">Thailand</option>

                </select>

                {/* Image upload */}
                <br />
                <input type="file" />
                <p>{props.data.firstName} {props.data.lastName}</p>
                <p>{props.data.email} {props.data.gender}</p>
                <p>{props.data.city} {props.data.country}</p>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SignUpForm;