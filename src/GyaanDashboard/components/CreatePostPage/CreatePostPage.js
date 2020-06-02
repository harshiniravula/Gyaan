import React from 'react'
import { observer } from 'mobx-react'

import GyaanSideBar from '../GyaanSideBar'
import Header from '../Header'
import CreatePostSection from '../CreatePostSection'
import { StyledGyaanDashboard, StyledRightSide } from './styledComponents'

@observer
class CreatePostPage extends React.Component {
   render() {
      const {
         followingDomains,
         suggestedDomains,
         onClickFollowingDomain,
         getGyaanDomainsAPIError,
         getGyaanDomainsAPIStatus,
         onClickAllDomains,
         onClickWritePost
      } = this.props

      return (
         <StyledGyaanDashboard>
            <GyaanSideBar
               onClickAllDomains={onClickAllDomains}
               followingDomains={followingDomains}
               getGyaanDomainsAPIError={getGyaanDomainsAPIError}
               getGyaanDomainsAPIStatus={getGyaanDomainsAPIStatus}
               suggestedDomains={suggestedDomains}
               onClickFollowingDomain={onClickFollowingDomain}
            />
            <StyledRightSide>
               <Header onClickWritePost={onClickWritePost} />

               <CreatePostSection />
            </StyledRightSide>
         </StyledGyaanDashboard>
      )
   }
}

export default CreatePostPage
