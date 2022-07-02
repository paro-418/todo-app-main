import Button from "../button/Button";
import Todo from "../todo/todo";
import classes from "./todoContainer.module.css";
import { useSelector } from "react-redux";

const TodoContainer = (props) => {
  const theme = useSelector((state) => state.theme.light);
  const todoArray = useSelector((state) => state.task.todoArray);
  return (
    <div
      className={`${classes.todoContainer} ${
        !theme && classes.todoContainerDark
      }`}
    >
      {todoArray.map((obj) => (
        <Todo
          key={obj.id}
          id={obj.id}
          description={obj.description}
          isCompleted={obj.completed}
        />
      ))}

      {todoArray.length > 0 && (
        <div
          className={`${classes.btnContainer} ${
            !theme && classes.btnContainerDark
          }`}
        >
          <span>{todoArray.length} items left</span>
          <span className={classes.desktopBtn}>
            <Button className={classes.containerBtn}>All</Button>
            <Button className={classes.containerBtn}>Active</Button>
            <Button className={classes.containerBtn}>Completed</Button>
          </span>
          <Button className={classes.containerBtn}>Clear Completed</Button>
        </div>
      )}
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
