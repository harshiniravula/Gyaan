import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const StyledDomainSection = styled.div `
    ${tw `m-2`};
`;
const StyledHeader = styled.header `
    ${tw `m-4 flex justify-between items-center`};

    `;
const StyledHr = styled.hr `

    color:#cbd5e0;
    margin:3%;
`;
const StyledBody = styled.div `
    ${tw `mx-12`};
`;
const StyledFooter = styled.footer `
    ${tw `m-2 flex justify-between items-center`};
`;
const StyledLeft = styled.div `
    ${tw `mx-12 flex items-center`};
`;
const StyledCount = styled.p `
    ${tw `ml-2 mr-4`};
    color:${props=>props.color};
`;
export {
    StyledDomainSection,
    StyledHeader,
    StyledHr,
    StyledBody,
    StyledFooter,
    StyledLeft,
    StyledCount
}
