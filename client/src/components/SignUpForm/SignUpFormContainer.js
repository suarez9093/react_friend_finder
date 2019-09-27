import React, { Component } from "react";
import SignUpForm from "./SignUpForm";

class SignUpFormContainer extends Component {
    constructor () {
        super()
        this.state = {
            firstName: "", 
            lastName: "",
            email: "",
            policy: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event) {
        const { name, value, checked, type } = event.target
        type === "checkbox" ? this.setState({[name] : checked}) : this.setState({ [name] : value})
    }

    handleClick() {
        alert("Clicked")
    }
    render () {
        return (
            <div>
                <SignUpForm 
                    handleChange={this.handleChange}
                    data={this.state}
                    handleClick={this.handleClick}
                />
            </div>
        )
    }
}

export default SignUpFormContainer;