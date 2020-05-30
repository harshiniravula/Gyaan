import React from 'react';
import InputElement from '../../../common/InputElement';
import Button from '../../../common/Button';
import Strings from '../../i18n/Strings.json';
import { observer } from 'mobx-react';
import {
    StyledHeader
}
from './styledComponents';
@observer
class Header extends React.Component {
    render() {

        return (
            <StyledHeader>
                <InputElement size={Strings.PostInputWidth}/>
                <Button size={Strings.PostBtnWidth}
                    btnType={Strings.PrimaryBtn}>
                    {Strings.WritePost}
                </Button>
            </StyledHeader>

        );
    }
}

export default Header;
