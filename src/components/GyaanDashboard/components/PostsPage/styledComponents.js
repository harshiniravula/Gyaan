import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const StyledGyaanDashboard = styled.div `
    ${tw `flex items-start`};
`;

const StyledPostsPage = styled.div `
    ${tw`m-2 h-full`};
    height:80vh;
    overflow:scroll;
    flex-grow:1;

`;
export {
    StyledGyaanDashboard,
    StyledPostsPage
}
