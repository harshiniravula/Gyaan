import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const Input = styled.input`
   ${tw`p-2 font-normal text-black `};
   border-radius: 2px;
   border: 1px solid ${props => props.borderAndTextColors.borderColor};
   color: ${props => props.borderAndTextColors.color};
   font-size: ${props => (props.size ? props.size.fontSize : '16px')};
   width: ${props => {
      if (props.size) {
         return props.size.width
      }
      return '100%'
   }};
`
