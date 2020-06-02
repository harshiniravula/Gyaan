import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const StyledListTitle = styled.div`
   ${tw`text-xs flex justify-between items-center`};

   color: ${props => (props.isExpanded ? '#a0aec0' : 'black')};
`

const StyledTitle = styled.p`
   ${tw` `};
   cursor: pointer;
`
const StyledListItem = styled.li`
   ${tw`text-sm`};
   list-style-type: none;
   cursor: pointer;
`
const StyledList = styled.ul`
   ${tw`text-sm`};
`
const StyledWrapper = styled.div`
   ${tw`my-2`};
`
export {
   StyledListTitle,
   StyledTitle,
   StyledListItem,
   StyledList,
   StyledWrapper
}
