import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const StyledLogo = styled.img`
   ${tw`my-2`};
   height: ${props => props.size};
   width: ${props => props.size};
`
