import React from 'react'
import PropTypes from 'prop-types'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

import './style.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
}

const Statistics = ({ data, currentVariable }) => (
  <div className="Statistics__container">
    {currentVariable
      ? <Line options={options} data={data} />
      : <h4 className="Statistics__label">Selecciona una de las variables para ver sus estadísticas</h4>
    }
  </div>
)

Statistics.propTypes = {
  currentVariable: PropTypes.string,
  data: PropTypes.shape({
    labels: PropTypes.arrayOf(
      PropTypes.string.isRequired),
    datasets: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        data: PropTypes.arrayOf(PropTypes.number.isRequired),
        borderColor: PropTypes.string,
        backgroundColor: PropTypes.string,
    }))
  })
}

export default Statistics