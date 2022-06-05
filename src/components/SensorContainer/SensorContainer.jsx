import React from "react";
import PropTypes from "prop-types";

import { CONF_VALUES } from "../../constants";
import { getUpToThreeDecimals } from "../../utils";

import "./style.css";

const SensorContainer = ({
  id,
  nombre,
  promedio,
  mensaje,
  color,
  listValores,
  currentVariable,
  setCurrentVariable,
}) => {
  const { label, min, max, magnitude } = CONF_VALUES[nombre];
  const setVariableType = () => setCurrentVariable(id);

  const selectedSensor = () => {
    if (currentVariable === id) {
      return {
        background: "#F9F9F9",
        border: `2px solid ${color}`,
        transform: "scale(1.03)",
      };
    }
  };

  return (
    <div
      className="Sensor__container"
      onClick={setVariableType}
      style={{ ...selectedSensor() }}
    >
      <h2 className="Sensor__type" style={{ color }}>
        {label} {magnitude}
      </h2>
      <p className="Sensor__alert" style={{ color }}>
        {mensaje}
      </p>
      <div className="Sensor__value">
        <progress
          className="Sensor__current"
          value={promedio}
          min={min}
          max={max}
        />
        <p className="Sensor__value__text" style={{ color }}>
          {getUpToThreeDecimals(promedio)}
        </p>
      </div>
      <div className="Sensor__values">
        <p className="Sensor__text">Valores por sensor</p>
        {listValores.map(({ valor }, idx) => (
          <div key={idx} className="Sensor__value">
            <progress
              className="Sensor__progress"
              value={valor}
              min={min}
              max={max}
            />
            <p className="Sensor__value__text">{getUpToThreeDecimals(valor)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

SensorContainer.propTypes = {
  nombre: PropTypes.string.isRequired,
  promedio: PropTypes.number.isRequired,
  mensaje: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  listValores: PropTypes.arrayOf(
    PropTypes.shape({
      idsensor: PropTypes.number.isRequired,
      valor: PropTypes.number.isRequired,
      fecha: PropTypes.string.isRequired,
    })
  ),
  setCurrentVariable: PropTypes.func.isRequired,
};

export default SensorContainer;
