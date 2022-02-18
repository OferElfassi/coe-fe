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
 authState definition
 @typedef {Object} authState
 @property {boolean} isAuth
 @property {string} token
 */

const initialState = {
  isAuth: false,
  token: '',
};

export const authReducer = produce(
  (/** authState */ draft, {type, payload}) => {
    switch (type) {
      case actionTypes.SET_AUTH:
        draft.isAuth = payload.isAuth;
        draft.token = payload.token;
        break;
      default:
        break;
    }
  },
  initialState,
);
