import React from 'react';
import {SvgIcon} from '@mui/material';

function ProfileIcon(props) {
  return (
    <SvgIcon {...props} fill="none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    </SvgIcon>
  );
}

export default React.memo(ProfileIcon);
