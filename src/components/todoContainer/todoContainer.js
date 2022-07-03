import Button from "../button/Button";
import Todo from "../todo/todo";
import classes from "./todoContainer.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { taskListSliceActions } from "../../store/todo-store";
import Empty from "./empty";

const TodoContainer = () => {
  const dispatch = useDispatch();
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

  const deleteCompleted = () => {
    dispatch(taskListSliceActions.deleteTask());
  };

  useEffect(() => {
    const uploadData = async () => {
      if(todoArray.length === 0) return;
      const response = await fetch(
        "https://react-http-5b66d-default-rtdb.firebaseio.com/todo.json",
        {
          method: "PUT",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(todoArray),
        }
      );
      const reply = await response.json();
      console.log(reply);
    };

    uploadData();
  }, [todoArray, completedTask, incompleteTask]);

  return (
    <div
      className={`${classes.todoContainer} ${
        !theme && classes.todoContainerDark
      }`}
    >
      {all &&
        (todoArray.length === 0 ? (
          <Empty>No Task exist. Please add some task. 😀</Empty>
        ) : (
          todoArray.map((obj) => (
            <Todo
              key={obj.id}
              id={obj.id}
              description={obj.description}
              isCompleted={obj.completed}
            />
          ))
        ))}
      {complete &&
        (completedTask.length === 0 ? (
          <Empty>No Task is been completed yet 😐. </Empty>
        ) : (
          completedTask.map((obj) => (
            <Todo
              key={obj.id}
              id={obj.id}
              description={obj.description}
              isCompleted={true}
            />
          ))
        ))}
      {incomplete &&
        (incompleteTask.length === 0 ? (
          <Empty>Congratulations 👏 you've finished all of your task.</Empty>
        ) : (
          incompleteTask.map((obj) => (
            <Todo
              key={obj.id}
              id={obj.id}
              description={obj.description}
              isCompleted={false}
            />
          ))
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
          <Button
            className={classes.containerBtn}
            callFunction={deleteCompleted}
          >
            Clear Completed
          </Button>
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
