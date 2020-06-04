import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const StyledTag = styled.div `
   ${tw` flex p-1 m-2`};
   font-size:10px;
   color: rgb(${props => props.color[0]},${props => props.color[1]},${props => props.color[2]});
   background: rgba(${props => props.color[0]},${props => props.color[1]},${props => props.color[2]},0.2);
   flex-basis: auto;
`
export { StyledTag }
