import { observable, action, reaction } from 'mobx';
import {
    API_INITIAL
}
from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';
import Strings from '../../i18n/Strings.json';
import BasicPostModel from '../models/BasicPostModel';
import DomainModel from '../models/DomainModel';
import SuggestDomainModel from '../models/SuggestDomainModel';

class GyaanStore {
    @observable getGyaanDomainsAPIStatus;
    @observable getGyaanDomainsAPIError;
    @observable followingDomains;
    @observable suggestedDomains;
    @observable pendingForReviewPosts;
    @observable pendingPosts;
    @observable getPostsDataOf;
    @observable getPostsAPIStatus;
    @observable getPostsAPIError;
    @observable getPostsResponse;
    @observable currentPage;
    @observable offset;

    constructor(gyaanAPIService, authStore) {
        this.init();
        this.gyaanAPIService = gyaanAPIService;
        this.authStore = authStore;
        this.limit = 10;
        this.offset = 0;

    }
    @action.bound
    init() {
        this.getGyaanDomainsAPIStatus = API_INITIAL;
        this.getGyaanDomainsAPIError = null;
        this.getPostsAPIStatus = API_INITIAL;
        this.getPostsAPIError = null;
        this.followingDomains = [];
        this.suggestedDomains = [];
        this.pendingForReviewPosts = [];
        this.pendingPosts = [];
        this.getPostsResponse = [];
    }
    @action.bound
    clearStore() {
        this.init();
    }

    @action.bound
    setGetGyaanDomainResponse(Response) {
        this.followingDomains = Response.following_domains.map(
            eachDomain => {
                return new DomainModel(eachDomain,
                    this.gyaanAPIService)

            }
        );
        this.suggestedDomains = Response.suggested_domains.map(
            eachDomain => {
                return new SuggestDomainModel(eachDomain,
                    this.gyaanAPIService);
            }
        );

        this.pendingForReviewPosts = Response.pending_for_review_posts;
        this.pendingPosts = Response.pendingPosts;

    }



    @action.bound
    setGetGyaanDomainAPIError(error) {
        this.getGyaanDomainAPIError = error;

    }

    @action.bound
    onClickSuggestedDomain() {

    }

    @action.bound
    onClickAllDomains() {
        this.getDomainPosts({});


    }

    @action.bound
    setGetPostsResponse(Response) {
        if (Response) {

            Response.forEach(
                post => {
                    this.getPostsResponse.push(new BasicPostModel(post,
                        post.domain.domain_name));
                })
        }

    }
    @action.bound
    setGetPostsAPIError(error) {
        this.getPostsAPIError = error;

    }

    @action.bound
    setGetPostsAPIStatus(apiStatus) {
        this.getPostsAPIStatus = apiStatus;

    }


    @action.bound
    setGetGyaanDomainAPIStatus(apiStatus) {

        this.getGyaanDomainAPIStatus = apiStatus;

    }

    @action.bound
    getDomainPosts(requestObject) {
        const usersPromise = this.gyaanAPIService.getPostsAPI(requestObject, this.limit, this.offset);
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetPostsAPIStatus, this.setGetPostsResponse)
            .catch(this.setGetPostsAPIError);
    }




    @action.bound
    getGyaanDomainData(requestObject) {
        const usersPromise = this.gyaanAPIService.getDomainsAPI(requestObject);
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetGyaanDomainAPIStatus, this.setGetGyaanDomainResponse)
            .catch(this.setGetGyaanDomainAPIError);
    }

}

export default GyaanStore;
