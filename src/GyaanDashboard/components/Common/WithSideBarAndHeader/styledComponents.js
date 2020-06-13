import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const StyledGyaanDashboard = styled.div `
   ${tw`flex items-start`};
`

const StyledPostsSection = styled.div ``

const StyledRightSide = styled.div `
   width: 82%;
   flex-grow: 1;
   position: absolute;
   left: 18%;
`
export { StyledGyaanDashboard, StyledRightSide, StyledPostsSection }
