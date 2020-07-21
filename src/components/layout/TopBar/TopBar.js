import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faBars } from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../../common/Dropdown/Dropdown';

import styles from './TopBar.module.scss';

function TopBar({ language, clientService, currencies, changeSiteOption }) {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={`col text-left ${styles.topOptions}`}>
            <ul>
              <li>
                <Dropdown option={currencies} changeSiteOption={changeSiteOption} />
              </li>
              <li>
                <Dropdown option={language} changeSiteOption={changeSiteOption} />
              </li>
              <li>
                <Dropdown option={clientService} changeSiteOption={changeSiteOption} />
              </li>
            </ul>
          </div>
          <div className={`col-4 text-left col-sm text-right  ${styles.topMenu}`}>
            <ul>
              <li>
                <a href='/#'>
                  <FontAwesomeIcon className={`icons ${styles.icon}`} icon={faUser} />
                  <span>Login</span>
                </a>
              </li>
              <li>
                <a href='/#'>
                  <FontAwesomeIcon className={styles.icon} icon={faLock} />
                  <span>Register</span>
                </a>
              </li>
              <li>
                <a href='/#'>
                  <FontAwesomeIcon className={styles.icon} icon={faBars} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

TopBar.propTypes = {
  language: PropTypes.array,
  currencies: PropTypes.array,
  clientService: PropTypes.array,
  changeSiteOption: PropTypes.func,
};

export default TopBar;
