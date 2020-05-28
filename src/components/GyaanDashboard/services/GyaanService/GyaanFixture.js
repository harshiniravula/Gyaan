import GetUserDomainData from '../../fixtures/GetUserDomainData.json';
class LogInService {


    getUsersAPI() {
        return new Promise((resolve, reject) => {
            resolve(GetUserDomainData);
        });
    }
}

export default LogInService;
