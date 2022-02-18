import React from 'react';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';
import cx from 'clsx';
import PropTypes from 'prop-types';
import hashtagsStyle from './hashtagsStyle';

const useStyles = makeStyles(hashtagsStyle);

function HashTags({hashtags}) {
  const styles = useStyles();
  const containerStyle = cx({
    [styles.root]: true,
  });
  return (
    <Box className={containerStyle}>
      <Box>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{padding: '20px 26px'}}>
          Hashtags
        </Typography>
      </Box>
      <List>
        {hashtags.map((hashtag, index) => (
          <div key={hashtag.id}>
            <ListItem>
              <ListItemText
                primary={`# ${hashtag.title}`}
                secondary={`${hashtag.posts.length} Reviews`}
              />
            </ListItem>
            {index < hashtags.length - 1 && <Divider light variant="middle" />}
          </div>
        ))}
      </List>
    </Box>
  );
}
HashTags.propTypes = {
  hashtags: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default HashTags;
