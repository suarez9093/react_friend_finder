import React from "react";

function SignUpForm(props) {
    return (
        <div>
            <form>
                <div className="form-row">
                    <div className="col">
                        <input 
                            type="text"
                            name="firstName"
                            value={props.data.firstName} 
                            onChange={props.handleChange}
                            placeholder="First name" 
                            className="form-control" 
                           />
                    </div>
                    <div className="col">
                        <input 
                        type="text"
                        name="lastName"
                        value={props.data.lastName} 
                        onChange={props.handleChange}
                        placeholder="Last name" 
                        className="form-control" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm;