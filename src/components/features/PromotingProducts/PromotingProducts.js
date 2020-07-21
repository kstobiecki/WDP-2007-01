import React from 'react';
import PropTypes from 'prop-types';
import styles from './PromotingProducts.module.scss';

import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faStar,
  faCircle,
  faEye,
  faHeart,
  faExchangeAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faHeart as regularFaHeart,
  faStar as regularFaStar,
} from '@fortawesome/free-regular-svg-icons';

const PromotingProducts = ({ promotingProducts }) => (
  <div className='container'>
    <div className='d-flex justify-content-between '>
      <div className={styles.leftSide}>
        <div
          className={
            'row d-flex justify-content-between align-items-center ' + styles.topMenu
          }
        >
          <div className={'col ' + styles.text}>Hot deals</div>
          <div className={'col ' + styles.dots}>
            <ul className='row'>
              <li className='col'>
                <FontAwesomeIcon icon={faCircle} />
              </li>
              <li className='col'>
                <FontAwesomeIcon icon={faCircle} />
              </li>
              <li className='col'>
                <FontAwesomeIcon icon={faCircle} />
              </li>
            </ul>
          </div>
        </div>
        <div
          className={styles.productImage}
          style={{
            backgroundImage: `url(${promotingProducts.leftSide.src})`,
          }}
        ></div>
        <div
          className={
            'd-flex align-items-center justify-content-center ' + styles.aboutProduct
          }
        >
          <div className={styles.productName}>{promotingProducts.leftSide.name}</div>
          <div className={styles.iconsStars}>
            <div className={styles.selectIconStar}>
              <FontAwesomeIcon className={styles.star} icon={faStar} />
              <FontAwesomeIcon className={styles.regularStar} icon={regularFaStar} />
            </div>
            <div className={styles.selectIconStar}>
              <FontAwesomeIcon className={styles.star} icon={faStar} />
              <FontAwesomeIcon className={styles.regularStar} icon={regularFaStar} />
            </div>
            <div className={styles.selectIconStar}>
              <FontAwesomeIcon className={styles.star} icon={faStar} />
              <FontAwesomeIcon className={styles.regularStar} icon={regularFaStar} />
            </div>
            <div className={styles.selectIconStar}>
              <FontAwesomeIcon className={styles.star} icon={faStar} />
              <FontAwesomeIcon className={styles.regularStar} icon={regularFaStar} />
            </div>
            <div className={styles.selectIconStar}>
              <FontAwesomeIcon className={styles.star} icon={faStar} />
              <FontAwesomeIcon className={styles.regularStar} icon={regularFaStar} />
            </div>
          </div>
        </div>
        <div
          className={
            'd-flex align-items-center justify-content-between ' + styles.elementsBox
          }
        >
          <div className={'d-flex ' + styles.fontIcons}>
            <div className={styles.iconBox} data-toggle='tooltip' title='Quick View'>
              <FontAwesomeIcon icon={faEye} />
            </div>

            <div
              className={styles.iconBox}
              data-toggle='tooltip'
              title='Add to Favorites'
            >
              <div className={styles.selectIconHeart}>
                <FontAwesomeIcon
                  className={styles.regularHeart}
                  icon={regularFaHeart}
                />
                <FontAwesomeIcon className={styles.heart} icon={faHeart} />
              </div>
            </div>
            <div
              className={styles.iconBox}
              data-toggle='tooltip'
              title='Add to Compare'
            >
              <FontAwesomeIcon icon={faExchangeAlt} />
            </div>
          </div>
          <div className={'d-flex align-items-center ' + styles.priceIcons}>
            <div className={styles.priceBefore}>
              {promotingProducts.leftSide.priceBefore}
            </div>
            <Button variant='small' className={styles.priceAfter}>
              {promotingProducts.leftSide.priceAfter}
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.rightSide}>
        <div
          className={
            'd-flex align-items-center justify-content-center ' + styles.photoRight
          }
          style={{
            backgroundImage: `url(${promotingProducts.rightSide.src})`,
          }}
        >
          <div
            className={
              'd-flex align-items-center justify-content-center ' + styles.textElements
            }
          >
            <div className={styles.title}>
              {promotingProducts.rightSide.title1}
              <span>{promotingProducts.rightSide.title2}</span>
            </div>
            <div className={styles.subtitle}>
              {promotingProducts.rightSide.subtitle}
            </div>
            <Button className={styles.buttonShopNow} variant='main'>
              Shop now
            </Button>
          </div>
        </div>
        <div className='row d-flex m-0'>
          <div
            className={
              'col img-thumbnail img-fluid d-flex align-items-center justify-content-center ' +
              styles.iconWrapper
            }
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
          <div
            className={
              'col img-thumbnail img-fluid d-flex align-items-center justify-content-center ' +
              styles.iconWrapper
            }
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

PromotingProducts.propTypes = {
  promotingProducts: PropTypes.object,
};

export default PromotingProducts;
