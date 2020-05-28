import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const StyledSideBarWrapper = styled.div `
    ${tw `flex flex-col border border-black p-2`};
    width:15%;
    height:100vh;
`;

const StyledAllDomains = styled.p `
    ${tw `text-sm`};
`;
export {
    StyledSideBarWrapper,
    StyledAllDomains
}
