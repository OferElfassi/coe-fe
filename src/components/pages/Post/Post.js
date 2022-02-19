import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import useUi from '../../../hooks/useUi';
import usePost from '../../../hooks/usePost';
import PostItem from '../Feed/PostsList/PostItem/PostItem';

function Post() {
  const {postActions, postState} = usePost();
  const {uiActions, uiState} = useUi();
  const {postId} = useParams();
  const navigate = useNavigate();
  const {singlePost} = postState;
  const navigateFn = () => {
    navigate('/');
  };
  useEffect(() => {
    postActions.getSinglePost(postId, navigateFn);
  }, []);

  return (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      {!uiState.loader.show && (
        <PostItem
          image={singlePost.image}
          id={singlePost.id}
          createdAt={new Date(singlePost.createdAt).toLocaleString()}
          user={singlePost.user}
          description={singlePost.description}
          reactions={singlePost.reactions}
          comments={singlePost.comments}
        />
      )}
    </div>
  );
}

export default Post;
