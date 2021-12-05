import "./Expenses.css";
import Card from '..//UI/Card'
import ExpensesFilter from "./ExpenseFilter";
import React, {useState} from 'react';
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';


function Expenses (props){
    // Two way binding
    // deafult value is 20 and is passed to the child
    const [filteredYear,setFilteredYear] = useState('2020');
    const saveExpenseFilter= (inputFilter)=>{
        setFilteredYear(inputFilter);
    };
    const filtered = props.items.filter(expense=>{
        return expense.date.getFullYear().toString()===filteredYear;
    });
    // could have had an if here and update a var
    // always have a key when outputing a list of items!
    return (
        <div>
            <Card className = "expenses">
                <ExpensesFilter selected = {filteredYear} onSaveExpenseFilter={saveExpenseFilter}/>
                <ExpensesChart expenses={filtered}/>
                <ExpensesList items = {filtered}/>
            </Card>
        </div>

    );
}
export default Expenses;