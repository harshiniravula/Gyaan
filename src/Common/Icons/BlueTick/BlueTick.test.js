import React from 'react'
import { render } from '@testing-library/react'

/*global expect*/

import BlueTick from '.'

describe('SignInForm', () => {

   it('should render typed password', () => {
      const password = 'test-password'
      const { getByTestId } = render(
         <BlueTick />
      )
      
      expect(getByTestId('image')).toBeInTheDocument()
   })

   
})
