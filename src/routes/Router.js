import React from 'react';
import {Route, Routes} from 'react-router-dom';
import PropTypes from 'prop-types';
import Layout from '../components/layout/Layout';
import Login from '../components/pages/Login/Login';
import Signup from '../components/pages/Signup/Signup';
import Profile from '../components/pages/Profile/Profile';
import Settings from '../components/pages/Settings/Settings';
import Feed from '../components/pages/Feed/Feed';
import RequireAuth from './RequireAuth';
import Post from '../components/pages/Post/Post';
import NotFound from '../components/pages/NotFound/NotFound';
import Manage from '../components/pages/Manage/Manage';

function Router({isAuth, isManager}) {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="posts/:postId" element={<Post />} />
        <Route index element={<Feed />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <RequireAuth isAuth={isAuth}>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="/settings"
          element={
            <RequireAuth isAuth={isAuth}>
              <Settings />
            </RequireAuth>
          }
        />
        <Route
          path="/manage"
          element={
            <RequireAuth isAuth={isManager}>
              <Manage />
            </RequireAuth>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

Router.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  isManager: PropTypes.bool.isRequired,
};
export default Router;
