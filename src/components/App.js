import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from '../components/Login'
import { connect } from 'react-redux'
import { handleInitialUsers } from '../actions/shared'
import Dashboard from './Dashboard'
import PollDetails from './PollDetails'
import LoadingBar from 'react-redux-loading'
import AddPoll from './AddPoll'
import Leaderboard from './Leaderboard'
import PageNotFound from './PageNotFound'

class App extends Component {
  componentDidMount() {
    const AUTHED_ID = null;
    this.props.dispatch((handleInitialUsers(AUTHED_ID)))
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar style={{ backgroundColor: '#25baa2'}}/>
          <Switch>
            { 
              this.props.authedUser === null
              ? <Route path='/' exact component={Login} />
              : <Fragment>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/questions/:question_id' component={PollDetails} />
                  <Route path='/add' exact component={AddPoll} />
                  <Route path='/leaderboard' exact component={Leaderboard} />
                </Fragment>
            }
            <Route component={PageNotFound} />
          </Switch>
        </Fragment>
      </Router>

    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)
