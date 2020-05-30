import React from 'react';
import {
    StyledAvatar
}
from './styledComponents';

class Avatar extends React.Component {

    render() {
        const { url, height, width, border_radius_type, altText } = this.props;
        return (
            <StyledAvatar border_type={border_radius_type}
            alt={altText}
            src={url}
            height={height}
            width={width}/>
        );
    }
}

export default Avatar;
