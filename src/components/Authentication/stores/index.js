import AuthStore from './AuthStore/index';
import AuthService from '../services/AuthService/AuthAPI';

const authService = new AuthService();
const authStore =new AuthStore(authService);

export default authStore;