import Button from "../button/button";
import Todo from "../todo/todo";
import classes from "./todoContainer.module.css";
import { useSelector } from "react-redux";

const TodoContainer = (props) => {
  const theme = useSelector((state) => state.theme.light);
  return (
    <div
      className={`${classes.todoContainer} ${
        !theme && classes.todoContainerDark
      }`}
    >
      <Todo id="t1" />
      <Todo id="t2" />
      <Todo id="t3" />
      <Todo id="t4" />
      <div
        className={`${classes.btnContainer} ${
          !theme && classes.btnContainerDark
        }`}
      >
        <span>5 items left</span>
        <span className={classes.desktopBtn}>
          <Button className={classes.containerBtn}>All</Button>
          <Button className={classes.containerBtn}>Active</Button>
          <Button className={classes.containerBtn}>Completed</Button>
        </span>
        <Button className={classes.containerBtn}>Clear Completed</Button>
      </div>
      <span
        className={`${classes.mobileBtn} ${!theme && classes.mobileBtnDark}`}
      >
        <Button className={classes.containerBtn}>All</Button>
        <Button className={classes.containerBtn}>Active</Button>
        <Button className={classes.containerBtn}>Completed</Button>
      </span>
    </div>
  );
};

export default TodoContainer;
