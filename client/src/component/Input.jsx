import React from 'react'

const Input = ({ label, placeholder, value, onChange, type = 'text', required = false, icon, error }) => {
  return (
    <div className='input_fields'>
      <label>{label} {required && <img src='images/star.svg' alt="Star" />}</label>
      <div className={error ? 'error d-flex input_field_body' : 'd-flex input_field_body'}>
        <img src={icon} alt="Arrow" />
        <input type={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
      </div>
      <span>{error}</span>
    </div>
  );
};

export default Input