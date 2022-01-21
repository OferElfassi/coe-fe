import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as userActions from '../store/actions/userActions';

export default function useUser() {
  /** @type {userState} */
  const values = useSelector(store => store.user);
  const dispatch = useDispatch();

  const login = ({email, password}) => {
    dispatch(userActions.login({email, password}));
  };

  const signup = (/** userState */ signupInfo) => {
    dispatch(userActions.signup(signupInfo));
  };

  const handleLogOut = () => {
    dispatch(userActions.handleLogOut());
  };

  return {
    /** @type {userState} */
    userState: values,
    userActions: {
      login: useCallback(login, []),
      signup: useCallback(signup, []),
      handleLogOut: useCallback(handleLogOut, []),
    },
  };
}
