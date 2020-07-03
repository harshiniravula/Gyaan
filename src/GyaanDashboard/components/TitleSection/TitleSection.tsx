import React from 'react'
import { observer } from 'mobx-react'

import Avatar from '../../../Common/Avatar'
import {
   Tag,
   PostedBy
} from '../../stores/models/BasicPostModel/BasicPostModel'
import TagIcon from '../../common/Tag'
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
   StyledPostTitle,
   StyledPostContent
} from './styledComponents'

interface Props {
   domainName: string
   tags: Array<Tag>
   postedBy: PostedBy
   postedAt: string
   reactionsCount: number
   commentsCount: number
   isReacted: boolean
   postTitle: string
   postContent: string
   getCommentReactionAPIStatus: number
   onClickReaction: () => void
}
@observer
class TitleSection extends React.Component<Props> {
   onClickReaction = e => {
      e.stopPropagation()
      const { onClickReaction } = this.props
      onClickReaction()
   }
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
         postContent,
         getCommentReactionAPIStatus
      } = this.props
      return (
         <StyledTitleSection>
            <Avatar
               alt={postedBy.username}
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

                  <PostDomain isTitle={false} domainName={domainName} />
               </StyledHeader>

               <StyledPostTitle>{postTitle}</StyledPostTitle>
               <StyledPostContent>{postContent}</StyledPostContent>

               <StyledFooter>
                  <StyledTags>
                     {tags.map((tag, index) => (
                        <TagIcon
                           key={tag.tagId}
                           color={[
                              255 - (index + 1) * 100,
                              100,
                              (index + 1) * 100
                           ]}
                           id={tag.tagId}
                           name={tag.tagName}
                        />
                     ))}
                  </StyledTags>

                  <StyledRight>
                     <ReactionIcon
                        status={getCommentReactionAPIStatus}
                        onClick={this.onClickReaction}
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
