import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const Input = styled.input `
   ${tw`p-2 font-normal text-black `};

   border-radius: 2px;

   background-color: #f8f8f8;
   border: 1px solid
      ${props => {
         if (props.error) {
            return 'red'
         }
         return '#121212'
      }};
   width:${props=>{
      if(props.size){
         return props.size;
      }
      return '100%';
   }
   };
`
