import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import EventsPage from '../pages/EventsPage/EventsPage';
import LandingPage from '../pages/LandingPage/LandingPage.jsx';
import ProjectPage from '../pages/ProjectPage/ProjectPage';
import DetailsPage from '../pages/DetailsPage';
import RegistrationForm from '../pages/RegistationForm/RegistrationForm';

export default class Routers extends Component {
    render() {
        return (
            <Router>

                <Route path='/' exact component={DetailsPage} />
                <Route path='/events' exact component={EventsPage} />
                <Route path='/register' exact component={RegistrationForm} />
                <Route path='/project' exact component={ProjectPage} />
                <Route path='/landingpage' exact component={LandingPage} />

            </Router>
       )
    }
};