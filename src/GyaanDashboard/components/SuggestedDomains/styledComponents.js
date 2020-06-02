import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const StyledListTitle = styled.div`
   ${tw`flex justify-between items-center text-xs`};
   color: ${props => (props.isExpanded ? '#a0aec0' : 'black')};
`

const StyledTitle = styled.p`
   ${tw``};
`
const StyledListItem = styled.li`
   ${tw`text-sm`};
   list-style-type: none;
`
const StyledList = styled.ul`
   ${tw`text-sm`};
`
export { StyledListTitle, StyledTitle, StyledListItem, StyledList }
