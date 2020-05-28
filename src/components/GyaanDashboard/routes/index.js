import React from 'react'
import { Route } from 'react-router-dom'
import GyaanDashboardRoute from './GyaanDashboardRoute'
import { GYAAN_PATH } from '../constants/PathName'

export const GyaanRoute = [
   <Route path={GYAAN_PATH} key={GYAAN_PATH} component={GyaanDashboardRoute} />,

]
//export default routes;
