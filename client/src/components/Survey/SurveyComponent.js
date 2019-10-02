import React from "react";

function SurveyComponent(props) {
    return (
        <div>
            <div>
                <h3>Question 1</h3>
                <p>You find it easy to get along with others</p>
                <select
                    data-placeholder="" 
                    class="chosen-select" 
                    id="q1"
                    name="answers"
                    onChange={props.handleChange}
                    value={props.data.answers}
                 >
                    <option selected>---</option>
                    <option value="1">1 (Strongly Disagree)</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5 (Strongly Agree)</option>
                </select>
            </div>
            <br />
            <div>
                <h3>Question 2</h3>
                <p>You have hobbies outside of work</p>
                <select
                    data-placeholder="" 
                    class="chosen-select" 
                    id="q2"
                    name="answers"
                    onChange={props.handleChange}
                    value={props.data.answers}
                 >
                    <option selected>---</option>
                    <option value="1">1 (Strongly Disagree)</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5 (Strongly Agree)</option>
                </select>
            </div>
        </div>
            )
        }
        
export default SurveyComponent;