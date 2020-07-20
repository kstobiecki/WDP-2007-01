import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Header.module.scss';

import TopBar from '../TopBar/TopBarContainer';
import CompanyClaim from '../CompanyClaim/CompanyClaim';
import MenuBar from '../MenuBar/MenuBar';
import ProductsToCompare from '../ProductsToCompare/ProductsToCompareContainer';

const Header = props => (
  <header className={styles.root}>
    <TopBar />
    <CompanyClaim />
    <MenuBar />
    <ProductsToCompare />
  </header>
);

// Header.propTypes = {};

export default Header;
