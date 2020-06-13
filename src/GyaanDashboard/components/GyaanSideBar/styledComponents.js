import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const StyledSideBarWrapper = styled.div `
   ${tw`flex flex-col  border border-gray-300  bg-white px-6`};
   width: 18%;
   height: 100vh;
   position: fixed;
   left: 0;
   top: 0;
`

const StyledAllDomains = styled.p `
   ${tw`text-sm`};
   cursor: pointer;

   color: ${props => (!props.isSelected ? '#2b6cb0' : 'black')};
`
export { StyledSideBarWrapper, StyledAllDomains }
