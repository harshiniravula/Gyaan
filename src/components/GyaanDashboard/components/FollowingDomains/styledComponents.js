import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const StyledListTitle = styled.div `
    ${tw `flex text-sm justify-between items-center  p-2`};
`;

const StyledTitle = styled.p `
    ${tw `text-sm`};
`;
const StyledListItem = styled.li `
    ${tw `text-sm`};
    list-style-type:none;
`;
const StyledList = styled.ul `
    ${tw `text-sm`};
`;
export {
    StyledListTitle,
    StyledTitle,
    StyledListItem,
    StyledList
}
