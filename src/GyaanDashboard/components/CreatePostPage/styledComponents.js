import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const StyledGyaanDashboard = styled.div`
   ${tw`flex items-start`};
`

const StyledRightSide = styled.div`
   width: 80%;
   flex-grow: 1;
   position: absolute;
   left: 20%;
`
export { StyledGyaanDashboard, StyledRightSide }
