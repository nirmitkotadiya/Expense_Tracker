import "./ExpenseItem.css";
import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <li type="none">
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
    </li>
  );
};

export default ExpenseItem;
