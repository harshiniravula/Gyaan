///*global await*/
import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import { Redirect, withRouter } from 'react-router-dom';
import SignUpPage from '../../components/SignUpPage';
import Strings from '../../i18n/Strings.json';
import { LOGIN_PATH } from '../../constants/PathName';
import { EmailIdPattern } from '../../constants/RegexConstants'

@inject('authStore')
@observer
class LoginRoute extends React.Component {
    @observable userName;
    @observable password;
    @observable isLoading;
    @observable errorMessage;
    @observable userNameError;
    @observable passwordError;
    signInRef = React.createRef();
    constructor(props) {
        super(props);
        this.userName = '';
        this.isLoading = false;
        this.password = '';
        this.userNameError = null;
        this.passwordError = null;
        this.confirmPasswordError = null;
    }

    componentWillUnmount() {
        this.isLoading = false;

    }

    onChangeConfirmPassword = (event) => {
        this.confirmPassword = event.target.value;
    }
    onChangeUserName = (event) => {
        this.userName = event.target.value;
    }

    onChangePassword = (event) => {

        this.password = event.target.value;
    }
    onClickLink = () => {
        const { history } = this.props;
        history.replace(LOGIN_PATH);
    }

    makeErrorsNull = () => {
        alert('make errors null')
        this.userNameError = null;
        this.passwordError = null;
        this.confirmPasswordError = null;
    }
    onClickSignIn = (event) => {
        this.makeErrorsNull();
        if (!this.userName.match(EmailIdPattern)) {
            this.userNameError = Strings.UserNameError;
            this.signInRef.current.userNameRef.current.focus();
        }
        else if (this.password == '') {
            this.passwordError = Strings.PasswordError;
            this.signInRef.current.passwordRef.current.focus();
        }

        else if (this.confirmPassword == '') {
            this.passwordError = Strings.PasswordError;
            this.signInRef.current.passwordRef.current.focus();
        }
        else {
            this.isLoading = true;
            this.userNameError = null;
            this.passwordError = null;
            this.errorMessage = '';
            event.target.disabled = true;
            const { authStore } = this.props;
            const { userSignIn } = authStore;
            userSignIn({}, this.onSuccess, this.onFailure);
        }
    }

    onSuccess = () => {

    }
    onFailure = (error) => {
        this.errorMessage = 'error';
    }

    render() {

        return (<SignUpPage
        userName={this.userName}
        password={this.password}
        errorField={this.errorField}
        onChangeUserName={this.onChangeUserName}
        onChangePassword={this.onChangePassword}
        onChangeConfirmPassword={this.onChangeConfirmPassword}
        onClickSignIn={this.onClickSignIn}
        isLoading={this.isLoading}
        ref = {this.signInRef}
        userNameError={this.userNameError}
        passwordError = {this.passwordError}
        confirmPasswordError={this.confirmPasswordError}
        
        serverError={this.errorMessage}
        onClickLink={this.onClickLink}
        />);
    }

}
export default withRouter(LoginRoute);
