import React from 'react'
import { AiOutlineFile, AiOutlineStar } from 'react-icons/ai'
import { FaRegUserCircle } from 'react-icons/fa'
import { observer } from 'mobx-react';

import LoadingWrapperWithFailure from '../../../Common/LoadingWrapperWithFailure'
import colors from '../../../themes/Colors.json'
import Button from '../../../Common/Button'
import { Typo14Normal } from '../../../styleGuide/Typos'
import strings from '../../i18n/Strings.json'
import PostDomain from '../../common/PostDomain'
import DomainExperts from '../DomainExperts'

import {
   StyledDomainSection,
   StyledHeader,
   StyledHr,
   StyledBody,
   StyledFooter,
   StyledLeft,
   StyledCount
}
from './styledComponents'
@observer
class DomainSection extends React.Component {
   onSuccess = () => {
      const { onClickLeaveDomain } = this.props;
      onClickLeaveDomain();
   }
   leaveDomain = () => {
      const { leaveDomain } = this.props.domainData;
      leaveDomain(this.onSuccess)
   }
   renderDomainData = observer(() => {
      const {
         domainName,
         starsCount,
         postsCount,
         followersCount,
         domainPic,
         domainDescription,
         domainExperts,

      } = this.props.domainData;
      return (
         <StyledDomainSection>
            <StyledHeader>
               <PostDomain
                  domainName={domainName}
                  domainPic={domainPic}
                  isTitle={true}
               />

               <DomainExperts domainExperts={domainExperts} />
            </StyledHeader>
            <StyledBody>
               <Typo14Normal>{domainDescription}</Typo14Normal>
            </StyledBody>
            <StyledFooter>
               <StyledLeft>
                  <FaRegUserCircle color={colors.orange} />
                  <StyledCount color={colors.orange}>
                     {followersCount}
                  </StyledCount>
                  <AiOutlineFile color={colors.green} />
                  <StyledCount color={colors.green}>{postsCount}</StyledCount>
                  <AiOutlineStar color={colors.blue} />
                  <StyledCount color={colors.blue}>{starsCount}</StyledCount>
               </StyledLeft>
               <Button
               onClick={this.leaveDomain}
               kind={Button.kind.warning} size={Button.size.mini}>
                  {strings.leave}
               </Button>
            </StyledFooter>
            <StyledHr />
         </StyledDomainSection>
      )

   })
   render() {
      const {
         getDomainDataAPIStatus,
         getDomainDataAPIError,
         getDomainDetails
      } = this.props.domainData;
      return (
         <LoadingWrapperWithFailure
        apiStatus={getDomainDataAPIStatus}
        apiError={getDomainDataAPIError}
        onRetryClick={getDomainDetails}
        renderSuccessUI={this.renderDomainData}/>
      )
   }
}
export default DomainSection
