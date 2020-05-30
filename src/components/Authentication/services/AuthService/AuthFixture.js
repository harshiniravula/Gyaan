import getUserLogInResponse from '../../fixtures/getUserLogInResponse.json';


class LogInService {
    getUsersAPI() {

        return new Promise((resolve, reject) => {
            resolve(getUserLogInResponse);
        });
    }
    postUsersAPI() {

        return new Promise((resolve, reject) => {
            resolve(getUserLogInResponse);
        });
    }
}

export default LogInService;
