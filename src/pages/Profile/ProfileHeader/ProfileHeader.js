import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';
import makeStyles from '@mui/styles/makeStyles';
import profileHeaderStyle from './profileHeaderStyle';
import CustomAvatar from '../../../components/CuatomAvatar/CustomAvatar';
import {minLength} from '../../../util/formValidators';

const useStyles = makeStyles(profileHeaderStyle);

function ProfileHeader(props) {
  const styles = useStyles();
  const {following, followers, posts, fullName, about, imageUrl} = props;
  return (
    <Box className={styles.root}>
      <CustomAvatar
        size="xl"
        bordered
        imageUrl={imageUrl}
        fullName={fullName}
      />
      <Box className={styles.infoContainer}>
        <Typography variant="h4">{fullName}</Typography>
        <Typography variant="h6">{about}</Typography>
        <Box className={styles.statsContainer}>
          <Box>
            <Typography variant="paragraph">{followers} followers</Typography>
            <Divider orientation="vertical" />
          </Box>
          <Box>
            <Typography variant="paragraph">{following} following</Typography>
            <Divider orientation="vertical" />
          </Box>
          <Box>
            <Typography variant="paragraph">{posts} posts</Typography>
            <Divider orientation="vertical" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

ProfileHeader.propTypes = {
  following: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  posts: PropTypes.number.isRequired,
  fullName: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default ProfileHeader;
