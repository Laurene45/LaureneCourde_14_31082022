import React from 'react';
import { Outlet } from 'react-router';

import Header from '../components/Header/index';
import Footer from '../components/Footer/index';

/**
 * @description render header and childs
 * @component
 *
 * @returns
 */

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
