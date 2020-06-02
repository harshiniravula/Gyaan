import React from 'react'
import { AiOutlineFile, AiOutlineStar } from 'react-icons/ai'
import { FaRegUserCircle } from 'react-icons/fa'
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
} from './styledComponents'

class DomainSection extends React.Component {
   render() {
      const {
         domainName,
         description,
         Stars,
         following,
         domainId,
         starsCount,
         postsCount,
         followersCount,
         domainPic,
         domainDescription,
         domainExperts
      } = this.props
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
               <Button kind={Button.kind.warning} size={Button.size.mini}>
                  {strings.leave}
               </Button>
            </StyledFooter>
            <StyledHr />
         </StyledDomainSection>
      )
   }
}
export default DomainSection
