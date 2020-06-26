import styled from '@emotion/styled'
import tw from 'tailwind.macro'
interface Props{
   isAuthor:boolean
}
const StyledWrapper = styled.div<Props>`
   ${tw`flex `};
   flex-direction: ${props => (props.isAuthor ? 'column' : 'row')};
`

const StyledDate = styled.p`
   ${tw`flex `};
`
const StyledName = styled.p<Props>`
   ${tw`flex `};
   flex-direction: ${props => (props.isAuthor ? 'column' : 'row')};
`
export { StyledWrapper, StyledDate, StyledName }
