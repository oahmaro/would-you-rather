import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Poll extends Component {
    render () {
        const { poll } = this.props

        if (poll === null ) {
            return <p>This poll doesn't exist</p>
        }

        const { optionOne, optionTwo } = poll
        const { id } = this.props

        return (
            <Link to={`/questions/${id}`} className='form margin poll-form'>
            <div className='form-header'>
                <p className='form-title'>Would You Rather</p>
            </div>
            <div className='form-body'>
                <p className='optionOne'>{optionOne.text}</p>
                <div className='or-seperator'>
                    <hr/>
                    <p className='inline-p'>OR</p>
                    <hr/>
                </div>
                <p className='optionTwo'>{optionTwo.text}</p>
            </div>
        </Link>
        )
    }
}

function mapStateToProps ({authedUser, polls}, { id }) {
    const poll = polls[id]

    return {
        authedUser,
        poll,
        id,
    }
}

export default connect(mapStateToProps)(Poll)