import React from 'react';
import Container from '@mui/material/Container';
import UserInfo from './UserInfo/UserInfo';

function SideBarData() {
  return (
    <Container
      style={{
        height: '35%',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 25,
      }}>
      <UserInfo />
    </Container>
  );
}

export default SideBarData;
