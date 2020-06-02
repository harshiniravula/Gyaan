import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const StyledSideBarWrapper = styled.div`
   ${tw`flex flex-col border border-gray-500  bg-white p-2`};
   width: 20%;
   height: 100vh;
   position: fixed;
   left: 0;
   top: 0;
`

const StyledAllDomains = styled.p`
   ${tw`text-sm`};
   cursor: pointer;
`
export { StyledSideBarWrapper, StyledAllDomains }
