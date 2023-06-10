import React from 'react';

const Dropdown = ({ options, labelKey, valueKey, onChange }) => {

  return (
    <select onChange={onChange} className="bg-transparent border border-white rounded p-2">
      {options.map((option) => (
        <option key={option[labelKey]} value={option[valueKey]}>
          {option[labelKey]}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;