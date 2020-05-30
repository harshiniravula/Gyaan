import React from 'react'
import { Route } from 'react-router-dom'
import GyaanDashboardRoute from './GyaanDashboardRoute';
import AllDomainsPostsRoute from './AllDomainsPostsRoute';
import FollowingDomainsPostsRoute from './FollowingDomainsPostsRoute';
import { GYAAN_PATH } from '../constants/PathName';
import { ALL_DOMAINS_PATH } from '../constants/PathName';
import { FOLLOWING_DOMAIN_PATH } from '../constants/PathName';

export const Routes = [{
        path: GYAAN_PATH,
        component: GyaanDashboardRoute
    },
    {
        path: ALL_DOMAINS_PATH,
        component: AllDomainsPostsRoute
    },
    {
        path: FOLLOWING_DOMAIN_PATH,
        component: FollowingDomainsPostsRoute
    }

]
