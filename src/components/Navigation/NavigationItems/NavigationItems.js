import React from "react";
import PropTypes from "prop-types";

import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = props => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" active>
        {" "}
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/"> Checkout </NavigationItem>
    </ul>
  );
};

NavigationItems.propTypes = {};

export default NavigationItems;
