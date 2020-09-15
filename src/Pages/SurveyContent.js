import React, { Component,useState } from 'react'
import {ButtonGroup,Button, colors} from '@material-ui/core'
import './SurveyContent.css'
import Questions from "../Survey/Questions/Questions";
import AnswerList from "../Survey/Answer/Answer";
 class SurveyContent extends Component {
    state = {

        questions:{
            1:"How old are you?",
            2:"Select your gender",
            3:"Please let us know what your current body temperature is ? (Specify in Fahrenheit)",
            4:"Do you have these symptoms? (You can place multiple ticks)",
            5:" What additional symptoms do you have? (You can place multiple ticks)",
            6:"Give details of your trip",
            7:"Do you already have these diseases? (If there are, you can tick all of them)",
            8:"Do you have a smoking habit?",
            9:"Are you a health worker? (Doctors, nurses, support staff, etc.)",
            10:"Have your symptoms changed in the last 48 hours?"               
       
        },
        answer:{
            1:{
                1:"0-20",
                2:"21-30",
                3:"31-40",
                4:"41-50",
                5:"51-65",
                6:"65+"
            },
            2:{
                1:"Male",
                2:"Female",
                3:"Other"

            },
            3:{
                1:"Body temperature is normal at 96 ° F-98.6 ° F",
                2:"Fever 98.6 F-102 F",
                3:"High fever> 102 F",
                4:"I don't know"
            },
            4:{
                1:"Shortness of breath",
                2:"Dry cough",
                3:"Sore throat",
                4:"Extreme weakness (e.g. needing help to get to the bathroom)",
                5:"Cold or runny nose",
                6:"None of them"
            },
            5:{
                1:"Abdominal pain, vomiting or thin stools",
                2:"Feeling of chest pain and pressure",
                3:"Pain in the muscles",
                4:"Not getting the taste",
                5:"No nose odor",
                6:"Itchy or red eyes",
                7:"Drowsiness",
                8:"None of them"
            },
            6:{
                1:"Haven't traveled anywhere in the last 14 days or come close to anyone with corona or fever, cough, shortness of breath",
                2:"In the last 14 days I have been in contact with someone who has a fever, cough, or shortness of breath (e.g. family member / colleague)",
                3:"In the last 14 days, I came in contact with someone who has returned from abroad",
                4:"In the last 14 days, I have traveled to areas infected with the corona virus or abroad",
                5:"During the last 14 days, I came in contact with a person infected with the corona virus",

            },
            7:{
                1:"Lung problems",
                2:"Heart problems",
                3:"High blood pressure",
                4:"Diabetes",
                5:"Kidney problems",
                6:"Cancer"
            },
            8:{
                1:"Yes",
                2:"No"
            },
            9:{
                1:"Yes",
                2:"No"
            },
            10:{
                1:"Better than before",
                2:"There is no change",
                3:"Worse",
                4:"Too bad"
            }

        },
        step:1,
        score:0,
        correctAnswer:1
    }

     nextStep = (step) => {
         this.setState({
             step: step + 1,

         });
     }
     checkAnswer = answer => {

     }


    render() {
        let {questions,step,answer}=this.state
        return (

            <>
                <div className="Content">
                    
                
               <Questions
               questions={questions[step]}
               />
               <AnswerList

                answer={answer[step]}


               />
               <button className="NextStep"
                       disabled={""}
                       onClick={() => this.nextStep(step)}

                    >Next</button>


                
                
                    

                
                    
                    



                </div>


            </>
        )
    }
}
export default SurveyContent;