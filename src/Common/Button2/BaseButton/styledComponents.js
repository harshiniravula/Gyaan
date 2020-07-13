import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const StyledBaseBtn = styled.button`
   ${tw`text-white p-2`};
   background: blue;
   :disabled {
      cursor: not-allowed;
      background: grey;
   }
`
