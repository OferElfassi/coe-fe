import * as serverApi from '../serverApi';

export const login = async (email, password) => {
  const res = await serverApi.post('/api/auth/login', {email, password});
  return serverApi.handleResult(res, 'SignIn Error');
};

export const signup = async (/** signupInfo */ signupInfo) => {
  const res = await serverApi.post('/api/auth/signup', signupInfo);
  return serverApi.handleResult(res, 'Signup Error');
};
