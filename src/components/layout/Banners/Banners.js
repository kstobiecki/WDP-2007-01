import React from 'react';
import PropTypes from 'prop-types';

import styles from './Banners.module.scss';

import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SwipeableComp from '../../common/SwipeableComp/SwipeableComp';

class Banners extends React.Component {
  state = {
    activePage: 0,
  };

  handlePageChange(newPage) {
    setTimeout(() => {
      this.setState({ activePage: newPage });
    }, 200);
  }

  render() {
    const { banners, viewPort } = this.props;
    const { activePage } = this.state;

    let itemsDisplayed;
    if (viewPort.viewport === 'desktop') {
      itemsDisplayed = 6;
    } else if (viewPort.viewport === 'tablet-3') {
      itemsDisplayed = 4;
    } else if (viewPort.viewport === 'tablet-2') {
      itemsDisplayed = 3;
    } else if (viewPort.viewport === 'mobile') {
      itemsDisplayed = 2;
    } else if (viewPort.viewport === 'mobile-slim') {
      itemsDisplayed = 1;
    }

    const pagesCount = Math.ceil(banners.length / itemsDisplayed);

    return (
      <div className='container'>
        <SwipeableComp
          leftAction={() =>
            this.handlePageChange(
              activePage + 1 < pagesCount ? activePage + 1 : activePage
            )
          }
          rightAction={() => this.handlePageChange(activePage > 0 ? activePage - 1 : 0)}
        >
          <div className={`d-flex justify-content-around ${styles.bannersWrapper}`}>
            <div
              onClick={() =>
                itemsDisplayed < 5
                  ? this.handlePageChange(activePage > 0 ? activePage - 1 : 2)
                  : null
              }
              className={`img-thumbnail img-fluid d-flex align-items-center ${styles.iconWrapper}`}
            >
              <FontAwesomeIcon
                icon={faAngleLeft}
                className={styles.buttonLeft}
                onClick={() =>
                  this.handlePageChange(activePage > 0 ? activePage - 1 : 0)
                }
              />
            </div>
            {banners.slice(activePage, itemsDisplayed + activePage).map(banner => (
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
              onClick={() =>
                itemsDisplayed < 5
                  ? this.handlePageChange(activePage + 1 < 3 ? activePage + 1 : 0)
                  : null
              }
              className={`img-thumbnail img-fluid d-flex align-items-center ${styles.iconWrapper}`}
            >
              <FontAwesomeIcon
                icon={faAngleRight}
                className={styles.buttonRight}
                onClick={() =>
                  this.handlePageChange(
                    activePage + 1 < pagesCount ? activePage + 1 : activePage
                  )
                }
              />
            </div>
          </div>
        </SwipeableComp>
      </div>
    );
  }
}
Banners.propTypes = {
  banners: PropTypes.array,
  viewPort: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default Banners;
