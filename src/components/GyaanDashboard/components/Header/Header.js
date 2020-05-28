import React from 'react';
import InputElement from '../../../common/InputElement';
import Button from '../../../common/Button';
import {
    StyledHeader
}
from './styledComponents';
class Header extends React.Component {
    render() {
        return (
            <StyledHeader>
                <InputElement/>
                <Button/>
            </StyledHeader>
            
        );
    }
}

export default Header;
