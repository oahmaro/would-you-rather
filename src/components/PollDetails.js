import React, { Component } from 'react'
import { connect } from 'react-redux'

class PollDetails extends Component {
    render () {
        const { optionOne, optionTwo } = this.props.question
        return (
            <div className='form margin poll-form'>
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

function mapStateToProps ({authedUser, questions, users}, props) {
    const { question_id } = props.match.params
    const question = questions[question_id]

    return {
        question_id,
        question,
        authedUser,
    }
}

export default connect(mapStateToProps)(PollDetails)