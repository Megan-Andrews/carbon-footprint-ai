import React, {useState} from 'react';
import Dropdown from './Dropdown';
import gamma from '../data/gamma.json';
import pue from '../data/pue.json';
import gpu from '../data/gpu.json';


const Recommendation = () => {
  const [selectedGPU, setSelectedGPU] = useState(0);
  const [selectedGamma, setSelectedGamma] = useState(0);
  const [selectedPUE, setSelectedPUE] = useState(0);

  const [selectedHours, setSelectedHours] = useState(0);
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

  const handleHoursChange = (e) => {
    setSelectedHours(e.target.value);
  };

  const handleChipsChange = (e) => {
    setSelectedChips(e.target.value);
  };

  const handleGridChange = (e) => {
    setSelectedGrid(e.target.value);
  };

  const handleSubmit = () => {
    setEmissions(selectedGPU * selectedGamma * selectedPUE * selectedHours * selectedChips * selectedGrid);
    setEmissionsResult(
    <div className='text-2xl font-bold text-center py-4 text-lime-200'>
      Your model emits {emissions} kg of CO<span className="text-base text-4xl font-bold"><sub>2</sub></span> per year
    </div>
    );
    console.log('Form submitted');
    console.log('Selected GPU:', selectedGPU);
    console.log('Selected Gamma:', selectedGamma);
    console.log('Selected PUE:', selectedPUE);
    console.log('Selected Hours:', selectedHours);
    console.log('Selected Chips:', selectedChips);
    console.log('Selected Grid:', selectedGrid);
    
  };
  return (
    <div>
        <div className='text-4xl font-bold text-center text-stone-100'>
          Get a recommendation for your model
        </div>
        <div style={{height:"60px"}}>
          {emissionsResult ? emissionsResult : <></>}
        </div>
          <div className='flex flex-row px-[17.5vw]'>
          <div className='space-y-4' style={{width:"30vw"}}>
              <div className='text-2xl font-bold text-center text-stone-100'>Initial Model </div>
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
                <div className='text-left flex flex-col'>
                  <span className='text-stone-400 font-bold'>Hours trained</span> 
                    <input
                      type="number"
                      placeholder="Enter a number"
                      className="w-full px-4 py-2 border border-gray-300 rounded text-stone-600"
                      onChange={handleHoursChange}
                    />
                </div>
                <div className='text-left flex flex-col'>
                  <span className='text-stone-400 font-bold'>Number of processors</span>
                  <input
                      type="number"
                      placeholder="Enter a number"
                      className="w-full px-4 py-2 border border-gray-300 rounded text-stone-600"
                      onChange={handleChipsChange}
                    />
                </div>
                <div className='text-left flex flex-col'>
                  <span className='text-stone-400 font-bold'>Number of grid configurations</span>
                  <input
                      type="number"
                      placeholder="Enter a number"
                      className="w-full px-4 py-2 border border-gray-300 rounded text-stone-600"
                      onChange={handleGridChange}
                    />
                </div>
            </div>
            <div className='space-y-4 justify-end ml-auto' style={{width:"30vw"}}>
              <div className='text-2xl font-bold text-center text-stone-100'>Recommendation</div>
              <div className='text-left flex flex-col'> 
                <span className='text-stone-400 font-bold'>Select your location</span>
                <div className="w-full px-4 py-2 border border-gray-300 rounded text-stone-600" style={{height:'35px'}}></div>
              </div>
              <div className='text-left flex flex-col'>
              <span className='text-stone-400 font-bold'>Select your Cloud Provider</span>
              <div className="w-full px-4 py-2 border border-gray-300 rounded text-stone-600" style={{height:'35px'}}></div>
                </div>
              <div className='text-left flex flex-col'>
              <span className='text-stone-400 font-bold'>Select your GPU</span>
              <div className="w-full px-4 py-2 border border-gray-300 rounded text-stone-600" style={{height:'35px'}}></div>
              </div>
                <div className='text-left flex flex-col'>
                  <span className='text-stone-400 font-bold'>Hours trained</span> 
                    <div className="w-full px-4 py-2 border border-gray-300 rounded text-stone-600" style={{height:'35px'}}></div>
                </div>
                <div className='text-left flex flex-col'>
                  <span className='text-stone-400 font-bold'>Number of processors</span>
                  <div className="w-full px-4 py-2 border border-gray-300 rounded text-stone-600" style={{height:'38.61px'}}></div>
                </div>
                <div className='text-left flex flex-col'>
                  <span className='text-stone-400 font-bold'>Number of grid configurations</span>
                  <div className="w-full px-4 py-2 border border-gray-300 rounded text-stone-600" style={{height:'38.61px'}}></div>
                </div>
            </div>
          </div>
          
          
        <button
         onClick={handleSubmit}
         className="my-4 px-4 py-2 bg-stone-500 text-stone-100 rounded hover:bg-stone-600 font-bold hover:text-stone-300"
       >
         Get Recommendation
       </button>
      <div className='py-2 space-x-8'>
        <button className='px-4 py-2 bg-stone-500 text-stone-100 rounded hover:bg-stone-600 font-bold hover:text-stone-300'>Like</button>
        <button className='px-4 py-2 bg-stone-500 text-stone-100 rounded hover:bg-stone-600 font-bold hover:text-stone-300'>Dislike</button>
      </div>

    </div>
  );
};

export default Recommendation;