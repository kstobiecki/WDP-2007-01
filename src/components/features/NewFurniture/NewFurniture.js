import React, { createRef } from 'react';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ProductBox from '../../common/ProductBox/ProductBoxContainer';
import SwipeableComp from '../../common/SwipeableComp/SwipeableComp';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
  };

  constructor(props) {
    super(props);
    this.rowRef = createRef();
  }

  handlePageChange(newPage) {
    this.rowRef.current.className = 'row fade';
    setTimeout(() => {
      this.setState({ activePage: newPage });
    }, 200);
  }

  handleCategoryChange(newCategory) {
    this.rowRef.current.className = 'row fade';
    setTimeout(() => {
      this.setState({ activeCategory: newCategory });
    }, 200);
  }

  render() {
    const { categories, products, viewPort } = this.props;
    const { activeCategory, activePage } = this.state;

    let itemsDisplayed;
    if (viewPort.viewport === 'desktop') {
      itemsDisplayed = 8;
    } else if (viewPort.viewport === 'tablet-3') {
      itemsDisplayed = 3;
    } else if (viewPort.viewport === 'tablet-2') {
      itemsDisplayed = 2;
    } else {
      itemsDisplayed = 1;
    }

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / itemsDisplayed);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <a
            href='/#'
            onClick={() => this.handlePageChange(i)}
            className={i === activePage ? styles.active : ''}
          >
            page {i}
          </a>
        </li>
      );
    }

    if (this.rowRef.current) {
      this.rowRef.current.className = 'row fade show';
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        href='/#'
                        className={item.id === activeCategory ? styles.active : ''}
                        onClick={() => this.handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
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
            <FontAwesomeIcon
              icon={faAngleLeft}
              className={styles.buttonLeft}
              onClick={() => this.handlePageChange(activePage > 0 ? activePage - 1 : 0)}
            />
            <FontAwesomeIcon
              icon={faAngleRight}
              className={styles.buttonRight}
              onClick={() =>
                this.handlePageChange(
                  activePage + 1 < pagesCount ? activePage + 1 : activePage
                )
              }
            />
            <div ref={this.rowRef} className='row fade show'>
              {categoryProducts
                .slice(activePage * itemsDisplayed, (activePage + 1) * itemsDisplayed)
                .map(item => (
                  <div
                    key={item.id}
                    className='col-12 col-lg-4 col-md-6 col-sm-12 col-xl-3'
                  >
                    <ProductBox {...item} />
                  </div>
                ))}
            </div>
          </SwipeableComp>
        </div>
      </div>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  viewPort: PropTypes.any,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
      newFurniture: PropTypes.bool,
    })
  ),
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
  viewPort: 'desktop',
};

export default NewFurniture;
