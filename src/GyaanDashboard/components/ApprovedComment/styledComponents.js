import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const StyledApprovedComment = styled.div`
   ${tw`p-4`};
`

const StyledFooter = styled.div`
   ${tw`ml-10 flex justify-between my-2 items-center`};
`
const StyledApproved = styled.div`
   ${tw`flex mx-2 justify-end items-center`};
   font-size: 12px;
`
const StyledRight = styled.div`
   ${tw`flex`};
   flex-basis: auto;
`
const StyledLeft = styled.div`
   ${tw`flex items-center`}
`
const StyledName = styled.p`
   ${tw`text-indigo-500 mx-2`};
   font-size: 12px;
`

export {
   StyledApprovedComment,
   StyledFooter,
   StyledApproved,
   StyledRight,
   StyledLeft,
   StyledName
}
