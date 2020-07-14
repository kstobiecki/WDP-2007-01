import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Banners from '../Banners/BannersContainer';
import Feedback from '../Feedback/FeedbackContainer';

const MainLayout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Banners />
    <Feedback />
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
