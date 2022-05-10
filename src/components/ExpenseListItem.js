import React from "react";

const ExpenseListItem = ({ description, amount, createdAt})=>(
<div>
        
        <h3> description:{description}</h3>
        <p>    amount:{amount} -
            createdAt:{createdAt},
        </p>
    </div>
)
export default ExpenseListItem;