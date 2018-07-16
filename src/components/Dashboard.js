import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'
import TitleBar from './TitleBar'
import Toggler from './Toggler'
import { handleInitialQuestions } from '../actions/shared'

class Dashboard extends Component {
    componentDidMount () {
        this.props.dispatch(handleInitialQuestions())
    }

    render () {
        const { answeredQuestions, unansweredQuestions } = this.props
        console.log('Answered Questions', answeredQuestions)
            return (
            <Fragment>
                <TitleBar />
                <Toggler />
                { 
                    unansweredQuestions
                    ? <div className='question-form margin'>
                        {unansweredQuestions.map((id) => (
                        <Poll key={id} id={id}/> ))}
                      </div>     
                    : null
                 }             
            </Fragment>
            )
    }
}

function mapStateToProps ({ questions, authedUser, users  }) {
    const user = users[authedUser]

    const answeredQuestions = Object.keys(questions).length !== 0
        ? Object.keys(user.answers)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
        : []

    const unansweredQuestions = Object.keys(questions).length !== 0
        ? Object.keys(questions)
            .filter(questionid => !answeredQuestions.includes(questionid))
            .sort((a,b) => questions[b].timesyamp - questions[a].timestamp)
        : []

    return {
        answeredQuestions,
        unansweredQuestions,
    }
}

export default connect(mapStateToProps)(Dashboard)