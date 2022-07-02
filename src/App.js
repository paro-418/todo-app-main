import classes from "./App.module.css";
import Header from "./components/header/header";
import Form from "./components/form/form";
import TodoContainer from "./components/todoContainer/todoContainer";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <main className={classes.main}>
        <Header />
        <Form />
        <TodoContainer />
      </main>
      ;
    </React.Fragment>
  );
}

export default App;
