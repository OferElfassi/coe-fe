import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';

const postEx = {
  _id: '61c5923c186ee007e46fb7e3',
  createdAt: '2021-12-24T09:25:26.793Z',
  image: {
    url: 'https://comment-on-everything-bucket.s3.amazonaws.com/cdede24e-d7b7-45c6-884d-0fe631328f5e.jpg',
  },
};

function ProfilePosts({posts}) {
  const navigate = useNavigate();
  return (
    <ImageList
      sx={{width: 500, marginTop: 10}}
      gap={10}
      cols={3}
      rowHeight={164}>
      {posts.map(post => (
        <ImageListItem
          key={post.id}
          onClick={() => navigate(`/posts/${post.id}`)}>
          <img alt="" src={post.image.url} loading="lazy" />
          <ImageListItemBar title={post.createdAt} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

ProfilePosts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProfilePosts;
