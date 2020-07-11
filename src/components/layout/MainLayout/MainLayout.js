import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class MainLayout extends Component {
  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  resize = () => {
    const { changeViewPort } = this.props;
    if (window.innerWidth <= 767) {
      changeViewPort('mobile');
    } else if (window.innerWidth <= 991) {
      changeViewPort('tablet-2');
    } else if (window.innerWidth <= 1191) {
      changeViewPort('tablet-3');
    } else {
      changeViewPort('desktop');
    }
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}
MainLayout.propTypes = {
  children: PropTypes.node,
  changeViewPort: PropTypes.func,
};

export default MainLayout;
