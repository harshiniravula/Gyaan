import React from 'react'

import { Typo14Gray500, Typo14Semibold } from '../../../styleGuide/Typos'
import { StyledWrapper } from './styledComponents'
interface Props{
   isAuthor:boolean
   date:string
   name:string
}
class PostedAt extends React.Component<Props> {
   render() {
      const { isAuthor, date, name } = this.props
      return (
         <StyledWrapper isAuthor={isAuthor}>
            <Typo14Semibold>{name}</Typo14Semibold>
            <Typo14Gray500>{date}</Typo14Gray500>
         </StyledWrapper>
      )
   }
}
export default PostedAt
