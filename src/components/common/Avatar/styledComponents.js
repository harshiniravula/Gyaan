import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const StyledAvatar = styled.img `
   ${tw``};
    height:${props=>props.height};
    width:${props=>props.width};
    border-radius:${props=>{
    if(props.border_radius_type==="rounded"){
        return "50%";
    }
     else if(props.border_radius_type==="curved"){
         return "5%";
     }
    }

    }
`;
