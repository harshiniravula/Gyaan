import React from 'react'
import BlueTick from '../../../Common/Icons/BlueTick'
import Close from '../../../Common/Icons/Close'
import colors from '../../../themes/Colors.json'
import Request from '../Request'
import { StyledRequest, StyledName, StyledButtons } from './styledComponents'
class Requests extends React.Component {
   render() {
      const {
         username,
         onAcceptRequest,
         onRejectRequest
      } = this.props.request;
      return (
         <StyledRequest>
            <StyledName>{username}</StyledName>
            <StyledButtons>
               <Close onClick={onRejectRequest}/>
               <BlueTick onClick={onAcceptRequest}/>
            </StyledButtons>
         </StyledRequest>
      )
   }
}
export default Requests
