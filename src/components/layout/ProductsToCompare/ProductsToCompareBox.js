import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductsToCompareBox.module.scss';
import Button from '../../common/Button/Button';

const ProductsToCompareBox = ({ name, id, photo, toggleCompare, compare }) => (
  <div className={styles.comparableProductsContainer}>
    <div className={styles.iconTimesContainer}>
      <Button
        active={compare}
        onClick={e => {
          toggleCompare(id);
          e.preventDefault();
        }}
      >
        <FontAwesomeIcon className={styles.iconTimes} icon={faTimes} />
      </Button>
    </div>
    <img className='img-fluid' src={photo} alt='compared-product' />
    <div className={styles.comparableName}>{name}</div>
  </div>
);

ProductsToCompareBox.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  toggleCompare: PropTypes.func,
  compare: PropTypes.bool,
};

export default ProductsToCompareBox;
