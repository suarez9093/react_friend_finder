import React, { Component } from "react";
import SurveyComponent from "./SurveyComponent";

class SurveyContainer extends Component {
    state = {
        answers: []
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({[name] : value})
    }
    render () {
        return (
            <SurveyComponent 
                handleChange={this.handleChange}
                data={this.state}
            />
        )
    }
}


export default SurveyContainer;