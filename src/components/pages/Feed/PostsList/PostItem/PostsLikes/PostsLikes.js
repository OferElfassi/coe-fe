import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import CardActions from '@mui/material/CardActions';
import CustomAvatar from '../../../../../uiComponents/CuatomAvatar/CustomAvatar';

function PostsLikes({count, firstThreeLikes}) {
  return (
    <CardActions>
      <Box sx={{display: 'flex', alignItems: 'center', marginTop: 0}}>
        <Box sx={{display: 'flex', alignItems: 'center', marginLeft: 2}}>
          {firstThreeLikes.map(
            (like, index) =>
              index < 5 && (
                <CustomAvatar
                  key={like.id}
                  sx={{marginLeft: '-0.5rem'}}
                  size="xs"
                  fullName={like.user.fullName}
                  imageUrl={like.user.image.url}
                />
              ),
          )}
        </Box>
        <Box
          sx={{
            display: 'flex',
            marginLeft: 2,
            fontSize: 14,
            color: '#666',
          }}>{`${count} Likes`}</Box>
      </Box>
    </CardActions>
  );
}

PostsLikes.propTypes = {
  count: PropTypes.number.isRequired,
  firstThreeLikes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostsLikes;
