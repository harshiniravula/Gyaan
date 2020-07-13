import React, { lazy } from 'react'

const GyaanDashboardRoute = lazy(() => import('./GyaanDashboardRoute'))
const FollowingDomainRoute = lazy(() => import('./FollowingDomainRoute'))
const CreatePostRoute = lazy(() => import('./CreatePostRoute'))
const PostDisplayRoute = lazy(() => import('./PostDisplayRoute'))
import {
   GYAAN_PATH,
   FOLLOWING_DOMAIN_PATH,
   CREATE_POST_PATH,
   POST_PATH
} from '../constants/PathName'
// import GyaanDashboardRoute from './GyaanDashboardRoute'
// import CreatePostRoute from './CreatePostRoute'
// import PostDisplayRoute from './PostDisplayRoute'
// import FollowingDomainRoute from './FollowingDomainRoute'
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
