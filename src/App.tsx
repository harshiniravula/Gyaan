import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'
//import HomePage from './components/HomePage'
const HomePage = lazy(() => import('./components/HomePage'))
// import Page1 from './components/Page1'
import { AuthRoutes } from './Authentication/routes'

import authStore from './Authentication/stores'
import gyaanStores from './GyaanDashboard/stores'
import { ProtectedRoute } from './Common/ProtectedRoute'
import { Routes } from './GyaanDashboard/routes'
import './App.css'

const App = () => {
   return (
      <Provider authStore={authStore} {...gyaanStores}>
         <Suspense fallback={<div />}>
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

                  {/* <Route exact path='/page-1'>
                  <Page1 />
               </Route> */}

                  <Route path='/'>
                     <HomePage />
                  </Route>
               </Switch>
            </Router>
         </Suspense>
      </Provider>
   )
}

export default App
