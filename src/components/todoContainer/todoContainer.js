import Button from "../button/button";
import Todo from "../todo/todo";
import classes from "./todoContainer.module.css";

const TodoContainer = (props) => {
  return (
    <div className={classes.todoContainer}>
      <Todo id="t1" />
      <Todo id="t2" />
      <Todo id="t3" />
      <Todo id="t4" />
      <div className={classes.btnContainer}>
        <span>5 items left</span>
        <span>
          <Button className = {classes.containerBtn}>All</Button>
          <Button className = {classes.containerBtn}>Active</Button>
          <Button className = {classes.containerBtn}>Completed</Button>
        </span>
        <Button className = {classes.containerBtn}>Clear Completed</Button>
      </div>
    </div>
  );
};

export default TodoContainer;
