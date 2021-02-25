import React from 'react'
import { Link } from 'react-router-dom'

function DetailsPage() {
    return (
        <div>
            <h3>Go to <Link to='/landingpage'>/landingpage</Link> for Landing Page</h3>
            <h3>Go to <Link to='/events'>/events</Link> for Events Page</h3>
            <h3>Go to <Link to='/register'>/register</Link> for Registration Form</h3>
            <h3>Go to <Link to='/project'>/project</Link> for Project Page</h3>
        </div>
    )
}

export default DetailsPage
