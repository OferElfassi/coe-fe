import produce from 'immer';
import * as actionTypes from '../actionTypes';

/**
 modal definition
 @typedef {Object} modal
 @property {boolean} modalVisible
 */

/**
 loader definition
 @typedef {Object} loader
 @property {boolean} show
 */

/**
 uiState definition
 @typedef {Object} uiState
 @property {loader} loader
 @property {modal} modal
 */

const initialState = {
  loader: {
    show: false,
  },
  modal: {
    modalVisible: false,
  },
};

// eslint-disable-next-line import/prefer-default-export
export const uiReducer = produce((/** uiState */ draft, {type, payload}) => {
  switch (type) {
    case actionTypes.TOGGLE_LOADER:
      // eslint-disable-next-line no-param-reassign
      draft.loader.show = payload;
      break;
    case actionTypes.SET_MODAL:
      Object.assign(draft.modal, payload);
      break;
    default:
      break;
  }
}, initialState);
