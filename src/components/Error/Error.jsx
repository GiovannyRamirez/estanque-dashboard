import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const Error = ({ message }) => <h2 className="Error__message">{message}</h2>;

Error.propTypes = {
  message: PropTypes.string,
};

Error.defaultProps = {
  message: "Algo salió mal",
};

export default Error;
