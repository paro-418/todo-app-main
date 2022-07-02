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

  const markComplete = (labelClicked) => {
    const idToMark = labelClicked.target.id;
    dispatch(
      taskListSliceActions.markComplete(
        idToMark.substring(0, idToMark.length - 3)
      )
    );
  };
  
  return (
    <article className={`${classes.todo} ${!theme && classes.todoDark}`}>
      <div className={classes.checkboxDiv}>
        <input type="checkbox" className={classes.checkbox} id={props.id} />
        <label
          className={classes.label}
          htmlFor={props.id}
          onClick={markComplete}
          id={props.id + "LAB"}
        >
          <img src={check} id={props.id + "LMG"} />
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
