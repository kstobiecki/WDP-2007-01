import React from 'react';
import PropTypes from 'prop-types';
import styles from './FurnitureGallery.module.scss';
import {
  faHeart,
  faExchangeAlt,
  faEye,
  faCartPlus,
  faAngleRight,
  faAngleLeft,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import {
  faHeart as regularFaHeart,
  faStar as regularFaStar,
} from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../common/Button/Button';
import { UncontrolledTooltip } from 'reactstrap';
import SwipeableComp from '../../common/SwipeableComp/SwipeableComp';

class FurnitureGallery extends React.Component {
  state = {
    activePage: 0,
  };

  handlePageChange(newPage) {
    setTimeout(() => {
      this.setState({ activePage: newPage });
    }, 200);
  }

  render() {
    const { galleryPics, viewPort } = this.props;
    const { activePage } = this.state;

    let itemsDisplayed;
    if (viewPort.viewport === 'desktop') {
      itemsDisplayed = 6;
    } else if (viewPort.viewport === 'tablet-2') {
      itemsDisplayed = 3;
    } else if (viewPort.viewport === 'mobile') {
      itemsDisplayed = 2;
    }

    const pagesCount = Math.ceil(galleryPics.length / itemsDisplayed);

    return (
      <div className='container'>
        <div className='row'>
          <div className={'col'}>
            <div className={styles.panelBar}>
              <div className='row no-gutters align-items-end '>
                <div className={'col-auto ' + styles.heading}>
                  <h3>Furniture Gallery</h3>
                </div>
              </div>
            </div>
            <div className={styles.productBox}>
              <div className={'row justify-content-around ' + styles.nameBox}>
                <div className={styles.element}>Featured</div>
                <div className={styles.element}>Top seller</div>
                <div className={styles.element}>Sale off</div>
                <div className={styles.element}>Top rated</div>
              </div>
              <div
                className={styles.leftBox}
                style={{
                  backgroundImage: `url(${'https://i.postimg.cc/LXLqFjY4/ddwew.png'})`,
                }}
              >
                <div className={styles.iconsBox}>
                  <div className={styles.iconBox} id='furnitureGallery-addToFavorites'>
                    <div className={styles.selectIconHeart}>
                      <FontAwesomeIcon
                        className={styles.regularHeart}
                        icon={regularFaHeart}
                      />
                      <FontAwesomeIcon className={styles.heart} icon={faHeart} />
                    </div>
                  </div>
                  <UncontrolledTooltip target='furnitureGallery-addToFavorites'>
                    Add to Favorites
                  </UncontrolledTooltip>
                  <div className={styles.iconBox} id='furnitureGallery-addToCompare'>
                    <FontAwesomeIcon icon={faExchangeAlt} />
                  </div>
                  <UncontrolledTooltip target='furnitureGallery-addToCompare'>
                    Add to Compare
                  </UncontrolledTooltip>
                  <div className={styles.iconBox} id='furnitureGallery-quickView'>
                    <FontAwesomeIcon icon={faEye} />
                  </div>
                  <UncontrolledTooltip target='furnitureGallery-quickView'>
                    Quick View
                  </UncontrolledTooltip>
                  <div className={styles.iconBox} id='furnitureGallery-addToCart'>
                    <FontAwesomeIcon icon={faCartPlus} />
                  </div>
                  <UncontrolledTooltip target='furnitureGallery-addToCart'>
                    Add to Cart
                  </UncontrolledTooltip>
                </div>
                <div className={styles.infoBox}>
                  <div className={styles.circleText}>
                    <div className={styles.circleTextOne}>$120.00</div>
                    <div className={styles.circleTextTwo}>$160.00</div>
                  </div>
                  <div className={styles.rectangleText}>
                    <div className={styles.triangleTopLeft}></div>
                    <div className={styles.triangleBottomRight}></div>
                    <span>Aeneon Ru Bristique</span>
                    <div className={styles.iconStars}>
                      <div className={styles.selectIconStar}>
                        <FontAwesomeIcon className={styles.star} icon={faStar} />
                        <FontAwesomeIcon
                          className={styles.regularStar}
                          icon={regularFaStar}
                        />
                      </div>
                      <div className={styles.selectIconStar}>
                        <FontAwesomeIcon className={styles.star} icon={faStar} />
                        <FontAwesomeIcon
                          className={styles.regularStar}
                          icon={regularFaStar}
                        />
                      </div>
                      <div className={styles.selectIconStar}>
                        <FontAwesomeIcon className={styles.star} icon={faStar} />
                        <FontAwesomeIcon
                          className={styles.regularStar}
                          icon={regularFaStar}
                        />
                      </div>
                      <div className={styles.selectIconStar}>
                        <FontAwesomeIcon className={styles.star} icon={faStar} />
                        <FontAwesomeIcon
                          className={styles.regularStar}
                          icon={regularFaStar}
                        />
                      </div>
                      <div className={styles.selectIconStar}>
                        <FontAwesomeIcon className={styles.star} icon={faStar} />
                        <FontAwesomeIcon
                          className={styles.regularStar}
                          icon={regularFaStar}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <SwipeableComp
                leftAction={() =>
                  this.handlePageChange(
                    activePage + 1 < pagesCount ? activePage + 1 : activePage
                  )
                }
                rightAction={() =>
                  this.handlePageChange(activePage > 0 ? activePage - 1 : 0)
                }
              >
                <div
                  className={`d-flex justify-content-around ${styles.bannersWrapper}`}
                >
                  <div
                    onClick={() =>
                      itemsDisplayed < 5
                        ? this.handlePageChange(activePage > 0 ? activePage - 1 : 2)
                        : null
                    }
                    className={`img-thumbnail img-fluid d-flex align-items-center ${styles.iconWrapper}`}
                  >
                    <FontAwesomeIcon icon={faAngleLeft} />
                  </div>
                  <div className={'px-1 ' + styles.overlay + ' ' + styles.active}>
                    <img
                      alt='chair'
                      className={'img-thumbnail'}
                      src={'https://i.postimg.cc/1z77FMFv/krzeslo.png'}
                    />
                  </div>
                  <div className={'px-1 ' + styles.overlay}>
                    <img
                      alt='cofee table'
                      className={'img-thumbnail img-fluid'}
                      src={
                        'https://i.postimg.cc/g0P5zWrV/Stolik-Kawowy-Sitio-Z-oty-Jasny-D-b-Pakamera-pl.png'
                      }
                    />
                  </div>
                  <div className={'px-1 ' + styles.overlay}>
                    <img
                      alt='chair'
                      className={'img-thumbnail img-fluid'}
                      src={
                        'https://i.postimg.cc/jdLBvcG7/Luxurious-Custom-Made-Lounge-Chair-circa-1940.jpg'
                      }
                    />
                  </div>
                  <div className={'px-1 ' + styles.overlay}>
                    <img
                      alt='chair'
                      className={'img-thumbnail img-fluid'}
                      src={
                        'https://i.postimg.cc/Y9rsFz6j/Spindle-Cube-Chair-The-Art-Institute-of-Chicago.jpg'
                      }
                    />
                  </div>
                  <div className={'px-1 ' + styles.overlay}>
                    <img
                      alt='armchair'
                      className={'img-thumbnail img-fluid'}
                      src={
                        'https://i.postimg.cc/h4JH1pF7/ARCHIBALD-Armchair-with-headrest-By-Poltrona-Frau-design-Jean-Marie-Massaud.jpg'
                      }
                    />
                  </div>
                  <div className={'px-1 ' + styles.overlay}>
                    <img
                      alt='chair'
                      className={'img-thumbnail img-fluid'}
                      src={'https://i.postimg.cc/BbyYdWd1/Dywany-online.jpg'}
                    />
                  </div>
                  <div
                    onClick={() =>
                      itemsDisplayed < 5
                        ? this.handlePageChange(activePage + 1 < 3 ? activePage + 1 : 0)
                        : null
                    }
                    className={`img-thumbnail img-fluid d-flex align-items-center ${styles.iconWrapper}`}
                  >
                    <FontAwesomeIcon icon={faAngleRight} />
                  </div>
                </div>
              </SwipeableComp>
            </div>
          </div>
          <div className={'col'}>
            <div
              className={styles.photoRight}
              style={{
                backgroundImage: `url(${'https://i.postimg.cc/636RBhSh/swswew.png'})`,
              }}
            >
              <div className={styles.textElements}>
                <div className={styles.textFrom}>
                  from <span className={styles.textPrice}>$50.80</span>
                </div>
                <div className={styles.textProduct}>Bedroom Bed</div>
                <Button className={styles.button} variant='main'>
                  Shop now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FurnitureGallery.propTypes = {
  viewPort: PropTypes.any,
  galleryPics: PropTypes.array,
};

FurnitureGallery.defaultProps = {
  galleryPics: [],
  viewPort: 'desktop',
};

export default FurnitureGallery;
