import React from "react";
import { connect } from "react-redux";
import { editExpense,removeExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";

const EditExpensePage = ({ expense, dispatch,history }) => {

    console.log('expense passed',expense)
    return (
        <div>
            <ExpenseForm 
                expense={expense}
                onSubmit={
                    (newExpense) => {
                        // console.log(expense)
                        dispatch(editExpense(expense.id,newExpense));
                        history.push('/');
                        
                    }
                }
                
            />
            <button onClick={() => { 
                dispatch(removeExpense({ id: expense.id }));
                history.push('/');
             }}>Remove</button>
        </div>
    )
}
const mapStateToProps = ({ expenses }, props) => {
    return ({
        expense: expenses.find(expense => {
            return expense.id === props.match.params.id;
        })
    });
}
const ConnectedEditExpensePage = connect(mapStateToProps)(EditExpensePage)
export default ConnectedEditExpensePage;