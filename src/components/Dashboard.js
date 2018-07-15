import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'
import TitleBar from './TitleBar'
import Toggler from './Toggler'

class Dashboard extends Component {
    render () {
        return (
            <Fragment>
                <TitleBar />
                <Toggler />
                <div className='question-form margin'>
                    {this.props.questionIds.map((id) => (
                        <Poll key={id} id={id}/> 
                    ))}
                </div>                
            </Fragment>
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