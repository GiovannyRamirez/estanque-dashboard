import React from 'react'

import { MOCKED_DATA } from '../../constants';

import Header from '../../components/Header/Header';
import SensorContainer from '../../components/SensorContainer/SensorContainer';

import './style.css'

const Dashboard = () => {
  const { listaSensores } = MOCKED_DATA;
  
  return (
    <div className="Dashboard__container">
      <Header />
      <div className="Data__container">
        {listaSensores.map(({ id, nombre, promedio, mensaje, color, listValores }) => (
          < SensorContainer key={`${nombre}-${id}`} {...{ nombre, promedio, mensaje, color, listValores }} />      
        ))}
      </div>
    </div>
  );
}

export default Dashboard
