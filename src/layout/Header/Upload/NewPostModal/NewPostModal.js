import React, {forwardRef, useEffect, useState} from 'react';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import makeStyles from '@mui/styles/makeStyles';
import Container from '@mui/material/Container';
import useUi from '../../../../hooks/useUi';
import CustomButton from '../../../../components/CustomButton/CustomButton';
import Matches from './Matches/Matches';
import PostForm from './PostForm/PostForm';
import newPostModalStyle from './newPostModalStyle';

const useStyles = makeStyles(newPostModalStyle);

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function NewPostModal() {
  const [open, setOpen] = useState(false);
  const styles = useStyles();
  const {uiState, uiActions} = useUi();
  useEffect(() => {
    setOpen(uiState.newPostModal.show);
  }, [uiState.newPostModal.show]);

  const handleClose = () => {
    uiActions.toggleNewPostModal(false);
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}>
      <AppBar className={styles.headerRoot}>
        <Toolbar>
          <CustomButton icon={<CloseIcon />} onClick={handleClose} />
          <Typography variant="h4">Create New Post</Typography>
        </Toolbar>
      </AppBar>
      <Container className={styles.contentRoot}>
        <Matches />
        <Divider orientation="vertical" />
        <Divider orientation="horizontal" />
        <PostForm />
      </Container>
    </Dialog>
  );
}

export default NewPostModal;
