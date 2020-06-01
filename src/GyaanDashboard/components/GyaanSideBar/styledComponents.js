import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const StyledSideBarWrapper = styled.div `
    ${tw `flex flex-col border border-gray-500 p-2`};
    width:20%;
    height:100vh;
    position:sticky;
`;

const StyledAllDomains = styled.p `
    ${tw `text-sm`};
`;
export {
    StyledSideBarWrapper,
    StyledAllDomains
}
