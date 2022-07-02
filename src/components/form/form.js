import classes from "./form.module.css";
import check from "../../images/icon-check.svg";
import { useSelector, useDispatch } from "react-redux";
import { taskListSliceActions } from "../../store/todo-store";
import { useRef } from "react";
import Button from "../button/Button";

const Form = (props) => {
  const theme = useSelector((state) => state.theme.light);
  const taskRef = useRef();
  const dispatch = useDispatch();

  const submitTask = (event) => {
    event.preventDefault();
    if (taskRef.current.value.trim().length === 0) return;
    dispatch(
      taskListSliceActions.addTask({
        id: (new Date().getTime() / (Math.random() * 1000000000 + 1)).toFixed(
          0
        ),
        description: taskRef.current.value,
        completed: false,
      })
    );
    taskRef.current.value = "";
  };

  return (
    <form
      className={`${!theme && classes.formDark} ${classes.form}`}
      onSubmit={submitTask}
    >
      <input
        type="text"
        ref={taskRef}
        placeholder="enter your todo here"
        className={`${classes.todoInput} ${!theme && classes.todoInputDark}`}
      />
      <Button
        className={`${classes.btn} ${!theme && classes.btnDark}`}
        type="submit"
      >
        <img src={check} />
      </Button>
    </form>
  );
};

export default Form;
