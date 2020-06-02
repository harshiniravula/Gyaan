import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const StyledApprovedComment = styled.div`
   ${tw`p-4`};
`

const StyledFooter = styled.div`
   ${tw`ml-20 flex justify-between items-center`};
`
const StyledApproved = styled.div`
   ${tw`flex justify-end items-center`};
   font-size: 14px;
`
const StyledRight = styled.div`
   ${tw`flex`};
   flex-basis: auto;
`

export { StyledApprovedComment, StyledFooter, StyledApproved, StyledRight }
