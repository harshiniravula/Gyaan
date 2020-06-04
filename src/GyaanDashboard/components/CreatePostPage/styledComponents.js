import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const StyledPostSection = styled.div`
   ${tw`m-8 p-2 border border-gray-500`};
   height: 80vh;
`

const StyledTextArea = styled.textarea`
   ${tw`mx-3 bg-white w-full text-gray-500 `};
   height: 55vh;
   overflow-y: scroll;
`
const StyledFooter = styled.div`
   ${tw`flex justify-end items-center`};
`
export { StyledPostSection, StyledTextArea, StyledFooter }
