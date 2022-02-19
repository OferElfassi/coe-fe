import React from 'react';
import Feed from '../components/pages/Feed/Feed';
import Profile from '../components/pages/Profile/Profile';
import Settings from '../components/pages/Settings/Settings';
import FeedIcon from '../assets/icons/FeedIcon';
import ProfileIcon from '../assets/icons/ProfileIcon';
import SettingsIcon from '../assets/icons/SettingsIcon';

const navLinks = [
  {
    path: '/',
    title: 'Feed',
    icon: <FeedIcon />,
    component: Feed,
  },
  {
    path: '/profile',
    title: 'Profile',
    icon: <ProfileIcon />,
    component: Profile,
  },
  {
    path: '/settings',
    title: 'Settings',
    icon: <SettingsIcon />,
    component: Settings,
  },
];

export default navLinks;
