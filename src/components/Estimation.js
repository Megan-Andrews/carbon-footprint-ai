import React, { useState } from 'react';
import Dropdown from './Dropdown';
import gamma from '../data/gamma.json';
import pue from '../data/pue.json';
import gpu from '../data/gpu.json';

const Estimation = () => {
  const [selectedGPU, setSelectedGPU] = useState(0);
  const [selectedGamma, setSelectedGamma] = useState(0);
  const [selectedPUE, setSelectedPUE] = useState(0);

  const [selectedChips, setSelectedChips] = useState(0);
  const [selectedGrid, setSelectedGrid] = useState(0);

  const [emissions, setEmissions] = useState(0);
  const [emissionsResult, setEmissionsResult] = useState(<></>);

  const handleDropdownGPUChange = (e) => {
    setSelectedGPU(e.target.value);
  };

  const handleDropdownGammaChange = (e) => {
    setSelectedGamma(e.target.value);
  };

  const handleDropdownPUEChange = (e) => {
    setSelectedPUE(e.target.value);
  };

  const handleChipsChange = (e) => {
    setSelectedChips(e.target.value);
  };

  const handleGridChange = (e) => {
    setSelectedGrid(e.target.value);
  };

  const handleSubmit = () => {
    setEmissions(selectedGPU * selectedGamma * selectedPUE  * selectedChips * selectedGrid / 50 / 5 * 0.001);
    console.log(emissions)
    setEmissionsResult(
    <div className='text-2xl font-bold text-center text-white'>
      Your model emits {emissions} tonnes of CO<span className="text-base text-4xl font-bold"><sub>2</sub></span> per year
    </div>
    );
    console.log('Form submitted');
    console.log('Selected GPU:', selectedGPU);
    console.log('Selected Gamma:', selectedGamma);
    console.log('Selected PUE:', selectedPUE);
    console.log('Selected Chips:', selectedChips);
    console.log('Selected Grid:', selectedGrid);
    
  };

  return (
    <div className=" space-y-4 rounded mx-10 bg-neutral-800"> 
      <div style={{"height":"10px"}}></div>
        <div className='text-4xl font-bold text-center py-4 text-stone-100'>
          Estimate the CO<span className="text-base text-4xl font-bold"><sub>2</sub></span> emissions of your model
        </div>
        <div style={{height:"30px"}}>
          {emissionsResult ? emissionsResult : <></>}
        </div>
          <div className='px-[20vw]  space-y-4'>
            <div className='text-left flex flex-col'> 
              <span className='text-stone-400 font-bold'>Select your location</span>
              <Dropdown onChange={handleDropdownGPUChange} options={gamma} labelKey="Regions" valueKey="Gamma"/>
            </div>
            <div className='text-left flex flex-col'>
            <span className='text-stone-400 font-bold'>Select your Cloud Provider</span>
              <Dropdown onChange={handleDropdownGammaChange} options={pue} labelKey="Providers" valueKey="PUE"/>
              </div>
            <div className='text-left flex flex-col'>
            <span className='text-stone-400 font-bold'>Select your GPU</span>
              <Dropdown onChange={handleDropdownPUEChange} options={gpu} labelKey="name" valueKey="tdp_watts"/>
            </div>
            <div className='text-left flex flex-row space-x-4'>
              <div className='flex-grow'>
                <span className='text-stone-400 font-bold'>Number of processors</span>
                <input
                    type="number"
                    placeholder="Enter a number"
                    className="w-full px-4 py-2 border border-gray-300 rounded text-stone-600"
                    onChange={handleChipsChange}
                  />
              </div>
              <div className='flex-grow'>
                <span className='text-stone-400 font-bold'>Number of grid configurations</span>
                <input
                    type="number"
                    placeholder="Enter a number"
                    className="w-full px-4 py-2 border border-gray-300 rounded text-stone-600"
                    onChange={handleGridChange}
                  />
              </div>
             
            </div>
          
          </div>
          
        <button
         onClick={handleSubmit}
         className="px-4 py-2 bg-stone-500 text-stone-100 rounded hover:bg-stone-600 font-bold hover:text-stone-300"
       >
         Submit
       </button>
       <div style={{"height":"30px"}}></div>
    </div>
  );
};

export default Estimation;
