import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const StyledSignInPage = styled.div `
    ${tw ` bg-white  p-2 border border-rounded`};
    position:absolute;
    width:300px;
    height:370px;
    left:30%;
`;

const StyledUserName = styled.input `
    ${tw `text-xl font-normal border border-gray-500 border-rounded  m-4 p-2`};
    width:250px;
`;

const StyledPassword = styled.input `
    ${tw `text-xl font-normal border border-gray-500  m-4 p-2 border-rounded`};
    width:250px;
`;

const StyledSignIn = styled.button `
    ${tw `font-semibold m-4 text-white border-rounded text-center flex items-center justify-center bg-black p-3`};
    width:250px;
`;

const StyledError = styled.p `
    ${tw `m-4 text-red-500 `};
    width:200px;
`;
const StyledHeading = styled.p `
    ${tw `m-4 text-3xl `};

`;
export {
    StyledSignInPage,
    StyledUserName,
    StyledPassword,
    StyledSignIn,
    StyledError,
    StyledHeading
};
