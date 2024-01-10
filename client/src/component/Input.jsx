import React from 'react'

const Input = ({ label, placeholder, value, error, onChange, type = 'text' }) => {
    return (
      <div className={`input_fields ${error ? 'error' : ''}`}>
        <label>{label} {error && <img src='images/star.svg' />}</label>
        <div className="d-flex input_field_body">
          <img src={error ? `images/${type}_red.svg` : `images/${type}.svg`} />
          <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
        <span>{error}</span>
      </div>
    );
  };

export default Input