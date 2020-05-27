import React from 'react';
import {
    Input
}
from './styledComponents';
class InputElement extends React.Component {
    render() {
        const {
            inputRef
        } = this.props;
        return (
            <Input
                {...this.props}
                ref={inputRef}
            />
        );
    }
}
export default InputElement;
