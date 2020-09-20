import React, { Component } from 'react'
import logo2 from '../../images/logo2.png'
import './Home.css'
import Card from 'react-bootstrap/Card'
import * as FiIcons from 'react-icons/fi';
import UsefulVideos from "./YoutubeVideos/UsefulVideos";


export default class Home extends Component {
    render() {
        return (
            <>
         

            <div className="usful-numbers-container"> 
         <Card.Header style={{
           textAlign:"center",
           color:"red",
           fontSize:"50px",
           fontWeight:"bold",
             background:'purple'
          
           
         }}><FiIcons.FiPhoneCall/>  HOT LINE NUMBERS</Card.Header>
         <div className="usful-number"> 
          <li>

          <a href = "/" > 
         <img src ={logo2} alt="logo"
          style={{
            width:"150px",
            height:"100px",
            
          }}/> 
         </a>

          </li>
          <li>
                  <strong>
                  <a href="tel:333">333</a>
                  </strong><br/>
                  <span>National Call Center </span>
          </li>
          <li>
                <strong>
                <a href="tel:16263">16263</a>
                </strong><br/>
                <span>Health windows</span>

          </li>
          <li>
               <strong>
                <a href="tel:09611677777">09611677777</a>
                </strong><br/>
                 <span>Specialist Health Line</span> 
          </li>
          <li>
                 <strong>
                 <a href="tel:10655">09611677777</a>
                 </strong><br/>
                  <span>IEDCR</span> 
          </li>
          <li>
                <strong>
                <a href="tel:109">09611677777</a>
                </strong><br/>
                <span>National helpline</span>
          </li>
         </div>

            </div>


            <UsefulVideos/>


            </>
        )
    }
}
