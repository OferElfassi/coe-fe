import * as serverApi from '../serverApi';

export const getPost = async postId => {
  const res = await serverApi.get(`/api/posts/${postId}`);
  return serverApi.handleResult(res, 'Get posts Error');
};

export const getPosts = async () => {
  const res = await serverApi.get('/api/posts');
  return serverApi.handleResult(res, 'Get posts Error');
};

export const getPostsByHashtag = async hashtag => {
  const res = await serverApi.get(`/api/posts/hashtag/${hashtag}`);
  return serverApi.handleResult(res, 'Get posts Error');
};

export const postPost = async (postData, token) => {
  const res = await serverApi.post(`/api/posts`, postData, token);
  return serverApi.handleResult(res, 'Add Post Error');
};

export const postComment = async (content, postId, token) => {
  const res = await serverApi.put(
    `/api/posts/${postId}/comment`,
    {content},
    token,
  );
  return serverApi.handleResult(res, 'Post Comment Error');
};

export const postReaction = async (reactionType, postId, token) => {
  const res = await serverApi.put(
    `/api/posts/${postId}/reaction`,
    {reactionType},
    token,
  );
  return serverApi.handleResult(res, 'post reaction Error');
};

export const deleteReaction = async (reactionId, postId, token) => {
  const res = await serverApi.apiDelete(
    `/api/posts/${postId}/reaction/${reactionId}`,
    token,
  );
  return serverApi.handleResult(res, 'Delete reaction Error');
};

export const postImage = async (file, token) => {
  const data = new FormData();
  data.append('post-image', file);
  const res = await serverApi.postFile('/api/posts/post-pic', data, token);
  return serverApi.handleResult(res, 'Upload Error');
};
