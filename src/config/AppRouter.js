import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import EventsPage from '../pages/EventsPage/EventsPage';
import EventForm from '../pages/EventForm/EventForm';
import LandingPage from '../pages/LandingPage/LandingPage';
import ProjectPage from '../pages/ProjectPage/ProjectPage';
import DetailsPage from '../pages/DetailsPage';

export default class Routers extends Component {
    render() {
        return (
            <Router>

                <Route path='/' exact component={DetailsPage} />
                <Route path='/events' exact component={EventsPage} />
                <Route path='/create' exact component={EventForm} />
                <Route path='/project' exact component={ProjectPage} />
                <Route path='/landingpage' exact component={LandingPage} />

            </Router>
       )
    }
};