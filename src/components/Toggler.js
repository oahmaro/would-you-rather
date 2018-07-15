import React, { Component } from 'react'

class Toggler extends Component {
    render () {
        return (
                <ul className='toggler'>
                    <li>
                        Unanswered
                    </li>
                    <li>
                        Answered
                    </li>
                </ul>
        )
    }
}

export default Toggler