import classes from "./todo.module.css";
import check from "../../images/icon-check.svg";

const Todo = (props) => {
  return (
    <article className={classes.todo}>
      <div className={classes.checkboxDiv}>
        <input type="checkbox" className={classes.checkbox} id={props.id} />
        <label className={classes.label} htmlFor={props.id}>
          <img src={check} />
        </label>
      </div>
      <p className={classes.todoPara}>
        jhfjk sdfhvkjhd iuhui fhsdkjicv iriofjs kdjcjfi ojkkldfjgkl vjhfjk
        sdfhvkjhd iuhui fhsdkjicv iriofjs kdjcjfi ojkkldfjgkl jhfjk sdfhvkjhd
        iuhui fhsdkjicv iriofjs kdjcjfi ojkkldfjgkl
      </p>
    </article>
  );
};

export default Todo;
