import classes from "./App.module.css";
import Header from "./components/header/header";
import Form from "./components/form/form";
import TodoContainer from "./components/todoContainer/todoContainer";
import Todo from "./components/todo/todo";

function App() {
  return <main className={classes.main}>
    <Header/>
    <Form/>
    <TodoContainer/>
  </main>;
}

export default App;
