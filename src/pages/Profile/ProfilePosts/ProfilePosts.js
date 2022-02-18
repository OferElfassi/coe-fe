import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const postEx = {
  _id: '61c5923c186ee007e46fb7e3',
  createdAt: '2021-12-24T09:25:26.793Z',
  image: {
    url: 'https://comment-on-everything-bucket.s3.amazonaws.com/cdede24e-d7b7-45c6-884d-0fe631328f5e.jpg',
  },
};
function ProfilePosts() {
  return (
    <ImageList
      sx={{width: 500, marginTop: 10}}
      gap={10}
      cols={3}
      rowHeight={164}>
      {[1, 2, 3].map(item => (
        <ImageListItem key={item}>
          <img alt="" src={postEx.image.url} loading="lazy" />
          <ImageListItemBar title={postEx.createdAt} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

ProfilePosts.propTypes = {};

export default ProfilePosts;
