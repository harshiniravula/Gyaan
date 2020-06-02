import React from 'react'

import { StyledBtn } from './styledComponents'
class Button extends React.Component {
   static kind = {
      primary: {
         background: '#2b6cb0',
         color: 'white'
      },
      secondary: {
         background: '#f2f2f2',
         color: 'black'
      },
      tertiary: {
         background: '#48bb78',
         color: 'white'
      },
      warning: {
         background: '#fed7d7',
         color: 'red'
      }
   }
   static size = {
      small: {
         width: '40px',
         text: '14px'
      },
      medium: {
         width: '50px',
         text: '18px'
      },
      large: {
         width: '170px',
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

   render() {
      const { kind, size, onClick, shape } = this.props

      return (
         <StyledBtn size={size} onClick={onClick} kind={kind} shape={shape}>
            {this.props.children}
         </StyledBtn>
      )
   }
}
export default Button
