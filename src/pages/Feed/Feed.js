import React, {useEffect} from 'react';
import Typography from '@mui/material/Typography';
import useUi from '../../hooks/useUi';
import PostsList from './PostsList/PostsList';
import Hashtags from './Hashtags/Hashtags';
import usePost from '../../hooks/usePost';

function Feed() {
  const {uiActions} = useUi();
  const {postActions, postState} = usePost();
  useEffect(() => {
    uiActions.setActivePage('feed');
    postActions.getFeedPageData();
  }, []);
  return (
    <div>
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        style={{padding: '20px 26px'}}>
        Reviews Feed
      </Typography>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <PostsList posts={postState.posts} />
        <Hashtags hashtags={postState.hashtags} />
      </div>
    </div>
  );
}

export default Feed;
