import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import cx from 'clsx';
import makeStyles from '@mui/styles/makeStyles';
import useUi from '../../../hooks/useUi';
import customDialogStyle from './customDialogStyle';

const useStyles = makeStyles(customDialogStyle);

function CustomDialog() {
  const styles = useStyles();
  const {uiState} = useUi();
  const {modal} = uiState;
  const rootStyle = cx({
    [styles.root]: true,
    [styles[modal.color]]: true,
  });

  return (
    <Dialog
      PaperProps={{className: rootStyle}}
      open={modal.modalVisible}
      onClose={modal.onOk}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">{modal.modalTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {modal.modalText}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {modal.onCancel && (
          <Button onClick={modal.onCancel} color="error">
            {modal.cancelText}
          </Button>
        )}
        {modal.onOk && (
          <Button onClick={modal.onOk} autoFocus color="success">
            {modal.okText}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}

export default CustomDialog;
