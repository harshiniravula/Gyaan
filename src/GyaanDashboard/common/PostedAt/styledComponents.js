import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const StyledWrapper = styled.div `
    ${tw `flex `};
    flex-direction:${props=>props.isAuthor?"column":"row"};
`;

const StyledDate = styled.p `
    ${tw `flex `};

`;
const StyledName = styled.p `
    ${tw `flex `};
    flex-direction:${props=>props.isAuthor?"column":"row"};
`;
export {
    StyledWrapper,
    StyledDate,
    StyledName

}
