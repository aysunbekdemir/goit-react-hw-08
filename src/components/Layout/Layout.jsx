import React from 'react';
import AppBar from '../AppBar/AppBar';

const Layout = ({ children }) => (
  <>
    <AppBar />
    <main>{children}</main>
  </>
);

export default Layout;
