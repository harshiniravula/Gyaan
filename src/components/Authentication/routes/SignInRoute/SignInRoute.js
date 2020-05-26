///*global await*/
import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import { Redirect, withRouter } from 'react-router-dom';


import { PRODUCTS_PAGE_PATH } from '../../../ECommerceApp/constants/PathName';
import { getAccessToken } from '../../../common/utils/StorageUtils';
import SignInPage from '../../components/SignInPage';
@inject('authStore')
@observer
class SignInRoute extends React.Component {
    @observable userName;
    @observable password;
    @observable isLoading;
    @observable errorMessage;
    signInRef = React.createRef();
    constructor(props) {
        super(props);
        this.userName = '';
        this.isLoading = false;
        this.password = '';

    }

    componentWillUnmount() {
        this.isLoading = false;

    }
    onChangeUserName = (event) => {
        this.userName = event.target.value;
    }

    onChangePassword = (event) => {

        this.password = event.target.value;
    }
    onClickSignIn = (event) => {

        if (this.userName == '') {
            this.errorMessage = 'Please enter username';
            this.signInRef.current.userNameRef.current.focus();
        }
        else if (this.password == '') {
            this.errorMessage = 'Please enter password';
            this.signInRef.current.passwordRef.current.focus();
        }
        else {
            this.isLoading = true;
            this.errorMessage = '';
            event.target.disabled = true;
            const { authStore } = this.props;
            const { userSignIn } = authStore;
            userSignIn({}, this.onSuccess, this.onFailure);
        }

    }

    onSuccess = () => {
        const { history } = this.props;
        history.replace(PRODUCTS_PAGE_PATH);
    }
    onFailure = () => {
        this.errorMessage = 'network error';
    }

    render() {
        return (<SignInPage 
        userName={this.userName}
        password={this.password}
        errorMessage={this.errorMessage}
        onChangeUserName={this.onChangeUserName}
        onChangePassword={this.onChangePassword}
        onClickSignIn={this.onClickSignIn}
        isLoading={this.isLoading}
        ref = {this.signInRef}
        />);
    }

}
export default withRouter(SignInRoute);
