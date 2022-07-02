import classes from "./form.module.css";
import check from "../../images/icon-check.svg";

const Form = () => {
  return (
    <form className={`${classes.formDark} ${classes.form}`}>
      <div className={classes.checkboxDiv}>
        <input type="checkbox" className={classes.checkbox} id="checkbox" />
        <label className={classes.label} htmlFor="checkbox">
          <img src={check} />
        </label>
      </div>
      <input
        type="text"
        placeholder="enter your todo here"
        className={`${classes.todoInput} ${classes.todoInputDark}`}
      />
    </form>
  );
};

export default Form;
