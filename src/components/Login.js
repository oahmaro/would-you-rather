import React, { Component } from 'react'

class Login extends Component {
    render () {
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
                            <select className='login-user-select' name="" id="">
                                <option className='test' value="" disabled>Please Select</option>
                                <option className='test' value="oahmaro">oahmaro</option>
                                <option className='test' value="oahmaro">myaghi</option>
                            </select>                        
                        </div>

                        <button className='sign-in-button' onClick={this.handleLoggin}>SIGN IN</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login