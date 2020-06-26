import React from 'react'
import { render } from '@testing-library/react'

/*global expect,jest*/

import Domain from '.'

describe('Domain testcases', () => {
   it('should render Domain', () => {
      const onClickDomain = jest.fn()

      const { getByText, debug } = render(
         <Domain domain={'React'} onClickDomain={onClickDomain} id={1} />
      )
      expect(getByText('React')).toBeInTheDocument()
   })
})
