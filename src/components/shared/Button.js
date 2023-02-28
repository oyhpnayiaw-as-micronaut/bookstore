import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Button.module.css';

function Button({
  children,
  onClick,
  type,
  className,
  disabled,
}) {
  return (
    <button
      className={cn(styles.button, className)}
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
      disabled={disabled}
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
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => {},
  type: 'button',
  className: null,
  disabled: false,
};

export default Button;
