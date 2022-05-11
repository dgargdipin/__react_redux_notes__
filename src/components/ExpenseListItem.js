import React from "react";
import { Link } from "react-router-dom";
const ExpenseListItem = ({ id,description, amount, createdAt})=>{
    console.log(id)
    return (
        <div>

            <h3> description:{description}</h3>
            <p>    amount:{amount} -
                createdAt:{createdAt},
            </p>
            <Link to={`/edit/${id}`}>Edit</Link>
        </div>
    );
}
export default ExpenseListItem;