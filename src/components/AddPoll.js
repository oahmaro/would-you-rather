import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import TitleBar from './TitleBar'

class AddPoll extends Component {
    render () {
        return (
            <Fragment>
                <TitleBar />
`                <div className='form margin poll-details-form'>
                    <div className='form-header'>
                        <p className='form-title'>Would You Rather</p>
                    </div>
                {
                    <form id='addPoll-form' className='form-body'>
                        <div className='input-text-container'>
                            <textarea  
                                className='block input-text' 
                                name="optionOne" 
                                placeholder='Option One'
                                required
                                spellCheck="false"
                                />

                            <textarea  
                                className='block input-text' 
                                name="optionTwo"
                                placeholder='Option Two'
                                required
                                spellCheck="false"
                                />
                        </div>

                        <button className='button'>Submit</button>
                    </form>
                }
                </div>`
            </Fragment>
        )
    }
}

function mapStateToProps () {
    return {

    }
}

export default connect(mapStateToProps)(AddPoll)