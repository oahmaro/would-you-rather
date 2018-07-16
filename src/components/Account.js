import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class Account extends Component {
    render () {
        const { authedUser } = this.props
        return (
            <Fragment>
                <ul className='nav nav-account'>
                    <li>
                        Logout
                    </li>
                    <li className='padding-left'>
                        <img 
                                    src='https://placeimg.com/100/100/any'
                                    alt={`Avatar of ${authedUser}`}
                                    className='profile-pic scale-down'/>
                    </li>
                    <li className='padding-zero'>
                        {authedUser}
                    </li>
                </ul>
            </Fragment>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(Account)