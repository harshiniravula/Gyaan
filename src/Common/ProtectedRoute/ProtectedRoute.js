import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { LOGIN_PATH } from '../../Authentication/constants/PathName'
import { getAccessToken } from '../../utils/StorageUtils'
export const ProtectedRoute = ({ component: Component, path, ...other }) => {
   return getAccessToken() ? (
      <Route
         data-testid='component'
         {...other}
         exact
         path={path}
         key={other.location.pathname}
         render={props => <Component {...props} {...other} />}
      />
   ) : (
      <Redirect to={LOGIN_PATH} />
   )
}
