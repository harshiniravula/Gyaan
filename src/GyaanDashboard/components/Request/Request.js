import React from 'react'
import BlueTick from '../../../Common/Icons/BlueTick'
import Close from '../../../Common/Icons/Close'
import colors from '../../../themes/Colors.json'
import Request from '../Request'
import { StyledRequest, StyledName, StyledButtons } from './styledComponents'
class Requests extends React.Component {
   render() {
      const { request } = this.props
      return (
         <StyledRequest>
            <StyledName>{request.username}</StyledName>
            <StyledButtons>
               <Close />
               <BlueTick />
            </StyledButtons>
         </StyledRequest>
      )
   }
}
export default Requests
