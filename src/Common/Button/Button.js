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
      }
   }
   static size = {
      small: '20px',
      medium: '50px',
      large: '100px',

      full: '100%'
   }

   static shape = {
      default: "0%",
      pill: '20%',
      round: '50%'

   }

   render() {
      const { kind, size, onClick, shape } = this.props;

      return (
         <StyledBtn
            size={size}
            onClick={onClick}
            kind={kind}
            shape={shape}>
            {this.props.children}
         </StyledBtn>
      )
   }
}
export default Button
