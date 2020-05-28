import getECommerceAPIResponse from '../../fixtures/getUserLogInResponse.json';


class LogInService {
    getUsersAPI() {
        return new Promise((resolve, reject) => {
            resolve(getECommerceAPIResponse);
        });
    }
}

export default LogInService;
