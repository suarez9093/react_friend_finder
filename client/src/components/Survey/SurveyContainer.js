import React, { Component } from "react";
import SurveyComponent from "./SurveyComponent";

class SurveyContainer extends Component {
       state = {
            answers: []
        }

    handleChange = (event) => {
        const { name, value, type } = event.target
        this.setState({ [name]: value })
    }
    render() {
        return (
            <div>
                <SurveyComponent
                    handleChange={this.handleChange}
                    data={this.state}
                />
                <p>{console.log(this.state.answers)}</p>
            </div>
        )
    }
}


export default SurveyContainer;