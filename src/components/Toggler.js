import React, { Component } from 'react'

class Toggler extends Component {
    render () {
        return (
                <ul className='toggler'>
                    <li activeClassName='active'>
                        Unanswered
                    </li>
                    <li activeClassName='active'>
                        Answered
                    </li>
                </ul>
        )
    }
}

export default Toggler