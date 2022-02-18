import React from 'react';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import PropTypes from 'prop-types';
import CustomAvatar from '../../../../../components/CuatomAvatar/CustomAvatar';

function PostComment(props) {
  const {writerAvatar, writerName, content, date, commentId} = props;
  return (
    <ListItem
      disablePadding
      sx={{
        width: '100%',
        '& .MuiListItemText-root': {
          backgroundColor: 'rgba(243,244,246,1)',
          padding: '.5rem .75rem',
          borderRadius: '.375rem',
          position: 'relative',
        },
      }}>
      <ListItemAvatar sx={{alignSelf: 'flex-start', marginTop: 1}}>
        <CustomAvatar size="sm" />
      </ListItemAvatar>
      <ListItemText
        id={commentId}
        primary={
          <Box component="div">
            <Typography variant="h6" sx={{textAlign: 'start'}}>
              {writerName}
            </Typography>
            <Typography variant="paragraph" color="text.primary">
              {content}
            </Typography>
            <Box
              component="div"
              sx={{
                position: 'absolute',
                width: '.75rem',
                height: '.75rem',
                left: '-0.25rem',
                top: '.75rem',
                backgroundColor: 'rgba(243,244,246,1)',
                transform:
                  'translateX(0) translateY(0) rotate(45deg) skewX(0) skewY(0) scaleX(1) scaleY(1)',
              }}
            />
          </Box>
        }
        secondary={date}
      />
    </ListItem>
  );
}

PostComment.propTypes = {
  commentId: PropTypes.string.isRequired,
  writerAvatar: PropTypes.string.isRequired,
  writerName: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default PostComment;
