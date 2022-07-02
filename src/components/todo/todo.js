import classes from "./todo.module.css";
import check from "../../images/icon-check.svg";
import Button from "../button/Button";
import cross from "../../images/icon-cross.svg";
import { useSelector, useDispatch } from "react-redux";
import { taskListSliceActions } from "../../store/todo-store";
const Todo = (props) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.light);

  const deleteTask = (closeClicked) => {
    dispatch(taskListSliceActions.removeTask(closeClicked.target.id));
  };
  return (
    <article className={`${classes.todo} ${!theme && classes.todoDark}`}>
      <div className={classes.checkboxDiv}>
        <input type="checkbox" className={classes.checkbox} id={props.id} />
        <label className={classes.label} htmlFor={props.id}>
          <img src={check} />
        </label>
      </div>
      <p
        className={`${classes.todoPara} ${
          props.isCompleted && classes.completed
        }`}
      >
        {props.description}
      </p>
      {/* adding IMG just to keep id different from input */}
      <Button className={classes.delete}>
        <img id={props.id + "IMG"} src={cross} onClick={deleteTask} />
      </Button>
    </article>
  );
};

export default Todo;
