import produce from 'immer';
import * as actionTypes from '../actionTypes';

/**
 imageObj definition
 @typedef {Object} imageObj
 @property {string} url
 @property {string} key
 @property {string} id
 */

/**
 userInfo definition
 @typedef {Object} userInfo
 @property {string} fullName
 @property {string} firstname
 @property {string} lastname
 @property {imageObj} image
 @property {string} id
 */

/**
 userState definition
 @typedef {Object} userState
 @property {string} fullName
 @property {string} firstname
 @property {string} lastname
 @property {string} email
 @property {string} id
 @property {string} about
 @property {boolean} isAdmin
 @property {string[]} followers
 @property {string[]} following
 @property {string[]} notifications
 @property {string[]} posts
 @property {imageObj} image
 */

const initialState = {
  fullName: '',
  firstname: '',
  lastname: '',
  email: '',
  id: '',
  about: '',
  isAdmin: false,
  followers: [],
  following: [],
  notifications: [],
  posts: [],
  image: {url: '', key: '', id: ''},
};

// eslint-disable-next-line import/prefer-default-export
export const userReducer = produce(
  (/** userState */ draft, {type, payload}) => {
    switch (type) {
      case actionTypes.SET_USER:
        Object.assign(draft, payload.userInfo);
        break;
      case actionTypes.RESET_USER:
        draft = initialState;
        break;
      case actionTypes.SET_USER_IMAGE:
        draft.image = payload.image;
        break;
      default:
        break;
    }
  },
  initialState,
);
