import React, { useState } from 'react'

import { MOCKED_DATA, MOCKED_GRAPHIC_DATA } from '../../constants';

import Header from '../../components/Header/Header';
import SensorContainer from '../../components/SensorContainer/SensorContainer';

import './style.css'
import Statistics from '../../components/Statistics/Statistics';

const Dashboard = () => {
  const { listaSensores } = MOCKED_DATA;
  const [currentVariable, setCurrentVariable] = useState("")
  
  return (
    <div className="Dashboard__container">
      <Header />
      <div className="Data__container">
        {listaSensores.map(({ id, nombre, promedio, mensaje, color, listValores }) => (
          <SensorContainer
            key={`${nombre}-${id}`} {...{ currentVariable, setCurrentVariable, nombre, promedio, mensaje, color, listValores }} />      
        ))}
      </div>
      <Statistics data={MOCKED_GRAPHIC_DATA[currentVariable]} { ...{ currentVariable }} />
    </div>
  );
}

export default Dashboard
