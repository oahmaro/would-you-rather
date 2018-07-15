import React, { Component } from 'react'

class Poll extends Component {
    render () {
        return (
            <div className='form margin'>
            <div className='form-header'>
                <p className='form-title'>Would You Rather</p>
            </div>
            <div className='form-body'>
                <p className='options'> Option 1</p>
                <div className='or-seperator'>
                    <hr/>
                    <p className='inline-p'>OR</p>
                    <hr/>
                </div>
                <p className='options'> Option 2</p>
            </div>
        </div>
        )
    }
}

export default Poll