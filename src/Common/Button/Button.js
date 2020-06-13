import React from 'react'
import colors from '../../themes/Colors.json'

import { StyledBtn } from './styledComponents'
class Button extends React.Component {

   static size = {
      small: {
         width: '40px',
         text: '14px'
      },
      medium: {
         width: '70px',
         text: '18px'
      },
      large: {
         width: '120px',
         text: '20px'
      },
      mini: {
         width: '40px',
         text: '10px'
      },
      full: {
         width: '100%',
         text: 'normal'
      }
   }

   static shape = {
      default: '0%',
      pill: '20%',
      round: '50%'
   }

   static kind = {
      primary: {
         background: colors.blue700,
         color: colors.white
      },
      secondary: {
         background: colors.gray400,
         color: colors.black
      },
      tertiary: {
         background: colors.green500,
         color: colors.white
      },
      warning: {
         background: colors.red200,
         color: colors.red
      }
   }

   render() {
      const { kind, size, shape, children, ...other } = this.props

      return (
         <StyledBtn size={size} {...other}   kind={kind} shape={shape}>
            {children}
         </StyledBtn>
      )
   }
}
export default Button
