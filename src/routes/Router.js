import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Layout from '../layout/Layout';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import Profile from '../pages/Profile/Profile';
import Settings from '../pages/Settings/Settings';
import Feed from '../pages/Feed/Feed';
import RequireAuth from './RequireAuth';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Feed />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <RequireAuth isAuth={false}>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="/settings"
          element={
            <RequireAuth isAuth={false}>
              <Settings />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
}

export default Router;
