import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'

class Dashboard extends Component {
    render () {
        console.log(this.props)
        return (
            <div className='question-form margin'>
                {this.props.questionIds.map((id) => (
                    <Poll key={id}/> 
                ))}
            </div>    
        )
    }
}

function mapStateToProps ({ questions }) {
    return {
        questionIds: Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
}
export default connect(mapStateToProps)(Dashboard)