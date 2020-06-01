import React from 'react'
import { Route } from 'react-router-dom'
import GyaanDashboardRoute from './GyaanDashboardRoute';
import FollowingDomainRoute from './FollowingDomainRoute';
import {
    GYAAN_PATH,
    FOLLOWING_DOMAIN_PATH
}
from '../constants/PathName';

export const Routes = [{
        path: GYAAN_PATH,
        component: GyaanDashboardRoute
    },

    {
        path: FOLLOWING_DOMAIN_PATH,
        component: FollowingDomainRoute
    }

]
