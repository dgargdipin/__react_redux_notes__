import React from "react";
import {connect} from 'react-redux'
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";
const ExpenseList=(props)=>{
    console.log(props.expense)
    return (

        <div>
            <h1>Expense List</h1>
            {props.expenses.map((expense) => <ExpenseListItem key={expense.id} {...expense} dispatch={props.dispatch} />)}
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filters),
    }
}
export default connect(mapStateToProps)(ExpenseList);
