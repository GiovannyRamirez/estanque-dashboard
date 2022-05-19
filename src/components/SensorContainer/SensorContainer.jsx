import React from 'react'
import PropTypes from 'prop-types'

import { CONF_VALUES } from '../../constants'

import './style.css'

const SensorContainer = ({ variableType, value, sliders, alert }) => (
  <div key={variableType} className="Sensor__container">
    <h2 className="Sensor__type">{variableType} {CONF_VALUES[variableType].magnitude}</h2>
    <p className="Sensor__alert">{alert}</p>
    <div className="Sensor__value">
      <progress className="Sensor__current" value={value} min={CONF_VALUES[variableType].min} max={CONF_VALUES[variableType].max} />
      <p className="Sensor__value__text">{value}</p>
    </div>
    <div className="Sensor__values">
      <p className="Sensor__text">Valores por sensor</p>
      {sliders.map((val, idx) => (
        <div key={idx} className="Sensor__value">
          <progress className="Sensor__progress" value={val} min={CONF_VALUES[variableType].min} max={CONF_VALUES[variableType].max} />
          <p className="Sensor__value__text">{val}</p>
        </div>
      ))}
    </div>
  </div>
)

SensorContainer.propTypes = {
  variableType: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  sliders: PropTypes.arrayOf(PropTypes.string).isRequired,
  alert: PropTypes.string.isRequired,
}

export default SensorContainer