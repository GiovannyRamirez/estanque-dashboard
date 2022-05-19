import React from 'react'

import { MOCKED_DATA } from '../../constants';

import Header from '../../components/Header/Header';
import SensorContainer from '../../components/SensorContainer/SensorContainer';

import './style.css'

const Dashboard = () => {
  const { variables } = MOCKED_DATA;

  return (
    <div className="Dashboard__container">
      <Header />
      <select>
        <option value="1">Estanque 1</option>
        <option value="2">Estanque 2</option>
        <option value="3">Estanque 3</option>
      </select>
      <div className="Data__container">
        {variables.map(({ variableType, value, sliders, alert }) => (
          < SensorContainer key={variableType} {...{ variableType, value, sliders, alert }} />      
        ))}
      </div>
    </div>
  );
}

export default Dashboard
