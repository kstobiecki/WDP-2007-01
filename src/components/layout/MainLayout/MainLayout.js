import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Banners from '../Banners/BannersContainer';

const MainLayout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Banners />
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
