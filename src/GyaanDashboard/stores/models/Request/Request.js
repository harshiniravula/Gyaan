import { observable, action } from 'mobx'

import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'

class Request {
    userId;
    username;
    profilePic;
    constructor(user, gyaanAPIService) {
        this.userId = user.user_id,
            this.username = user.username,
            this.profilePic = user.profile_pic
        this.gyaanAPIService = gyaanAPIService
    }
    @action.bound
    onAcceptRequest() {
        this.acceptOrRejectRequest({
            "request_id": 0,
            "accept_status": "accepted"
        })


    }
    @action.bound
    onRejectRequest() {
        this.acceptOrRejectRequest({
            "request_id": 0,
            "accept_status": "rejected"
        })
    }
    @action.bound
    setGetRequestAPIStatus(apiStatus) {
    }
    @action.bound
    setGetRequestAPIResponse(response) {

    }
    @action.bound
    setGetRequestAPIError(error) {

    }

    @action.bound
    acceptOrRejectRequest({ requestObject }) {
        const requestPromise = this.gyaanAPIService.acceptOrRejectRequest(requestObject)
        return bindPromiseWithOnSuccess(requestPromise)
            .to(this.setGetRequestAPIStatus, this.setGetRequestAPIResponse)
            .catch(this.setGetRequestAPIError)
    }
}



export default Request
