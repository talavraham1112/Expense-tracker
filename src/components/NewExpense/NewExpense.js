import "./NewExpense.css"
import ExpsenseForm from "./ExpenseForm"
import React, {useState} from 'react';

const NewExpense = (props)=>{
    const [isShown,setIsShown] = useState(false);
    const saveExpense = (inputExpense) => {
        const expenseData = {
            ...inputExpense,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsShown(false);
    };
    const onAddHandler = ()=>{
        setIsShown(true);
    }
    const stopEditHandller = () => {
        setIsShown(false);
    }

    // this is the way to communicate with a child component
    return (
        <div className="new-expense">
            {!isShown && <button type= 'button' onClick = {onAddHandler}>Add New Expense</button>}
            {isShown &&  <ExpsenseForm onSaveExpense = {saveExpense} onCancel = {stopEditHandller}/>}
        </div>
    );
}
export default NewExpense;