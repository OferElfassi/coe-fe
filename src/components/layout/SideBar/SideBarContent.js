import React from 'react';
import Divider from '@mui/material/Divider';
import SideBarHeader from './SideBarHeader/SideBarHeader';
import SideBarData from './SideBarData/SideBarData';
import SideBarLinks from './SideBarLinks/SideBarLinks';
import useAuth from '../../../hooks/useAuth';

function SideBarContent() {
  const {authState} = useAuth();
  return (
    <>
      <SideBarHeader />
      <Divider />
      <SideBarData />
      <Divider />
      {authState.isAuth && <SideBarLinks />}
    </>
  );
}

export default SideBarContent;
