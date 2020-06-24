import React, { Component } from 'react'

import { StyledBaseBtn } from './styledComponents'

class BaseButton extends Component {
   static defaultProps = {
      className: ''
   }

   isEnabled() {
      const { isDisabled } = this.props
      return !isDisabled
   }

   onClickBtn = () => {
      const { onClick } = this.props
      if (this.isEnabled()) {
         return { onClick: onClick }
      }
   }
   getChildren = () => {
      const { children, text } = this.props
      return children ? children : text
   }

   render() {
      const { text, isDisabled, className, btnCss } = this.props
      return (
         <StyledBaseBtn
            css={btnCss}
            {...this.onClickBtn()}
            disabled={isDisabled}
            className={className}
         >
            {this.getChildren()}
         </StyledBaseBtn>
      )
   }
}
export default BaseButton
