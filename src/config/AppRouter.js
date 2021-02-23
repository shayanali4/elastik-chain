import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import EventsPage from '../pages/EventsPage/EventsPage';
import EventForm from '../pages/EventForm/EventForm';

export default class Routers extends Component {
    render() {
        return (
            <Router>
                <Route path='/' exact component={EventsPage} />
                <Route path='/create/event' exact component={EventForm} />

            </Router>
       )
    }
};