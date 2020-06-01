import styled from '@emotion/styled'
import tw from 'tailwind.macro'


const StyledTag = styled.div `

    ${tw `text-xs flex p-1 m-2`};
    color:${props=>props.color};
    background:rgba(0,0,0,0.1);
    flex-basis:auto;

`;
export {

    StyledTag
}
