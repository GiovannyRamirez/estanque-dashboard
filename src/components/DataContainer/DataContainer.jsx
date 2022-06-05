import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { ENDPOINTS } from "../../constants";

import SensorContainer from "../SensorContainer/SensorContainer";
import Statistics from "../Statistics/Statistics";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

import "./style.css";

const DataContainer = ({
  currentEstanque,
  currentVariable,
  setCurrentVariable,
}) => {
  const [listaSensores, setListaSensores] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  let hasData = [];

  useEffect(() => {
    const fetchData = async () => {
      setListaSensores([]);
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          `${ENDPOINTS.VALORES}idEstanque=${currentEstanque}`
        );
        const { listaSensores } = await response.json();
        setListaSensores(listaSensores);
      } catch (err) {
        setError("Algo salió mal con los datos");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentEstanque]);

  return (
    <>
      {loading && <Loader />}
      {error && <Error message={error} />}
      <div className="Data__container">
        {!!listaSensores.length &&
          listaSensores.map(
            ({ id, nombre, promedio, mensaje, color, listValores }) => {
              if (listValores.length === 0) {
                hasData.push(false);
                return null;
              }
              return (
                <SensorContainer
                  key={`${nombre}-${id}`}
                  {...{
                    currentVariable,
                    setCurrentVariable,
                    id,
                    nombre,
                    promedio,
                    mensaje,
                    color,
                    listValores,
                  }}
                />
              );
            }
          )}
      </div>
      {!hasData.length && (
        <Statistics {...{ currentVariable, currentEstanque }} />
      )}
    </>
  );
};

DataContainer.propTypes = {
  currentEstanque: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  currentVariable: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  setCurrentVariable: PropTypes.func.isRequired,
};

export default DataContainer;
