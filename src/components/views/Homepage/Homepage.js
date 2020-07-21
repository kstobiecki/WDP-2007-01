import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import PromotingProducts from '../../features/PromotingProducts/PromotingProductsContainer';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import Promotions from '../../features/Promotions/PromotionsContainer';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';

const Homepage = () => (
  <div className={styles.root}>
    <PromotingProducts />
    <FeatureBoxes />
    <Promotions />
    <NewFurniture />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
