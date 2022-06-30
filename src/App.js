import classes from "./App.module.css";
import Header from "./components/header/header";
import Form from "./components/form/form";
import TodoContainer from "./components/todoContainer/todoContainer";
import Todo from "./components/todo/todo";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <main className={classes.main}>
        <Header />
        <Form />
        <TodoContainer />
      </main>
      ;
    </Provider>
  );
}

export default App;
