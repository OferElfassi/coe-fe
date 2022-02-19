const customDialogStyle = theme => ({
  root: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'red',
    minWidth: 200,
  },
  success: {
    borderColor: theme.palette.success.main,
  },
  warning: {
    borderColor: theme.palette.warning.main,
  },
  alert: {
    borderColor: theme.palette.alert.light,
  },
  primary: {
    borderColor: theme.palette.primary.main,
  },
});

export default customDialogStyle;
