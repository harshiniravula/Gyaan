import React from 'react'
import {} from './styledComponents'
class Requests extends React.Component {
   render() {
      const { domainRequestedUsersCount, domainRequestedUsers } = this.props
      console.log(domainRequestedUsersCount, domainRequestedUsers)
      return <div>Requests</div>
   }
}
export default Requests
