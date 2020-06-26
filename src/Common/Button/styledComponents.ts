import styled from '@emotion/styled'
import tw from 'tailwind.macro'
interface Props{
   size?:{text:string
   width:string
   }
   kind?:{
      background:string
      color:string
   }
   shape?:string
   type?:"button" | "submit" | "reset" | undefined
   role?:string
   onClick?:(e:any)=>void
   disabled?:boolean
}
export const StyledBtn = styled.button<Props>`
   ${tw`text-white flex items-center justify-center py-2 px-2 m-2`};
   text-align: center;
   font-size: ${props => props.size ? props.size.text:'16px'};
   width: ${props => (props.size ? props.size.width : '100%')};
   background: ${props => props.kind ? props.kind.background:'white'};
   color: ${props => props.kind ? props.kind.color:'black'};
   border-radius: ${props => props.shape};
`
