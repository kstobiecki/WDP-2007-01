import React from 'react';
import PropTypes from 'prop-types';
import { Swipeable } from 'react-swipeable';

const SwipeableComp = ({ children, leftAction, rightAction, className }) => (
  <Swipeable
    onSwipedLeft={leftAction}
    onSwipedRight={rightAction}
    className={className}
  >
    {children}
  </Swipeable>
);

SwipeableComp.propTypes = {
  children: PropTypes.node,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
  className: PropTypes.string,
};

export default SwipeableComp;
