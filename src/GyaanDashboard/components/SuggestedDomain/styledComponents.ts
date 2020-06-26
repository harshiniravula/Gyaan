import styled from '@emotion/styled'
import tw from 'tailwind.macro'
interface TitleProps{
   isRequested:boolean
}
const StyledDomain = styled.li`
   ${tw`my-1  flex justify-between`};
   flex-grow: 1;
   list-style-type:none;
   cursor:pointer;
   flex-wrap:wrap:

`
const StyledDomainName = styled.p``
const StyledBtn = styled.button<TitleProps>`
   font-size: 14px;
   color: ${props => (props.isRequested ? 'red' : 'blue')};
`
export { StyledDomain, StyledDomainName, StyledBtn }
