import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { LOGIN_PATH } from '../../../Authentication/constants/PathName';
import { getAccessToken } from '../../../../utils/StorageUtils';
export const ProtectedRoute = ({ component, ...other }) => {
    console.log(getAccessToken())
    return (getAccessToken() ? <Route {...other}   component={component}/> :
        <Redirect to={LOGIN_PATH}/>);
};
