import React, { Component } from 'react';
import './Survey.css'
import {Link} from "react-router-dom";

class Survey extends Component {


    render() {

        return (
            <>
            <div className="warning-message">
            <a>
            Welcome. This tool allows you to assess for yourself whether you are at risk of being infected with the Covid-19 or Novel Corona virus, as well as the level of risk and what to do.
            This application was created for testing purposes only. Experimental observers should not be given health advice from this software. The software will keep the information you provide confidential.
            </a>

            </div>
                <div className="Button">
                <Link to="/survey/content" className="btn btn-outline-success justify-content-center">
                    Get Started
                </Link>
                </div>



            </>
        )
    }
}

export default Survey;