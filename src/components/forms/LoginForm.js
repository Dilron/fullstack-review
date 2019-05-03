import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import {updateUserId, updateUsername} from '../../redux/reducer'

class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            loginUsername: '',
            loginPassword: '',
            loginError: false,
            loginErrorMessage: 'Username or password did not match.'
        }
    }

    handleFromInputUpdate = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
            loginError: false
        })
    }

    handleLoginFormSubmit = async (e) => {
        e.preventDefault()
        const {loginUsername, loginPassword} = this.state;
        try{
            const res = await axios.post('/auth/login', {loginUsername, loginPassword})
            this.props.updateUsername(loginUsername)
            this.props.updateUserId(res.data.user_id)
            this.props.history.push('./info')
        }catch(err){
            this.setState({loginUsername: '', loginPassword: '', loginError: true})
        }
    }

    render(){
        return(
            <>
            <h1>Login</h1>
            <form onSubmit={this.handleLoginFormSubmit}>
                <input type='text' 
                name='loginUsername' 
                placeholder='username' 
                value={this.state.loginUsername}
                onChange={this.handleFromInputUpdate} />
                <input type='text'
                name='loginPassword'
                placeholder='password'
                value={this.state.loginPassword}
                onChange={this.handleFromInputUpdate} />
                <button>Login</button>
            </form>
            {this.state.loginError && <h3>{this.state.loginErrorMessage}</h3>}
            </>
        )
    }
}

const mapDispatchToProps = {
    updateUserId,
    updateUsername
}

export default connect(null, mapDispatchToProps)(withRouter(LoginForm))