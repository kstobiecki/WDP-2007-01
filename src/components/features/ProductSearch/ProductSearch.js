import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const ProductSearch = () => (
  <form action='' className={styles.root}>
    <div className={styles.category}>
      <FontAwesomeIcon className={styles.icon} icon={faListUl} />
      <ul name='' id=''>
        <li className={styles.placeholder}>
          Select a category
          <ul className={styles.dropdownContent}>
            <li className={styles.droped}>
              <a href='/#'>Bed</a>
            </li>
            <li className={styles.droped}>
              <a href='/#'>Chair</a>
            </li>
            <li className={styles.droped}>
              <a href='/#'>Sofa</a>
            </li>
            <li className={styles.droped}>
              <a href='/#'>Table</a>
            </li>
            <li className={styles.droped}>
              <a href='/#'>Dining</a>
            </li>
          </ul>
        </li>
      </ul>
      <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
    </div>
    <div className={styles.searchField}>
      <input placeholder='Search products...' type='text' />
      <button>
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </button>
    </div>
  </form>
);

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
