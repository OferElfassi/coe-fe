import * as actionTypes from '../actionTypes';
import * as uiActions from './uiActions';
import * as userActions from './userActions';
import * as authApi from '../../serverApi/rest/authApi';

const setAuth = (isAuth, token) => ({
  type: actionTypes.SET_AUTH,
  payload: {isAuth, token},
});

export const login =
  ({email, password}) =>
  async dispatch => {
    try {
      dispatch(uiActions.toggleLoader(true));
      const res = await authApi.login(email, password);
      const loginData = res.data;
      dispatch(setAuth(true, loginData.token));
      dispatch(userActions.setUser(loginData.user));
    } catch (e) {
      dispatch(uiActions.setErrorMessage(e.message, 'Login Error'));
    } finally {
      dispatch(uiActions.toggleLoader(false));
    }
  };

export const logout = () => async dispatch => {
  dispatch(setAuth(false, ''));
  dispatch(userActions.resetUser());
};

export const signup =
  (/** signupInfo */ signupInfo, redirectToLoginFn) => async dispatch => {
    try {
      await authApi.signup(signupInfo);
      dispatch(
        uiActions.setTimedMessage(
          "You'll be redirect to login",
          'Signup success',
          'success',
          redirectToLoginFn,
        ),
      );
    } catch (e) {
      dispatch(uiActions.setErrorMessage(e.message, 'Signup Error'));
    }
  };
