import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import TitleBar from './TitleBar'
import { handleAddPoll } from '../actions/shared'
import { Redirect } from 'react-router-dom'

class AddPoll extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false,
    }
    
    handleOptionOne = (e) => {
        this.setState({
            optionOne: e.target.value
        })
    }

    handleOptionTwo = (e) => {
        this.setState({
            optionTwo: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { optionOne, optionTwo} = this.state
        this.props.addPoll(optionOne, optionTwo)
        this.setState(() => ({
            toHome: true
        }))
    }

    render () {
        const { toHome } = this.state

        if (toHome === true) {
            return <Redirect to='/' />
        }

        return (
            <Fragment>
                <TitleBar />
                <div className='form margin poll-details-form'>
                    <div className='form-header'>
                        <p className='form-title'>Would You Rather</p>
                    </div>
                {
                    <form onSubmit={this.handleSubmit} id='addPoll-form' className='form-body'>
                        <div className='input-text-container'>
                            <textarea  
                                className='block input-text' 
                                name="optionOne" 
                                placeholder='Option One'
                                required
                                spellCheck="false"
                                onChange={this.handleOptionOne}
                                />

                            <textarea  
                                className='block input-text' 
                                name="optionTwo"
                                placeholder='Option Two'
                                required
                                spellCheck="false"
                                onChange={this.handleOptionTwo}
                                />
                        </div>

                        <button className='button'>Submit</button>
                    </form>
                }
                </div>
            </Fragment>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return {
        addPoll: (optionOne, optionTwo) => {
            dispatch(handleAddPoll(optionOne, optionTwo))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddPoll)