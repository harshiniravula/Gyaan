import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const StyledPostDomain = styled.div`
   ${tw`flex items-center`};
`
const StyledDomainName = styled.p`
   ${tw`font-semi-bold`};
   font-size: ${props => (props.isTitle ? '24px' : '14px')};
`

export { StyledPostDomain, StyledDomainName }
