import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const Input = styled.input `
   ${tw`w-full p-2 font-normal text-black`};

   margin-bottom: 7%;
   margin-top: 2%;
   flex-grow: 1;
   border-radius: 2px;

   background-color: white;
   border: 1px solid
      ${props => {
         if (props.error) {
            return 'red'
         }
         return 'black'
      }};
`
