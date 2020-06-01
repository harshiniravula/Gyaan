import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const StyledGyaanDashboard = styled.div `
    ${tw `flex`};
    position:relative;
`;

const StyledRightSide = styled.div `
    left:20%;
    width:80%;
    flex-grow:1;
position:absolute;
`;
export {
    StyledGyaanDashboard,
    StyledRightSide
}
