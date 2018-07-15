import React, { Component, Fragment } from 'react'

class Nav extends Component {
    render () {
        return (
            <Fragment>
                <ul className='nav'>
                    <li activeClassName='active'>
                        Home
                    </li>
                    <li activeClassName='active'>
                        Leaderboard
                    </li>
                    <li activeClassName='active'>
                        Add Poll
                    </li>
                </ul>
            </Fragment>
        )
    }
}

export default Nav