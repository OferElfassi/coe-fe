import * as React from 'react';
import {styled} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import makeStyles from '@mui/styles/makeStyles';
import expandMoreBtnStyle from './expandMoreBtnStyle';

const useStyles = makeStyles(expandMoreBtnStyle);

const Flippable = styled(props => {
  const styles = useStyles();
  const {expand, ...other} = props;

  return <IconButton {...other} />;
})(({theme, expand}) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function ExpandMoreBtn({expanded, title, onCLick}) {
  const styles = useStyles();
  return (
    <Box className={styles.root} component="div" onClick={onCLick}>
      <Typography variant="h6" component="h6">
        {title}
      </Typography>
      <Flippable
        expand={expanded}
        onClick={onCLick}
        aria-expanded={expanded}
        aria-label="show more">
        <ExpandMoreIcon />
      </Flippable>
    </Box>
  );
}

ExpandMoreBtn.propTypes = {
  expanded: PropTypes.bool.isRequired,
  onCLick: PropTypes.func.isRequired,
  title: PropTypes.string,
};
ExpandMoreBtn.defaultProps = {
  title: '',
};

export default ExpandMoreBtn;
