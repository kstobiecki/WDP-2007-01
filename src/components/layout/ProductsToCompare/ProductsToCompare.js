import React from 'react';
import styles from './ProductsToCompare.module.scss';
import PropTypes from 'prop-types';
import ProductsToCompareBox from './ProductsToCompareBox';
import Button from '../../common/Button/Button';

const ProductsToCompare = ({ products, toggleCompare }) => {
  if (products.length === 0) {
    return null;
  }
  return (
    <div className={styles.sticky}>
      <div className='row'>
        {products.map(item => (
          <ProductsToCompareBox {...item} key={item.id} toggleCompare={toggleCompare} />
        ))}

        <div className={styles.button}>
          <Button variant='main' className={styles.btnCompare}>
            Compare
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductsToCompare.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
      photo: PropTypes.string,
    })
  ),
  toggleCompare: PropTypes.func,
};
export default ProductsToCompare;
