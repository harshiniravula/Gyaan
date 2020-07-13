import React from 'react'
/*global jest,expect*/
import { render, waitFor } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import GyaanAPI from '../../services/GyaanService/GyaanFixture'
import GyaanStore from '../../stores/GyaanStore'

import GyaanDashboardRoute from '.'

describe('LoginRoute Tests', () => {
   let gyaanAPI
   let gyaanStore

   beforeEach(() => {
      gyaanAPI = new GyaanAPI()
      gyaanStore = new GyaanStore(gyaanAPI)
   })

   afterEach(() => {
      jest.resetAllMocks()
   })

   it('should render GyaanDashboardRoute ', async () => {
      const onClickPost = jest.fn()
      const { getByTestId } = render(
         <Router history={createMemoryHistory()}>
            <GyaanDashboardRoute
               onClickPost={onClickPost}
               gyaanStore={gyaanStore}
            />
         </Router>
      )
      jest.spyOn(gyaanStore, 'getDomainPosts')
      jest.spyOn(gyaanStore, 'setSelectedDomainId')
      expect(getByTestId('headerAndSidebar')).toBeInTheDocument()

      waitFor(() => {
         expect(getByTestId('homePage')).toBeInTheDocument()
         expect(gyaanStore.getDomainPosts).toBeCalled()
         expect(gyaanStore.setSelectedDomainId).toBeCalled()
      })
   })
})
