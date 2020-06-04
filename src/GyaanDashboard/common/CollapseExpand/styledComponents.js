import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const StyledContainer = styled.div`
   ${tw`flex justify-center flex-col bg-gray-400  p-2 items-center`};
   width: 100vw;
`
const StyledLabel = styled.label`
   ${tw``};
`
const StyledHeading = styled.p`
   ${``};
   font-size: 20px;
`
const StyledBtn = styled.button`
   ${tw`bg-blue-500 p-2 m-1 text-white`};
   border-radius: 5%;
`
const StyledExpand = styled.div`
   ${tw``};
`
const StyledList = styled.ul`
   ${tw``};
   list-style-type: none;
`
const StyledItem = styled.li`
   ${tw``};
`
const StyledExpandContainer = styled.div`
   ${tw`flex justify-center`};
`
export {
   StyledContainer,
   StyledBtn,
   StyledHeading,
   StyledLabel,
   StyledExpand,
   StyledList,
   StyledItem,
   StyledExpandContainer
}
