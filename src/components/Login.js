import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
    state = {
        selectedUser: ''
    }

    handleLogin = () => {
        const { selectedUser } = this.state
        const { setAuthedUser } = this.props

        if (selectedUser) {
            setAuthedUser(selectedUser)
        }

    }

    onSelectUser = (selectedUser) => this.setState({ selectedUser })

    render () {
        const { users } = this.props
        const { selectedUser } = this.state
        return (
            <div className='form signin-form'>
                <div className='form-header'>
                    <p className='form-title'>Would You Rather - login</p>
                </div>
                <div className='form-body'>
                    <form action="">
                        <label className='sigin-body-p'>Select a user: </label>
                        <div className='signin-body-form'>
                            <img 
                                src='https://placeimg.com/100/100/any'
                                alt="Avatar of oahmaro"
                                className='profile-pic'/> 
                            <select 
                                className='login-user-select' 
                                value={selectedUser}
                                onChange={(e) => this.onSelectUser(e.target.value)}>
                                {
                                    users
                                    ? Object.keys(users).map(user => 
                                        <option className='test' key={user} value={user}>
                                            {user}
                                        </option>)
                                    : null
                                }
                            </select>                        
                        </div>

                        <button className='sign-in-button' onClick={this.handleLogin}>SIGN IN</button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ users }) {
    return {
        ...users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setAuthedUser: (id) => {
            dispatch(setAuthedUser(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)