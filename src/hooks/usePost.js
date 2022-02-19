import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as postActions from '../store/actions/postActions';

export default function usePost() {
  /** @type {postState} */
  const values = useSelector(store => store.post);
  const dispatch = useDispatch();

  const getFeedPageData = () => {
    dispatch(postActions.getFeedPageData());
  };
  const addComment = (content, postId) => {
    dispatch(postActions.addComment(content, postId));
  };
  const addReaction = (reactionType, postId) => {
    dispatch(postActions.addReaction(reactionType, postId));
  };
  const removeReaction = (reactionType, reactionId, postId) => {
    dispatch(postActions.removeReaction(reactionType, reactionId, postId));
  };
  const postNewImage = pic => {
    dispatch(postActions.postNewImage(pic));
  };
  const addNewPost = postData => {
    dispatch(postActions.addNewPost(postData));
  };
  const getSinglePost = (postId, navigateFn) => {
    dispatch(postActions.getSinglePost(postId, navigateFn));
  };

  return {
    /** @type {postState} */
    postState: values,
    postActions: {
      getFeedPageData: useCallback(getFeedPageData, []),
      addComment: useCallback(addComment, []),
      addReaction: useCallback(addReaction, []),
      removeReaction: useCallback(removeReaction, []),
      postNewImage: useCallback(postNewImage, []),
      addNewPost: useCallback(addNewPost, []),
      getSinglePost: useCallback(getSinglePost, []),
    },
  };
}
