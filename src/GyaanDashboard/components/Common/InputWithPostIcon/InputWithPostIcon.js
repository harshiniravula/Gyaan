import React from 'react'
import Post from '../../../../Common/Icons/Post';
import InputElement from '../../../../Common/InputElement';
import strings from '../../../i18n/Strings.json';
import { StyledWrapper } from './styledComponents'
class InputWithPostIcon extends React.Component {
    render() {
        return (
            <StyledWrapper>
        <InputElement
        placeholder={strings.writeComment}
        isNormal={true}
        size={InputElement.size.normal}/>
        <Post/>
        </StyledWrapper>
        )
    }
}
export default InputWithPostIcon;
