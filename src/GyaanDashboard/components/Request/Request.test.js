import React from 'react'
import { render } from '@testing-library/react'
import { Router } from 'react-router-dom'
/*global expect,jest*/

import Request from '.'

describe('Request', () => {

   it('should render Request', () => {
      const onAcceptRequest = jest.fn();
      const onRejectRequest = jest.fn();
      const { getByTestId } = render(
         <Request 
         request={{
         userId:2,
         username: 'harshi',
            onAcceptRequest,
            onRejectRequest}}/>
      )

      expect(getByTestId(`request${2}`)).toBeInTheDocument()
   })


})
