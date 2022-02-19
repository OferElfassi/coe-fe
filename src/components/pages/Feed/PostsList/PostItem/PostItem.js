import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';
import PropTypes from 'prop-types';
import PostItemStyle from './postItemStyle';
import PostsLikes from './PostsLikes/PostsLikes';
import PostComments from './PostComments/PostComments';
import InputComment from './InputComment/InputComment';
import PostActions from './PostActions/PostActions';
import PostHeader from './PostHeader/PostHeader';
import useAuth from '../../../../../hooks/useAuth';
import useUser from '../../../../../hooks/useUser';
import usePost from '../../../../../hooks/usePost';
import useUi from '../../../../../hooks/useUi';

const tempAvatar = require('../../../../../assets/images/profile-avatar.png');

const useStyles = makeStyles(PostItemStyle);

function PostItem(props) {
  const {user, createdAt, image, id, description, reactions, comments} = props;
  const {userState} = useUser();
  const {authState} = useAuth();
  const {postActions} = usePost();
  const {uiState, uiActions} = useUi();
  const [commentStats, setCommentStats] = useState({
    ownLike: false,
    ownReport: false,
    likes: [],
    reports: [],
  });
  useEffect(() => {
    const likes = [];
    const reports = [];
    let ownLike;
    let ownReport;
    reactions.forEach(reaction => {
      if (reaction.report) {
        reports.push(reaction);
      } else if (reaction.like) {
        likes.push(reaction);
      }
    });
    if (authState.isAuth) {
      ownLike = likes.find(l => l.user.id === userState.id);
      ownReport = reports.find(r => r.user.id === userState.id);
    }
    setCommentStats({
      likes,
      reports,
      ownLike,
      ownReport,
    });
  }, [reactions]);

  const styles = useStyles();

  const handleLikeClick = () => {
    if (commentStats.ownLike !== undefined) {
      postActions.removeReaction('like', commentStats.ownLike.id, id);
    } else {
      postActions.addReaction('like', id);
    }
  };
  const handleReportClick = () => {
    if (user.id === userState.id) {
      uiActions.setErrorMessage("You can't report on your own posts! 😆");
      return;
    }
    if (commentStats.ownReport !== undefined) {
      postActions.removeReaction('report', commentStats.ownReport.id, id);
    } else {
      postActions.addReaction('report', id);
    }
  };

  return (
    <Card sx={{maxWidth: 580}}>
      <PostHeader
        imageUrl={user.image.url}
        username={user.fullName}
        date={createdAt}
      />
      <CardMedia component="img" image={image.url} />
      <PostActions
        ownLike={commentStats.ownLike !== undefined}
        ownReport={commentStats.ownReport !== undefined}
        onCommentClick={() => {}}
        onLikeClick={handleLikeClick}
        onReportClick={handleReportClick}
        likeDisabled={uiState.postBtns.likeDisabled || !authState.isAuth}
        reportDisabled={uiState.postBtns.reportDisabled || !authState.isAuth}
        postId={id}
      />
      <PostsLikes
        count={commentStats.likes.length}
        firstThreeLikes={commentStats.likes}
      />
      <CardContent>
        <Typography variant="body2" color="text.menu">
          {description}
        </Typography>
      </CardContent>
      <PostComments comments={comments} postId={id} />
      <InputComment postId={id} disabled={!authState.isAuth} />
    </Card>
  );
}

PostItem.propTypes = {
  user: PropTypes.shape({
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
    fullName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  createdAt: PropTypes.string.isRequired,
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reactions: PropTypes.arrayOf(
    PropTypes.shape({
      like: PropTypes.bool.isRequired,
      report: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired,
      user: PropTypes.shape({
        image: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }).isRequired,
        fullName: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
      }).isRequired,
    }),
  ).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      createdAt: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      user: PropTypes.shape({
        image: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }).isRequired,
        fullName: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
      }).isRequired,
    }),
  ).isRequired,
};
export default PostItem;
