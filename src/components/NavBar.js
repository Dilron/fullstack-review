import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const NavBar = ({username}) => (
    <nav>
        <span>da bank</span>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </ul>
        {username && <div>Who the fuck is that? Oh it's {username}</div>}
    </nav>
)

const mapStateToProps = (reduxState) => {
    const {username} = reduxState
    return {username}
}

export default connect(mapStateToProps)(NavBar)