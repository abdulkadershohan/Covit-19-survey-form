import React, { Component } from 'react'
import {ButtonGroup,Button} from '@material-ui/core'
import './SurveyContent.css'
export default class SurveyContent extends Component {


    render() {
        return (

            <>
                <div className="questions">
                    <h1>Questions-1</h1>

                    <p>How old are you?</p>
                    <ButtonGroup variant="contained" color="primary">
                        <Button onClick={this.onClickHandl}>0-20</Button>
                        <Button>21-30</Button>
                        <Button>31-40</Button>
                        <Button>41-50</Button>
                        <Button>51-65</Button>
                        <Button>65+</Button>
                    </ButtonGroup>
                    <h1><br/>Questions-2</h1>
                    <p>Select your gender</p>
                    <ButtonGroup variant="contained" color="primary">
                        <Button>Male</Button>
                        <Button>Female</Button>
                        <Button>Other</Button>

                    </ButtonGroup>
                    <h1><br/>Questions-3</h1>
                    <p>Please let us know what your current body temperature is </p>
                    <p>(Specify in Fahrenheit)</p>
                    <ButtonGroup variant="contained" color="primary">
                        <Button>Body temperature is normal at 96 ° F-98.6 ° F</Button>
                        <Button>Fever 98.6 F-102 F</Button>
                        <Button>High fever> 102 F</Button>
                        <Button>I don't know</Button>
                    </ButtonGroup>

                    <h1><br/><br/>Questions-4</h1>
                    <p>Do you have these symptoms?</p>
                    <p>(You can place multiple ticks)</p>
                    <Button variant="contained" color="primary">Shortness of breath</Button>
                    <Button variant="contained" color="primary">Dry cough</Button>
                    <Button variant="contained" color="primary">Sore throat</Button>
                    <Button variant="contained" color="primary">Extreme weakness (e.g. needing help to get to the bathroom)</Button>
                    <Button variant="contained" color="primary">Cold or runny nose</Button>

                    <h1><br/>Questions-5</h1>
                    <p>What additional symptoms do you have?</p>
                    <p>(You can place multiple ticks)</p>
                    <Button variant="contained" color="primary">Abdominal pain, vomiting or thin stools</Button>
                    <Button variant="contained" color="primary">Feeling of chest pain and pressure</Button>
                    <Button variant="contained" color="primary">Pain in the muscles</Button>
                    <Button variant="contained" color="primary">Not getting the taste</Button>
                    <Button variant="contained" color="primary">No nose odor</Button>
                    <Button variant="contained" color="primary">Itchy or red eyes</Button>
                    <Button variant="contained" color="primary">Drowsiness</Button>

                    <h1><br></br>Questions-6</h1>
                    <p>Give details of your trip</p>
                    <ButtonGroup variant="contained" color="primary">
                        <Button>Haven't traveled anywhere in the last 14 days or come close to anyone with corona or fever, cough, shortness of breath</Button>
                        <Button>In the last 14 days I have been in contact with someone who has a fever, cough, or shortness of breath (e.g. family member / colleague)</Button>
                        <Button>In the last 14 days, I came in contact with someone who has returned from abroad</Button>
                        <Button>In the last 14 days, I have traveled to areas infected with the corona virus or abroad</Button>
                        <Button>During the last 14 days, I came in contact with a person infected with the corona virus</Button>
                    </ButtonGroup>
                    <h1><br></br>Questions-7</h1>
                    <p>Do you already have these diseases?</p>
                    <p>(If there are, you can tick all of them)</p>
                    <ButtonGroup variant="contained" color="primary">
                        <Button>Lung problems</Button>
                        <Button>Heart problems</Button>
                        <Button>High blood pressure</Button>
                        <Button>Diabetes</Button>
                        <Button>Kidney problems</Button>
                        <Button>Cancer</Button>
                    </ButtonGroup>

                    <h1><br/>Questions-8</h1>
                    <p>Do you have a smoking habit?</p>
                    <ButtonGroup variant="contained" color="primary">
                        <Button>Yes</Button>
                        <Button>No</Button>
                    </ButtonGroup>

                    <h1><br/>Questions-9</h1>
                    <p>Are you a health worker? (Doctors, nurses, support staff, etc.)</p>
                    <ButtonGroup variant="contained" color="primary">
                        <Button>Yes</Button>
                        <Button>No</Button>
                    </ButtonGroup>

                    <h1><br/>Questions-10</h1>
                    <p>Have your symptoms changed in the last 48 hours?</p>
                    <ButtonGroup variant="contained" color="primary">
                        <Button>Better than before</Button>
                        <Button>There is no change</Button>
                    </ButtonGroup>

                    <h1><br/>Your risk test has been completed. Click on next to see the results. Thanks</h1>
                    <Button variant="contained" color="secondary">Next</Button>

                    <br/>


                </div>


            </>
        )
    }
}
