import classes from "./header.module.css";
import sun from "../../images/icon-sun.svg";
import moon from "../../images/icon-moon.svg";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.heading}>todo</h1>
      <button className={classes.themeBtn}><img src={moon}></img></button>
      {/* <button className={classes.themeBtn}><img src={sun}></img></button> */}
    </header>
  );
};

export default Header;
