import React from 'react'
import { render } from '@testing-library/react'

/*global expect*/

import Close from '.'

describe('close icon', () => {
   it('should render close icon', () => {
      const { getByTestId } = render(<Close />)

      expect(getByTestId('close')).toBeInTheDocument()
   })
})
