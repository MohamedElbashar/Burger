/** @format */

import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckOutSummary.css";

const CheckoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1> We Hope it tastes Well! </h1>
      <div style={{ width: "100%", height: "300px", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger">Cancel</Button>
      <Button btnType="Danger">Continue</Button>
    </div>
  );
};
export default CheckoutSummary;
