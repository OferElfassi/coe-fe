/* eslint-disable global-require */
import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import makeStyles from '@mui/styles/makeStyles';
import sideBarHeaderStyle from './sideBarHeaderStyle';
import ImageLink from '../../../components/ImageLink/ImageLink';
import CustomButton from '../../../components/CustomButton/CustomButton';

const useStyles = makeStyles(sideBarHeaderStyle);

function SideBarHeader() {
  const styles = useStyles();
  return (
    <Toolbar>
      <ImageLink
        to="/"
        className={styles.logoImg}
        src={require('../../../assets/images/logo.png')}
      />
      <CustomButton
        className={styles.bulbIcon}
        icon={<LightbulbOutlinedIcon />}
      />
    </Toolbar>
  );
}

export default SideBarHeader;
