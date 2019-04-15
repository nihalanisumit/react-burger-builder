import React from "react";
import PropTypes from "prop-types";

import classes from "./Button.css";

const Button = props => {
  return (
    <button
      onClick={props.clicked}
      className={[classes.Button, classes[props.btnType]].join(" ")}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {};

export default Button;
