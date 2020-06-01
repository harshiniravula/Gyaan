import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const StyledListTitle = styled.div `
    ${tw `flex text-sm justify-between items-center border border-black p-2`};
`;

const StyledReaction = styled.div `
    ${tw `text-sm flex justify-center items-center m-1`};
`;
export {
    StyledListTitle,
    StyledReaction
}
