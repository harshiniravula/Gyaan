import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import ReactLoading from 'react-loading';
import {
    StyledSignInPage,
    StyledUserName,
    StyledPassword,
    StyledSignIn,
    StyledError,
    StyledHeading
}
from './styledComponents.js';

@observer
class SignInPage extends React.Component {
    userNameRef = React.createRef();
    passwordRef = React.createRef();
    componentDidMount() {
        this.userNameRef.current.focus();
    }
    render() {
        const {
            userName,
            password,
            errorMessage,
            onChangeUserName,
            onChangePassword,
            onClickSignIn,
            isLoading
        } = this.props;

        return (
            <StyledSignInPage>
            <StyledHeading>Sign In</StyledHeading>
                <StyledUserName
                    ref={this.userNameRef}
                    defaultValue={userName}
                    onChange={onChangeUserName}
                    type='text' placeholder='Username'>
                </StyledUserName>
                <StyledPassword
                    ref={this.passwordRef}
                    defaultValue={password}
                    onChange={onChangePassword}
                    type='password' placeholder='Password'>
                </StyledPassword>
                <StyledSignIn type='button' role='button'
                    data-testid='sign-in-button'
                    onClick={onClickSignIn}>{isLoading?
                    <ReactLoading
                        aria-label="audio-loading"
                        type={'spin'}
                        color={'white'}
                        height={'24px'}
                        width={'24px'}
                        />
                        :'Sign in'
                    }

                </StyledSignIn>
                <StyledError>{errorMessage}</StyledError>
            </StyledSignInPage>
        );
    }

}

export default (SignInPage);
