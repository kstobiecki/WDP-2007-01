import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faBars } from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../../common/Dropdown/Dropdown';

import styles from './TopBar.module.scss';

function TopBar({ options, changeSiteOption }) {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={`col text-left ${styles.topOptions}`}>
            <ul>
              {/* <li>
                <Dropdown options={options.currencies} changeSiteOption={changeSiteOption}/>
              </li>
              <li>
                <Dropdown options={options.language} changeSiteOption={changeSiteOption}/>
              </li>
              <li>
                <Dropdown options={options.clientService} changeSiteOption={changeSiteOption}/>
              </li> */}
            </ul>
          </div>
          <div className={`col-4 text-left col-sm text-right  ${styles.topMenu}`}>
            <ul>
              <li>
                <a href='#'>
                  <FontAwesomeIcon className={`icons ${styles.icon}`} icon={faUser} />
                  <span>Login</span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon className={styles.icon} icon={faLock} />
                  <span>Register</span>
                </a>
              </li>
              <li>
                <a href='#'>
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
  options: PropTypes.object,
  changeSiteOption: PropTypes.func,
};

export default TopBar;
