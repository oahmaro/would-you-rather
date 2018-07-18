import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import TitleBar from './TitleBar'

class Leaderboard extends Component {
    render () {
        return (
            <Fragment>
                <TitleBar />
                <table>
                    <tr>
                        <th>Rank</th>
                        <th>User</th>
                        <th>Polls Created</th>
                        <th>Polls Answered</th>
                    </tr>
                </table>
            </Fragment>
        )
    }
}

function mapStateToProps ({}) {

}

export default connect()(Leaderboard)