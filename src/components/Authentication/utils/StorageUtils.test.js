import React from 'react';
import Cookie from 'js-cookie';
/*global jest, expect*/
import { setAccessToken } from './StorageUtils.js';
import { getAccessToken } from './StorageUtils.js';
import { clearUserSession } from './StorageUtils.js';

Cookie.set = jest.fn();
Cookie.get = jest.fn();
Cookie.remove = jest.fn();

describe('to test the storege utils', () => {
    it('should call cookie.get when getAccessToken is triggered', () => {
        getAccessToken();
        expect(Cookie.get).toBeCalled();
    });

    it('should call cookie.set when setAccessToken is triggered', () => {
        setAccessToken([{ access_token: 'harshini' }]);
        expect(Cookie.set).toBeCalled();
    });
    it('should call cookie.remove when clearUserSession is triggered', () => {
        clearUserSession();
        expect(Cookie.remove).toBeCalled();
    });


});
