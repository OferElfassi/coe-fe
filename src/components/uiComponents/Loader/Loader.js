import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import makeStyles from '@mui/styles/makeStyles';
import loaderStyle from './loaderStyle';
import useUi from '../../../hooks/useUi';

const useStyles = makeStyles(loaderStyle);

function Loader() {
  const {uiState} = useUi();
  const styles = useStyles();

  return (
    <Backdrop className={styles.root} open={uiState.loader.show}>
      <CircularProgress color="primary" />
    </Backdrop>
  );
}

export default Loader;
