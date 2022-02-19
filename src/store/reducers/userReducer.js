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
 notification definition
 @typedef {Object} notification
 @property {string} createdAt
 @property {string} id
 @property {string} message
 @property {post} post
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
 manage definition
 @typedef {Object} manage
 @property {userInfo} users
 @property {post[]} posts
 @property {notification[]} notifications
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
 @property {boolean} isManager
 @property {string[]} followers
 @property {string[]} following
 @property {notification[]} notifications
 @property {post[]} posts
 @property {imageObj} image
 @property {manage} manage
 */

const initialState = {
  fullName: '',
  firstname: '',
  lastname: '',
  email: '',
  id: '',
  about: '',
  isManager: false,
  followers: [],
  following: [],
  notifications: [],
  posts: [],
  image: {url: '', key: '', id: ''},
  manage: {users: [], posts: [], notifications: []},
};
// eslint-disable-next-line import/prefer-default-export
export const userReducer = produce(
  (/** userState */ draft, {type, payload}) => {
    switch (type) {
      case actionTypes.SET_USER:
        Object.assign(draft, {
          ...payload.userInfo,
          manage: {users: [], posts: [], notifications: []},
        });
        break;
      case actionTypes.RESET_USER:
        draft = initialState;
        break;
      case actionTypes.SET_USER_IMAGE:
        draft.image = payload.image;
        break;
      case actionTypes.SET_USERS:
        draft.manage.users = payload.users;
        break;
      case actionTypes.REMOVE_USER:
        draft.manage.users.splice(payload.userIndex, 1);
        break;
      case actionTypes.UPDATE_USER:
        Object.assign(draft.manage.users[payload.userIndex], payload.userInfo);
        break;
      case actionTypes.INSERT_OWN_POST:
        draft.posts.push(payload.post);
        break;
      default:
        break;
    }
  },
  initialState,
);
