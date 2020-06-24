import React from 'react'
import { render } from '@testing-library/react'

/*global expect,jest*/

import DomainSection from '.'

describe('DomainSection testcases', () => {
   it('should render DomainSection', () => {
      const leaveDomain = jest.fn()
      const getDomainDetails = jest.fn()
      const { getByText, debug } = render(
         <DomainSection
            domainData={{
               domainName: 'react',
               starsCount: '10000k',
               postsCount: '10lc',
               followersCount: '10000k',
               domainPic: 'image',
               domainDescription: 'random text',
               domainExperts: [
                  {
                     id: 1,
                     profilePic: 'image',
                     name: 'harshi'
                  },
                  { id: 2, profilePic: 'image', name: 'moksha' }
               ],
               leaveDomain: leaveDomain,
               getDomainDataAPIStatus: 200,
               getDomainDataAPIError: null,
               getDomainDetails: getDomainDetails
            }}
            onClickLeaveDomain={leaveDomain}
         />
      )
      debug()

      expect(getByText('react')).toBeInTheDocument()
      // expect(getByText('select tag')).toBeInTheDocument()
   })
})
