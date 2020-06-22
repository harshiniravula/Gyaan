import React from 'react'
/*global jest,expect*/
import { render, waitFor, fireEvent } from '@testing-library/react'
import { Route, MemoryRouter } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { Provider } from 'mobx-react';

import GyaanAPI from '../../services/GyaanService/GyaanFixture'
import GyaanStore from '../../stores/GyaanStore'


import PostDisplayRoute from '.'


describe('PostDisplayRoute Tests', () => {
   let gyaanAPI
   let gyaanStore

   beforeEach(() => {
      gyaanAPI = new GyaanAPI()
      gyaanStore = new GyaanStore(gyaanAPI)
   })

   afterEach(() => {
      jest.resetAllMocks()
   })

   it('should render Post Display Route', async() => {
      const history = createMemoryHistory();
      const {
         getByTestId,
         getByPlaceholderText,
         queryByPlaceholderText,
         debug,
         getByRole,
         getByText
      } = render(


         <Provider gyaanStore={gyaanStore}>
            <MemoryRouter initialEntries={['/gyaan/followingDomains/1/posts/2']}>
      <Route path='/gyaan/followingDomains/:domainId/posts/:postId' history={history}  gyaanStore={gyaanStore} >
        <PostDisplayRoute 
             />
      </Route>
    </MemoryRouter>
    </Provider>

      )
      debug();

      await gyaanStore.getGyaanDomainData();
      expect(getByTestId('headerAndSidebar')).toBeInTheDocument();

      expect(getByTestId('detailedPostPage')).toBeInTheDocument();


   })

})
