import React from 'react';
import { Route } from 'react-router-dom';
import SignInRoute from './SignInRoute';
import { SIGN_IN_PATH } from '../constants/PathName';

export const AuthRoutes = [
    <Route path={SIGN_IN_PATH} key={SIGN_IN_PATH}component={SignInRoute} />
];
//export default routes;
