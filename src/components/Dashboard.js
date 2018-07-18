import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'
import TitleBar from './TitleBar'
import { handleInitialPolls } from '../actions/shared'

class Dashboard extends Component {
    state = {
        selectedTab: 'unanswered'
    }

    componentDidMount () {
        this.props.dispatch(handleInitialPolls())
    }

    render () {
        const { answeredPolls, unansweredPolls } = this.props
            return (
            <Fragment>
                <TitleBar />
                <ul className='toggler'>
                    <li 
                        className={ this.state.selectedTab === 'unanswered' ? 'active' : 'li-hover'}
                        onClick={() => {this.setState({ selectedTab: 'unanswered'})}}>
                        Unanswered
                    </li>
                    <li 
                        className={ this.state.selectedTab === 'answered' ? 'active' : 'li-hover'}
                        onClick={() => {this.setState({ selectedTab: 'answered'})}}>
                        Answered
                    </li>
                </ul>
                { 
                    this.state.selectedTab === 'unanswered' && unansweredPolls
                    ? <div className='question-form margin'>
                        {unansweredPolls.map((id) => (
                        <Poll key={id} id={id}/> ))}
                      </div>     
                    : null
                 }             
                { 
                    this.state.selectedTab === 'answered' && answeredPolls
                    ? <div className='question-form margin'>
                        {answeredPolls.map((id) => (
                        <Poll key={id} id={id}/> ))}
                      </div>     
                    : null
                 }             
            </Fragment>
            )
    }
}

function mapStateToProps ({ polls, authedUser, users  }) {
    const user = users[authedUser]

    const answeredPolls = Object.keys(polls).length !== 0
        ? Object.keys(user.answers)
            .sort((a,b) => polls[b].timestamp - polls[a].timestamp)
        : []

    const unansweredPolls = Object.keys(polls).length !== 0
        ? Object.keys(polls)
            .filter(pollID => !answeredPolls.includes(pollID))
            .sort((a,b) => polls[b].timesyamp - polls[a].timestamp)
        : []

    return {
        answeredPolls,
        unansweredPolls,
    }
}

export default connect(mapStateToProps)(Dashboard)