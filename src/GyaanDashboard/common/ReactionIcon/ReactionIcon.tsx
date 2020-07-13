import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import React from 'react'
import { observer } from 'mobx-react'
import { StyledReaction } from './styledComponents'
interface Props{
   isReacted:boolean
   count:string
   onClick:(e)=>void
   status?:number
}
@observer
class Reaction extends React.Component<Props> {
   render() {
      const { isReacted, count, onClick, ...other } = this.props
      return (
         <StyledReaction onClick={onClick}>
            {isReacted ? (
               <AiFillHeart {...other} color={'red'} />
            ) : (
               <AiOutlineHeart {...other} />
            )}

            {count}
         </StyledReaction>
      )
   }
}
export default Reaction
