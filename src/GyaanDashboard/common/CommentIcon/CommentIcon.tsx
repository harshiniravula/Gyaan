import { MdComment } from 'react-icons/md'
import React from 'react'
import Strings from '../../i18n/Strings.json'
import { StyledComment } from './styledComponents'
type Props={
   count:string
}
class Reaction extends React.Component <Props>{
   render() {
      const { count } = this.props
      return (
         <StyledComment>
            <MdComment color={Strings.Blue} />
            {count}
         </StyledComment>
      )
   }
}
export default Reaction
