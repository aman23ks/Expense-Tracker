import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css"
import ExpensesList from "./ExpensesList";
import "./ExpensesChart"
import ExpensesChart from "./ExpensesChart";

function Expenses(props){

    const [filteredYear, setFilteredYear] = useState("2020")

    const selectHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpense = props.expenses.filter(expense => {
        return expense.date.getFullYear() === parseInt(filteredYear);
    })

    

    return (
        <div>
             
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onSelectYear={selectHandler} />
                <ExpensesChart expenses={filteredExpense}/>
                <ExpensesList items={filteredExpense}/>   
            </Card>
        </div>
    );
}

export default Expenses;