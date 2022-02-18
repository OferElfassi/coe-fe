import produce from 'immer';
import * as actionTypes from '../actionTypes';

/**
 hashtag definition
 @typedef {Object} hashtag
 @property {Object[]} title
 @property {string[]} posts
 @property {string} id
 */

/**
 reaction definition
 @typedef {Object} reaction
 @property {boolean} like
 @property {userInfo} user
 */
/**
 comment definition
 @typedef {Object} comment
 @property {string} id
 @property {string} createdAt
 @property {string} content
 @property {userInfo} user
 */

/**
 post definition
 @typedef {Object} post
 @property {string} createdAt
 @property {hashtag} hashtag
 @property {string} description
 @property {comment[]} comments
 @property {imageObj} image
 @property {reaction[]} reactions
 @property {userInfo} user
 @property {string} id
 */

/**
 newPost definition
 @typedef {Object} newPost
 @property {string} imageKey
 @property {string} imageUrl
 @property {Object[]} matches
 @property {string} hashtag
 @property {string} description
 */

/**
 postState definition
 @typedef {Object} postState
 @property {Object[]} posts
 @property {hashtag[]} hashtags
 @property {newPost} newPost
 */
const initialState = {
  posts: [],
  hashtags: [],
  newPost: {
    imageKey: '',
    imageUrl: '',
    matches: [],
    hashtag: '',
    description: '',
  },
};

export const postReducer = produce(
  (/** postState */ draft, {type, payload}) => {
    switch (type) {
      case actionTypes.SET_POSTS:
        draft.posts = payload.posts;
        break;
      case actionTypes.SET_HASHTAGS:
        draft.hashtags = payload.hashtags;
        break;
      case actionTypes.INSERT_REACTION:
        draft.posts[payload.postIndex].reactions.push(payload.reaction);
        break;
      case actionTypes.DELETE_REACTION:
        draft.posts[payload.postIndex].reactions.splice(
          payload.reactionIndex,
          1,
        );
        break;
      case actionTypes.INSERT_COMMENT:
        draft.posts[payload.postIndex].comments.push(payload.comment);
        break;
      default:
        break;
    }
  },
  initialState,
);
