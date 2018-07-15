import React, { Component, Fragment } from 'react'

class Account extends Component {
    render () {
        return (
            <Fragment>
                <ul className='nav nav-account'>
                    <li activeClassName='active'>
                        Logout
                    </li>
                    <li activeClassName='active'>
                        oahmaro
                    </li>
                </ul>
            </Fragment>
        )
    }
}

export default Account