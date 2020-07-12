import React from 'react';
import PropTypes from 'prop-types';

import styles from './Banners.module.scss';

import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Banners = ({ banners }) => (
  <div className='container'>
    <div className={`d-flex justify-content-around ${styles.bannersWrapper}`}>
      <div
        className={`img-thumbnail img-fluid d-flex align-items-center ${styles.iconWrapper}`}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </div>
      {banners.map(banner => (
        <div key={banner.src} className={'px-2'}>
          {
            <img
              className={'img-thumbnail img-fluid'}
              src={banner.src}
              alt={banner.alt}
            />
          }
        </div>
      ))}
      <div
        className={`img-thumbnail img-fluid d-flex align-items-center ${styles.iconWrapper}`}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    </div>
  </div>
);

Banners.propTypes = {
  banners: PropTypes.array,
};

export default Banners;
