import React from 'react'
/*global jest,expect*/
import { render, fireEvent, waitFor } from '@testing-library/react'
import { Router, withRouter, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { Provider } from 'mobx-react'

import {
   GYAAN_PATH,
   CREATE_POST_PATH,
   POST_PATH
} from '../../constants/PathName'

import {
   goToGyaanHome,
   goToPostPage,
   goToSpecificDomain,
   goToSpecificPostInSpecificDomain
} from './NavigationUtils'

const LocationDisplay = withRouter(({ location }) => (
   <div data-testid='location-display'>{location.pathname}</div>
))
const FirstPage = withRouter(({ location }) => (
   <div data-testid='location-display'>{location.pathname}</div>
))

describe('NavigationUtils testcases', () => {
   it('should test home page', () => {
      const history = createMemoryHistory()
      const route = GYAAN_PATH
      history.push(route)

      const { getByRole, queryByRole, getByTestId } = render(
         <Provider>
            <Router history={history}>
               <Route path={GYAAN_PATH}>
                  <FirstPage />
               </Route>
               <Route path={GYAAN_PATH}>
                  <LocationDisplay />
               </Route>
            </Router>
         </Provider>
      )
   })
})
