import React from 'react'
import { render } from '@testing-library/react'
import { Router } from 'react-router-dom'
/*global expect,jest*/

import Requests from '.'

describe('Request', () => {
   it('should render Request', () => {
      const onAcceptRequest = jest.fn()
      const onRejectRequest = jest.fn()
      const { getByTestId } = render(
         <Requests
            domainRequestedUsersCount={2}
            domainRequestedUsers={[
               {
                  userId: 1,
                  username: 'harshi',
                  onAcceptRequest,
                  onRejectRequest
               },
               {
                  userId: 2,
                  username: 'harshi',
                  onAcceptRequest,
                  onRejectRequest
               }
            ]}
         />
      )
      expect(getByTestId('requests')).toBeInTheDocument()

      expect(getByTestId(`request${1}`)).toBeInTheDocument()
   })
})
