import React, { Component } from "react";
import SurveyComponent from "./SurveyComponent";

class SurveyContainer extends Component {
       state = {
            answers: []
        }

    handleChange = (event) => {
       const { name , value } = event.target
       this.setState(prevState => {
           answers: [...prevState.answers, value]
       })
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