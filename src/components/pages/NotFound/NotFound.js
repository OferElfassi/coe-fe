import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {Link} from 'react-router-dom';
import notFoundStyle from './notFoundStyle';

const useStyles = makeStyles(notFoundStyle);

function NotFound() {
  return (
    <Container sx={{position: 'relative', height: '100vh'}}>
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%,-50%)',
          maxWidth: 710,
          width: '100%',
          textAlign: 'center',
          padding: '0 15px',
          lineHeight: 1.4,
          '& a': {
            color: '#39b1cb',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: 25,
            disabled: 'inline-block',
            borderRadius: 15,
          },
        }}>
        <Box sx={{lineHeight: 200, height: 200}}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Fredoka One', cursive",
              fontSize: 168,
              color: '#ff508e',
              fontWeight: 'bold',
              textTransform: 'uppercase',
            }}>
            404
          </Typography>
        </Box>
        <Typography
          variant="h2"
          sx={{
            fontSize: 22,
            fontWeight: 400,
            textTransform: 'uppercase',
            marginBottom: 5,
          }}>
          Oops, The Page you are looking for cant be found!
        </Typography>

        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link to="/"> Return To Homepage</Link>
      </Box>
    </Container>
  );
}

export default NotFound;
