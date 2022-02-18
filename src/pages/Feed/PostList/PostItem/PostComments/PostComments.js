import React from 'react';
import PropTypes from 'prop-types';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import PostComment from './PostComment';
// import SendIcon from '@mui/icons-material/Send';
import ExpandMoreBtn from '../../../../../components/ExpandMoreBtn/ExpandMoreBtn';

function PostComments({comments, postId}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <CardActions style={{display: 'flex', justifyContent: 'center'}}>
        <ExpandMoreBtn
          title="View all comments"
          expanded={expanded}
          onCLick={handleExpandClick}
        />
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Divider light variant="middle" />
        <CardContent>
          <List
            dense
            sx={{
              width: '100%',
              maxHeight: 200,
              overflowY: 'scroll',
              bgcolor: 'background.paper',
              '& .MuiListItemText-root': {
                backgroundColor: 'rgba(243,244,246,1)',
                padding: '.5rem .75rem',
                borderRadius: '.375rem',
                position: 'relative',
              },
            }}>
            {comments.map(comment => {
              return (
                <PostComment
                  key={comment.id}
                  content={comment.content}
                  commentId={comment.id}
                  date={new Date(comment.createdAt).toLocaleString()}
                  writerAvatar={comment.user.image.url}
                  writerName={comment.user.fullName}
                />
              );
            })}
          </List>
        </CardContent>
      </Collapse>
    </>
  );
}

PostComments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  postId: PropTypes.string.isRequired,
};

export default PostComments;
