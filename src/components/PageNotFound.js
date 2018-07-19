import React from 'react'
import { NavLink } from 'react-router-dom'

function PageNotFound () {
    return (
        <div>
            <h2>Oops!</h2>
            We can't seem to find the page you're looking for.
            <NavLink to='/'>Click here</NavLink> to go back to home page
        </div>
    )
}

export default PageNotFound