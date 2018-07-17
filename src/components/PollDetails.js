import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import TitleBar from './TitleBar'

class PollDetails extends Component {
    render () {
        const { optionOne, optionTwo } = this.props.question
        const { avatar, authedUser } = this.props
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
                                <span className='input_radio'>{optionOne.text}</span>
                                <input className='hide' type="radio" defaultChecked='checked' name='select_option'/>
                                <span className='checkmark'></span>
                            </label>

                            <label className='radio_container'>
                                <span className='input_radio'>{optionTwo.text}</span>
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
                                    <span className="padding-left">{authedUser}</span>
                                </li>
                                <li className='time-stamp user-info-li block'>
                                    h:mm:PM | month/day/year
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
    const avatar = users[authedUser].avatarURL
    const question = questions[question_id]

    return {
        avatar,
        question_id,
        question,
        authedUser,
    }
}

export default connect(mapStateToProps)(PollDetails)