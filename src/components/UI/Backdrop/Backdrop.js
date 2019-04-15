import React from "react";
import classes from "./Backdrop.css";

const Backdrop = props => {
  return (
    <div>
      {props.show ? (
        <div className={classes.Backdrop} onClick={props.clicked} />
      ) : null}
    </div>
  );
};

export default Backdrop;
