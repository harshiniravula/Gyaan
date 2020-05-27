import React from 'react';


import {
    StyledBtn
}
from './styledComponents';
class Button extends React.Component {
    render() {
        const {
            color,
            btnType,
            size,
            onClick
        } = this.props;
        return (
            <StyledBtn
                color={color}
                size={size}
                onClick={onClick}
                btnType={btnType}
            >{this.props.children}</StyledBtn>
        );
    }
}
export default Button;
