import classes from "./todo.module.css";
import check from "../../images/icon-check.svg";
import Button from "../button/button";
import cross from "../../images/icon-cross.svg";
import { useSelector } from "react-redux";

const Todo = (props) => {
  const theme = useSelector((state) => state.theme.light);
  const isCompleted = true;
  return (
    <article className={`${classes.todo} ${!theme && classes.todoDark}`}>
      <div className={classes.checkboxDiv}>
        <input type="checkbox" className={classes.checkbox} id={props.id} />
        <label className={classes.label} htmlFor={props.id}>
          <img src={check} />
        </label>
      </div>
      <p className={`${classes.todoPara} ${isCompleted && classes.completed}`}>
        jhfjk sdfhvkjhd iuhui fhsdkjicv iriofjs kdjcjfi
      </p>
      <Button className={classes.delete}>
        <img src={cross} />
      </Button>
    </article>
  );
};

export default Todo;
