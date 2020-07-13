import React from 'react'
import BlueTick from '../../../Common/Icons/BlueTick'
import Close from '../../../Common/Icons/Close'
import RequestModel from "../../stores/models/Request";
interface RequestProps{
   request:RequestModel
}
import { StyledRequest, StyledName, StyledButtons } from './styledComponents'
class Request extends React.Component<RequestProps> {
   render() {
      const {
         userId,
         username,
         onAcceptRequest,
         onRejectRequest
      } = this.props.request
      return (
         <StyledRequest data-testid={`request${userId}`}>
            <StyledName>{username}</StyledName>
            <StyledButtons>
               <Close onClick={onRejectRequest} />
               <BlueTick onClick={onAcceptRequest} />
            </StyledButtons>
         </StyledRequest>
      )
   }
}
export default Request
