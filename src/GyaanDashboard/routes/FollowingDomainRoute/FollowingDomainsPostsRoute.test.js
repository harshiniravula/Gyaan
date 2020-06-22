import React from 'react'
/*global jest,expect*/
import { render, waitFor, fireEvent } from '@testing-library/react'
import { Route, MemoryRouter } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { Provider } from 'mobx-react';

import GyaanAPI from '../../services/GyaanService/GyaanFixture'
import GyaanStore from '../../stores/GyaanStore'

import FollowingDomainsPostsRoute from '.'
import { GYAAN_PATH, FOLLOWING_DOMAIN_PATH } from '../../constants/PathName'


describe('FollowingDomainsPostsRoute Tests', () => {
    let gyaanAPI
    let gyaanStore

    beforeEach(() => {
        gyaanAPI = new GyaanAPI()
        gyaanStore = new GyaanStore(gyaanAPI)
    })

    afterEach(() => {
        jest.resetAllMocks()
    })

    it('should render FollowingDomainsPostsRoute ', async() => {
        const onClickPost = jest.fn();

        const history = createMemoryHistory();
        const { getByTestId, getByText, debug } = render(

            <Provider gyaanStore={gyaanStore}>
            <MemoryRouter initialEntries={['/gyaan/followingDomains/1']}>
      <Route path='/gyaan/followingDomains/:domainId' gyaanStore={gyaanStore} >
        <FollowingDomainsPostsRoute history={history} 
            onClickPost={onClickPost} />
      </Route>
    </MemoryRouter>
    </Provider>
        )
        await gyaanStore.getGyaanDomainData();
        expect(getByTestId('headerAndSidebar')).toBeInTheDocument();

        await gyaanStore.followingDomains.find(domain => domain.domainId === 1).getPosts();
        await gyaanStore.followingDomains.find(domain => domain.domainId === 1).getDomainDetails();
        expect(getByTestId('followingDomainPage')).toBeInTheDocument();


        const leaveBtn = getByText('Leave');
        fireEvent.click(leaveBtn);
        waitFor(() => {
            expect(leaveBtn).not.toBeInTheDocument();
        })
    })



})
