import React from 'react'
import { StyledAvatar } from './styledComponents'
import strings from '../i18n/Strings.json'

class Avatar extends React.Component {
   static imageSize = {
      small: '35px',
      medium: '45px',
      large: '70px',
      defaultSize: '20px'
   }

   static borderType = {
      rounded: '50%',
      curved: '5%',
      default: '0%'
   }

   render() {
      const { borderType, size, alt, ...other } = this.props
      return (
         <StyledAvatar
            {...other}
            alt={alt ? alt : strings.altText}
            borderRadius={borderType}
            size={size}
         />
      )
   }
}

export default Avatar
