import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Home from './Pages/Home Page/Home';
import Stats from './Pages/Covit-19 Live Stats/Stats'
import Survey from './Survey/Befor Get Started/Survey'
import About from './Pages/About/About'
import PageNotFound from './Pages/Page Not Found/PageNotFOund'
import SurveyContent from "./Survey/Survey Content/SurveyContent";
import Support from "./Pages/Support/Support";

function App() {
    return (
        <>

            <Router>

                <Navbar/>
                <Switch>

                    <Route exact path='/' component={Home} />
                    <Route exact path='/stats' component={Stats} />
                    <Route exact path='/survey' component={Survey} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/survey/content' component={SurveyContent} />
                    <Route exact path='/support' component={Support}/>

                    <Route component={PageNotFound}/>
                </Switch>
            </Router>

        </>
    );
}

export default App;
