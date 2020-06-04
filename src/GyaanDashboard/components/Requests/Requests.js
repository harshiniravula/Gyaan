import React from 'react'
import colors from '../../../themes/Colors.json'

import Request from '../Request'
import {
   StyledRequests,
   StyledRequestsTitle,
   StyledListItem
} from './styledComponents'
class Requests extends React.Component {
   render() {
      const { domainRequestedUsersCount, domainRequestedUsers } = this.props
      console.log(domainRequestedUsers)
      return (
         <StyledRequests>
            <StyledRequestsTitle>Requests</StyledRequestsTitle>
            {domainRequestedUsersCount > 0 &&
               domainRequestedUsers.map(request => (
                  <Request
                     request={request}
                     key={request.userId}
                     onClickCancel={this.onClickCancel}
                     onClickFollow={this.onClickFollow}
                  />
               ))}
         </StyledRequests>
      )
   }
}
export default Requests
