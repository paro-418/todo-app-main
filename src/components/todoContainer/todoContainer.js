import Button from "../button/Button";
import Todo from "../todo/todo";
import classes from "./todoContainer.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";

const TodoContainer = () => {
  const theme = useSelector((state) => state.theme.light);
  const todoArray = useSelector((state) => state.task.todoTask);
  const incompleteTask = todoArray.filter((obj) => obj.completed === false);
  const completedTask = todoArray.filter((obj) => obj.completed === true);

  const [all, setAll] = useState(true);
  const [incomplete, setIncomplete] = useState(false);
  const [complete, setComplete] = useState(false);
  const showAll = () => {
    setAll(true);
    setComplete(false);
    setIncomplete(false);
  };

  const showComplete = () => {
    setAll(false);
    setComplete(true);
    setIncomplete(false);
  };

  const showInComplete = () => {
    setAll(false);
    setComplete(false);
    setIncomplete(true);
  };

  return (
    <div
      className={`${classes.todoContainer} ${
        !theme && classes.todoContainerDark
      }`}
    >
      {all &&
        todoArray.map((obj) => (
          <Todo
            key={obj.id}
            id={obj.id}
            description={obj.description}
            isCompleted={obj.completed}
          />
        ))}
      {complete &&
        completedTask.map((obj) => (
          <Todo
            key={obj.id}
            id={obj.id}
            description={obj.description}
            isCompleted={true}
          />
        ))}
      {incomplete &&
        incompleteTask.map((obj) => (
          <Todo
            key={obj.id}
            id={obj.id}
            description={obj.description}
            isCompleted={false}
          />
        ))}

      {todoArray.length > 0 && (
        <div
          className={`${classes.btnContainer} ${
            !theme && classes.btnContainerDark
          }`}
        >
          {all && <span>{todoArray.length} items left</span>}
          {complete && <span>{completedTask.length} items left</span>}
          {incomplete && <span>{incompleteTask.length} items left</span>}
          <span className={classes.desktopBtn}>
            <Button className={classes.containerBtn} callFunction={showAll}>
              All
            </Button>
            <Button
              className={classes.containerBtn}
              callFunction={showInComplete}
            >
              Active
            </Button>
            <Button
              className={classes.containerBtn}
              callFunction={showComplete}
            >
              Completed
            </Button>
          </span>
          <Button className={classes.containerBtn}>Clear Completed</Button>
        </div>
      )}
      <span
        className={`${classes.mobileBtn} ${!theme && classes.mobileBtnDark}`}
      >
        <Button className={classes.containerBtn} callFunction={showAll}>
          All
        </Button>
        <Button className={classes.containerBtn} callFunction={showInComplete}>
          Active
        </Button>
        <Button className={classes.containerBtn} callFunction={showComplete}>
          Completed
        </Button>
      </span>
    </div>
  );
};

export default TodoContainer;
