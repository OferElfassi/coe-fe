import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as uiActions from '../store/actions/uiActions';

export default function useUi() {
  /** @type {uiState} */
  const values = useSelector(store => store.ui);
  const dispatch = useDispatch();

  const toggleLoader = state => {
    dispatch(uiActions.toggleLoader(state));
  };

  const setErrorMessage = msg => {
    dispatch(uiActions.setErrorMessage(msg));
  };

  const setActivePage = pageName => {
    dispatch(uiActions.setActivePage(pageName));
  };
  const toggleNewPostModal = state => {
    dispatch(uiActions.toggleNewPostModal(state));
  };

  return {
    /** @type {uiState} */
    uiState: values,
    uiActions: {
      setActivePage: useCallback(setActivePage, []),
      toggleLoader: useCallback(toggleLoader, []),
      setErrorMessage: useCallback(setErrorMessage, []),
      toggleNewPostModal: useCallback(toggleNewPostModal, []),
    },
  };
}
