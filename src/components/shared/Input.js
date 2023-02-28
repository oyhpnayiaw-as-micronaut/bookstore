import React from 'react';
import PropTypes from 'prop-types';

function Input({
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
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      required={required}
    />
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

Input.defaultProps = {
  placeholder: '',
  required: false,
};

export default Input;
