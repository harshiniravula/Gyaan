import { observable, action } from 'mobx';

import {
    API_INITIAL
}
from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';

import BasicPostModel from '../BasicPostModel';
class DomainModel {

    constructor(domainDetails, gyaanAPIService) {
        this.gyaanAPIService = gyaanAPIService;
        this.domainId = domainDetails.domain_id;
        this.domainName = domainDetails.domain_name;
        this.init();

    }
    init() {
        this.getPostsAPIStatus = API_INITIAL;
        this.getPostsAPIError = null;
        this.getdomainPosts = [];
        this.domainExperts = [];
        this.starsCount = null;
        this.followersCount = null;
        this.randomCount = null;

    }

    @action.bound
    setGetPostsAPIStatus(apiStatus) {
        this.getPostsAPIStatus = apiStatus;

    }

    @action.bound
    setGetPostsResponse(response) {
        this.domainExperts = response.domain_experts.map(
            expert => {
                return {
                    id: expert.user_id,
                    name: expert.username,
                    profilePic: expert.profile_pic
                }
            });
        this.starsCount = response.stars_count;
        this.FollowersCount = response.following_count;
        this.randomCount = response.random_count;
        this.getdomainPosts = response.posts.map(post => new BasicPostModel(post));
        this.profilePic = response.profile_pic;
        this.domainExpertsCount = response.domain_experts_count;

    }

    @action.bound
    setGetPostsAPIError(error) {
        this.getPostsAPIError = error;
    }


    @action.bound
    getDomainDetails(requestObject) {
        const usersPromise = this.gyaanAPIService.getFollowingDomainPostsAPI(requestObject);
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetPostsAPIStatus, this.setGetPostsResponse)
            .catch(this.setGetPostsAPIError);
    }

}

export default DomainModel;
