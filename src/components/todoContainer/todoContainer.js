import Todo from "../todo/todo";
import classes from "./todoContainer.module.css";

const TodoContainer = (props) => {
  return (
    <div className={classes.todoContainer}>
      <Todo id="t1" />
      <Todo id="t2" />
      <Todo id="t3" />
    </div>
  );
};

export default TodoContainer;
