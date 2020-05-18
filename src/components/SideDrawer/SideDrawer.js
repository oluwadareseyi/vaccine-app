import React from "react";
import classes from "./SideDrawer.module.scss";
import Backdrop from "../UI/Backdrop/Backdrop";
const sideDrawer = (props) => {
  let showClass = [classes.SideDrawer, classes.Close];

  if (props.show) {
    showClass[1] = classes.Open;
  }

  return (
    <React.Fragment>
      <Backdrop hide={props.hide} show={props.show} />
      <div className={showClass.join(" ")}>
        <nav className={classes.Nav}>
          <div className={classes.NavItems}>Home</div>
          <div onClick={props.clicked} className={classes.NavItems}>
            About Us
          </div>
          <div onClick={props.clicked} className={classes.NavItems}>
            Services
          </div>
          <div onClick={props.clicked} className={classes.NavItems}>
            Contact Us
          </div>
          <div onClick={props.clicked} className={classes.NavItems}>
            Blog
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;
