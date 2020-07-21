import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faStar as faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import Ratings from '../../features/Ratings/RatingsContainer.js';

function ProductBox({
  name,
  price,
  oldPrice,
  promo,
  stars,
  userStars,
  favorite,
  compare,
  updateFavoriteStatus,
  toggleCompare,
  id,
  photo,
}) {
  const handleSwitchButton = (favorite, id, event) => {
    event.preventDefault();

    favorite = !favorite;

    updateFavoriteStatus(favorite, id);
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <img className={styles.image} src={photo} alt='product-bed' />
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <Ratings stars={stars} userStars={userStars} id={id}></Ratings>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            variant='outline'
            active={favorite}
            onClick={event => handleSwitchButton(favorite, id, event)}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            variant='outline'
            active={compare}
            onClick={e => {
              toggleCompare(id);
              e.preventDefault();
            }}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          {!oldPrice ? null : (
            <Button className={styles.oldPrice} noHover variant='small'>
              $ {oldPrice}
            </Button>
          )}
          <Button className={styles.priceHover} noHover variant='small'>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
}

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  promo: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  stars: PropTypes.number,
  userStars: PropTypes.number,
  favorite: PropTypes.bool,
  compare: PropTypes.bool,
  updateFavoriteStatus: PropTypes.func,
  rateProduct: PropTypes.func,
  id: PropTypes.string,
  photo: PropTypes.string,
  toggleCompare: PropTypes.func,
};

export default ProductBox;
