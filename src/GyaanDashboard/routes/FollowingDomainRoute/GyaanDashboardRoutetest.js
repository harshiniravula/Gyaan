import React from 'react'
/*global jest,expect*/
import { render, fireEvent, waitFor } from '@testing-library/react'

import { Provider } from 'mobx-react'
import { Router, withRouter, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import { SIGN_IN_PATH } from '../../../Authentication/constants/PathName'
import { PRODUCTS_PATH } from '../../constants/PathName'

const LocationDisplay = withRouter(({ location }) => (
   <div data-testid='location-display'>{location.pathname}</div>
))

import {
   API_SUCCESS,
   API_FAILED,
   API_FETCHING,
   API_INITIAL
} from '@ib/api-constants'

import GyaanService from '../../services/ProductsService/GyaanAPI'
import GyaanStore from '../../stores/GyaanStore'
import getECommerceAPIResponse from '../../fixtures/getECommerceAPIResponse.json'

import ProductsRoute from '.'
import AuthStore from '../../../Authentication/stores/AuthStore'

describe('ProductsRoute Tests', () => {
   let gyaanService
   let gyaanStore
   let authStore

   beforeEach(() => {
      gyaanService = new GyaanService()
      gyaanStore = new GyaanStore(gyaanService)
      authStore = new AuthStore()
   })

   afterEach(() => {
      jest.resetAllMocks()
   })

   it('onClick sign out button to empty the stores', () => {
      const history = createMemoryHistory()
      const route = PRODUCTS_PATH
      history.push(route)

      const { queryByTestId, getByTestId } = render(
         <Provider authStore={authStore} productsStore={productsStore}>
            <Router history={history}>
               <Route path={PRODUCTS_PATH}>
                  <ProductsRoute />
               </Route>
               <Route path={SIGN_IN_PATH}>
                  <LocationDisplay />
               </Route>
            </Router>
         </Provider>
      )
   })
})
