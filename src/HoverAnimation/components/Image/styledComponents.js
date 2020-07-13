import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const StyledImage = styled.li`
   display: flex;
   height: 200px;
   width: 200px;
   margin: 2px;
   background: black;
   color: white;
   &:hover {
      transform: scale(1.2);
      transition: transform 1s;
   }
`
export const Image = styled.img``
export const LeaveBtn = styled.button`
   border: 1px solid black;
`
export const Text = styled.p``

export const Wrapper = styled.div`
   height: 100vh;
   width: 100vw;
`
