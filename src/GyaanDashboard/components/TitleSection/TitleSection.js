import React from 'react'

import Avatar from '../../../Common/Avatar'
import Tag from '../../common/Tag'
import PostDomain from '../../common/PostDomain'
import strings from '../../i18n/Strings.json'
import PostedAt from '../../common/PostedAt'
import ReactionIcon from '../../common/ReactionIcon'
import CommentIcon from '../../common/CommentIcon'

import {
   StyledTitleSection,
   StyledHeader,
   StyledRightPart,
   StyledTags,
   StyledFooter,
   StyledRight,
   StyledPostTitle
}
from './styledComponents'

class TitleSection extends React.Component {
   render() {
      const {
         domainName,
         tags,
         postedBy,
         postedAt,
         reactionsCount,
         commentsCount,
         isReacted,
         postTitle,
         domainPic
      } = this.props
      return (
         <StyledTitleSection>
            <Avatar
               src={postedBy.profilePic}
               borderType={Avatar.borderType.rounded}
               size={Avatar.imageSize.small}
            />
            <StyledRightPart>
               <StyledHeader>
                  <PostedAt
                     name={postedBy.username}
                     date={postedAt}
                     isAuthor={true}
                  />

                  <PostDomain
                     isTitle={false}
                     domainPic={domainPic}
                     domainName={domainName}
                  />
               </StyledHeader>

               <StyledPostTitle>{postTitle}</StyledPostTitle>

               <StyledFooter>
                  <StyledTags>
                     {tags.map((tag,index) => (
                        <Tag
                           key={tag.tagId}
                           color={[255-(index+1)*100,100,(index+1)*100]}
                           id={tag.id}
                           name={tag.tagName}
                        />
                     ))}
                  </StyledTags>

                  <StyledRight>
                     <ReactionIcon
                        isReacted={isReacted}
                        count={`${reactionsCount} ${strings.Reactions}`}
                     />

                     <CommentIcon
                        count={`${commentsCount} ${strings.Comments}`}
                     />
                  </StyledRight>
               </StyledFooter>
            </StyledRightPart>
         </StyledTitleSection>
      )
   }
}
export default TitleSection
