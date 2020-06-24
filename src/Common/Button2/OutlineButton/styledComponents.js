import styled from '@emotion/styled'
import tw from 'tailwind.macro'

import BaseButton from '../BaseButton'

export const StyledOutlineBtn = styled(BaseButton)`
   background: white;
   :disabled {
      opacity: 0.7;
   }
   border: 1px solid grey;
`
