import { observable, action } from 'mobx';

import {
    API_INITIAL
}
from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';

//import BasicPostModel from '../BasicPostModel';
class SuggestDomainModel {

    constructor(domainDetails) {
        this.domainId = domainDetails.domain_id;
        this.domainName = domainDetails.domain_name;

        this.getdomainPosts = [];
    }
    @action.bound
    onClickFollow() {


    }
    @action.bound
    getDomainPosts(requestObject) {
        const usersPromise = this.gyaanAPIService.getPostsAPI(requestObject);
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetPostsAPIStatus, this.setGetPostsResponse)
            .catch(this.setGetPostsAPIError);
    }

}

export default SuggestDomainModel;
