import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/forms/Login'
import LoginForm from './components/forms/LoginForm'

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component= {() => (
            <Login>
                <LoginForm/>
            </Login>
        )} />
    </Switch>
)