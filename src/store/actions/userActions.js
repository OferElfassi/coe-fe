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
export const setUsers = users => ({
  type: actionTypes.SET_USERS,
  payload: {users},
});
export const removeUser = userIndex => ({
  type: actionTypes.REMOVE_USER,
  payload: {userIndex},
});
export const updateUser = (userInfo, userIndex) => ({
  type: actionTypes.UPDATE_USER,
  payload: {userInfo, userIndex},
});
export const insertOwnPost = post => ({
  type: actionTypes.INSERT_OWN_POST,
  payload: {post},
});

export const updateInfo = userInfo => async (dispatch, getState) => {
  try {
    const {
      user: {id},
      auth: {token},
    } = getState();
    dispatch(uiActions.toggleLoader(true));
    const res = await userApi.updateUserInfo(id, userInfo, token);
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
export const updateUserDetails =
  (updatedUser, userId) => async (dispatch, getState) => {
    try {
      const {
        auth: {token},
      } = getState();
      dispatch(uiActions.toggleLoader(true));
      await userApi.updateUserInfo(userId, updatedUser, token);
    } catch (e) {
      dispatch(uiActions.setErrorMessage(e.message, 'Update User Error'));
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
    const res = await userApi.updateProfilePic(file, token);
    dispatch(setUserImage(res.data));
    dispatch(uiActions.setTimedMessage('', 'Update Image success', 'success'));
  } catch (e) {
    dispatch(uiActions.setErrorMessage(e.message, 'Update Info Error'));
  } finally {
    dispatch(uiActions.toggleLoader(false));
  }
};

export const getUsers = () => async (dispatch, getState) => {
  try {
    const {
      auth: {token},
    } = getState();
    dispatch(uiActions.toggleLoader(true));
    const usersRes = await userApi.getUsers(token);
    dispatch(setUsers(usersRes.data));
  } catch (e) {
    dispatch(uiActions.setErrorMessage(e.message, 'Get users Error'));
  } finally {
    dispatch(uiActions.toggleLoader(false));
  }
};

export const deleteUser = userId => async (dispatch, getState) => {
  try {
    const {
      auth: {token},
      user: {manage},
    } = getState();
    dispatch(uiActions.toggleLoader(true));
    const deleteRes = await userApi.deleteUser(userId, token);
  } catch (e) {
    dispatch(uiActions.setErrorMessage(e.message, 'Delete users Error'));
  } finally {
    dispatch(uiActions.toggleLoader(false));
  }
};
