import React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import {DropzoneArea} from 'material-ui-dropzone';
import CustomButton from '../../../components/CustomButton/CustomButton';
import UploadPopOver from './UploadPopOver';
import usePost from '../../../hooks/usePost';

function Upload() {
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
      <Box
        sx={{
          width: 330,
          display: 'flex',
          flexDirection: 'column',
          '& .MuiButton-root': {
            width: 110,
            alignSelf: 'center',
            marginBottom: 2,
            backgroundColor: 'rgb(171, 0, 60)',
          },
          '& .MuiDropzoneArea-root': {
            alignSelf: 'center',
            width: 290,
            minHeight: 96,
            backgroundColor: '#F3F4F6',
            borderRadius: '0.5rem',
            borderColor: 'rgb(171, 0, 60)',
            '& .MuiSvgIcon-root': {
              color: '#66666666',
            },
            '& .MuiDropzoneArea-text': {
              fontSize: 16,
            },
            '& .MuiDropzonePreviewList-image': {
              width: 100,
            },
          },
        }}>
        <Typography
          variant="div"
          sx={{padding: 2, fontSize: 18, alignSelf: 'flex-start'}}>
          Post New Review
        </Typography>
        <Divider sx={{marginTop: 1, marginBottom: 2}} />
        <DropzoneArea
          aacceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
          filesLimit={1}
          onChange={setPic}
          onDelete={cancelPic}
        />
        <Typography
          variant="paragraph"
          sx={{padding: 1, fontSize: 15, textAlign: 'center'}}>
          Do you have an Image you want to share with us ? please upload here ..
        </Typography>
        <CustomButton
          text="Save"
          size="small"
          disabled={file == null}
          onClick={handleSave}
        />
        <Divider sx={{marginBottom: 1, color: '#000'}} />
        <Typography
          variant="paragraph"
          sx={{padding: 1, fontSize: 15, textAlign: 'center'}}>
          Happy Commenting 😁
        </Typography>
      </Box>
    </UploadPopOver>
  );
}

Upload.propTypes = {};

export default Upload;
