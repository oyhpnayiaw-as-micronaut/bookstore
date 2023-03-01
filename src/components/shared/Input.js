import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Input.module.css';

function Input({
  className,
  name,
  value,
  setValue,
  placeholder,
  required,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <input
      className={cn(styles.input, className)}
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      required={required}
    />
  );
}

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

Input.defaultProps = {
  className: '',
  placeholder: '',
  required: false,
};

export default Input;
