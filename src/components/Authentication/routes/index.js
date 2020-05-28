import React from 'react'
import { Route } from 'react-router-dom'
import LoginRoute from './LoginRoute'
import SignUpRoute from './SignUpRoute'
import { LOGIN_PATH, SIGN_UP_PATH } from '../constants/PathName'

export const AuthRoutes = [
   <Route path={LOGIN_PATH} key={LOGIN_PATH} component={LoginRoute} />,
   <Route path={SIGN_UP_PATH} key={SIGN_UP_PATH} component={SignUpRoute} />
]
//export default routes;
