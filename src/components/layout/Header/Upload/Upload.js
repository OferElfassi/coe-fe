import React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import {DropzoneArea} from 'material-ui-dropzone';
import makeStyles from '@mui/styles/makeStyles';
import CustomButton from '../../../uiComponents/CustomButton/CustomButton';
import UploadPopOver from './UploadPopOver';
import usePost from '../../../../hooks/usePost';
import uploadStyle from './uploadStyle';

const useStyles = makeStyles(uploadStyle);

function Upload() {
  const styles = useStyles();
  const {postActions} = usePost();
  const [file, setFile] = React.useState(null);

  const handleSave = () => {
    postActions.postNewImage(file);
    setFile(null);
  };
  const setPic = files => {
    setFile(files[0]);
  };
  const cancelPic = () => {
    setFile(null);
  };
  return (
    <UploadPopOver>
      <Box className={styles.dialogRoot}>
        <Typography className={styles.dialogTitle} variant="div">
          Post New Review
        </Typography>
        <Divider />
        <DropzoneArea
          aacceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
          filesLimit={1}
          onChange={setPic}
          onDelete={cancelPic}
          showAlerts={false}
        />
        <Typography variant="paragraph">
          Do you have an Image you want to share with us ? please upload here ..
        </Typography>
        <CustomButton
          text="Save"
          size="small"
          disabled={file == null}
          onClick={handleSave}
        />
        <Divider />
        <Typography variant="paragraph">Happy Commenting 😁</Typography>
      </Box>
    </UploadPopOver>
  );
}

Upload.propTypes = {};

export default Upload;
