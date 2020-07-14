import React, { createRef } from 'react';
import PropTypes from 'prop-types';

import styles from './Feedback.module.scss';

import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.rowRef = createRef();
  }

  render() {
    const { feedback } = this.props;

    const feedbackCount = feedback.length;

    const dots = [];
    for (let i = 0; i < 3; i++) {
      dots.push(
        <li key={i}>
          <a>page {i}</a>
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
          <div>
            {feedback.map(item => (
              <div
                key={item.name}
                className={`row justify-content-center ${styles.wrapper}`}
              >
                <FontAwesomeIcon icon={faQuoteRight} />
                <div>{item.text}</div>
                <div className={'row'}>
                  <img src={item.image} alt={item.alt}></img>
                  <div className={'column'}>
                    <div>{item.name}</div>
                    <div>{item.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  feedback: PropTypes.array,
};

export default Feedback;
