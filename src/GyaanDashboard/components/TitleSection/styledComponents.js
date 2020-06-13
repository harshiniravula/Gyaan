import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const StyledTitleSection = styled.div `
   ${tw`flex p-5`};
   border-bottom: 1px solid lightgray;
`
const StyledHeader = styled.div `
   ${tw`flex justify-between items-center`};
`
const StyledRightPart = styled.div `
   ${``};
   flex-grow: 1;
`
const StyledTags = styled.div `
   ${tw`flex items-center`};
`

const StyledRight = styled.div `
   ${tw`flex items-center`};
`
const StyledFooter = styled.div `
   ${tw`flex justify-between items-center`};
`
const StyledPostTitle = styled.h1 `
   ${tw``};
`

const StyledPostContent = styled.p `
   ${tw `text-sm`};
`

export {
   StyledTitleSection,
   StyledHeader,
   StyledRightPart,
   StyledTags,
   StyledFooter,
   StyledRight,
   StyledPostTitle,
   StyledPostContent
}
