
import "./ExpenseForm.css"
import React, {useState} from 'react';
const ExpenseForm = (props)=>{
    // first approach
    const [inputTitle,setInputTitle] = useState('');
    const [inputAmount,setInputAmount] = useState('');
    const [inputDate,setInputDate] = useState('');

    //second approach
    // const [userInput,setUserInput] = useState({
    //     inputTitle:'',
    //     inputAmount: '',
    //     inputDate:''
    // });
    // const [userInput,setUserInput] = useState({});


    const titleChangeHndle= (event) => {
        // for the first approach
        setInputTitle(event.target.value);

        // for the second approach
        // setUserInput((prevState)=>{
        //     return{
        //     ...prevState,
        //     inputTitle: event.target.value
        //     };
        // })
    };


    const amountChangeHandler = (event) =>{
        setInputAmount(event.target.value);
    //     setUserInput({
    //         ...userInput,
    //         inputAmount: event.target.value
    //     })
    };
    const dateChangeHandler = (event) =>{
        setInputDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     inputDate: event.target.value
        // })
    };
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: inputTitle,
            amount: +inputAmount,
            date: new Date(inputDate)
        };
        props.onSaveExpense(expenseData);
        setInputTitle('');
        setInputAmount('');
        setInputDate('');
    };
    return <form onSubmit={submitHandler}>
        <div className = "new-expense__controls">
            <div className = "new-expense__control">
                <label>Title</label>
                <input type ="text"
                value = {inputTitle} 
                onChange={titleChangeHndle 
                }></input>
            </div>
            <div className = "new-expense__control">
                <label>Amount</label>
                <input type ="text" 
                value = {inputAmount} 
                onChange ={amountChangeHandler} 
                min='0.01' step = "0.01"></input>
            </div>
            <div className = "new-expense__control">
                <label>Date</label>
                <input type ="date" 
                value = {inputDate} 
                onChange= {dateChangeHandler} 
                min = "2019-01-01" max = "2022-12-31"></input>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type = "submit">Add Expense</button>
        </div>
    </form>
}
export default ExpenseForm