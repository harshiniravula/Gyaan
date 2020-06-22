
import React from 'react'
import { render } from '@testing-library/react'

/*global expect*/

import Search from '.'

describe('Search icon', () => {

   it('should render Search icon', () => {

      const { getByTestId } = render(
         <Search />
      )

      expect(getByTestId('search')).toBeInTheDocument()
   })


})
