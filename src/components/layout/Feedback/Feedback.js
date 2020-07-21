import React, { createRef } from 'react';
import PropTypes from 'prop-types';

import styles from './Feedback.module.scss';

import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import SwipeableComp from '../../common/SwipeableComp/SwipeableComp';

class Feedback extends React.Component {
  state = {
    activePage: 0,
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

  render() {
    const { feedback } = this.props;
    const { activePage } = this.state;

    const itemsDisplayed = 1;
    const feedbackCount = feedback.length;

    const dots = [];
    for (let i = 0; i < feedbackCount; i++) {
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
                <h3>Client feedback</h3>
              </div>
              <div className={'col ' + styles.menu}></div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <SwipeableComp
            leftAction={() =>
              this.handlePageChange(
                activePage + 1 < feedbackCount ? activePage + 1 : activePage
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
                  activePage + 1 < feedbackCount ? activePage + 1 : activePage
                )
              }
            />
            <div ref={this.rowRef} className='row fade show'>
              {feedback
                .slice(activePage * itemsDisplayed, (activePage + 1) * itemsDisplayed)
                .map(item => (
                  <div key={item.name} className={`row justify-content-center`}>
                    <FontAwesomeIcon icon={faQuoteRight} className={styles.icon} />
                    <div className={`row justify-content-center ${styles.wrapper}`}>
                      <div className={styles.text}>{item.text}</div>
                      <div className={'row'}>
                        <img src={item.image} alt={item.alt}></img>
                        <div className={`column ${styles.client}`}>
                          <div className={styles.name}>{item.name}</div>
                          <div>{item.description}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </SwipeableComp>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  feedback: PropTypes.array,
};

export default Feedback;
