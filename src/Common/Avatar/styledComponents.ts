import styled from '@emotion/styled'
import tw from 'tailwind.macro'


interface AvatarProps{
   size?:string
   borderRadius?:string
}
export const StyledAvatar = styled.img<AvatarProps>`
   ${tw`m-1  flex justify-center items-center`};
   background: #e2e8f0;

   height: ${props => props.size};
   width: ${props => props.size};
   border-radius: ${props => props.borderRadius};
`
