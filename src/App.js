import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'

import HomePage from './components/HomePage'
import Page1 from './components/Page1'
import { AuthRoutes } from './components/Authentication/routes'
import authStore from './components/Authentication/stores'
import gyaanStores from './components/GyaanDashboard/stores'
import AllDomainsPostsRoute from './components/GyaanDashboard/routes/AllDomainsPostsRoute'
import FollowingDomainsPostsRoute from './components/GyaanDashboard/routes/FollowingDomainsPostsRoute'
import { ProtectedRoute } from './components/common/routes/ProtectedRoute'
import { Routes } from './components/common/routes/Routes'

import './App.css'

const App = () => {
   return (
      <Provider authStore={authStore} {...gyaanStores}>
         <Router basename={process.env.PUBLIC_URL}>
            <Switch>
               {AuthRoutes}

               {Routes.map(route => {
                  return (
                     <ProtectedRoute
                        exact
                        path={route.path}
                        key={route.path}
                        component={route.component}
                     />
                  )
               })}

               <Route exact path='/page-1'>
                  <Page1 />
               </Route>
               <Route exact path='/gyaan/allDomains'>
                  <AllDomainsPostsRoute />
               </Route>
               <Route exact path='/gyaan/followingDomains/:domainId'>
                  <FollowingDomainsPostsRoute />
               </Route>
               <Route path='/'>
                  <HomePage />
               </Route>
            </Switch>
         </Router>
      </Provider>
   )
}

export default App
