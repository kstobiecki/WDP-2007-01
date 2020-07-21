import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Ratings.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

function Raitings({ stars, userStars, id, rateProduct }) {
  const [raiting, setState] = useState(0);

  const handleRating = (stars, id, event) => {
    event.preventDefault();
    rateProduct(stars, id);
  };

  const renderRatings = i => {
    if (raiting > 0) {
      if (i <= raiting) {
        return (
          <FontAwesomeIcon className={styles.active} icon={faStar}>
            {i} stars
          </FontAwesomeIcon>
        );
      } else {
        return <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>;
      }
    } else {
      if (userStars === 0) {
        if (i <= stars) {
          return <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>;
        } else {
          return <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>;
        }
      } else {
        if (i <= userStars) {
          return (
            <FontAwesomeIcon className={styles.active} icon={faStar}>
              {i} stars
            </FontAwesomeIcon>
          );
        } else {
          return <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>;
        }
      }
    }
  };

  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map(i => (
        <a
          key={i}
          href='/#'
          onClick={event => handleRating(i, id, event)}
          onMouseOver={() => setState(i)}
          onMouseOut={() => setState(0)}
        >
          {renderRatings(i)}
        </a>
      ))}
    </div>
  );
}

Raitings.propTypes = {
  stars: PropTypes.number,
  userStars: PropTypes.number,
  rateProduct: PropTypes.func,
  id: PropTypes.string,
};

export default Raitings;
