import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import makeStyles from '@mui/styles/makeStyles';
import cx from 'clsx';
import Checkbox from '@mui/material/Checkbox';
import {Link, useNavigate} from 'react-router-dom';
import FormControlLabel from '@mui/material/FormControlLabel';
import CustomInput from '../../components/CustomInput/CustomInput';
import useUi from '../../hooks/useUi';
import useAuth from '../../hooks/useAuth';
import loginStyle from './loginStyle';
import CustomButton from '../../components/CustomButton/CustomButton';
import useForm from '../../hooks/useForm';

const useStyles = makeStyles(loginStyle);

// import PropTypes from 'prop-types';

function Login() {
  const [handleInput, formValues, formIsValid, submitForm] = useForm(
    Login.defaultProps.initialValues,
  );
  const navigate = useNavigate();
  const styles = useStyles();
  const {uiActions} = useUi();
  const {authActions, authState} = useAuth();
  useEffect(() => {
    uiActions.setActivePage('login');
  }, []);
  useEffect(() => {
    if (authState.isAuth) {
      navigate('/');
    }
  }, [authState.isAuth]);
  const containerStyle = cx({
    [styles.root]: true,
  });
  const middleButtons = cx({
    [styles.middle]: true,
  });

  const handleSubmitClick = e => {
    e.preventDefault();
    submitForm(authActions.login);
  };

  return (
    <Box component="div" className={containerStyle}>
      <Box component="div">
        <Typography variant="h4" component="h4" gutterBottom>
          Log in
        </Typography>
        <p>Email</p>
        <Box component="form">
          <CustomInput
            name="email"
            id="email"
            placeholder="Your email"
            onChange={handleInput}
            value={formValues ? formValues.email.value : ''}
            error={formValues ? formValues.email.error : ''}
            validators={['required', 'email']}
          />
          <CustomInput
            name="password"
            id="password"
            onChange={handleInput}
            placeholder="Your password"
            value={formValues ? formValues.password.value : ''}
            error={formValues ? formValues.password.error : ''}
            validators={['required']}
          />
          <Box component="div" className={middleButtons}>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={() => {}}
                  id="rememberme"
                  name="rememberme"
                />
              }
              label="Remember me"
            />
            <Link to="/signup">Forgot Your Password ?</Link>
          </Box>
          <CustomButton
            text="Login"
            type="submit"
            disabled={!formIsValid}
            onClick={handleSubmitClick}
          />
          <p>
            Not registered ? <Link to="/signup">Create a account</Link>
          </p>
        </Box>
      </Box>
    </Box>
  );
}

Login.propTypes = {
  initialValues: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
};
Login.defaultProps = {
  initialValues: {
    email: '',
    password: '',
    rememberme: false,
  },
};
export default Login;
