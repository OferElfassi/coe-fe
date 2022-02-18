import produce from 'immer';
import * as actionTypes from '../actionTypes';

/**
 modal definition
 @typedef {Object} modal
 @property {boolean} modalVisible
 @property {string} modalTitle
 @property {string} modalText
 @property {string} okText
 @property {string} cancelText
 @property {string} color
 @property {function} onOk
 @property {function} onCancel
 */

/**
 postBtns definition
 @typedef {Object} postBtns
 @property {boolean} likeDisabled
 @property {boolean} reportDisabled
 */

/**
 loader definition
 @typedef {Object} loader
 @property {boolean} show
 */

/**
 routingState definition
 @typedef {Object} routingState
 @property {string} activePage
 @property {boolean} inAuthPage
 */

/**
 newPostModal definition
 @typedef {Object} newPostModal
 @property {boolean} show
 */

/**
 uiState definition
 @typedef {Object} uiState
 @property {routingState} routingState
 @property {loader} loader
 @property {newPostModal} newPostModal
 @property {postBtns} postBtns
 @property {modal} modal
 */

const initialState = {
  routingState: {
    activePage: '',
    isAuthPage: false,
  },
  postBtns: {
    likeDisabled: false,
    reportDisabled: false,
  },
  newPostModal: {
    show: false,
  },
  loader: {
    show: false,
  },
  modal: {
    modalVisible: false,
    modalText: '',
    modalTitle: '',
    okText: '',
    cancelText: '',
    color: '',
    onOk: null,
    onCancel: null,
  },
};

export const uiReducer = produce((/** uiState */ draft, {type, payload}) => {
  switch (type) {
    case actionTypes.TOGGLE_LOADER:
      draft.loader.show = payload.state;
      break;
    case actionTypes.SET_MODAL:
      Object.assign(draft.modal, payload);
      break;
    case actionTypes.SET_ACTIVE_PAGE:
      Object.assign(draft.routingState, payload);
      break;
    case actionTypes.SET_POST_BTNS_STATE:
      Object.assign(draft.postBtns, payload.btnsState);
      break;
    case actionTypes.TOGGLE_NEW_POST_MODAL:
      draft.newPostModal.show = payload.state;
      break;
    default:
      break;
  }
}, initialState);
