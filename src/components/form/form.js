import classes from "./form.module.css";
import check from "../../images/icon-check.svg";
import { useSelector } from "react-redux";

const Form = () => {
  const theme = useSelector((state) => state.theme.light);
  return (
    <form className={`${!theme && classes.formDark} ${classes.form}`}>
      <div className={classes.checkboxDiv}>
        <input type="checkbox" className={classes.checkbox} id="checkbox" />
        <label className={classes.label} htmlFor="checkbox">
          <img src={check} />
        </label>
      </div>
      <input
        type="text"
        placeholder="enter your todo here"
        className={`${classes.todoInput} ${!theme && classes.todoInputDark}`}
      />
    </form>
  );
};

export default Form;
