import React, { Component } from "react";
import SignUpForm from "./SignUpForm";

class SignUpFormContainer extends Component {
    constructor () {
        super()
        this.state = {
            firstName: "", 
            lastName: "",
            email: "",
            gender: "",
            city: "",
            country: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name] : value
        })
    }
    render () {
        return (
            <div>
                <SignUpForm 
                    handleChange={this.handleChange}
                    data={this.state}
                />
            </div>
        )
    }
}

export default SignUpFormContainer;