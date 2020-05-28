import { observable, action, computed } from 'mobx';
import {
    API_INITIAL
}
from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';

class GyaanStore {
    @observable getGyaanSideBarAPIStatus;
    @observable getGyaanSideBarAPIError;
    @observable following_domains;
    @observable suggest_domains;
    @observable my_posts;
    @observable pending_reviews;

    constructor(gyaanAPIService) {
        this.init();
        this.gyaanAPIService = gyaanAPIService;
    }
    @action.bound
    init() {
        this.getProductListAPIStatus = API_INITIAL;
        this.getProductListAPIError = null;
        this.following_domains = [];
        this.suggest_domains = [];
        this.my_posts = [];
        this.pending_reviews = [];
    }
    @action.bound
    clearStore() {
        this.init();
    }

    @action.bound
    setGetGyaanSideBarResponse(Response) {
        this.following_domains = Response.following_domains;
        this.suggest_domains = Response.not_following_domains;
        this.trending_domains = Response.trending_domains;
        this.my_posts = Response.reviewed_domains;
        this.pending_reviews = Response.unreviewed_domains;
    }
    @action.bound
    setGetGyaanSideBarAPIError(error) {
        this.getGyaanSideBarAPIError = error;
    }

    onClickDomain = () => {

    }

    onClickFollow = () => {

    }
    onClick

    @action.bound
    setGetGyaanSideBarAPIStatus(apiStatus) {
        this.getGyaanSideBarAPIStatus = apiStatus;
    }

    @action.bound
    getGyaanDomainData(endPoint) {
        const usersPromise = this.gyaanAPIService.getUsersAPI(endPoint);
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setGetGyaanSideBarAPIStatus, this.setGetGyaanSideBarResponse)
            .catch(this.setGetGyaanSideBarAPIError);
    }

}

export default GyaanStore;
