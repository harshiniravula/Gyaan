import React from 'react'
import { observer } from 'mobx-react'
import { computed } from 'mobx'
/*global fetch*/
function WithDomainsData(props) {
   @observer
   class DomainsData extends React.Component {
      constructor(props) {
         super(props)
         this.state = { domainsData: [] }
      }
      componentDidMount() {
         const { getGyaanDomainData } = props.gyaanStore
         getGyaanDomainData({})
      }
      @computed
      get getGyaanDomainsAPIStatus() {
         return this.props.gyaanStore.getGyaanDomainsAPIStatus
      }

      render() {
         const {
            followingDomains,
            suggestedDomains,
            getGyaanDomainsAPIStatus,
            getGyaanDomainsAPIError
         } = props.gyaanStore

         return props.children(
            followingDomains,
            suggestedDomains,
            getGyaanDomainsAPIStatus,
            getGyaanDomainsAPIError
         )
      }
   }
   return <DomainsData {...props} />
}

export default WithDomainsData
