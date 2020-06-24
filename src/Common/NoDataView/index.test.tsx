import React from 'react'
import { render } from '@testing-library/react'

/*global expect,jest*/

import NoDataView from '.'

describe('NoDataView testcases', () => {
   it('should render NoDataView', () => {
      const { getByText } = render(<NoDataView />)
      expect(getByText('No data found!')).toBeInTheDocument()
   })
})
