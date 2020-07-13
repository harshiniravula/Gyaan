import styled from '@emotion/styled'
import tw from 'tailwind.macro'
type InputProps={
   inputSize?:{
      fontSize:string,
      width:string
   },
   borderAndTextColors:{
      borderColor:string,
      color:string
   }
}
export const Input = styled.input<InputProps>`
   ${tw`p-1 font-normal text-black `};
   border-radius: 2px;
   border: 1px solid ${props => props.borderAndTextColors.borderColor};
   color: ${props => props.borderAndTextColors.color};
   font-size: ${props => (props.inputSize ? props.inputSize.fontSize : '16px')};
   width: ${props => {
      if (props.inputSize) {
         return props.inputSize.width
      }
      return '100%'
   }};
`
