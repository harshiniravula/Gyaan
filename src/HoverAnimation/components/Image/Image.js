import React, { useState, Component } from 'react'
import { StyledImage, Image, Wrapper, LeaveBtn } from './styledComponents'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

@observer
class WrappedComponent extends Component {
   @observable isShown
   @observable isClicked
   constructor(props) {
      super(props)
      this.isShown = false
      this.isClicked = false
   }
   setIsShown = isShown => {
      this.isShown = isShown
   }

   render() {
      const { image, onClickImage } = this.props
      const { src, alt, id } = image

      return (
         <StyledImage
            onMouseEnter={() => this.setIsShown(true)}
            onMouseLeave={() => this.setIsShown(false)}
         >
            {this.isShown ? (
               <>
                  <img src={src} alt={alt} />
                  <button
                     id={id}
                     onClick={onClickImage}
                     style={{ position: 'absolute', top: '70%', right: '40%' }}
                  >
                     click
                  </button>
               </>
            ) : (
               'Hover'
            )}
         </StyledImage>
      )
   }
}

export default WrappedComponent
