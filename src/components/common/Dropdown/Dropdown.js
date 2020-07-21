import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './Dropdown.module.scss';

function Dropdown({ option, changeSiteOption }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const node = useRef();

  const handleClick = value => {
    toggle(!open);

    const currentlyActive = option
      .filter(item => item.active === true)
      .map(filteredItem => (filteredItem.active = false));
    const newActive = option
      .filter(item => item.value === value)
      .map(filteredItem => (filteredItem.active = true));

    changeSiteOption(...newActive, ...currentlyActive);
  };

  const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.wrapper} ref={node}>
      <div className={styles.header} role='button' onClick={() => toggle(!open)}>
        <div>
          {option
            .filter(item => item.active === true)
            .map(filteredItem => (
              <a href='/#' key={filteredItem.value}>
                {filteredItem.value}{' '}
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faCaretDown}
                ></FontAwesomeIcon>
              </a>
            ))}
        </div>
      </div>
      {open && (
        <ul className={styles.list}>
          {option.map(item => (
            <li key={item.value} onClick={() => handleClick(item.value)}>
              <button type='button'>
                <span>{item.value}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  option: PropTypes.array,
  changeSiteOption: PropTypes.func,
};

export default Dropdown;
