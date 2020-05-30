import styled from '@emotion/styled'
import tw from 'tailwind.macro'



const StyledDomainIcon = styled.div `
    ${tw `font-semibold p-2`};
    border-radius:50%;
    background:rgba(0,0,0,0.1);
    font-size:${props=>props.textSize}px;
`;

const StyledPostDomain = styled.div `
        ${tw `flex items-center`};
`;
const StyledDomainName = styled.p `
        ${tw `font-semi-bold`};
        font-size:${props=>props.textSize}px;
`;

export {
    StyledPostDomain,
    StyledDomainIcon,
    StyledDomainName
}
