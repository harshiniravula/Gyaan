import React from 'react'
import { render } from '@testing-library/react'

/*global expect,jest*/

import WithToggle from '.'
window.addEventListener = jest.fn()

describe('WithWindow hoc test cases ', () => {
   it('to add an event listener for resize', () => {
      const component = <p>hiii</p>
      render(<WithToggle children={() => <div>{component}</div>} />)
   })
})
