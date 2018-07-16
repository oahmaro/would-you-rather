import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class Account extends Component {
    render () {
        const { authedUser, avatar } = this.props
        return (
            <Fragment>
                <ul className='nav nav-account'>
                    <li>
                        Logout
                    </li>
                    <li className='padding-left'>
                        <img 
                                    src={avatar}
                                    alt={`Avatar of ${avatar}`}
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

function mapStateToProps({ authedUser, users }) {
    const avatar = users[authedUser].avatarURL
    return {
        authedUser,
        avatar
    }
}

export default connect(mapStateToProps)(Account)