import React from 'react';
import PropTypes from 'prop-types';
import CardHeader from '@mui/material/CardHeader';
import CustomAvatar from '../../../../../uiComponents/CuatomAvatar/CustomAvatar';

function PostHeader({imageUrl, username, date}) {
  return (
    <CardHeader
      avatar={<CustomAvatar size="sm" bordered imageUrl={imageUrl} />}
      title={username}
      subheader={date}
    />
  );
}

PostHeader.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default PostHeader;
