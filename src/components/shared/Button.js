import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Button.module.css';

function Button({
  children,
  onClick,
  type,
  className,
}) {
  return (
    <button
      className={cn(styles.button, className)}
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit']),
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  type: 'button',
  className: null,
};

export default Button;
