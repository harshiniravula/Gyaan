import { create } from 'apisauce';
import { networkCallWithApisauce } from '../../utils/APIUtils';
import { apiMethods } from '../../constants/APIConstants';
import endPoints from '../endPoints';

class AuthService {
  api
  constructor() {
    this.api = create({
      baseURL: 'https://5ea1a14db9f5ca00166c1f27.mockapi.io/api/',
    })
  }

  getUsersAPI(requestObject) {
    return networkCallWithApisauce(
      this.api,
      endPoints.signIn,
      requestObject,
      apiMethods.get
    );

  }
}

export default AuthService;
