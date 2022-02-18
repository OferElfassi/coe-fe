import * as serverApi from '../serverApi';

export const getHashtags = async () => {
  const res = await serverApi.get('/api/hashtags');
  return serverApi.handleResult(res, 'Get Hashtags Error');
};

export const addHashtag = async (hashtagName, token) => {
  const res = await serverApi.post('/api/hashtags', {hashtagName}, token);
  return serverApi.handleResult(res, 'Get Hashtags Error');
};
