import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import TitleBar from './TitleBar'
import { formatDate } from '../utils/api'

class PollDetails extends Component {
    render () {
        const { avatar, timestamp, username, optionOne, optionTwo } = this.props
        return (
            <Fragment>
                <TitleBar />
                <div className='form margin poll-details-form'>
                    <div className='form-header'>
                        <p className='form-title'>Would You Rather</p>
                    </div>
                    <div className='form-body no-bottom-round'>
                        <div className='radio_container-div'>
                            <label className='radio_container'>
                                <span className='input_radio'>{optionOne}</span>
                                <input className='hide' type="radio" defaultChecked='checked' name='select_option'/>
                                <span className='checkmark'></span>
                            </label>

                            <label className='radio_container'>
                                <span className='input_radio'>{optionTwo}</span>
                                <input className='hide' type="radio" name='select_option'/>
                                <span className='checkmark'></span>
                            </label>
                        </div>

                        <button className='button' onClick={this.handleLogin}>Submit</button>
                    </div>
                    <div className='user-details'>
                            <ul className='user-detail-ul nav nav-account block'>
                                <li className='user-info-li inline-block'>
                                    <img 
                                        src={avatar}
                                        alt={'`Avatar of ${avatar}`'}
                                        className='scale-down-mid profile-pic vertical-align'/>
                                    <span className="padding-left">{username}</span>
                                </li>
                                <li className='time-stamp user-info-li block'>
                                    { timestamp }
                                </li>
                            </ul>
                    </div>
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps ({authedUser, questions, users}, props) {
    const { question_id } = props.match.params
    const question = questions[question_id]
    const avatar = users[question.author].avatarURL
    const username = users[question.author].id
    const timestamp = formatDate (question.timestamp)
    const optionOne = question.optionOne.text
    const optionTwo = question.optionTwo.text

    return {
        avatar,
        username,
        timestamp,
        optionOne,
        optionTwo,
    }
}

export default connect(mapStateToProps)(PollDetails)