import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const StyledBtn = styled.button `
   ${tw`text-white flex items-center justify-center py-2 px-8 m-2`};
   text-align:center;
   font-size:${props=>props.size.text};
   width:${props=>props.size?props.size.width:'100%'};
   background:${props=>props.kind.background};
   color:${props=>props.kind.color};
   border-radius:${props=>props.shape};
`
