import React, {useState} from 'react';
import Dropdown from './Dropdown';
import gamma from '../data/gamma.json';
import pue from '../data/pue.json';
import gpu from '../data/gpu.json';
import models from '../data/models.json';
import axios from 'axios';
import '../styles/Recommendation.css';
import { useScroll, animated } from '@react-spring/web'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ComposedChart,
  Tooltip,
  Legend
} from "recharts";




const Recommendation = () => {
  const [data, setData] = useState(models.sort((a,b) => b["CO2 Emissions (tonnes)"] - a["CO2 Emissions (tonnes)"]));
  const [selectedGPU, setSelectedGPU] = useState(0);
  const [selectedGamma, setSelectedGamma] = useState(0);
  const [selectedPUE, setSelectedPUE] = useState(0);
  const [budget, setBudget] = useState(0);

  const [selectedChips, setSelectedChips] = useState(0);
  const [selectedGrid, setSelectedGrid] = useState(0);

  const [emissions, setEmissions] = useState(0);

  const [recommendedGPU, setRecommendedGPU] = useState();
  const [recommendedGamma, setRecommendedGamma] = useState();
  const [recommendedPUE, setRecommendedPUE] = useState();

  const [recommendedChips, setRecommendedChips] = useState();
  const [recommendedGrid, setRecommendedGrid] = useState();

  const [recommendedEmissions, setRecommendedEmissions] = useState();

  const [emissionsResult, setEmissionsResult] = useState(<></>);

  const [isClicked, setIsClicked] = useState(false);
  const { scrollYProgress } = useScroll()

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

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };

  function calculateEmissions(GPU, Gamme, PUE, Chips, Grid) {
    return Math.floor(GPU * Gamme * PUE * Chips * Grid /5 /50 * 0.001);
  };
  const handleSubmit = async () => {

    console.log('Form submitted');
    console.log('Selected GPU:', selectedGPU);
    console.log('Selected Gamma:', selectedGamma);
    console.log('Selected PUE:', selectedPUE);
    console.log('Selected Chips:', selectedChips);
    console.log('Selected Grid:', selectedGrid);
    
    setIsClicked(true);

    setEmissions(calculateEmissions(selectedGPU, selectedGamma, selectedPUE, selectedChips,selectedGrid));
    setEmissionsResult(
    <div className='text-2xl font-bold text-center py-4 text-lime-200 text-white'>
      Your model emits {emissions} tonnes of CO<span className="text-base text-4xl font-bold"><sub>2</sub></span> per year
    </div>
    );

    // const newData = [...data.filter((entry) => entry.Model !== 'Your Old Model'), { Model: 'Your Old Model', "CO2 Emissions (tonnes)": emissions }]; // Add a new data entry
    // setData(newData);

    console.log("your emissons", emissions);
    const requestData = {
      selectedGPU,
      selectedGamma,
      selectedPUE,
      selectedChips,
      selectedGrid
    };

    const recommendedData = {
      "Regions": "Paraguay",
      "Gamma": 23.916,
      "name": "A100 SXM4 80 GB",
      "tdp_watts": 400,
      "Providers": "Google Cloud",
      "PUE": 1.1,
      "Processors": 50,
      "Grid": 5
    };

    setRecommendedGPU(recommendedData.name);
    setRecommendedGamma(recommendedData.Regions); 
    setRecommendedPUE(recommendedData.Providers);
    setRecommendedChips(recommendedData.Processors);
    setRecommendedGrid(recommendedData.Grid);

    setRecommendedEmissions(calculateEmissions(recommendedData.tdp_watts, recommendedData.Gamma, recommendedData.PUE, recommendedData.Processors, recommendedData.Grid));
    
    const recData = [...data.filter((entry) => entry.Model !== 'Your New Model' && entry.Model !== 'Your Old Model'), { Model: 'Your New Model', "CO2 Emissions (tonnes)": recommendedEmissions }, { Model: 'Your Old Model', "CO2 Emissions (tonnes)": emissions }]; // Add a new data entry
    setData(recData);
    // try {
    //   const response = await axios.post('/api/endpoint', requestData);
    //   console.log(response.data);
    // } catch (error) {
    //   console.error(error);
    // }

  };

  const dataWithColors = data.map((bar) => ({
    ...bar,
    fill: bar.Model === "Your Old Model" || bar.Model === "Your New Model" ? "#216073" : "#3cc3ba",
  }));

  return (
    <div>
        <div style={{height:"30px"}}>
        </div>
        <div className = "rounded mx-10 bg-neutral-800">
        <div className='flex flex-row px-[12.5vw] py-8'>
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
                <div className='text-left flex flex-col'>
                  <span className='text-stone-400 font-bold'>Select your budget</span>
                  <input
                      type="number"
                      placeholder="Enter a budget (USD)"
                      className="w-full px-4 py-2 border border-gray-300 rounded text-stone-600"
                      onChange={handleBudgetChange}
                    />
                </div>
            </div>
            <div className={'space-y-4 justify-end ml-auto'} style={{width:"30vw"}}>
            <div className={`text-2xl font-bold text-center text-stone-100 ${isClicked ? "" : "text-stone-500"}`}>Recommendation</div>
              <div className='text-left flex flex-col'> 
                <span className='text-stone-400 font-bold'>Your location</span>
                <div className="w-full px-4 py-2 border border-gray-300 rounded text-stone-100" style={{height:'35px'}}>
                  {recommendedGPU}
                </div>
              </div>
              <div className='text-left flex flex-col'>
              <span className='text-stone-400 font-bold'>Your Cloud Provider</span>
              <div className="w-full px-4 py-2 border border-gray-300 rounded text-stone-100" style={{height:'35px'}}>
                  {recommendedGamma}
              </div>
                </div>
              <div className='text-left flex flex-col'>
              <span className='text-stone-400 font-bold'>Your GPU</span>
              <div className="w-full px-4 py-2 border border-gray-300 rounded text-stone-100" style={{height:'35px'}}>
                  {recommendedPUE}
              </div>
              </div>
                <div className='text-left flex flex-col'>
                  <span className='text-stone-400 font-bold'>Number of processors</span>
                  <div className="w-full px-4 py-2 border border-gray-300 rounded text-stone-100" style={{height:'38.61px'}}>
                    {recommendedChips}
                  </div>
                </div>
                <div className='text-left flex flex-col'>
                  <span className='text-stone-400 font-bold'>Number of grid configurations</span>
                  <div className="w-full px-4 py-2 border border-gray-300 rounded text-stone-100" style={{height:'38.61px'}}>
                    {recommendedGrid}
                  </div>
                </div>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="my-4 by-4 px-4 py-2 bg-stone-500 text-stone-100 rounded hover:bg-stone-600 font-bold hover:text-stone-300"
          >
            Get Recommendation
          </button>
          <div style={{"height":"20px"}}></div>
        </div>
          
        <animated.div style={{ opacity: scrollYProgress }}>
             
        <div className="flex flex-col justify-center chart my-12">

          <div className="flex justify-center">
              <ComposedChart
            width={750}
            height={500}
            data={[...dataWithColors].sort((a,b) => b["CO2 Emissions (tonnes)"] - a["CO2 Emissions (tonnes)"])}
            layout="vertical"
            // margin={{
            //   top: 5,
            //   right: 50,
            //   left: 20,
            //   bottom: 5
            // }}
          >
            <CartesianGrid strokeDasharray="2 4" />
            <XAxis type="number" />
            <YAxis
              dataKey="Model"
              type="category"
              interval={0}
              tickLine={false}
              //angle={-20} // Adjust the tick angle to fit the labels in one line
              textAnchor="end" // Align the labels to the end of the tick
              width={400} // Adjust the width of the YAxis to prevent label wrapping
            />
            <Tooltip
            contentStyle={{ color: 'gray' }} // Change tick font color here
             />
            <Legend />
            <Bar
              dataKey="CO2 Emissions (tonnes)" fill="#3cc3ba" />
          </ComposedChart>
          </div>
          {emissionsResult ? emissionsResult : <></>}
        </div>
    </animated.div>

      
    </div>
  );
};

export default Recommendation;