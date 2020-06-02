import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import React from 'react'
import { StyledReaction } from './styledComponents'
class Reaction extends React.Component {
   render() {
      const { isReacted, count } = this.props
      //console.log("color", color);
      return (
         <StyledReaction>
            {isReacted ? <AiFillHeart color={'red'} /> : <AiOutlineHeart />}

            {count}
         </StyledReaction>
      )
   }
}
export default Reaction
