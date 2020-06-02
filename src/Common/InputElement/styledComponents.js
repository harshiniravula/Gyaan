import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const Input = styled.input`
   ${tw`p-2 font-normal text-black `};
   border-radius: 2px;
   border: 1px solid ${props => props.borderAndTextColors.borderColor};
   color: ${props => props.borderAndTextColors.color};

   width: ${props => {
      if (props.size) {
         return props.size
      }
      return '100%'
   }};
`
