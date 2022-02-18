import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as authActions from '../store/actions/authActions';

export default function useAuth() {
  /** @type {authState} */
  const values = useSelector(store => store.auth);
  const dispatch = useDispatch();

  const login = ({email, password}) => {
    dispatch(authActions.login({email, password}));
  };

  const logout = () => {
    dispatch(authActions.logout());
  };

  const signup = (/** signupInfo */ signupInfo, redirectToLoginFn) => {
    dispatch(authActions.signup(signupInfo, redirectToLoginFn));
  };

  return {
    /** @type {authState} */
    authState: values,
    authActions: {
      login: useCallback(login, []),
      logout: useCallback(logout, []),
      signup: useCallback(signup, []),
    },
  };
}
