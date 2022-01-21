import produce from 'immer';
import * as actionTypes from '../actionTypes';

/**
 signupInfo definition
 @typedef {Object} signupInfo
 @property {string} fullName
 @property {string} email
 @property {string} password
 @property {string} address
 @property {string} phone
 @property {string} organization
 @property {boolean} isManager
 */

/**
 userInfo definition
 @typedef {Object} userInfo
 @property {string} fullName
 @property {string} email
 @property {string} userId
 @property {string} address
 @property {string} phone
 @property {boolean} isAdmin
 @property {string} token
 */

/**
 userState definition
 @typedef {Object} userState
 @property {boolean} isLoggedIn
 @property {userInfo} userInfo
 */

const initialState = {
  isLoggedIn: false,
  userInfo: {
    fullName: '',
    email: '',
    userId: '',
    address: '',
    phone: '',
    isAdmin: false,
    token: '',
  },
};

// eslint-disable-next-line import/prefer-default-export
export const userReducer = produce(
  (/** userState */ draft, {type, payload}) => {
    switch (type) {
      case actionTypes.SET_USER:
        Object.assign(draft.userInfo, payload);
        // eslint-disable-next-line no-param-reassign
        draft.isLoggedIn = true;
        break;
      case actionTypes.LOG_OUT:
        Object.assign(draft.userInfo, initialState.userInfo);
        // eslint-disable-next-line no-param-reassign
        draft.isLoggedIn = false;
        break;
      default:
        break;
    }
  },
  initialState,
);
