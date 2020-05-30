import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const StyledBtn = styled.button `
   ${tw`text-white flex items-center justify-center p-2 m-2`};
   text-align:center;
   width:${props=>props.size?props.size:'100%'};
   height:100%;
   background: ${props => {
      if (props.btnType === 'primary') {
         return ' #0b69ff'
      } else if (props.btnType === 'outline') {
         return 'white'
      } else if (props.btnType === 'secondary') {
         return '#'
      } else {
         return 'black'
      }
   }};
   border: ${props => {
      if (props.btnType === 'primary') {
         return 'none'
      } else if (props.btnType === 'outline') {
         return '1px solid black'
      } else if (props.btnType === 'secondary') {
         return 'none'
      } else {
         return '1px solid black'
      }
   }};
   color: ${props => {
      if (props.btnType === 'secondary') {
         return '#0b69ff'
      } else {
         return '#fff'
      }
   }};
`
