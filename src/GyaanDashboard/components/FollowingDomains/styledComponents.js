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
   ${tw`text-sm my-1`};

   list-style-type: none;
   cursor: pointer;
   background: ${props => (props.isSelected ? '#90cdf4' : 'white')};
   color: ${props => (props.isSelected ? '#2b6cb0' : 'black')};
`
const StyledList = styled.ul`
   ${tw`text-sm`};
`
const StyledWrapper = styled.div`
   ${tw`my-4`};
`
export {
   StyledListTitle,
   StyledTitle,
   StyledListItem,
   StyledList,
   StyledWrapper
}
