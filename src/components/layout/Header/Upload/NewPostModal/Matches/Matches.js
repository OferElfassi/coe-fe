import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom';
import usePost from '../../../../../../hooks/usePost';

function Matches() {
  const navigate = useNavigate();
  const {postState} = usePost();
  return (
    <Box
      sx={{
        display: 'flex',
        width: '50%',
        flexDirection: 'column',
        textAlign: 'center',
      }}>
      <Box>
        <Typography
          variant="h3"
          sx={{
            textDecoration: 'underline',
            marginBottom: 1,
          }}>
          Matches
        </Typography>
        <Typography variant="paragraph" sx={{fontSize: 20}}>
          If theres a match ,you can pick one and we will redirect you to the
          matched post
        </Typography>
      </Box>
      <ImageList
        sx={{width: 500, marginTop: 5, textAlign: 'center'}}
        gap={10}
        cols={3}
        rowHeight={164}>
        {/* eslint-disable-next-line array-callback-return */}
        {postState.newPost.matches.map(item => {
          if (item.hashtag.title && item.image.url && item.id) {
            return (
              <ImageListItem
                key={item.id}
                onClick={() => navigate(`/posts/${item.id}`)}>
                <img alt="" src={item.image.url} loading="lazy" />
                <ImageListItemBar title={item.hashtag.title} />
              </ImageListItem>
            );
          }
          return null;
        })}
      </ImageList>
    </Box>
  );
}

Matches.propTypes = {};

export default Matches;
