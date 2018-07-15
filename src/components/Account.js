import React, { Component, Fragment } from 'react'

class Account extends Component {
    render () {
        return (
            <Fragment>
                <ul className='nav nav-account'>
                    <li>
                        Logout
                    </li>
                    <li className='padding-left'>
                        <img 
                                    src='https://placeimg.com/100/100/any'
                                    alt="Avatar of oahmaro"
                                    className='profile-pic'/>
                    </li>
                    <li className='padding-zero'>
                        oahmaro
                    </li>
                </ul>
            </Fragment>
        )
    }
}

export default Account