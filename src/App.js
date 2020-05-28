import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'

import HomePage from './components/HomePage'
import Page1 from './components/Page1'
import { AuthRoutes } from './components/Authentication/routes'
import { GyaanRoute } from './components/GyaanDashboard/routes'
import authStore from './components/Authentication/stores'
import gyaanStore from './components/GyaanDashboard/stores'

import './App.css'

const App = () => {
   return (
      <Provider authStore={authStore} gyaanStore={gyaanStore}>
         <Router basename={process.env.PUBLIC_URL}>
            <Switch>
               {AuthRoutes}
               {GyaanRoute}
               <Route exact path='/page-1'>
                  <Page1 />
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
