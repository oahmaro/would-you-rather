import React, { Component } from 'react'
import { connect } from 'react-redux'

class Poll extends Component {
    render () {
        const { question } = this.props

        if (question === null ) {
            return <p>This question doesn't exist</p>
        }

        const { optionOne, optionTwo } = question

        return (
            <div className='form margin'>
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
        </div>
        )
    }
}

function mapStateToProps ({authedUser, questions}, { id }) {
    const question = questions[id]

    return {
        authedUser,
        question,
    }
}

export default connect(mapStateToProps)(Poll)