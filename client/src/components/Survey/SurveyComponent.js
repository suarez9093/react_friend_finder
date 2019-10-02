import React from "react";

function SurveyComponent(props) {
    return (
        <div>

            <div>
                <h3>Question 1</h3>
                <p>You find it easy to get along with others</p>
                <select 
                    data-placeholder="" 
                    className="chosen-select" 
                    id="q1"
                    name="answers"
                    value={props.data.answers}
                    onChange={props.handleChange}
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
                <select data-placeholder="" className="chosen-select" id="q2">
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
                <h3>Question 3</h3>
                <p>You are close with your family</p>
                <select data-placeholder="" className="chosen-select" id="q3">
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
                <h3>Question 4</h3>
                <p>You are confortable meeting new people</p>
                <select data-placeholder="" className="chosen-select" id="q4">
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
                <h3>Question 5</h3>
                <p>People would call you an extrovert</p>
                <select data-placeholder="" className="chosen-select" id="q5">
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
                <h3>Question 6</h3>
                <p>You have goals</p>
                <select data-placeholder="" className="chosen-select" id="q6">
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
                <h3>Question 7</h3>
                <p>You are physically active</p>
                <select data-placeholder="" className="chosen-select" id="q7">
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
                <h3>Question 8</h3>
                <p>You like to eat sushi</p>
                <select data-placeholder="" className="chosen-select" id="q8">
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
                <h3>Question 9</h3>
                <p>Others speak highly of you</p>
                <select data-placeholder="" className="chosen-select" id="q9">
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
                    <h3>Question 10</h3>
                    <p>You believe you can do anything you set your mind to</p>
                    <select data-placeholder="" className="chosen-select" id="q10">
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