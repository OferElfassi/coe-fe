import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as userActions from '../store/actions/userActions';

export default function useUser() {
  /** @type {userState} */
  const values = useSelector(store => store.user);
  const dispatch = useDispatch();

  const updateInfo = userInfo => {
    dispatch(userActions.updateInfo(userInfo));
  };
  const updateProfilePic = userInfo => {
    dispatch(userActions.updateProfilePic(userInfo));
  };
  const getUsers = () => {
    dispatch(userActions.getUsers());
  };
  const deleteUser = userId => {
    dispatch(userActions.deleteUser(userId));
  };

  const updateUserDetails = (userInfo, userId) => {
    dispatch(userActions.updateUserDetails(userInfo, userId));
  };

  return {
    /** @type {userState} */
    userState: values,
    userActions: {
      updateInfo: useCallback(updateInfo, []),
      updateProfilePic: useCallback(updateProfilePic, []),
      getUsers: useCallback(getUsers, []),
      deleteUser: useCallback(deleteUser, []),
      updateUserDetails: useCallback(updateUserDetails, []),
    },
  };
}
