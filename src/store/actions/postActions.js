import * as actionTypes from '../actionTypes';
import * as uiActions from './uiActions';
import * as postApi from '../../serverApi/rest/postApi';
import * as hashtagApi from '../../serverApi/rest/hashtagApi';

const setPosts = posts => ({
  type: actionTypes.SET_POSTS,
  payload: {posts},
});

const setHashTags = hashtags => ({
  type: actionTypes.SET_HASHTAGS,
  payload: {hashtags},
});

const insertComment = (comment, postIndex) => ({
  type: actionTypes.INSERT_COMMENT,
  payload: {comment, postIndex},
});

const insertReaction = (reaction, postIndex) => ({
  type: actionTypes.INSERT_REACTION,
  payload: {reaction, postIndex},
});

const deleteReaction = (reactionIndex, postIndex) => ({
  type: actionTypes.DELETE_REACTION,
  payload: {reactionIndex, postIndex},
});
const setNewPost = postData => ({
  type: actionTypes.SET_NEW_POST,
  payload: {postData},
});

export const getFeedPageData = () => async (dispatch, getState) => {
  try {
    const {
      post: {posts},
    } = getState();
    // if (posts.length !== 0) return;
    dispatch(uiActions.toggleLoader(true));
    const postsRes = await postApi.getPosts();
    const hashtagsRes = await hashtagApi.getHashtags();
    console.log({postsRes});
    console.log({hashtagsRes});
    dispatch(setPosts(postsRes.data));
    dispatch(setHashTags(hashtagsRes.data));
  } catch (e) {
    dispatch(uiActions.setErrorMessage(e.message, 'Feed Error'));
  } finally {
    dispatch(uiActions.toggleLoader(false));
  }
};

export const addComment = (content, postId) => async (dispatch, getState) => {
  const {
    auth: {token},
    post: {posts},
  } = getState();
  try {
    dispatch(uiActions.toggleLoader(true));
    const newCommentRes = await postApi.postComment(content, postId, token);
    const postIndex = posts.findIndex(p => p.id === postId);
    console.log(newCommentRes.data);
    if (postIndex !== -1) {
      dispatch(insertComment(newCommentRes.data, postIndex));
    }
  } catch (e) {
    dispatch(uiActions.setErrorMessage(e.message, 'Add comment Error'));
  } finally {
    dispatch(uiActions.toggleLoader(false));
  }
};

export const addReaction = (type, postId) => async (dispatch, getState) => {
  const {
    auth: {token},
    post: {posts},
  } = getState();
  try {
    dispatch(uiActions.togglePostBtnsState(type));
    dispatch(uiActions.toggleLoader(true));

    const newReaction = await postApi.postReaction(type, postId, token);
    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex !== -1) {
      dispatch(insertReaction(newReaction.data, postIndex));
    }
  } catch (e) {
    dispatch(uiActions.setErrorMessage(e.message, 'Add reaction Error'));
  } finally {
    dispatch(uiActions.toggleLoader(false));
    dispatch(uiActions.togglePostBtnsState());
  }
};

export const removeReaction =
  (reactionType, reactionId, postId) => async (dispatch, getState) => {
    try {
      const {
        auth: {token},
        post: {posts},
      } = getState();

      dispatch(uiActions.togglePostBtnsState(reactionType));
      dispatch(uiActions.toggleLoader(true));
      await postApi.deleteReaction(reactionId, postId, token);
      const postIndex = posts.findIndex(p => p.id === postId);
      if (postIndex !== -1) {
        const reactionIndex = posts[postIndex].reactions.findIndex(
          r => r.id === reactionId,
        );
        if (reactionIndex !== -1) {
          dispatch(deleteReaction(reactionIndex, postIndex));
        }
      }
    } catch (e) {
      dispatch(uiActions.setErrorMessage(e.message, 'Delete reaction Error'));
    } finally {
      dispatch(uiActions.toggleLoader(false));
      dispatch(uiActions.togglePostBtnsState());
    }
  };

export const postNewImage = pic => async (dispatch, getState) => {
  try {
    const {
      auth: {token},
      post: {posts},
    } = getState();
    dispatch(uiActions.toggleLoader(true));
    const newImageRes = await postApi.postImage(pic, token);
    console.log({newImageRes});
    dispatch(setNewPost(newImageRes.data));
    dispatch(uiActions.toggleNewPostModal(true));
  } catch (e) {
    dispatch(uiActions.setErrorMessage(e.message, 'Post new image Error'));
  } finally {
    dispatch(uiActions.toggleLoader(false));
  }
};

export const addNewPost = postData => async (dispatch, getState) => {
  try {
    const {
      auth: {token},
      post: {posts},
    } = getState();
    dispatch(uiActions.toggleLoader(true));
    const newPostRes = await postApi.postPost(postData, token);
    console.log({newPostRes});
  } catch (e) {
    dispatch(uiActions.setErrorMessage(e.message, 'Post new Review Error'));
  } finally {
    dispatch(uiActions.toggleLoader(false));
    dispatch(uiActions.toggleNewPostModal(false));
  }
};
