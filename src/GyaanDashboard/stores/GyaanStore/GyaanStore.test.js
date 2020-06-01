import Cookie from 'js-cookie'

/*global jest,expect*/

import {
    API_SUCCESS,
    API_FAILED,
    API_FETCHING,
    API_INITIAL
}
from '@ib/api-constants'

import GyaanService from '../../services/GyaanService/GyaanAPI'
import GetUserDomainData from '../../fixtures/GetUserDomainData.json';
import GetPostsData from '../../fixtures/GetPostsData.json';

import GyaanStore from '.'

/* Mocking js-cookie library */

let mockSetCookie = jest.fn()
let mockRemoveCookie = jest.fn()

Cookie.set = mockSetCookie
Cookie.remove = mockRemoveCookie

describe('GyaanStore Tests', () => {
    let gyaanService
    let gyaanStore

    beforeEach(() => {
        gyaanService = new GyaanService()
        gyaanStore = new GyaanStore(gyaanService)
    })

    it('should test initialising gyaan store', () => {
        expect(gyaanStore.getGyaanDomainsAPIStatus).toBe(API_INITIAL)
        expect(gyaanStore.getGyaanDomainsAPIError).toBe(null)
    })
    it('should test getting gyaan Domain API data fetching state', () => {
        const requestObject = {};
        const mockLoadingPromise = new Promise(function(resolve, reject) {})
        const mockDomainsAPI = jest.fn()
        mockDomainsAPI.mockReturnValue(mockLoadingPromise)
        gyaanService.getDomainsAPI = mockDomainsAPI

        gyaanStore.getGyaanDomainData(requestObject)
        expect(gyaanStore.getGyaanDomainAPIStatus).toBe(API_FETCHING)
    })

    it('should test gyaan Domain API success state', async() => {
        const requestObject = {

        }
        const mockSuccessPromise = Promise.resolve(GetUserDomainData)
        const mockDomainsAPI = jest.fn()
        mockDomainsAPI.mockReturnValue(mockSuccessPromise)
        gyaanService.getDomainsAPI = mockDomainsAPI

        await gyaanStore.getGyaanDomainData(requestObject)
        expect(gyaanStore.getGyaanDomainAPIStatus).toBe(API_SUCCESS)

    })

    it('should test get domains API failure state', async() => {


        jest
            .spyOn(gyaanService, "getDomainsAPI")
            .mockImplementation(() => Promise.reject());


        await gyaanStore.getGyaanDomainData()
        expect(gyaanStore.getGyaanDomainAPIStatus).toBe(API_FAILED)

    })
})
