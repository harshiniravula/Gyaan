import React from 'react'
import { AiFillTag } from 'react-icons/ai'

import { StyledTag } from './styledComponents'

class Tag extends React.Component {
   render() {
      const { color, name } = this.props;
      return (
         <StyledTag color={color}>
            <AiFillTag color={color} /> &nbsp;&nbsp;{name}
         </StyledTag>
      )
   }
}
export default Tag
