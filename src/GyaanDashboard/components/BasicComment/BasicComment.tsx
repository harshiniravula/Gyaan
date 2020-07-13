import React from 'react'

import Avatar from "../../../Common/Avatar/Avatar"
import { Typo14Normal } from '../../../styleGuide/Typos'
import strings from '../../i18n/Strings.json'
import PostedAt from "../../common/PostedAt/PostedAt"

import { StyledBasicComment, StyledRightPart } from './styledComponents'

interface Props{
   commenter:{
      username:string 
      userId:number
      profilePic:string
   }
   commentContent:string
   commentAt:string
}
class BasicComment extends React.Component <Props>{
   render() {
      const { commenter, commentContent, commentAt } = this.props

      const { username, userId, profilePic } = commenter

      return (
         <StyledBasicComment>
            <Avatar
               alt={strings.altText}
               src={profilePic}
               borderType={Avatar.borderType.rounded}
               size={Avatar.imageSize.small}
            />

            <StyledRightPart>
               <PostedAt name={username} date={commentAt} isAuthor={false} />
               <Typo14Normal>{commentContent}</Typo14Normal>
            </StyledRightPart>
         </StyledBasicComment>
      )
   }
}

export default BasicComment
