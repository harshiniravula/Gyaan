import React from 'react'

import { StyledTag } from './styledComponents'
import SvgComponent from "../../../Common/Icons/Tag"
interface Props{
   color:any
   name:string
   id?:number
}
class Tag extends React.Component<Props> {
   render() {
      const { color, name } = this.props
      return (
         <StyledTag color={color}>
           <SvgComponent/> &nbsp;&nbsp;{name}
         </StyledTag>
      )
   }
}
export default Tag
