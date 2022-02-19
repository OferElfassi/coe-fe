import React, {useEffect, useState} from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import {DropzoneDialog} from 'material-ui-dropzone';
import PropTypes from 'prop-types';
import CustomInput from '../../uiComponents/CustomInput/CustomInput';
import CustomButton from '../../uiComponents/CustomButton/CustomButton';

import CustomAvatar from '../../uiComponents/CuatomAvatar/CustomAvatar';
import useUi from '../../../hooks/useUi';
import useUser from '../../../hooks/useUser';
import useForm from '../../../hooks/useForm';

function Settings() {
  const {uiActions} = useUi();
  const {userState, userActions} = useUser();
  const {firstname, lastname, email, about} = userState;
  const [fileDialogState, setFileDialogState] = useState(false);
  const [profilePicFile, setProfilePicFile] = useState(null);
  const [handleInput, formValues, formIsValid, submitForm] = useForm({
    firstname,
    lastname,
    email,
    about,
  });
  useEffect(() => {
    uiActions.setActivePage('settings');
  }, []);

  const handleFileSave = files => {
    setFileDialogState(false);
    userActions.updateProfilePic(files[0]);
  };

  const handleSubmitClick = e => {
    e.preventDefault();
    submitForm(userActions.updateInfo, false);
  };

  return (
    <Container sx={{marginTop: 5}}>
      <DropzoneDialog
        open={fileDialogState}
        onSave={handleFileSave}
        acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
        showPreviews
        maxFileSize={5000000}
        filesLimit={1}
        showAlerts={false}
        dialogTitle="Upload profile picture"
        onClose={() => setFileDialogState(false)}
      />
      <Typography variant="h4">Account Settings</Typography>
      <Container
        sx={{
          marginTop: 5,
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
        <Box
          component="div"
          sx={{width: 230, display: 'flex', flexDirection: 'column'}}>
          <Typography variant="h6" sx={{textAlign: 'center'}}>
            Profile Picture
          </Typography>
          <CustomButton
            onClick={() => setFileDialogState(true)}
            sx={{marginTop: 3, marginBottom: 3}}
            text="Upload"
          />
          <CustomAvatar
            size="xl"
            bordered
            sx={{marginRight: 30}}
            fullName={userState.fullName}
            imageUrl={userState.image.url}
          />
        </Box>
        <Card sx={{width: 600, padding: 4}}>
          <Typography variant="h6">Profile Info</Typography>
          <Box
            component="form"
            sx={{
              marginTop: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
            }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                marginBottom: 2,
              }}>
              <CustomInput
                name="firstname"
                id="firstname"
                placeholder="Your first name.."
                label="First name"
                sm
                onChange={handleInput}
                value={formValues ? formValues.firstname.value : ''}
                error={formValues ? formValues.firstname.error : ''}
                validators={['required']}
              />
              <CustomInput
                name="lastname"
                id="lastname"
                placeholder="Your last name.."
                label="Last name"
                sm
                onChange={handleInput}
                value={formValues ? formValues.lastname.value : ''}
                error={formValues ? formValues.lastname.error : ''}
                validators={['required']}
              />
            </Box>
            <CustomInput
              sx={{width: '100%'}}
              name="email"
              id="email"
              placeholder="Your email.."
              label="Email"
              sm
              onChange={handleInput}
              value={formValues ? formValues.email.value : ''}
              error={formValues ? formValues.email.error : ''}
              validators={['required', 'email']}
            />
            <CustomInput
              sx={{width: '100%', marginTop: 3}}
              name="about"
              id="about"
              placeholder="About you.."
              label="About me"
              textFieldProps={{multiline: true, minRows: 3}}
              sm
              onChange={handleInput}
              value={formValues ? formValues.about.value : ''}
              error={formValues ? formValues.about.error : ''}
              validators={[]}
            />
            <CustomButton
              sx={{marginTop: 3}}
              variant="contained"
              type="submit"
              text="Save"
              onClick={handleSubmitClick}
              disabled={!formIsValid}
            />
          </Box>
        </Card>
      </Container>
    </Container>
  );
}

Settings.propTypes = {
  initialValues: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
  }),
};
Settings.defaultProps = {
  initialValues: {
    firstname: '',
    lastname: '',
    email: '',
    about: '',
  },
};
export default Settings;
