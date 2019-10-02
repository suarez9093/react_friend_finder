import React, { Component } from "react";
import SurveyComponent from "./SurveyComponent";

class SurveyContainer extends Component {
    state = {
        answers: []
    }

    handleChange = (event) => {
        // Destructuring event.target
        const { name, value } = event.target
        // 1. Need to set state to take in previous state
        // 2. Need to set the new value to the [name] : value
        // 3. Update the array
        // 4. Log the new array
    

        this.setState(prevState => {
          return {
              answers: prevState.answers
          }

        })



    }

    handleSomething(event) {
        const { name, value } = event.target
        this.setState({[name] : value})
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


