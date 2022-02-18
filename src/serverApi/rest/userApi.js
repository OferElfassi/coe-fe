import * as serverApi from '../serverApi';

export const updateUserInfo = async (userId, userInfo, token) => {
  const res = await serverApi.put(`/api/users/${userId}`, userInfo, token);
  return serverApi.handleResult(res, 'Update Error');
};

export const updateProfilePic = async (file, token) => {
  const data = new FormData();
  data.append('profilePic', file);
  const res = await serverApi.postFile('/api/users/profile-pic', data, token);
  return serverApi.handleResult(res, 'Upload Error');
};

export const getUser = async userId => {
  const res = await serverApi.get(`/api/users/${userId}`);
  return serverApi.handleResult(res, 'Get User Error');
};
