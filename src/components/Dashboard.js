import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'
import TitleBar from './TitleBar'
import { handleInitialQuestions } from '../actions/shared'

class Dashboard extends Component {
    state = {
        selectedTab: 'unanswered'
    }

    componentDidMount () {
        this.props.dispatch(handleInitialQuestions())
    }

    render () {
        const { answeredQuestions, unansweredQuestions } = this.props
        console.log('Answered Questions', answeredQuestions)
            return (
            <Fragment>
                <TitleBar />
                <ul className='toggler'>
                    <li 
                        className={ this.state.selectedTab === 'unanswered' ? 'active' : ''}
                        onClick={() => {this.setState({ selectedTab: 'unanswered'})}}>
                        Unanswered
                    </li>
                    <li 
                        className={ this.state.selectedTab === 'answered' ? 'active' : ''}
                        onClick={() => {this.setState({ selectedTab: 'answered'})}}>
                        Answered
                    </li>
                </ul>
                { 
                    this.state.selectedTab === 'unanswered' && unansweredQuestions
                    ? <div className='question-form margin'>
                        {unansweredQuestions.map((id) => (
                        <Poll key={id} id={id}/> ))}
                      </div>     
                    : null
                 }             
                { 
                    this.state.selectedTab === 'answered' && answeredQuestions
                    ? <div className='question-form margin'>
                        {answeredQuestions.map((id) => (
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