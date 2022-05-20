import React from 'react'
import PropTypes from 'prop-types'

import { CONF_VALUES } from '../../constants'
import { getUpToThreeDecimals } from '../../utils'

import './style.css'

const SensorContainer = ({ nombre, promedio, mensaje, color, listValores }) => {
  const { label, min, max, magnitude } = CONF_VALUES[nombre]

  return (
    <div className="Sensor__container">
      <h2 className="Sensor__type" style={{ color }}>{label} {magnitude}</h2>
      <p className="Sensor__alert" style={{ color }}>{mensaje}</p>
      <div className="Sensor__value">
        <progress className="Sensor__current" value={promedio} min={min} max={max} />
        <p className="Sensor__value__text" style={{ color }}>{getUpToThreeDecimals(promedio)}</p>
      </div>
      <div className="Sensor__values">
        <p className="Sensor__text">Valores por sensor</p>
        {listValores.map(({ valor }, idx) => (
          <div key={idx} className="Sensor__value">
            <progress className="Sensor__progress" value={valor} min={min} max={max} />
            <p className="Sensor__value__text">{getUpToThreeDecimals(valor)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

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
}

export default SensorContainer