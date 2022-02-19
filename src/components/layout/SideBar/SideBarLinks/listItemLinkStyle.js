const listItemLinkStyle = theme => ({
  root: {
    textDecoration: 'none',
    '& .MuiSvgIcon-root': {color: theme.palette.text.menu},
    '& .MuiListItemText-root': {color: theme.palette.text.menu},
    '&:hover': {
      '& .MuiSvgIcon-root': {color: theme.palette.primary.main},
      '& .MuiListItemText-root': {color: theme.palette.primary.main},
    },
  },
  selected: {
    '& .MuiSvgIcon-root': {color: theme.palette.primary.main},
    '& .MuiListItemText-root': {
      color: theme.palette.primary.main,
    },
  },
});

export default listItemLinkStyle;
