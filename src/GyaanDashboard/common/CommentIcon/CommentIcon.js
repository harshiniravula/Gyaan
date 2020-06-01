import { MdComment } from 'react-icons/md';
import React from 'react';
import Strings from '../../i18n/Strings.json'
import {
    StyledComment
}
from './styledComponents';
class Reaction extends React.Component {
    render() {
        const { count } = this.props;
        return (<StyledComment>
                <MdComment color={Strings.Blue}/>
                {count}
                </StyledComment>);
    }
}
export default Reaction;
