import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const StyledPostTitle = styled.h1`
   ${tw`text-2xl font-light`};
`

const StyledPostContainer = styled.div`
   ${tw`p-2`};
   width: 70%;
   border: 2px solid #e2e8f0;
`
const StyledRightPart = styled.div`
   ${tw``};
   width: 30%;
`
const StyledWrapper = styled.div`
   ${tw`flex flex-between items-start m-4`};
`
const StyledPostedAt = styled.p`
   ${tw`text-gray-600 text-sm`};
`
const StyledContent = styled.p`
   ${tw`text-sm`};
`

const StyledReplies = styled.div`
   ${tw`ml-6`};
`
const StyledTags = styled.ul`
   ${tw`flex items-center justify-start`};
   list-style-type: none;
`
export {
   StyledPostTitle,
   StyledPostContainer,
   StyledWrapper,
   StyledRightPart,
   StyledPostedAt,
   StyledTags,
   StyledContent,
   StyledReplies
}
