import React from 'react'
/*global jest,expect*/
import { render, waitFor, fireEvent } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import GyaanAPI from '../../services/GyaanService/GyaanFixture'
import GyaanStore from '../../stores/GyaanStore'

import CreatePostRoute from '.'

describe('CreatePostRoute Tests', () => {
   let gyaanAPI
   let gyaanStore

   beforeEach(() => {
      gyaanAPI = new GyaanAPI()
      gyaanStore = new GyaanStore(gyaanAPI)
   })

   afterEach(() => {
      jest.resetAllMocks()
   })

   it('should render create post route ', async () => {
      const {
         getByTestId,
         getByPlaceholderText,
         debug,
         getByRole,
         getByText,
         getAllByPlaceholderText
      } = render(
         <Router history={createMemoryHistory()}>
            <CreatePostRoute gyaanStore={gyaanStore} />
         </Router>
      )
      expect(getByTestId('headerAndSidebar')).toBeInTheDocument()
      await gyaanStore.getGyaanDomainData()
      const titleField = getByPlaceholderText('Title')
      const descriptionFiled = getByPlaceholderText('Topic Description')
      const submitBtn = getByTestId('submitBtn')

      fireEvent.change(titleField, { target: { value: 'new title' } })
      fireEvent.change(descriptionFiled, {
         target: { value: 'new tolic description' }
      })
      //expect(submitBtn.disabled).toBe(true)

      await gyaanStore.followingDomains
         .find(domain => domain.domainId === 1)
         .getTags()
   })
})
