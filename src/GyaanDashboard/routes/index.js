import React from 'react'
import { Route } from 'react-router-dom'
import GyaanDashboardRoute from './GyaanDashboardRoute'
import FollowingDomainRoute from './FollowingDomainRoute'
import CreatePostRoute from './CreatePostRoute'
import PostDisplayRoute from './PostDisplayRoute'
import {
   GYAAN_PATH,
   FOLLOWING_DOMAIN_PATH,
   CREATE_POST_PATH,
   POST_PATH
} from '../constants/PathName'

export const Routes = [
   {
      path: GYAAN_PATH,
      component: GyaanDashboardRoute
   },
   {
      path: FOLLOWING_DOMAIN_PATH,
      component: FollowingDomainRoute
   },
   {
      path: CREATE_POST_PATH,
      component: CreatePostRoute
   },
   {
      path: POST_PATH,
      component: PostDisplayRoute
   }
]
