import React, {useEffect} from 'react';
import Container from '@mui/material/Container';
import useUi from '../../hooks/useUi';
import useUser from '../../hooks/useUser';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfilePosts from './ProfilePosts/ProfilePosts';

function Profile() {
  const {uiActions} = useUi();
  const {userState} = useUser();
  useEffect(() => {
    uiActions.setActivePage('profile');
  }, []);
  return (
    <Container sx={{marginTop: 5}}>
      <ProfileHeader
        imageUrl={userState.image.url}
        fullName={userState.fullName}
        posts={userState.posts.length}
        followers={userState.followers.length}
        following={userState.following.length}
        about={userState.about}
      />
      <ProfilePosts />
    </Container>
  );
}

export default Profile;
