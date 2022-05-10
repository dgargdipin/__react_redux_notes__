import React from "react";
import { removeExpense } from "../actions/expenses";
const ExpenseListItem = ({ id,description, amount, createdAt, dispatch})=>{
    console.log(id)
    return (
        <div>

            <h3> description:{description}</h3>
            <p>    amount:{amount} -
                createdAt:{createdAt},
            </p>
            <button onClick={() => {dispatch(removeExpense({id})) } }>Remove</button>
        </div>
    );
}
export default ExpenseListItem;