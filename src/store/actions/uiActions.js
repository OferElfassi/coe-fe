import * as actionTypes from '../actionTypes';

export const toggleLoader = state => ({
  type: actionTypes.TOGGLE_LOADER,
  payload: {state},
});
export const setModal = modalState => ({
  type: actionTypes.SET_MODAL,
  payload: modalState,
});
export const toggleNewPostModal = state => ({
  type: actionTypes.TOGGLE_NEW_POST_MODAL,
  payload: state,
});

export const setPostBtnsState = btnsState => ({
  type: actionTypes.SET_POST_BTNS_STATE,
  payload: btnsState,
});

export const setActivePage = activePage => {
  const isAuthPage = activePage === 'login' || activePage === 'signup';
  return {
    type: actionTypes.SET_ACTIVE_PAGE,
    payload: {activePage, isAuthPage},
  };
};

export const togglePostBtnsState =
  (reactionType = '') =>
  dispatch => {
    dispatch(
      setPostBtnsState({
        likeDisabled: reactionType === 'like',
        reportDisabled: reactionType === 'report',
      }),
    );
  };

export const closeModal = () => dispatch => {
  dispatch(
    setModal({
      modalVisible: false,
      modalText: '',
      modalTitle: '',
      okText: '',
      cancelText: '',
      color: '',
      onOk: null,
      onCancel: null,
    }),
  );
};

export const setTimedMessage =
  (msg, title, color, onTimeOut = null) =>
  dispatch => {
    const onEnd = () => {
      if (onTimeOut) {
        onTimeOut();
      }
      dispatch(closeModal());
    };
    dispatch(
      setModal({
        modalVisible: true,
        modalTitle: title,
        modalText: msg,
        okText: 'ok',
        cancelText: '',
        onOk: onEnd,
        color,
      }),
    );
    setTimeout(onEnd, 2000);
  };
export const setErrorMessage =
  (msg, title = 'Error') =>
  dispatch => {
    dispatch(
      setModal({
        modalVisible: true,
        modalTitle: title,
        modalText: msg,
        okText: 'ok',
        cancelText: '',
        color: 'alert',
        onOk: () => dispatch(closeModal()),
      }),
    );
  };
