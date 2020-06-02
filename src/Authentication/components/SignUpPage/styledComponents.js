import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const StyledSignInWrapper = styled.div`
   ${tw`flex items-center min-h-screen justify-center `};
`

const StyledSignInPage = styled.div`
   ${tw` bg-white flex flex-col  items-center justify-center p-16 border border-rounded`};
   width: 450px;
`

const StyledUserName = styled.input`
   ${tw`text-xl font-normal border border-gray-500 border-rounded `};
`

const StyledPassword = styled.input`
   ${tw`text-xl font-normal border border-gray-500  border-rounded`};
`

const StyledSignIn = styled.button`
   ${tw`font-semibold text-white border-rounded text-center flex items-center justify-center bg-black p-3`};
`

const StyledError = styled.span`
   ${tw`text-red-500 `};
`
const StyledHeading = styled.p`
   ${tw`text-3xl text-center`};
   width: 214px;
   height: 80px;
   font-family: Rubik;
   font-size: 32px;
   font-weight: normal;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.25;
   letter-spacing: normal;
`

const StyledBreak = styled.br``

const StyledLabel = styled.label`
   ${tw`text-xs w-full text-gray-500 m-0`};
`
const StyledBottomContent = styled.p`
   ${tw`text-xs `};
`
const StyledBottomLink = styled.a`
   ${tw`text-xs text-blue-500`};
`
export {
   StyledSignInPage,
   StyledUserName,
   StyledPassword,
   StyledSignIn,
   StyledError,
   StyledHeading,
   StyledSignInWrapper,
   StyledLabel,
   StyledBreak,
   StyledBottomContent,
   StyledBottomLink
}
