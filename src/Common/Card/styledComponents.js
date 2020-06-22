import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const StyledCard = styled.button `
   ${tw`bg-white my-4 p-2`};
   ${props=>{
      return {
         cursor:props.isClickable?'pointer':'none',
      }
   }};
  
   
`
