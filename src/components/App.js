import React, { Component } from 'react';
import Login from '../components/Login'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import Dashboard from './Dashboard'

class App extends Component {
  componentDidMount() {
    const AUTHED_ID = null;
    this.props.dispatch((setAuthedUser(AUTHED_ID)))
  }

  render() {
    return (
      <div>
        {this.props.authedUser === null
          ? <Login />
          : <Dashboard />
        }
      </div>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser,
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
