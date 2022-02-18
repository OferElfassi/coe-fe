import * as actionTypes from '../actionTypes';
import * as userApi from '../../serverApi/rest/userApi';
import * as uiActions from './uiActions';

export const setUser = userInfo => ({
  type: actionTypes.SET_USER,
  payload: {userInfo},
});

export const setUserImage = image => ({
  type: actionTypes.SET_USER_IMAGE,
  payload: {image},
});

export const resetUser = () => ({
  type: actionTypes.RESET_USER,
  payload: null,
});

export const updateInfo = userInfo => async (dispatch, getState) => {
  try {
    const {
      user: {id},
      auth: {token},
    } = getState();
    dispatch(uiActions.toggleLoader(true));
    console.log('sending', {id, userInfo, token});
    const res = await userApi.updateUserInfo(id, userInfo, token);
    console.log(res);
    dispatch(
      setUser({
        ...userInfo,
        fullName: `${userInfo.firstname} ${userInfo.lastname}`,
      }),
    );
    dispatch(uiActions.setTimedMessage('', 'Update success', 'success'));
  } catch (e) {
    dispatch(uiActions.setErrorMessage(e.message, 'Update Info Error'));
  } finally {
    dispatch(uiActions.toggleLoader(false));
  }
};

export const updateProfilePic = file => async (dispatch, getState) => {
  try {
    const {
      auth: {token},
    } = getState();
    dispatch(uiActions.toggleLoader(true));
    console.log(file);
    const res = await userApi.updateProfilePic(file, token);
    console.log(res);
    dispatch(setUserImage(res.data));
    dispatch(uiActions.setTimedMessage('', 'Update Image success', 'success'));
  } catch (e) {
    dispatch(uiActions.setErrorMessage(e.message, 'Update Info Error'));
  } finally {
    dispatch(uiActions.toggleLoader(false));
  }
};
