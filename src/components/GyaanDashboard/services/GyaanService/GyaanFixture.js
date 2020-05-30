import GetUserDomainData from '../../fixtures/GetUserDomainData.json';
import GetPostsData from '../../fixtures/GetPostsData.json';
class LogInService {
    getPostsAPI(requestObject) {

        return new Promise((resolve, reject) => {
            resolve(GetPostsData);
        });


    }
    getDomainsAPI(requestObject) {
        return new Promise((resolve, reject) => {
            resolve(GetUserDomainData);
        });

    }
}

export default LogInService;
