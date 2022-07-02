import classes from "./header.module.css";
import sun from "../../images/icon-sun.svg";
import moon from "../../images/icon-moon.svg";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { themeActions } from "../../store/theme-store";
import Button from "../button/Button";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.light);

  const changeTheme = () => {
    dispatch(themeActions.toggleTheme());
  };
  return (
    <header className={classes.header}>
      <h1 className={classes.heading}>todo</h1>
      {theme && (
        <Button className={classes.themeBtn} callFunction={changeTheme}>
          <img src={moon} />
        </Button>
      )}

      {!theme && (
        <Button className={classes.themeBtn} callFunction={changeTheme}>
          <img src={sun} />
        </Button>
      )}
    </header>
  );
};

export default Header;
