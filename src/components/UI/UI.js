import App from "../../App";
import classes from "./UI.module.css";
import { useSelector } from "react-redux";

const UI = () => {
  const theme = useSelector((state) => state.theme.light);
  return (
    <main
      className={`${classes.mainContainer} ${!theme && classes.mainContainerDark}`}
    >
      <div
        className={`${classes.background} ${!theme && classes.backgroundDark}`}
      ></div>
      <App />
    </main>
  );
};

export default UI;
