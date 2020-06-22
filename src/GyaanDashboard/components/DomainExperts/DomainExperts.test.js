import React from 'react'
import { render } from '@testing-library/react'

/*global expect,jest*/

import DomainExperts from '.'

describe('DomainExperts testcases', () => {

   it('should render DomainExperts', () => {


      const { getByText, debug } = render(
         <DomainExperts
           domainExperts={
            [{
                id: 1,
                profilePic: 'image',
                name: 'harshi'
            }, {
                id: 2,
                profilePic: 'image',
                name: 'moksha'
            }]}
         />
      )
      expect(getByText('DOMAIN EXPERTS')).toBeInTheDocument();
   })


})
