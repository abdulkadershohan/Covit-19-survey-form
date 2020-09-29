import React, {Component} from 'react';
import CardUi from "./CardUi";
import './CardUiMain.css'
import logo from '../../images/logo.png'
import logo2 from '../../images/logo2.png'

class CardUiMain extends Component {
    render() {
        return (
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-4">
                            <CardUi imgsrc={logo}/>
                        </div>
                        <div className="col-md-4">
                            <CardUi imgsrc={logo2}/>
                        </div>
                        <div className="col-md-4">
                            <CardUi imgsrc={logo}/>
                        </div>

                    </div>
                </div>
        );
    }
}

export default CardUiMain;