import React, { useState } from 'react';

const Estimation = () => {
  const [options, setOptions] = useState({
    option1: false,
    option2: false,
    option3: false
  });
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionToggle = (option) => {
    setOptions(prevOptions => ({
      ...prevOptions,
      [option]: !prevOptions[option]
    }));
  };

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Selected Option:', selectedOption);
    console.log('Toggle Options:', options);
  };

  return (
    <div className="flex flex-col items-start space-y-4">
      <div>Estimation Page</div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="option1"
          checked={options.option1}
          onChange={() => handleOptionToggle('option1')}
          className="mr-2"
        />
        <label htmlFor="option1" className="text-lg font-semibold">Toggle Option 1</label>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="option2"
          checked={options.option2}
          onChange={() => handleOptionToggle('option2')}
          className="mr-2"
        />
        <label htmlFor="option2" className="text-lg font-semibold">Toggle Option 2</label>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="option3"
          checked={options.option3}
          onChange={() => handleOptionToggle('option3')}
          className="mr-2"
        />
        <label htmlFor="option3" className="text-lg font-semibold">Toggle Option 3</label>
      </div>

      <div className="flex items-center">
        <label htmlFor="dropdown" className="text-lg font-semibold mr-2">Select an Option:</label>
        <select
          id="dropdown"
          value={selectedOption}
          onChange={handleDropdownChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="">-- Select --</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>

      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
};

export default Estimation;
