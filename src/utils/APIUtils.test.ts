/*global expect*/
import {
   getUserDisplayableErrorMessage,
   getFormattedError,
   networkCallWithApisauce
} from './APIUtils.js'

describe('api  utils test cases', () => {
   it('should show error message if api error is null', () => {
      const errorMessage = getUserDisplayableErrorMessage({})
      expect(errorMessage).toBe(
         "We're having some trouble completing your request. Please try again."
      )
   })
   /*it('should show error message for  is network error ', () => {
      const errorMessage = getUserDisplayableErrorMessage(
         {'{ "problem": "NETWORK_ERROR" }'}
      )
      expect(errorMessage).toBe('Please check your internet connection')
   })

    it('should show error message for  is getFormattedError', () => {
        const errorMessage = getFormattedError(
            '{ "problem": "NETWORK_ERROR" }'

        );
        expect(errorMessage).toBe('Please check your internet connection');

    })*/
})
