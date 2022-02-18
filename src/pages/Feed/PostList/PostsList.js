import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import makeStyles from '@mui/styles/makeStyles';
import cx from 'clsx';
import PropTypes from 'prop-types';
import PostItem from './PostItem/PostItem';
import postListStyle from './postListStyle';

const useStyles = makeStyles(postListStyle);

function PostsList({posts}) {
  const styles = useStyles();
  const containerStyle = cx({
    [styles.root]: true,
  });
  return (
    <List className={containerStyle}>
      {posts.map(post => (
        <ListItem key={post.id}>
          <PostItem
            image={post.image}
            id={post.id}
            createdAt={new Date(post.createdAt).toLocaleString()}
            user={post.user}
            description={post.description}
            reactions={post.reactions}
            comments={post.comments}
          />
        </ListItem>
      ))}
    </List>
  );
}

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostsList;
