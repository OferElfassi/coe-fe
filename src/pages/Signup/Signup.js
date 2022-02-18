import React, {useEffect} from 'react';
import cx from 'clsx';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import makeStyles from '@mui/styles/makeStyles';
import Checkbox from '@mui/material/Checkbox';
import {Link, useNavigate} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useUi from '../../hooks/useUi';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import signupStyle from './signupStyle';
import useForm from '../../hooks/useForm';

const useStyles = makeStyles(signupStyle);

function Signup() {
  const navigate = useNavigate();
  const {authActions} = useAuth();
  const styles = useStyles();
  const {uiActions} = useUi();
  const [handleInput, formValues, formIsValid, submitForm] = useForm(
    Signup.defaultProps.initialValues,
  );

  useEffect(() => {
    uiActions.setActivePage('signup');
  }, []);

  const containerRoot = cx({
    [styles.root]: true,
  });

  const formRoot = cx({
    [styles.middle]: true,
  });

  const bottomRoot = cx({
    [styles.bottomRoot]: true,
  });

  const navigateToLogin = () => {
    navigate('/login');
  };

  const handleSubmitClick = e => {
    e.preventDefault();
    submitForm(vals => authActions.signup(vals, navigateToLogin));
  };
  return (
    <Box component="div" className={containerRoot}>
      <Box component="div">
        <Typography variant="h4" component="h4" gutterBottom>
          Sign in
        </Typography>
        <p>Register to manage your account</p>
        <Box component="form" className={formRoot}>
          <Box component="div">
            <CustomInput
              name="firstname"
              id="firstname"
              placeholder="Your first name.."
              onChange={handleInput}
              value={formValues ? formValues.firstname.value : ''}
              error={formValues ? formValues.firstname.error : ''}
              validators={['required']}
            />
            <CustomInput
              name="lastname"
              id="lastname"
              placeholder="Your last name.."
              onChange={handleInput}
              value={formValues ? formValues.lastname.value : ''}
              error={formValues ? formValues.lastname.error : ''}
              validators={['required']}
            />
          </Box>
          <CustomInput
            name="email"
            id="email"
            placeholder="Your email.."
            onChange={handleInput}
            value={formValues ? formValues.email.value : ''}
            error={formValues ? formValues.email.error : ''}
            validators={['required', 'email']}
          />
          <CustomInput
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleInput}
            value={formValues ? formValues.password.value : ''}
            error={formValues ? formValues.password.error : ''}
            validators={['required', 'password']}
          />
          <CustomInput
            name="confirmpassword"
            id="confirmpassword"
            placeholder="Confirm password"
            onChange={handleInput}
            value={formValues ? formValues.confirmpassword.value : ''}
            error={formValues ? formValues.confirmpassword.error : ''}
            validators={['required', 'confirmPassword']}
          />
          <Box component="div" className={bottomRoot}>
            <Box component="div">
              <FormControlLabel
                control={<Checkbox onChange={() => {}} name="gilad" />}
                label=""
              />
              <Link to="/terms">
                <b>I Agree </b>Terms and Conditions
              </Link>
            </Box>
            <CustomButton
              text="Login"
              type="submit"
              disabled={!formIsValid}
              onClick={handleSubmitClick}
            />
            <p>
              Do you have an account ? <Link to="/login">Login</Link>
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

Signup.propTypes = {
  initialValues: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    confirmpassword: PropTypes.string.isRequired,
  }),
};
Signup.defaultProps = {
  initialValues: {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
  },
};
export default Signup;
