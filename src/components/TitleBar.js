import React, { Component } from 'react'
import Nav from './Nav'
import Account from './Account'

class TitleBar extends Component {
    render () {
        return (
            <div className='title-bar'>
                <Nav />
                <Account />
            </div>
        )
    }
}

export default TitleBar