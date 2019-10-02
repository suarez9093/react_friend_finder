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
        // 5. Not sure if it is this function or another one but must convert the array into an array of numbers
    

        this.setState(prevState => {
          return {
              answers: prevState.answers
          }

        })



    }

    handleClick() {
        // 1. Takes the new array and saves it to the database
        // 2. Then takes the array and compares it to the other arrays of friends in the database. 
        // 3. Display the friend with the closests answers
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


