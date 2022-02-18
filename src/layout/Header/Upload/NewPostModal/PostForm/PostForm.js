import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import CardMedia from '@mui/material/CardMedia';
import CustomInput from '../../../../../components/CustomInput/CustomInput';
import CustomButton from '../../../../../components/CustomButton/CustomButton';
import usePost from '../../../../../hooks/usePost';

const tempImg =
  'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg';

function PostForm() {
  const {postState, postActions} = usePost();
  const [hashtag, setHashtag] = useState('');
  const [newHashtag, setNewHashtag] = useState('');
  const [description, setDescription] = useState('');

  const formIsValid = () => {
    return (hashtag !== '' || newHashtag !== '') && description !== '';
  };
  const handleSubmit = e => {
    e.preventDefault();
    const newPostData = {
      hashtag: hashtag === '' ? newHashtag : hashtag,
      description,
      imageUrl: postState.newPost.imageUrl,
      imageKey: postState.newPost.imageKey,
    };
    postActions.addNewPost(newPostData);
  };

  const handleSelect = event => {
    setHashtag(event.target.value);
  };
  const handleNewHashtag = event => {
    setHashtag('');
    setNewHashtag(event.target.value);
  };
  const handleInput = event => {
    setDescription(event.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
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
          New Post
        </Typography>
        <Typography variant="paragraph" sx={{fontSize: 20}}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          If you haven't found match, ad your unique review
        </Typography>
      </Box>
      <Box component="form" onSubmit={handleSubmit}>
        <CustomInput
          sx={{width: '100%', marginTop: 3}}
          name="description"
          id="description"
          placeholder="Your review.."
          label="Description"
          textFieldProps={{multiline: true, minRows: 3}}
          sm
          onChange={handleInput}
          value={description}
        />
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
          <CustomInput
            name="about"
            id="about"
            placeholder="HASHTAG"
            label="Create new hashtag"
            sm
            onChange={handleNewHashtag}
            value={newHashtag}
          />
          <FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
            <InputLabel id="demo-simple-select-standard-label">
              HASHTAG
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={hashtag}
              onChange={handleSelect}
              label="HASHTAG">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {postState.hashtags.map(hash => {
                return (
                  <MenuItem key={hash.id} value={hash.id}>
                    {hash.title}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
        <CardMedia
          sx={{marginTop: 1}}
          component="img"
          height="180"
          image={postState.newPost.imageUrl}
          alt="Paella dish"
        />
        <CustomButton
          type="submit"
          text="Save"
          sx={{marginTop: 1}}
          disabled={!formIsValid()}
          onClick={handleSubmit}
        />
      </Box>
    </Box>
  );
}

PostForm.propTypes = {};

export default PostForm;
