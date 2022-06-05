import React from "react";
import PropTypes from "prop-types";

import Loader from "../Loader/Loader";

import "./style.css";

const Header = ({ estanques, loading, setCurrentEstanque }) => {
  const handleChange = (e) => setCurrentEstanque(e.target.value);

  return (
    <div className="Header__container">
      <h1 className="Header__title">Laboratorio Estanques Granja #1</h1>
      {loading && <Loader />}
      {!!estanques.length && (
        <div className="Header__select__options">
          <h4 className="Header__select__title">Seleccione para empezar: </h4>
          <select
            defaultValue={1}
            onChange={handleChange}
            className="Header__select"
          >
            {estanques.map(({ id, nombre }) => (
              <option key={id} value={id}>
                {nombre}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  setCurrentEstanque: PropTypes.func.isRequired,
  estanques: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
    })
  ),
};

export default Header;
