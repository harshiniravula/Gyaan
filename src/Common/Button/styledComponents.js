import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const StyledBtn = styled.button `
   ${tw`text-white flex items-center justify-center p-2 m-2`};
   text-align:center;
   width:${props=>props.size?props.size:'100%'};
   height:100%;
   background:${props=>props.kind.background};
   color:${props=>props.kind.color};
   border-radius:${props=>props.shape};
`
