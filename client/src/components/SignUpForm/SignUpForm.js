import React from "react";

function SignUpForm(props) {
    return (
        <div>
            <div class="signup-form">
                <form action="/examples/actions/confirmation.php" method="post">
                    <h2>Register</h2>
                    <p className="hint-text">Create your account. It's free and only takes a minute.</p>
                    <div className="form-group">
                        <div className="row">
                            <input
                                type="text"
                                className="form-control"
                                name="firstName"
                                placeholder="First Name"
                                onChange={props.handleChange}
                                value={props.data.firstName}
                                required="required" />

                            <br />
                            <input
                                type="text"
                                className="form-control"
                                name="lastName"
                                placeholder="Last Name"
                                onChange={props.handleChange}
                                value={props.data.lastName}
                                required="required" />

                        </div>
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Email"
                            onChange={props.handleChange}
                            value={props.data.email}
                            required="required" />
                    </div>
                    <div className="form-group">
                        <label className="checkbox-inline">
                            <input 
                            type="checkbox" 
                            name="policy"
                            value={props.data.checked}
                            required="required" /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success btn-lg btn-block">Register Now</button>
                    </div>
                </form>
                <div className="text-center">Already have an account? <a href="#">Sign in</a></div>
            </div>
        </div>
    )
}

export default SignUpForm;