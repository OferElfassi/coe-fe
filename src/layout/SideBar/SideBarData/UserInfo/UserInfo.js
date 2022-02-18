import React from 'react';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';
import makeStyles from '@mui/styles/makeStyles';
import Typography from '@mui/material/Typography';
import CustomAvatar from '../../../../components/CuatomAvatar/CustomAvatar';
import userInfoStyle from './userInfoStyle';
import useAuth from '../../../../hooks/useAuth';
import useUser from '../../../../hooks/useUser';

const useStyles = makeStyles(userInfoStyle);

function UserInfo() {
  const styles = useStyles();
  const {authState} = useAuth();
  const {userState} = useUser();

  return (
    <Box component="div" className={styles.root}>
      <CustomAvatar
        size="md"
        bordered
        imageUrl={userState.image.url}
        fullName={userState.fullName}
      />
      {authState.isAuth ? (
        <>
          <Typography variant="h6">{userState.fullName}</Typography>
          <Box className={styles.statsContainer}>
            <Box className={styles.statsItem}>
              <Typography variant="h7">Followers</Typography>
              <Typography variant="paragraph">
                {userState.followers.length}
              </Typography>
            </Box>
            <Box className={styles.statsItem}>
              <Typography variant="h7">Following</Typography>
              <Typography variant="paragraph">
                {userState.following.length}
              </Typography>
            </Box>
            <Box className={styles.statsItem}>
              <Typography variant="h7">Posts</Typography>
              <Typography variant="paragraph">
                {userState.posts.length}
              </Typography>
            </Box>
          </Box>
        </>
      ) : (
        <Link to="/signup">JOIN C.O.E</Link>
      )}
    </Box>
  );
}

export default UserInfo;
