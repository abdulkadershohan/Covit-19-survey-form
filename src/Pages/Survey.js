import React, { Component } from 'react';
import './Survey.css'
import Button from 'react-bootstrap/Button'
import SurveyContent from './SurveyContent'

class Survey extends Component {


    render() {

        return (
            <>
            <div className="worning-message">
            <h1>
            Welcome. This tool allows you to assess for yourself whether you are at risk of being infected with the Covid-19 or Novel Corona virus, as well as the level of risk and what to do.
            This application was created for testing purposes only. Experimental observers should not be given health advice from this software. The software will keep the information you provide confidential.
            </h1><br></br>
            <Button  className="begin">
            <a href="/survey/content" style={{
                color:"whitesmoke"
            }}>Get Started</a></Button>
            </div>



            </>
        )
    }
}

export default Survey;