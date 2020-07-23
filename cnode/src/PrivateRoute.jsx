

import React from 'react'
import authStore from './store/auth'
import { Route, Redirect } from 'react-router-dom'
export default function PrivateRoute(props) {
    const isLogin = authStore.isLogin
    const {path , component} = props
    if(!isLogin){
        return <Redirect to='/' /> 
    }
    return (
        <Route path={path} component={component} />
    )
}


