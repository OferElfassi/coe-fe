import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PropTypes from 'prop-types';
import {Link, useMatch, useResolvedPath} from 'react-router-dom';
import makeStyles from '@mui/styles/makeStyles';
import cx from 'clsx';
import listItemLinkStyle from './listItemLinkStyle';

const useStyles = makeStyles(listItemLinkStyle);

function ListItemLink(props) {
  const {path, title, icon} = props;
  const styles = useStyles();
  const resolved = useResolvedPath(path);
  const match = useMatch({path: resolved.pathname, end: true});
  const containerStyle = cx({
    [styles.root]: true,
    [styles.selected]: match,
  });
  return (
    <Link className={containerStyle} to={path}>
      <ListItem button>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
    </Link>
  );
}

ListItemLink.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};
export default ListItemLink;
