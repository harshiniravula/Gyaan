///*global await*/
import React from 'react'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'
import { Redirect, withRouter } from 'react-router-dom'
import GyaanDashboard from '../../components/GyaanDashboard'
import Strings from '../../i18n/Strings.json'

@inject('gyaanStore')
@observer
class GyaanDashboardRoute extends React.Component {

   constructor(props) {
      super(props)
   }

   componentDidMount() {
      this.props.gyaanStore.getGyaanDomainData({})
   }

   componentWillUnmount() {

   }


   render() {
      return (
         <GyaanDashboard />
      )
   }
}
export default withRouter(GyaanDashboardRoute)
