import React from 'react';
import {
    StyledAvatar
}
from './styledComponents';
import strings from '../i18n/Strings.json';

class Avatar extends React.Component {

    static imageSize = {
        small: '40px',
        medium: '70px',
        large: '100px',
        defaultSize: '120px'
    }

    static borderType = {
        rounded: '50%',
        curved: '5%',
        default: '0%'

    }


    render() {
        const { borderType, size, src } = this.props;

        return (
            <StyledAvatar
            src={src}
            alt={strings.altText}
            borderRadius={borderType}
            size={size}/>
        );
    }
}

export default Avatar;
