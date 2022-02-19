/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';

function ImageLink({to, src, className}) {
  return (
    <Link to={to}>
      <Box
        className={className}
        component="img"
        alt="comment on everything"
        src={src}
      />
    </Link>
  );
}

ImageLink.propTypes = {
  to: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
};
ImageLink.defaultProps = {
  className: '',
};
export default ImageLink;
