import React from 'react';

const Input = ({ value, onChange, placeholder, type = 'text' }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
