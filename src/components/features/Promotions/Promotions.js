import React from 'react';
import PropTypes from 'prop-types';
import styles from './Promotions.module.scss';

class Promotions extends React.Component {
  render() {
    const { promotions } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={`row ${styles.promotions}`}>
            <div className={`col-12 col-sm-6 ${styles.leftBanner}`}>
              <img
                src={promotions.leftBanner.image}
                alt={promotions.leftBanner.subtitle}
              />
              <div className={styles.desc}>
                <div className={styles.title}>{promotions.leftBanner.title}</div>
                <div className={styles.subtitle}>{promotions.leftBanner.subtitle}</div>
                <span
                  className={styles.discount}
                >{`-${promotions.leftBanner.discount}%`}</span>
              </div>
            </div>
            <div className={`col-12 col-sm-6 no-gutters ${styles.rightBanners}`}>
              <div className={styles.topBanner}>
                <img
                  src={promotions.rightTopBanner.image}
                  alt={promotions.rightTopBanner.title}
                />
                <div className={styles.description}>
                  <div className={styles.title}>
                    <strong>{promotions.rightTopBanner.titleBold} </strong>
                    {promotions.rightTopBanner.title}
                  </div>
                  <div className={styles.subtitle}>
                    {promotions.rightTopBanner.subtitle}
                  </div>
                  <div className={styles.price}>
                    ${promotions.rightTopBanner.price}.00
                  </div>
                </div>
              </div>
              <div className={styles.bottomBanner}>
                <img
                  src={promotions.rightBottomBanner.image}
                  alt={promotions.rightBottomBanner.title}
                />
                <div className={styles.content}>
                  <div className={styles.title}>
                    <strong>{promotions.rightBottomBanner.titleBold} </strong>
                    {promotions.rightBottomBanner.title}
                  </div>
                  <div className={styles.subtitle}>
                    {promotions.rightBottomBanner.subtitle}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Promotions.propTypes = {
  promotions: PropTypes.object,
};

export default Promotions;
