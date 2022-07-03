import classes from "./empty.module.css";
import { themeActions } from "../../store/theme-store";
import { useSelector } from "react-redux/es/exports";

const Empty = (props) => {
  const theme = useSelector( state => state.theme.light);
  return <p className={`${classes.empty} ${!theme && classes.emptyDark}`}>{props.children}</p>;
};

export default Empty;
